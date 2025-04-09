This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- [x] Typescript
- [x] Custom Favicon
- [x] Posthog analytics
- [x] Privacy Policy
- [] Supabase backend & auth
- [] Auth page
- [] Protected Auth routes
  - [] All to have a shared menu bar
- [] ShadCN
- [] Blog/s
- [] Stripe integration

## Setup Steps

Checklist:

- [] Update Favicon
- [] Add posthog key
- [] Update the privacy policy

### Favicon Setup

Replace the `favicon.ico` in `src/app` wuth a new `favicon.(ico|png|jpg)`.

### Analytics

Analytics are managed via Posthog. To configure update the `.env.local` (& where-ever you've hosted the app) values with the API key value for `NEXT_PUBLIC_POSTHOG_KEY`. It's unliekly `NEXT_PUBLIC_POSTHOG_HOST` will require changeing.

### Privacy Policy

Contained within `src/app/privacy-policy/privacy-policy.mdx` (essentially a markdown file). Before deployment it should be updated to reflect your app name & actual policy details.

## Running the Project

To run the dev server:

```bash
npm run dev
```
