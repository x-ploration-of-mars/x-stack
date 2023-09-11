<h1 align="center">The cross-platform serverless bleeding-edge stack that scales</h1>
<br>
<h3 align="center">😌 Easier | 🚀 Faster | 🤑 Cheaper | 🌟 Limitless</h3>

<br>

### Start with total peace of mind

An all-in-one toolbox for you to stop worrying about DX, scalability, performance, security, compatibility, customizability, maintainability, data modeling, data quality, and costs. Start with a robust and empowering stack that is not going to fail you.

### Forge your own opinion

A place for you to easily weigh the pros and cons of each fullstack framework, components library/collection, API architecture, Database, ORM, analytics service, Auth toolkit, deployment strategy, and development tool.

### Choose what you want

A cli to let you choose great alternatives that better match your ambitious project requirements (tbd).

<br>

# Introducing the 𝕏 stack

- ⚡️ **Fullstack framework: Qwik**
  - Build instantly interactive apps at any scale
  - Enjoy the best DX imaginable with server actions/loaders, typescript server/client RPC calls, Valibot validation, Middlewares, Image optimization, etc.
  - Make your app performant right from the start thanks to built-in Resumability, Lazy-loading ($), Signals-based Reactivity, and Edge Deployment
  - Use any library from other frameworks (React ✅; Svelte, Solid & Vue incoming)
- ✨ **Components ~~library~~ collection: Shadcn/ui (TailwindCSS w/ headless components)**
  > ⚠️ Since some shadcn components must be imported with qwikify$, this is the hardest piece to use with Qwik atm. I have already started porting a few components and will spend most of my time on this before I can confidently release v1.
  - Own your components and create your own design system to match your brand requirements
  - Copy/Paste UI templates to speed up your scaffolding
  - Customize your sections and components easily with Tailwind utility classes
  - Bring in your favorite icon library: Lucide, HeroIcons, Font Awesome, etc.
  - Ship less CSS with Tailwind's JIT (just in time) engine
  - Integrate your components with StoryBook
- 🔐 **Auth: Auth.js**
  - 100% free - no sneaky "free now, pay later"
  - Easily implement social and Otp login
  - RBAC/ABAC support with custom user properties
  - Choose between Database or JWT sessions
- 🦺 **API architecture: Server actions/loaders**
  - Never break your app again with end-to-end type safety
  - Query your backend even when you don't remember it with Intellisense/Auto-complete
  - Validate Client requests with Zod
  - Rate limit your requests with Upstash’s serverless Redis
- 💪 **Database platform: Planetscale**
  - It's cheap
  - It scales like no other database
  - Branch your database like you branch your code
  - Organize your migrations with deploy requests
  - Seamlessly deploy and revert schema changes with no downtime
  - Get real-time insights into your database performance
  - Integrate with third-party services for data warehousing, etc.
- 💦 **ORM: Drizzle**
  - Define a type-safe schema and take advantage of Intellisense/Auto-completion
  - Write queries that are even faster than raw SQL
  - Don't worry about joins (thank you, relational queries)
  - Run migrations with ease
  - Use it anywhere, even on the edge
- 🎯 **Analytics: Firebase Analytics (GA4)**
  - [100% free](https://support.google.com/analytics/answer/1070983?hl=en#zippy=%2Cin-this-article)
  - Keep track of your AARRR metrics with ease thanks to well-designed visualizations
  - Enjoy the power of cohort-based analysis to measure app usage and learn from your users
  - Run A/B tests with GrowthBook to find out what drives your users
  - Works on any platform
- 🍀 **Development tools:**
  - Vscode extensions: Eslint, Prettier, Pretty Typescript Errors
  - AI assistants: Codeium & chatgpt
  - VScode shortcuts: `ctrl + d` `ctrl + f` `ctrl + shift + f` `ctrl + p`
  - Logging (tbd)
  - Icon generation: https://realfavicongenerator.net/
- 🌐📱💻🥽 **Deployment: Vercel + PWA**
  - Deploy your app seamlessly on the web, but also on mobile and desktop with just one codebase
  - Take advantage of the wide ecosystem of npm libraries from the web
  - Port your web app to native easily without impacting performance & development efforts

Credits to [create-t3-app](https://github.com/t3-oss/create-t3-app) and [epic-stack](https://github.com/epicweb-dev/epic-stack) that I’ve used as inspiration to make this stack a better stack.

You’re welcome to join the [🔗Discord server](https://discord.gg/W4e8ReQWv2)f you have any questions or simply want to hang out with like-minded 𝕏-plorers.

<br>

# How to (wip)

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

# Evaluation & Alternatives (wip)

## Fullstack Frameworks

### Qwik (w/ qwik-city)

### Svelte / Sveltekit

### Solid.js / Solidstart

### React / Next.js

### React / Remix

### Vue.js / Nuxt

### Angular

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

## Components collections → **[🔗](https://www.compart.com/en/unicode/U+1F517)**[comparison-table](https://docs.google.com/spreadsheets/d/1CHG5uK4AoMEl4giF9uY0RDJawjTdtT27gFwoIdRlxTY/edit#gid=225083988) (wip)

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

<br>

# FAQ (tbd)

<br>

# Contributors (tbd)
