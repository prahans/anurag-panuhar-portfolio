Anurag Panuhar's portfolio, built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit portfolio content in `data/index.ts` and section components in `components/`. The homepage composes these sections in `app/page.tsx`. Projects, testimonials, and experience start empty so you can add your own details.

Custom Tailwind colors and light/dark theme variables live in `app/globals.css`. The theme provider in `app/provider.tsx` uses `next-themes` and defaults to dark mode.

This project uses `next/font` to load Inter. The first production build needs network access to download the font from Google.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`typecheck` generates Next.js route types before checking TypeScript. After a successful build, use `npm start` to run the production server.

## Example routes

`/sentry-example-page` checks `/api/sentry-example-api` and displays request failures without throwing an unhandled error. Sentry is not installed or configured; this example does not send monitoring events. The global error boundary logs unexpected errors to the console.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
