import { $, component$ } from "@builder.io/qwik";
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
  type SubmitHandler,
  valiForm$,
  reset,
} from "@modular-forms/qwik";
import { type Input as valibotInput, pick, parse } from "valibot";
import { LuLoader2 } from "@qwikest/icons/lucide";
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

export const useFormLoader = routeLoader$<InitialValues<UpdateProfileForm>>(
  async (event) => {
    const session: Session | null = event.sharedMap.get("session");

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.name, session?.user.name ?? ""));

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
      .where(eq(users.name, session?.user.name as string));
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

  const handleSubmit = $<SubmitHandler<UpdateProfileForm>>((values) => {
    // Runs on client
    console.log(values);
  });

  return (
    <>
      <Form onSubmit$={handleSubmit}>
        <div class="max-w-6xl">
          <div class="lg:pl-28">
            <div class="space-y-12">
              <div class="grid grid-cols-1  gap-x-8 gap-y-10 border-b border-primary/10 pb-12 md:grid-cols-3">
                <div>
                  <h2 class=" text font-semibold leading-7 text-primary">
                    About you
                  </h2>
                  <p class="mt-1 leading-6 text-muted-foreground">
                    Fill out this form to network with fellow x-plorers. You
                    will have to fill required fields to appear in search
                    results.
                  </p>
                </div>

                {/*TODO: Location (country!, region?, city?), Favorite techs (top 5 / top 10 / top 50 ?) */}

                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                  <div class="sm:col-span-3">
                    <Field name="firstName">
                      {(field, props) => (
                        <>
                          <Label>First name *</Label>
                          <Input
                            {...props}
                            type="text"
                            value={field.value}
                            error={field.error}
                            autoComplete="given-name"
                            required
                          />
                        </>
                      )}
                    </Field>
                  </div>

                  <div class="sm:col-span-3">
                    <Field name="lastName">
                      {(field, props) => (
                        <>
                          <Label>Last name *</Label>
                          <Input
                            {...props}
                            type="text"
                            autoComplete="family-name"
                            value={field.value}
                            error={field.error}
                            required
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
                              Decide whether you want to appear available or not
                              in search results.
                            </p>
                          </div>
                        </div>
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

                  <div class="sm:col-span-6">
                    <Field name="bio">
                      {(field, props) => (
                        <>
                          <Label>Bio</Label>
                          <Textarea
                            {...props}
                            class="resize-none h-36"
                            value={field.value ?? ""}
                            error={field.error}
                          />
                        </>
                      )}
                    </Field>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-primary/10 pb-12 md:grid-cols-3">
                <div>
                  <h2 class="text-base font-semibold leading-7 text-primary">
                    Contact
                  </h2>
                  <p class="mt-1 leading-6 text-muted-foreground">
                    Tell us where we can reach out to you.
                  </p>
                </div>

                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
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
                    <Label>Public email</Label>
                    <Field name="publicEmail">
                      {(field, props) => (
                        <Input
                          {...props}
                          type="email"
                          value={field.value}
                          error={field.error}
                        />
                      )}
                    </Field>
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
            </div>
          </div>

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
        </div>
      </Form>
    </>
  );
});
