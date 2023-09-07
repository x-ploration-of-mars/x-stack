import { $, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { eq } from "drizzle-orm";
import { db } from "~/drizzle/db";
import { insertUserSchema, users } from "~/drizzle/schema/auth";
import Checkbox from "~/components/ui/checkbox";
import Input from "~/components/ui/input";
import Button from "~/components/ui/button";
import Textarea from "~/components/ui/textarea";
import { type Session } from "@auth/core/types";
import {
  useForm,
  formAction$,
  type InitialValues,
  type SubmitHandler,
  valiForm$,
} from "@modular-forms/qwik";
import { type Input as valibotInput, pick, parse } from "valibot";
import { useAuthSession } from "../plugin@auth";

const requestSchema = pick(insertUserSchema, [
  "firstName",
  "lastName",
  "available",
  "website",
  "github",
  "linkedin",
  "twitter",
  "bio",
  "publicEmail",
]);

type UpdateProfileForm = valibotInput<typeof requestSchema>;

export const useFormLoader = routeLoader$<InitialValues<UpdateProfileForm>>(async (event) => {
  const session: Session | null = event.sharedMap.get("session");

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.name, session?.user.name ?? ""));

  return user;
});

export const useFormAction = formAction$<UpdateProfileForm>(async (values, event) => {
  const parsedValues = parse(requestSchema, values); // Necessary because valiForm doesn't yet apply transformations
  const session: Session | null = event.sharedMap.get("session");
  await db
    .update(users)
    .set(parsedValues)
    .where(eq(users.name, session?.user.name as string));
}, valiForm$(requestSchema));

export default component$(() => {
  const session = useAuthSession();
  const [, { Form, Field }] = useForm<UpdateProfileForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(requestSchema),
  });

  const handleSubmit = $<SubmitHandler<UpdateProfileForm>>((values) => {
    // Runs on client
    console.log(values);
  });

  return (
    <>
      <Form onSubmit$={handleSubmit}>
        <div class="space-y-12">
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-primary/10 pb-12 md:grid-cols-3">
            <div>
              <h2 class="text-base font-semibold leading-7 text-primary">About you</h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Fill in this information if you want to network with fellow x-plorers. You will have
                to fill required fields to appear in search results. Optional fields are optional.
              </p>
            </div>

            {/*TODO: Location (country!, region?, city?), Favorite techs (top 5 / top 10 / top 50 ?) */}

            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div class="sm:col-span-3">
                <Field name="firstName">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      label="First name"
                      autoComplete="given-name"
                      required
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-3">
                <Field name="lastName">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      autoComplete="family-name"
                      value={field.value}
                      error={field.error}
                      label="Last name"
                      required
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-4">
                <Field name="available" type="boolean">
                  {(field, props) => (
                    <div class="relative flex gap-x-3">
                      <Checkbox {...props} checked={field.value ?? false} />
                      <div>
                        <label class="font-medium text-primary">Available</label>
                        <p class="text-sm text-gray-500">
                          Decide whether you want to appear available or not in search results.
                        </p>
                      </div>
                    </div>
                  )}
                </Field>
              </div>

              <div class="sm:col-span-5">
                <Field name="website">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      label="Website/Portfolio"
                      placeholder="www.example.com"
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-5">
                <Field name="github">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      label="Github profile"
                      placeholder="github.com/MaieulChevalier"
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-5">
                <Field name="linkedin">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      label="Linkedin profile"
                      placeholder="linkedin.com/in/maieul-chevalier"
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-5">
                <Field name="twitter">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="text"
                      value={field.value}
                      error={field.error}
                      label="Twitter profile"
                      placeholder="twitter.com/MaieulChevalier"
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-6">
                <label html-for="bio" class="block font-medium leading-6 text-primary">
                  Bio
                </label>
                <div class="mt-2">
                  <Field name="bio">
                    {(field, props) => (
                      <Textarea
                        {...props}
                        class="resize-none"
                        value={field.value ?? ""}
                        error={field.error}
                      />
                    )}
                  </Field>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-primary/10 pb-12 md:grid-cols-3">
            <div>
              <h2 class="text-base font-semibold leading-7 text-primary">Contact</h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Tell us where we can reach out to you.
              </p>
            </div>

            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div class="sm:col-span-4">
                <Input
                  type="text"
                  value={session.value?.user.name}
                  error={session.value ? "" : "This field is required"}
                  label="Discord Username"
                  readOnly
                />
              </div>

              <div class="sm:col-span-4">
                <Field name="publicEmail">
                  {(field, props) => (
                    <Input
                      {...props}
                      type="email"
                      value={field.value}
                      error={field.error}
                      label="Public email"
                      readOnly
                    />
                  )}
                </Field>
              </div>

              <div class="sm:col-span-4">
                <Input
                  type="email"
                  value={session.value?.user.email}
                  error={session.value ? "" : "This field is required"}
                  label="Oauth email address"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <Button variant="ghost" type="submit">
            Cancel
          </Button>
          <Button type="submit" variant="default">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
});
