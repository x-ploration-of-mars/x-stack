import { component$ } from "@builder.io/qwik";
import { Browser } from "@capacitor/browser";

const browser = Browser;

export default component$(() => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <button
          onClick$={() => {
            browser.open({ url: "https://qwik.builder.io/" });
          }}
        >
          In App browser
        </button>
      </div>
    </>
  );
});
