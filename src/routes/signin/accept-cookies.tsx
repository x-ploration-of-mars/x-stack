import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
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

export default component$(() => {
  const dialogRef = useSignal<HTMLDialogElement>();
  useVisibleTask$(() => {
    if (!localStorage.getItem("hasAcceptedCookies"))
      dialogRef.value?.showModal();
  });

  useVisibleTask$(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
      }
    };
    dialogRef.value!.addEventListener("keydown", handler);
    return () => dialogRef.value!.removeEventListener("keydown", handler);
  });
  return (
    <div>
      <dialog
        ref={dialogRef}
        class="backdrop:backdrop-blur-sm delay-150  backdrop:bg-white/20 bg-transparent"
      >
        <Card class="w-[350px]">
          <CardHeader>
            <CardTitle>Who wants cookies?</CardTitle>
            <CardDescription>
              No one, but they help in improving the x-stack.
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
});
