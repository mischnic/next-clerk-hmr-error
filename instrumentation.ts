import * as Sentry from "@sentry/nextjs";

// const {
//   HttpInstrumentation,
// } = require("./node_modules/.pnpm/@opentelemetry+instrumentation-http@0.53.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/instrumentation-http/build/src/http.js");

// const {
//   InstrumentationBase,
// } = require("./node_modules/.pnpm/@opentelemetry+instrumentation@0.53.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/instrumentation/build/src/platform/node/instrumentation.js");

const { Hook } = require("require-in-the-middle");

// class X extends InstrumentationBase {
//   constructor() {
//     super("test", "1.0.0", {});
//   }
//   init() {
//     console.log("init");
//     return [];
//   }
// }

export async function register() {
  // if (process.env.NEXT_RUNTIME === "nodejs") {
  // await import("./sentry.server.config");
  // Sentry.init({
  //   dsn: process.env.SENTRY_DSN,
  //   // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  //   tracesSampleRate: 1,
  //   // Setting this option to true will print useful information to the console while you're setting up Sentry.
  //   debug: true,
  // });
  // try {
  // new X();
  new Hook(
    // Intercept all `require` calls; we will filter the matching ones below
    null,
    { internals: true },
    (exports: any, name: any, basedir: any) => {
      return exports;
    }
  );
  // new HttpInstrumentation();
  // } catch (e) {
  //   console.log(e);
  // }
  // }

  // if (process.env.NEXT_RUNTIME === "edge") {
  //   await import("./sentry.edge.config");
  // }
}

// export function onRequestError(...args) {
//   console.log(args);
// }
// export const onRequestError = Sentry.captureRequestError;
