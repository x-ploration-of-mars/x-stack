import { component$ } from "@builder.io/qwik";
import styles from "./x-glow.module.css";

export default component$(() => {
  return (
    <div>
      <image
        src="/X-logo-V3_transparent-dark.png"
        width={280}
        height={280}
        alt="Authentication"
        class={["mr-2", styles.neon]}
      />
    </div>
  );
});
