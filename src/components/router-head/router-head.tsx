import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" type="image/svg+xml" href="/icons/X-light/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="𝕏 stack" />
      <meta
        property="og:description"
        content="The cross-platform serverless bleeding-edge stack that scales"
      />
      <meta
        property="og:image"
        content="https://x-stack.vercel.app/icons/X-og-image.png"
      />
      <meta property="og:url" content="https://x-stack.vercel.app" />
      <meta property="og:type" content="photo" />
      <meta property="og:width" content="1200" />
      <meta property="og:height" content="630" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="𝕏 stack" />
      <meta
        name="twitter:description"
        content="The cross-platform serverless bleeding-edge stack that scales"
      />
      <meta
        name="twitter:image"
        content="https://x-stack.vercel.app/icons/X-og-image.png"
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
