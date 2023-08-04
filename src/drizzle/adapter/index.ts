import { and, eq } from "drizzle-orm";
import type { Adapter } from "@auth/core/adapters";
import type {
  PlanetScaleDatabase,
  PlanetScalePreparedQuery,
} from "drizzle-orm/planetscale-serverless";
import type {
  MySqlTableWithColumns,
  PreparedQueryConfig,
} from "drizzle-orm/mysql-core";

type PreparedStatement<T> = PlanetScalePreparedQuery<
  PreparedQueryConfig & {
    execute: T | undefined;
  }
>;

interface DrizzleAdapterConfig {
  schemas: {
    user: MySqlTableWithColumns<any>;
    account: MySqlTableWithColumns<any>;
    session: MySqlTableWithColumns<any>;
    verificationToken: MySqlTableWithColumns<any>;
  };
  prepared?: {
    getUserByEmail?: PreparedStatement<any>;
    getUserById?: PreparedStatement<any>;
    getUserByAccount?: PreparedStatement<any>;
    getSessionByToken?: PreparedStatement<any>;
    getSessionAndUser?: PreparedStatement<any>;
    getVerificationTokenByToken?: PreparedStatement<any>;
  };
}

export const DrizzleAdapter = (
  db: PlanetScaleDatabase,
  config: DrizzleAdapterConfig,
): Adapter => {
  const s = config.schemas;
  const p = config.prepared;
  return {
    createUser: async (userData) => {
      const id = crypto.randomUUID();
      await db.insert(s.user).values({
        id,
        ...userData,
      });

      const user = p?.getUserById
        ? await p.getUserById.execute({ id })
        : await db
            .select()
            .from(s.user)
            .where(eq(s.user.id, id))
            .then((res) => res[0]);
      if (!user) throw new Error("User not found");
      return user;
    },

    getUser: async (id) => {
      const user = p?.getUserById
        ? await p.getUserById.execute({ id })
        : await db
            .select()
            .from(s.user)
            .where(eq(s.user.id, id))
            .then((res) => res[0]);
      return user ?? null;
    },

    getUserByEmail: async (email) => {
      const user = p?.getUserByEmail
        ? await p.getUserByEmail.execute({ email })
        : await db
            .select()
            .from(s.user)
            .where(eq(s.user.email, email))
            .then((res) => res[0]);
      return user ?? null;
    },

    getUserByAccount: async ({ provider, providerAccountId }) => {
      const account = p?.getUserByAccount
        ? await p.getUserByAccount.execute({ provider, providerAccountId })
        : await db
            .select()
            .from(s.account)
            .where(
              and(
                eq(s.account.provider, provider),
                eq(s.account.providerAccountId, providerAccountId),
              ),
            )
            .leftJoin(s.user, eq(s.account.userId, s.user.id))
            .then((res) => res[0]);
      return account?.user ?? null;
    },

    updateUser: async ({ id, ...data }) => {
      await db.update(s.user).set(data).where(eq(s.user.id, id));
      const user = p?.getUserById
        ? await p.getUserById.execute({ id })
        : await db
            .select()
            .from(s.user)
            .where(eq(s.user.id, id))
            .then((res) => res[0]);
      return user;
    },

    deleteUser: async (id) => {
      await db.delete(s.user).where(eq(s.user.id, id));
    },

    linkAccount: async (account) => {
      await db.insert(s.account).values({
        id: crypto.randomUUID(),
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        type: account.type,
        userId: account.userId,
        accessToken: account.access_token,
        expiresAt: account.expires_at,
        idToken: account.id_token,
        refreshToken: account.refresh_token,
        scope: account.scope,
        sessionState: account.session_state,
        tokenType: account.token_type,
      });
    },

    unlinkAccount: async ({ provider, providerAccountId }) => {
      await db
        .delete(s.account)
        .where(
          and(
            eq(s.account.providerAccountId, providerAccountId),
            eq(s.account.provider, provider),
          ),
        );
    },

    createSession: async (data) => {
      await db.insert(s.session).values(data);
      const session = p?.getSessionByToken
        ? await p.getSessionByToken.execute({ sessionToken: data.sessionToken })
        : await db
            .select()
            .from(s.session)
            .where(eq(s.session.sessionToken, data.sessionToken))
            .then((res) => res[0]);
      console.log("createSession", session);
      return session;
    },

    getSessionAndUser: async (sessionToken) => {
      const data = p?.getSessionAndUser
        ? await p.getSessionAndUser.execute({ sessionToken })
        : await db
            .select({
              session: s.session,
              user: s.user,
            })
            .from(s.session)
            .where(eq(s.session.sessionToken, sessionToken))
            .innerJoin(s.user, eq(s.user.id, s.session.userId))
            .then((res) => res[0]);

      if (!data) return null;
      const { user, ...session } = data;
      return {
        user,
        session,
      };
    },

    updateSession: async (data) => {
      await db
        .update(s.session)
        .set(data)
        .where(eq(s.session.sessionToken, data.sessionToken));
      const session = p?.getSessionByToken
        ? await p.getSessionByToken.execute({
            sessionToken: data.sessionToken,
          })
        : await db
            .select()
            .from(s.session)
            .where(eq(s.session.sessionToken, data.sessionToken))
            .then((res) => res[0]);
      console.log("updateSession", session);
      return session ?? null;
    },

    deleteSession: async (sessionToken) => {
      await db
        .delete(s.session)
        .where(eq(s.session.sessionToken, sessionToken));
    },

    createVerificationToken: async (verificationToken) => {
      await db.insert(s.verificationToken).values(verificationToken);
      const token = p?.getVerificationTokenByToken
        ? await p.getVerificationTokenByToken.execute({
            token: verificationToken.token,
          })
        : await db
            .select()
            .from(s.verificationToken)
            .where(
              eq(s.verificationToken.identifier, verificationToken.identifier),
            )
            .then((res) => res[0]);
      console.log("createVerificationToken", token);
      return token ?? null;
    },

    useVerificationToken: async (verificationToken) => {
      const token = p?.getVerificationTokenByToken
        ? await p.getVerificationTokenByToken.execute({
            token: verificationToken.token,
          })
        : await db
            .select()
            .from(s.verificationToken)
            .where(
              eq(s.verificationToken.identifier, verificationToken.identifier),
            )
            .then((res) => res[0]);
      console.log("useVerificationToken", token);
      if (!token) return null;
      await db
        .delete(s.verificationToken)
        .where(
          and(
            eq(s.verificationToken.token, verificationToken.token),
            eq(s.verificationToken.identifier, verificationToken.identifier),
          ),
        );
      return token;
    },
  };
};
