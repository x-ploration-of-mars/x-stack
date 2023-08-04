// import { placeholder } from "drizzle-orm";
// import { db } from "~/drizzle/db";

// export const runtime = "edge";

// export const pGetUserByEmail = db.query.user
//   .findFirst({
//     where: (user, { eq }) => eq(user.email, placeholder("email")),
//   })
//   .prepare();

// export const pGetUserById = db.query.user
//   .findFirst({
//     where: (user, { eq }) => eq(user.id, placeholder("id")),
//   })
//   .prepare();

// export const pGetUserByAccount = db.query.account
//   .findFirst({
//     where: (account, { eq, and }) =>
//       and(
//         eq(account.providerAccountId, placeholder("providerAccountId")),
//         eq(account.provider, placeholder("provider")),
//       ),
//     with: {
//       user: true,
//     },
//   })
//   .prepare();

// export const pGetSessionByToken = db.query.session
//   .findFirst({
//     where: (session, { eq }) =>
//       eq(session.sessionToken, placeholder("sessionToken")),
//   })
//   .prepare();

// export const pGetSessionAndUser = db.query.session
//   .findFirst({
//     where: (session, { eq }) =>
//       eq(session.sessionToken, placeholder("sessionToken")),
//     with: {
//       user: true,
//     },
//   })
//   .prepare();

// export const pGetVerificationTokenByToken = db.query.verificationToken
//   .findFirst({
//     where: (vt, { eq }) => eq(vt.token, placeholder("token")),
//   })
//   .prepare();
