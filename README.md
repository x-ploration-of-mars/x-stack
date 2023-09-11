<h1 align="center">The cross-platform serverless bleeding-edge stack that scales</h1>
<br>
<h3 align="center">😌 Easier | 🚀 Faster | 🤑 Cheaper | 🦸‍♂️ Limitless</h3>

<br>

### Start with total peace of mind

An all-in-one toolbox for you to stop worrying about DX, scalability, performance, security, compatibility, customizability, maintainability, data modeling, data quality, and costs. Start with a robust and empowering stack that is not going to fail you.

### Forge your own opinion

A place for you to easily weigh the pros and cons of each fullstack framework, components library/collection, API architecture, Database, ORM, analytics service, Auth toolkit, deployment strategy, and development tool.

### Choose what you want

A cli to let you choose great alternatives that better match your ambitious project requirements _(tbd)_.

<br>

# Introducing the 𝕏 stack

- ⚡️ **Fullstack framework: Qwik**
  - Enjoy the best DX imaginable with server actions/loaders, typescript server/client RPC calls, Valibot validation, Middlewares, Image optimization, etc.
  - Make your app performant right from the start thanks to built-in Resumability, Lazy-loading ($), Signals-based Reactivity, and Edge Deployment
  - Use any library from other frameworks (React & Angular ✅; Svelte, Solid & Vue incoming)
- ✨ **Components ~~library~~ collection: Shadcn/ui (TailwindCSS w/ headless components)**
  > ⚠️ Since some shadcn components must be rewritten natively or imported with qwikify$, this is a hard piece to use with Qwik atm. I have already started porting a few components and will spend most of my time on this before I can confidently release v1.
  - Own your components and create your own design system to match your own brand requirements
  - Copy/Paste UI templates to speed up your scaffolding
  - Customize your sections and components easily with Tailwind utility classes
  - Bring in your favorite icon library: Lucide, HeroIcons, Font Awesome, etc.
  - Ship less CSS with Tailwind's JIT (just in time) engine
  - Style your forms and markdown easily with @tailwindcss/forms and @tailwindcss/typography
  - Integrate your components with StoryBook _(tbd)_
- 🔐 **Auth: Auth.js**
  - Enjoy a 100% free auth solution
  - Easily implement social and OTP login
  - RBAC/ABAC support with custom user properties _(tbd)_
  - Choose between Database or JWT sessions _(tbd)_
  - Own your auth backend and improve query performance
- 🦺 **API architecture: Server actions/loaders**
  - Never break your app again with end-to-end type safety
  - Handle Form validation with Valibot and modular-form
  - Rate limit your requests with Upstash’s serverless Redis _(tbd)_
- 💪 **Database platform: Planetscale**
  - Scale to planet scale
  - Don't worry about costs
  - Branch your database like you branch your code
  - Organize your migrations with deploy requests
  - Seamlessly deploy and revert schema changes with no downtime
  - Get real-time insights into your database performance
  - Integrate with third-party services for data warehousing, etc.
- 💦 **ORM: Drizzle**
  - Define a type-safe schema and take advantage of Intellisense/Auto-completion
  - Write queries even faster than raw SQL
  - Don't worry about joins (thank you, relational queries)
  - Run migrations with ease
  - Use it anywhere, even on the edge
