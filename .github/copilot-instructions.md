# AI Coding Agent Instructions

## Project Overview
This is a **christopher-ecommerce-landing** project - an ecommerce landing page. The project is in its initial setup phase with no source code yet committed.

## Getting Started
1. **Project Type**: Frontend ecommerce landing page (Node.js/npm-based)
2. **Assumed Stack**: Modern frontend framework (React, Vue, or Next.js recommended for ecommerce)
3. **Dependencies**: See `.gitignore` indicates Node.js environment expected (node_modules/, .tsbuildinfo)

## Initialization Steps
When adding first features:
- [ ] Initialize `package.json` with appropriate scripts: `dev`, `build`, `start`
- [ ] Add frontend framework (Next.js preferred for ecommerce SEO benefits)
- [ ] Configure TypeScript if needed (`.tsbuildinfo` in gitignore suggests this may be planned)
- [ ] Create directory structure: `src/`, `public/`, `components/`, `pages/`

## Ecommerce Landing Page Essentials
- **Product Showcase**: Hero section with featured products
- **Call-to-Actions**: Clear checkout/browse buttons
- **Responsive Design**: Mobile-first approach (60%+ traffic typically mobile)
- **Performance**: Optimize images, implement lazy loading for product listings
- **SEO**: Meta tags, structured data for products

## Code Patterns to Establish
1. **Component Structure**: Create reusable components (ProductCard, PriceDisplay, AddToCart)
2. **State Management**: Plan for cart state (consider Context API or lightweight store for ecommerce flows)
3. **API Integration**: Prepare abstraction layer for product/order endpoints
4. **Styling**: Adopt consistent approach (Tailwind CSS recommended for rapid ecommerce development)

## Development Workflow
- No established CI/CD yet - consider adding GitHub Actions for:
  - Linting (`eslint`)
  - Testing (`jest` or `vitest`)
  - Build verification
- Local development: `npm run dev` (conventional)
- Production build: `npm run build && npm start`

## Git Conventions
- Main branch is `main` (current default)
- Commit to feature branches before merging
- Early-stage project: maintain clean git history

## Next Steps for AI Agents
1. Propose and implement initial project structure
2. Set up build configuration with recommended framework
3. Create foundational components for landing page
4. Establish testing structure
5. Document architecture decisions as project grows
Lesson: Build a Product Landing Page With an E-Commerce Connection (GitHub Workflow)
Student: Christopher
Goal: Create and deploy a web page that sells a product by connecting to a real checkout experience.
Outcome: A live web page + GitHub repo + working “Buy Now” checkout link.
Learning Objectives
By the end of this lesson, Christopher will be able to:
Create a project in GitHub using professional repo structure.
Build a simple but polished product landing page.
Connect the page to a working e-commerce checkout using Stripe Payment Links.
Deploy the project to the web using Vercel.
Document the work in a README and use GitHub commits correctly.
Requirements (What the Page Must Include)
Your landing page must have:
Page Content (UI)
A brand header (logo text is fine)
Product image (can be a placeholder)
Product title + short description
Price displayed
“Buy Now” button connected to checkout
A section with:
3 benefits/features (bullets or cards)
A customer testimonial (single quote is fine)
A FAQ section (3 questions)
Footer with copyright
E-Commerce Connection
Use Stripe Payment Links (preferred for this assignment)
“Buy Now” button must open Stripe checkout in a new tab
GitHub + Deployment
Repo hosted on GitHub (public or private)
Must include:
Professional commit history (minimum 5 commits)
README with setup + live link
Deployed on Vercel with a live URL
Tools Allowed
Next.js (App Router) + React
Plain CSS, Tailwind, or CSS Modules (student choice)
Stripe Payment Links for checkout
Vercel for deployment
Step-by-Step Student Instructions
Part A — Create the Repo (GitHub First)
Create a new GitHub repo named:
christopher-ecommerce-landing
Add:
README.md
.gitignore (Node)
MIT License (optional)
Commit #1: “Initialize repository with README”
Part B — Create the Next.js Project Locally
On your computer, run:
Create Next.js app (App Router)
Choose TypeScript: Yes (recommended)
Push project to GitHub.
Commit #2: “Create Next.js app scaffold”
Part C — Build the Landing Page
Create a single page with sections:
Hero
Product name
Product description
Price
Buy Now button
Features
3 feature cards
Testimonial
FAQ
3 questions
Footer
Commit #3: “Build landing page layout and sections”
Part D — Add the E-Commerce Connection (Stripe Payment Link)
Create a Stripe account (test mode is fine).
Add one product in Stripe.
Generate a Payment Link for that product.
Store the link in an environment variable:
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=...
Wire the Buy Now button to open that link.
Commit #4: “Connect Buy Now button to Stripe Payment Link”
Part E — Deploy with Vercel (From GitHub)
Import the repo into Vercel.
Add the environment variable in Vercel settings:
NEXT_PUBLIC_STRIPE_PAYMENT_LINK
Deploy and verify:
Page loads
Buy Now button opens Stripe checkout
Commit #5: “Finalize deployment and update README”
Deliverables (What Christopher Must Turn In)
Christopher must submit:
GitHub repo link
Live Vercel link
Screenshot of:
Landing page
Stripe checkout page opened from Buy Now
Acceptance Criteria (How You Will Grade It)
Pass requires all of the following:
✅ Landing page includes all required sections
✅ Buy Now button opens Stripe Payment Link checkout
✅ Repo includes at least 5 meaningful commits
✅ README includes setup steps + live link
✅ Deployed link works correctly on Vercel
Bonus (Optional):
Mobile responsive layout
Simple product gallery (2–3 images)
Email capture form (non-functional OK, or Mailchimp link)
README Template (Christopher Must Use)
Copy/paste into README.md:
Project: E-Commerce Landing Page
Live Site: (paste Vercel link here)
What This Is
A simple product landing page with a working e-commerce checkout using Stripe Payment Links.
Tech Stack
Next.js
Stripe Payment Links
Vercel
Setup
Install dependencies
Create .env.local and add:
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=your_link_here
Run the dev server
Deployment
Deployed via Vercel from GitHub. Environment variable configured in Vercel project settings.
Instructor Notes (For You)
If Christopher struggles, the most common blockers are:
forgetting NEXT_PUBLIC_ prefix (frontend env vars)
not adding env var inside Vercel settings
using the wrong Stripe mode (test vs live)
---
*Last updated: Early development phase. Update as architecture solidifies.*
