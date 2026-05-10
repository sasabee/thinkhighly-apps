# ThinkHighly Apps Website

A modern, professional website for ThinkHighly Apps - a South African tech startup specializing in mobile apps, websites, and digital solutions.

## 🚀 Features

- **Modern Design**: Feminine but professional with soft purple/pink gradients
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll animations using Framer Motion
- **SEO Ready**: Proper page structure and metadata
- **Tender Ready**: Company profile and capability statement pages for government/corporate procurement

## 📱 Pages

### Core Pages
- **Home** (`/`) - Hero section, services preview, portfolio showcase, testimonials
- **About** (`/about`) - Company story, mission, vision, values
- **Services** (`/services`) - Detailed service descriptions with technologies and benefits
- **Portfolio** (`/portfolio`) - Project showcase with filtering and statistics
- **Contact** (`/contact`) - Contact form, multiple contact methods, FAQ

### Tender Credibility Pages
- **Company Profile** (`/company-profile`) - Professional company overview with certifications
- **Capability Statement** (`/capability-statement`) - Government/corporate procurement ready

## 🛠 Technology Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`from-purple-600 to-pink-600`)
- **Secondary**: Soft purple/pink gradients
- **Text**: Gray scale with white overlays
- **Background**: White with purple/pink accents

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thinkhighly-apps

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── about/             # About page
│   ├── capability-statement/ # Capability statement page
│   ├── company-profile/     # Company profile page
│   ├── contact/            # Contact page
│   ├── portfolio/          # Portfolio page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/          # Page sections
│       ├── CTASection.tsx
│       ├── HeroSection.tsx
│       ├── PortfolioShowcase.tsx
│       ├── ServicesPreview.tsx
│       ├── Testimonials.tsx
│       └── WhyChooseUs.tsx
└── styles/               # Global styles
    └── globals.css
```

## 🎯 Key Features

### Navigation
- Sticky navbar with scroll effects
- Mobile responsive menu
- Smooth scroll navigation
- Active page indicators

### Contact & Forms
- Working contact form with validation
- Multiple contact methods (email, phone, WhatsApp)
- Form state management
- Success feedback

### Animations
- Scroll-triggered animations
- Hover effects and transitions
- Loading states
- Micro-interactions

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build and deploy
npm run build
# Upload dist/ folder to Netlify
```

## 📞 Support

For support or questions:
- **Email**: info@thinkhighlyapps.co.za
- **Phone**: +27 12 345 6789
- **Website**: thinkhighlyapps.co.za

---

**ThinkHighly Apps** - Think Highly. Build Smarter. 🚀

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