- 🎯 **Analytics: Firebase Analytics (GA4)**
  - Enjoy a [100% free](https://support.google.com/analytics/answer/1070983?hl=en#zippy=%2Cin-this-article) non open-source software
  - Keep track of your AARRR metrics with ease thanks to well-designed visualizations
  - Enjoy the power of cohort-based analysis to measure app usage and learn from your users
  - Run A/B tests with GrowthBook to find out what drives your users
  - Works on any platform
- 🍀 **Development tools:**
  - Vscode extensions: Eslint, Prettier, Pretty Typescript Errors
  - AI assistants: Codeium & chatgpt
  - VScode shortcuts: `ctrl + d` `ctrl + f` `ctrl + shift + f` `ctrl + p`
  - Logging _(tbd)_
  - Icon generation: https://realfavicongenerator.net/
- 🌐📱💻🥽 **Deployment: Vercel + PWA**
  - Deploy your app seamlessly on the web, but also on mobile and desktop with just one codebase
  - Take advantage of the wide ecosystem of npm libraries from the web
  - Port your web app to native easily without impacting performance & development costs

Credits to [create-t3-app](https://github.com/t3-oss/create-t3-app) and [epic-stack](https://github.com/epicweb-dev/epic-stack) that I’ve used as inspiration to make the 𝕏 stack a better stack.

You’re welcome to join the [🔗Discord server](https://discord.gg/W4e8ReQWv2) and hang out with us 🤖.

<br>

# How to _(wip)_

## Test locally

- Clone project `git clone https://github.com/x-ploration/x-stack.git`
- Install dependencies `npm install`

### Add env variables

- Copy `.env.example` into `.env`
- Add `AUTH_SECRET` with this [secret generator](https://generate-secret.vercel.app/32) or with `openssl rand -base64 32`
- Add Discord provider `DISCORD_CLIENT_ID` `DISCORD_CLIENT_SECRET` with https://discord.com/developers/applications. You will need to create a new application (top-right corner button `New Application`) and copy the "client id" and "client_secret" from oauth2 settings.
- Add Planetscale env vars. `DATABASE` `DATABASE_HOST` `DATABASE_USERNAME` `DATABASE_PASSWORD` with https://app.planetscale.com/. Go to `branches`, select your branch, click `connect`, and copy/paste.

### Add discord redirect

- Add discord redirect to your localhost url (e.g. `http://localhost:5173/api/auth/callback/discord`)

### Replace GA4 property

- In root.tsx, change id=G-VNBJX46X1T to your own GA4 property id

## Deploy

- Push your code in a new github repository
- Go to vercel dashboard, `Add New` project (top-right button) and select your repository. Remember to add production env vars (the database env vars should point to your production database).
- On your terminal, run build command `npm run build`
- On your terminal, run deploy command `npm run deploy`
- Add discord redirect to your production url (e.g. `https://x-stack.vercel.app/api/auth/callback/discord`).

# Evaluation & Alternatives _(wip)_

## Fullstack Frameworks

TLDR: For most projects, the most important criteria for choosing a framework is the ecosystem.

- 1️⃣: Thanks to its serialized/resumable/compiled model, Qwik scores at the highest in many aspects: SSR _(ofc)_, but also Reactivity, DX, and **the ecosystem** (because you can run React inside of Qwik 👀). Anything you can do in React, you can do in Qwik. But the opposite is not true. I wonder what could be possibly done in other frameworks that couldn't be in Qwik 🤔.
- 2️⃣: If you ask me, I'd say React / Next / Remix comes next (👈). They are not as good in terms of Reactivity as Svelte, Solid or even Vue, but you will find libraries you won't find natively built in the other frameworks (ex: [react webcam](https://www.npmjs.com/package/react-webcam)) and get newer trendy libraries sooner (hi 👋 [shadcn](https://github.com/shadcn-ui/ui)).
- 3️⃣: I'd say it's Svelte, because it is lightweight and brings significant performance gains, and it has Sveltekit ready. Rich Harris has also got some swag 👌.
- 4️⃣: Vue / Nuxt 3. Although I highly respect Daniel Roe, I think appart from small performance gains, Vue 3's composition api is simply React hooks into Vue. It isn't worth losing the ecosystem.
- 5️⃣: Solid / Solidstart. Although Ryan is one of my heroes, Solidstart is still not solid (👈) enough to be used in production ☹️.
- 6️⃣: Angular...

## Authentication

### Auth.js (Next-Auth)

### Clerk

### Supertokens

### Supabase Auth

### Firebase Auth

### Lucia

### Auth0

### Keycloak

### FusionAuth

### Okta

### Onelogin

### AWS Cognito

### Google Identity Platform

## Components collections → [🔗comparison-table](https://docs.google.com/spreadsheets/d/1CHG5uK4AoMEl4giF9uY0RDJawjTdtT27gFwoIdRlxTY/edit#gid=225083988) _(wip)_

### Shadcn/ui

### Tailwind-ui

### Bootstrap

### MUI

### Bulma

### Chakra-ui

### Mantine

### Ark UI

## API Architecture

### REST

### Graphql

### tRPC

### loader/action RPC calls

## Database Platform

### Planetscale (MySQL)

### Turso (SQLite)

### Neon (Postgres)

### CockroachDB (Postgres)

### Supabase (Postgres)

### Railway (Postgres)

### SurrealDB (NewSQL)

### Neo4j Aura (Graph)

### MongoDB (Document)

### Fauna

### ArrangoDB

## ORM

### Knex

### TypeORM

### Prisma

### Kysely

### Drizzle

## Analytics

### GA4

### Umami

### Plausible

### Mixpanel

### Amplitude

### Matomo

### Piwik Pro

### Heap

### Hotjar

### Gauges

### PostHog

## A/B Testing

### Optimizely

### Growthbook

## Rate Limiting

### Redis

### Upstash

## Deployment

### Vercel

### Netlify

### Cloudflare pages

### AWS

### GCP

### Azure

## Cross Platform solution

### PWA

### Capacitor

### Tauri

### React Native

<br>

# FAQ _(wip)_

### Is the 𝕏 stack ready for production?

Although some pieces are still in beta (auth.js, drizzle, valibot, qwik-ui's headless components), I am confident that this stack can already be used in production.

> ⚠️ Since some shadcn components must be rewritten natively or imported with qwikify$, this is a hard piece to use with Qwik atm. I have already started porting a few components and will spend most of my time on this before I can confidently release v1.

### Who are you?

I'm an indie dev and I've had the chance to work on many projects that required learning many different technoligies. I have worked extensively with React vanilla in a project that used the GRAND stack (Graphql, React, Apollo, Neo4j Database). I've worked with Next 12 for my portfolio website using the t3 stack. I've worked with Nuxt 3 on a French government site. And I've tried my hands at Sveltekit for a side hustle. I have to admit, I've only read Solid's documentation 🙈.

### Why?

In July 2023, I started looking into making the t3 stack cross-platform with Capacitor. But one month of research later, I came up to the unintuitive conclusion that SSR applications can also perfectly serve as mobile apps if done well. The loader/action pattern thus became attractive and I started playing a bit with Remix, Next 13.4, Nuxt and Qwik. I was already a big fan of shadcn and I wanted it to be a part of my stack, so I thought Qwik and Nuxt were out of question. But looking in more closely, everything except shadcn was ready to use in Qwik while server actions were in beta in Next and there was no middleware capability in Remix. So I tried to see if anyone was working on a shadcn port and realized I could qwikify$ shadcn. Thus here I am with the 𝕏 stack on Qwik and qwikcn 🙃.

> <br>

# Contributors _(tbd)_
