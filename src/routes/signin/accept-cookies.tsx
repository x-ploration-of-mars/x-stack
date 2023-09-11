// WIP

import {
  type Signal,
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Button from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default component$(
  ({ dialogRef }: { dialogRef: Signal<HTMLDialogElement | undefined> }) => {
    const acceptCookiesButtonRef = useSignal<HTMLButtonElement>();
    useVisibleTask$(() => {
      acceptCookiesButtonRef.value?.focus();
    });

    return (
      <div>
        <dialog ref={dialogRef} class="bg-transparent">
          <Card class="w-[350px]">
            <CardHeader>
              <CardTitle>Who want's cookies?</CardTitle>
              <CardDescription>
                No one, but they help improving the x-stack.
              </CardDescription>
            </CardHeader>
            <CardContent>
              We use cookies to enhance your experience. By continuing to visit
              this site, you agree to our use of cookies.{" "}
              <Link href="/public/privacy-policy" class="underline">
                Learn more
              </Link>
              .
            </CardContent>
            <CardFooter class="flex justify-between">
              <Button
                variant={"default"}
                ref={acceptCookiesButtonRef}
                onClick$={() => {
                  localStorage.setItem("hasAcceptedCookies", "true");
                  dialogRef.value?.close();
                }}
              >
                Accept
              </Button>
            </CardFooter>
          </Card>
        </dialog>
      </div>
    );
  }
);
