# Project: E-Commerce Landing Page

**Live Site:** [Vercel Link] (coming soon)

## What This Is

A simple product landing page with a working e-commerce checkout using Stripe Payment Links.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Stripe Payment Links
- Vercel (deployment)

## Setup

### Prerequisites
- Node.js 18+ and npm
- Stripe account (free tier available at [stripe.com](https://stripe.com))

### Install Dependencies
```bash
npm install
```

### Environment Variables
1. Copy the example file ([`.env.local.example`](.env.local.example)):
```bash
cp .env.local.example .env.local
```

2. Edit [`.env.local`](.env.local) and add your Stripe Payment Link:
```
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_link_here
```

**How to get your Stripe Payment Link:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign in or create a free account
3. Navigate to **Payment Links** in the left sidebar
4. Click **Create a link** and configure your product
5. Copy the link URL and paste it in `.env.local`

### Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features

- **Landing Page** ([`app/page.tsx`](app/page.tsx)) at `/`: Hero section with product overview
  - Product image placeholder
  - Title and description
  - Price display
  - Buy Now button
  - Why Choose Us section
  - Customer testimonial
  - FAQ section
  - Footer

- **Checkout Page** ([`app/checkout/page.tsx`](app/checkout/page.tsx)) at `/checkout`: Dedicated checkout experience
  - Order summary
  - Secure Stripe payment integration
  - Back to store button
  - Security information

- **Responsive Design**: Mobile-first approach
- **Stripe Integration**: Secure payment processing

## Deployment

Deployed via Vercel from GitHub. Environment variable `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` must be configured in Vercel project settings.

### Deploy Steps
1. Push to GitHub
2. Import repository in Vercel
3. Add environment variable in Vercel settings
4. Deploy

## License

MIT
