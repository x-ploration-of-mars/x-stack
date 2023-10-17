import { type Signal, component$ } from "@builder.io/qwik";
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
    return (
      <div>
        <dialog
          ref={dialogRef}
          class="backdrop:backdrop-blur-sm backdrop:bg-white/20 bg-transparent"
          preventdefault:keydown
        >
          <Card class="w-[350px]">
            <CardHeader>
              <CardTitle>Who wants cookies?</CardTitle>
              <CardDescription>
                No one, but they help improving the x-stack.
              </CardDescription>
            </CardHeader>
            <CardContent>
              We use cookies to enhance your experience. By continuing to visit
              this site, you agree to our use of cookies.{" "}
              <Link href="/pub/privacy-policy" class="underline">
                Learn more
              </Link>
              .
            </CardContent>
            <CardFooter class="flex justify-between">
              <Button
                autoFocus
                variant={"default"}
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
