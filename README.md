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

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=your_stripe_payment_link_here
```

### Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Features

- **Hero Section**: Product name, description, and price
- **Buy Now Button**: Connects to Stripe checkout
- **Features Section**: 3 product benefits
- **Testimonial**: Customer social proof
- **FAQ Section**: 3 common questions
- **Responsive Design**: Mobile-first approach
- **Footer**: Copyright information

## Deployment

Deployed via Vercel from GitHub. Environment variable `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` must be configured in Vercel project settings.

### Deploy Steps
1. Push to GitHub
2. Import repository in Vercel
3. Add environment variable in Vercel settings
4. Deploy

## License

MIT
