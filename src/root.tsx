import { component$, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
// import { initializeApp } from "firebase/app";
// import { getAnalytics, logEvent } from "firebase/analytics";
import { QwikPartytown } from "./components/partytown/partytown";
// import { QwikPartytown } from "./components/partytown/partytown";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useVisibleTask$(() => {
    // console.log("root task");
    // const firebaseConfig = {
    //   apiKey: import.meta.env.PUBLIC_API_KEY,
    //   authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
    //   projectId: import.meta.env.PUBLIC_PROJECT_ID,
    //   storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
    //   messagingSenderId: import.meta.env.PUBLIC_SENDER_ID,
    //   appId: import.meta.env.PUBLIC_APP_ID,
    //   measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID,
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    // console.log("analytics", analytics);
    // logEvent(analytics, "notification_received");
    gtag("event", "notification_received");
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        {/* <QwikPartytown forward={["dataLayer.push"]} />
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-VNBJX46X1T"
        />
        <script type="text/partytown">
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-VNBJX46X1T');
        </script> */}
        <QwikPartytown forward={["gtag", "dataLayer.push"]} />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function() {
                    dataLayer.push(arguments);
                    }
                    gtag("js", new Date());
                    gtag("config", "G-VNBJX46X1T");
                    `}
        />
        <script
          async
          type="text/partytown"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VNBJX46X1T`}
        />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
