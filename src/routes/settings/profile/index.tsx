import { $, type QRL, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { eq } from "drizzle-orm";
import { db } from "~/drizzle/db";
import { insertUserSchema, users } from "~/drizzle/schema/auth";
import Checkbox from "~/components/ui/checkbox";
import Input from "~/components/ui/input";
import Button from "~/components/ui/button";
import Textarea from "~/components/ui/textarea";
import Label from "~/components/ui/label";
import { type Session } from "@auth/core/types";
import {
  useForm,
  formAction$,
  type InitialValues,
  valiForm$,
  type SubmitHandler,
} from "@modular-forms/qwik";
import { type Input as valibotInput, pick, parse } from "valibot";
import { LuLoader2 } from "@qwikest/icons/lucide";
import { QSeparator } from "~/integrations/react/ui/separator";

const requestSchema = pick(insertUserSchema, [
  "firstName",
  "lastName",
  "available",
  "bio",
  "website",
  "github",
  "linkedin",
  "twitter",
]);

type UpdateProfileForm = valibotInput<typeof requestSchema>;

export const useFormLoader = routeLoader$<InitialValues<UpdateProfileForm>>(
  async (event) => {
    const session: Session | null = event.sharedMap.get("session");

    const [user] = await db
      .select({
        firstName: users.firstName,
        lastName: users.lastName,
        name: users.name,
        bio: users.bio,
        available: users.available,
        website: users.website,
        github: users.github,
        linkedin: users.linkedin,
        twitter: users.twitter,
      })
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
  const [updateProfileForm, { Form, Field }] = useForm<UpdateProfileForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(requestSchema),
  });

  const handleSubmit: QRL<SubmitHandler<UpdateProfileForm>> = $(() => {
    gtag("event", "update_profile");
  });

  return (
    <>
      <Form
        onSubmit$={handleSubmit}
        name="updateProfileForm"
        id="updateProfileForm"
      >
        <div>
          <h3 class="text-lg font-semibold">Profile</h3>
          <p class="text-sm text-muted-foreground">
            Manage your public information. This may or may not be used in the
            future for networking purposes.
          </p>
        </div>
        <QSeparator className="my-6" />

        <div class=" space-y-12">
          {/*TODO: Location (country!, region?, city?), Favorite techs (top 5 / top 10 / top 50 ?) */}

          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div class="sm:col-span-3">
              <Field name="firstName">
                {(field, props) => (
                  <>
                    <Label>First name</Label>
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      autoComplete="given-name"
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-3">
              <Field name="lastName">
                {(field, props) => (
                  <>
                    <Label>Last name</Label>
                    <Input
                      {...props}
                      type="text"
                      autoComplete="family-name"
                      value={field.value}
                      error={field.error}
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-4">
              <Field name="available" type="boolean">
                {(field, props) => (
                  <div class="relative flex gap-x-3">
                    <Checkbox {...props} checked={field.value ?? false} />
                    <div>
                      <Label>Available</Label>
                      <p class="text-sm text-muted-foreground">
                        Decide whether you want to appear available or not in
                        search results.
                      </p>
                    </div>
                  </div>
                )}
              </Field>
            </div>

            <div class="sm:col-span-6">
              <Field name="bio">
                {(field, props) => (
                  <>
                    <Label>Bio</Label>
                    <Textarea
                      {...props}
                      class="resize-none h-16"
                      value={field.value ?? ""}
                      error={field.error}
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-5">
              <Field name="website">
                {(field, props) => (
                  <>
                    <Label>Website</Label>
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      placeholder="www.example.com"
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-5">
              <Field name="github">
                {(field, props) => (
                  <>
                    <Label>Github profile</Label>
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      placeholder="github.com/MaieulChevalier"
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-5">
              <Field name="linkedin">
                {(field, props) => (
                  <>
                    <Label>Linkedin profile</Label>
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      placeholder="linkedin.com/in/maieul-chevalier"
                    />
                  </>
                )}
              </Field>
            </div>

            <div class="sm:col-span-5">
              <Field name="twitter">
                {(field, props) => (
                  <>
                    <Label>Twitter profile</Label>
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      placeholder="twitter.com/MaieulChevalier"
                    />
                  </>
                )}
              </Field>
            </div>
          </div>
        </div>

        <QSeparator className="my-6" />

        <div class="mt-6 flex items-center justify-end gap-x-6">
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
