// WIP

import { type Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  ({ dialogRef }: { dialogRef: Signal<HTMLDialogElement | undefined> }) => {
    return (
      <div>
        <dialog ref={dialogRef}>
          <form>
            <div class="fixed bottom-0 left-0 w-full bg-white border-t shadow-md p-4 z-50">
              <div class="container mx-auto flex justify-between items-center">
                <div class="text-sm text-gray-700">
                  We use cookies to enhance your experience. By continuing to
                  visit this site, you agree to our use of cookies.
                  <Link href="/privacy-policy" class="text-blue-500 underline">
                    Learn more
                  </Link>
                  .
                </div>
                <div>
                  <button
                    id="acceptCookies"
                    class="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick$={() => dialogRef.value?.close()}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </form>
        </dialog>
      </div>
    );
  }
);
