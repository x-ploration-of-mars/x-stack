import { component$ } from "@builder.io/qwik";

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
          onClick$={async () => {
            console.log("inAppBrowser click");
            const { Browser } = await import("@capacitor/browser");
            Browser.open({ url: "https://qwik.builder.io/" });
          }}
        >
          In App browser
        </button>
      </div>
    </>
  );
});
