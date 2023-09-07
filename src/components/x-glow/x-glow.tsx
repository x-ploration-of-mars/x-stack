import { component$ } from "@builder.io/qwik";
import styles from "~/components/x-glow/x-glow.module.css";
import XLogo from "~/media/X-logo-V3_transparent-dark.png?jsx";

export default component$(() => {
  return (
    <div>
      <XLogo alt="Authentication" class={[" mr-2 h-auto w-80", styles.neon]} />
    </div>
  );
});
