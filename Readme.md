# [Readme.md](http://Readme.md)

# The cross-platform serverless bleeding-edge stack that scales

😌 Easier

🚀 Faster

🤑 Cheaper

🌟 Limitless

### Start with total peace of mind

An all-in-one toolbox for you to stop worrying about DX, scalability, performance, security, compatibility, customizability, maintainability, data modeling, data quality, and costs. Start with a robust and empowering stack that is not going to fail you.

### Forge your own opinion

A place for you to easily weigh the pros and cons of each fullstack framework, components collection, API architecture, DBMS, ORM, analytics service, deployment strategy, and development tool.

### Choose what you want

A cli to let you choose great alternatives that better match your ambitious project requirements (tbd).

# Introducing the 𝕏 stack

---

- ⚡️ **Fullstack framework: Qwik**
  - Build instantly interactive apps at any scale
  - Enjoy the best DX imaginable with server actions/loaders, typescript server/client RPC calls, Valibot validation, Middlewares, Image optimization, etc.
  - Make your app performant right from the start thanks to built-in Resumability, Lazy-loading ($), Signals-based Reactivity, and Edge Deployment
  - Use any library from other frameworks (React ✅; Svelte, Solid & Vue incoming)
- ✨ **Components collection: Shadcn/ui (TailwindCSS w/ headless components)**
    <aside>
    ⚠️ Since some shadcn components must be imported with qwikify$, this is the hardest piece to use with Qwik atm. I have already started porting a few components and will spend most of my time on this before I can confidently release v1.
    
    </aside>
    
    - Own your components and create your own design system to match your brand requirements
    - Copy/Paste UI templates to speed up your scaffolding
    - Customize your sections and components easily with Tailwind utility classes
    - Bring in your favorite icon library: Lucide, HeroIcons, Font Awesome, etc.
    - Ship less CSS with Tailwind's JIT (just in time) engine
    - Integrate your components with StoryBook
- 🔐 **Authentication: Auth.js**
  - 100% free - no sneaky "free now, pay later"
  - Easily implement social and Otp login
  - RBAC/ABAC support with custom user properties
  - Choose between Database or JWT sessions
- 🦺 **API architecture: Server actions/loaders**
  - Never break your app again with end-to-end type safety
  - Query your backend even when you don't remember it with Intellisense/Auto-complete
  - Validate Client requests with Zod
  - Rate limit your requests with Upstash’s serverless Redis
- 💪 **Database: Planetscale**
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
  - (100% free)[https://support.google.com/analytics/answer/1070983?hl=en#zippy=%2Cin-this-article]
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

You’re welcome to join the Discord server if you have any questions or simply want to hang out with like-minded 𝕏-plorers.

# How to (tdb)

# Evaluation & Alternatives (wip)

## **[🔗](https://www.compart.com/en/unicode/U+1F517)** [CSS Frameworks](https://docs.google.com/spreadsheets/d/1CHG5uK4AoMEl4giF9uY0RDJawjTdtT27gFwoIdRlxTY/edit#gid=225083988)

### Shadcn/ui

### Tailwind-ui

### Bootstrap

### MUI

### Bulma

### Chakra-ui

### Mantine

### Ark UI

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

## Authentication

Authentication with Capacitor can be tricky (see Next-Auth below). I haven't tried them all yet, but I think Firebase Auth, Supabase Auth, Clerk and Supertokens should work since they all seem to work with React Native.

Read below if you want to know more, and please, open an issue if you disagree with anything, if you have any questions or if you would like to recommend something.

### Next-Auth/Auth.js

JWT vs database sessions: https://chat.openai.com/share/e91ad6c0-4ac0-4b00-a173-f2eea16037c7

### Firebase Auth

### Clerk

Being extremely easy to use, Clerk is a fantastic option for auth **if** your application requires enterprise-grade customer management mechanisms and isn’t supposed to support 10,000+ users. Depending on your business model requirements, $0.02/user is not cheap.

### Supertokens

Supertokens is a great option for projects that require complex authentication strategies. It is a great open-source and scalable alternative to AWS Cognito or Google Identity Platform. If you just need basic auth such as email/password, OTP (magic links) or social login, this doesn't appear to be the cheapest or easiest approach.

### Supabase Auth

### Lucia

### Other solutions (ex: Auth0, KeyCloak, FusionAuth, Okta, Onelogin, AWS Cognito, Google Identity Platform)

I haven't tried them all, but I believe them to be either over-complicated or over-priced. Feel free to look into them if you have specific requirements that aren’t met by the solutions above.

# FAQ (tbd)

# Contributors (tbd)
