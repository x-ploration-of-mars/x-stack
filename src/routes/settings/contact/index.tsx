import { component$ } from "@builder.io/qwik";
import {
  formAction$,
  type InitialValues,
  valiForm$,
  useForm,
  reset,
} from "@modular-forms/qwik";
import Input from "~/components/ui/input";
import Label from "~/components/ui/label";
import { QSeparator } from "~/integrations/react/ui/separator";
import { useAuthSession } from "~/routes/plugin@auth";
import { type Input as valibotInput, pick, parse } from "valibot";
import { insertUserSchema, users } from "~/drizzle/schema/auth";
import { db } from "~/drizzle/db";
import { type Session } from "@auth/core/types";
import { eq } from "drizzle-orm";
import { routeLoader$ } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import { LuLoader2 } from "@qwikest/icons/lucide";

const requestSchema = pick(insertUserSchema, ["publicEmail"]);

type UpdateProfileForm = valibotInput<typeof requestSchema>;

export const useFormLoader = routeLoader$<InitialValues<UpdateProfileForm>>(
  async (event) => {
    const session: Session | null = event.sharedMap.get("session");

    const [user] = await db
      .select({ publicEmail: users.publicEmail })
      .from(users)
      .where(eq(users.id, session?.user.id ?? ""));

    return user;
  }
);

export const useFormAction = formAction$<UpdateProfileForm>(
  async (values, event) => {
    const parsedValues = parse(requestSchema, values); // Necessary because valiForm doesn't yet apply transformations
    const session: Session | null = event.sharedMap.get("session");

    await db
      .update(users)
      .set(parsedValues)
      .where(eq(users.id, session?.user.id ?? ""));
  },
  valiForm$(requestSchema)
);

export default component$(() => {
  const session = useAuthSession();

  const [updateProfileForm, { Form, Field }] = useForm<UpdateProfileForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(requestSchema),
  });

  return (
    <>
      <Form>
        <div>
          <div>
            <h3 class="text-lg font-semibold">Contact</h3>
            <p class="text-sm text-muted-foreground">
              Tell us where we can reach out to you.
            </p>
          </div>
          <QSeparator className="my-6" />

          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div class="sm:col-span-4">
              <Field name="publicEmail">
                {(field, props) => (
                  <>
                    <Label>Public email</Label>
                    <Input
                      {...props}
                      type="email"
                      value={field.value}
                      error={field.error}
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-4">
              <Label>Discord username</Label>
              <Input
                type="text"
                value={session.value?.user.name}
                error={session.value ? "" : "This field is required"}
                readOnly
              />
            </div>

            <div class="sm:col-span-4">
              <Label>Oauth email</Label>
              <Input
                type="email"
                value={session.value?.user.email}
                error={session.value ? "" : "This field is required"}
                readOnly
              />
            </div>
          </div>
        </div>

        <QSeparator className="my-6" />

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <Button variant="ghost" onClick$={() => reset(updateProfileForm)}>
            Cancel
          </Button>
          {updateProfileForm.submitting ? (
            <Button variant="default" class="w-16">
              <LuLoader2 class="w-5 h-5 animate-spin" />
            </Button>
          ) : (
            <Button type="submit" variant="default" class="w-16">
              Save
            </Button>
          )}
        </div>
      </Form>
    </>
  );
});
