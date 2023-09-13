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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://linkfork.co/" />
      <meta
        property="og:title"
        content="LinkFork | Link Preview Customization"
      />
      <meta
        property="og:description"
        content="LinkFork lets you shorten, and customize how your link will appear when shared on social media, for free."
      />
      <meta
        property="og:image"
        content="https://linkfork.co/images/poster.png"
      />
      <link rel="icon" type="image/svg+xml" href="/icons/X-light/favicon.ico" />

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
