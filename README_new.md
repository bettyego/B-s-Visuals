# 🎨 B's Graphic Design Portfolio

A modern, responsive portfolio website showcasing the creative work of Onuoha-Mba Bethel, a professional graphic designer specializing in logos, flyers, and social media designs.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Portfolio**: Filterable gallery with categories (Logos, Flyers, Social Media)
- **Image Modal**: Full-screen image viewer with navigation
- **Contact Form**: Direct email integration for client inquiries
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance Optimized**: Lazy loading, image optimization, and fast loading times
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Tech Stack

- **Frontend**: React 19, Vite 5
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── component/
│   ├── common/          # Reusable components
│   │   └── SEO.jsx      # SEO meta tag management
│   └── page/            # Page components
│       ├── Header.jsx   # Navigation header
│       ├── Hero.jsx     # Landing section
│       ├── MyWork.jsx   # Portfolio gallery
│       ├── Contact.jsx  # Contact form
│       └── Footer.jsx   # Site footer
├── constants/           # App constants
│   └── portfolio.js     # Portfolio data and categories
├── hooks/              # Custom React hooks
│   └── useImageModal.js # Image modal functionality
├── utils/              # Utility functions
│   └── helpers.js      # Helper functions
└── App.jsx             # Main app component
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bettyego/B-s-Visuals.git
   cd b-graphic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Portfolio Gallery
- **Category Filtering**: Filter designs by type (All, Logos, Flyers, Social Media)
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Image Modal**: Click any image to view in full-screen modal with navigation
- **Lazy Loading**: Images load as needed for better performance

### Contact Integration
- **Direct Email**: Contact form sends emails directly to the designer
- **Social Links**: Quick access to Instagram and email
- **Professional Presentation**: Clean, modern contact interface

### SEO & Performance
- **Meta Tags**: Comprehensive SEO meta tags for better search visibility
- **Structured Data**: Schema.org markup for rich search results
- **Open Graph**: Social media sharing optimization
- **Performance**: Optimized images and lazy loading

## 🌐 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

**Live Site**: [https://b-graphic.vercel.app/](https://b-graphic.vercel.app/)

## 📧 Contact

**Onuoha-Mba Bethel**
- Email: nwabethroseonuoha@gmail.com
- Instagram: [@Betty-Empire](https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow)

## 📄 License

This project is private and proprietary. All rights reserved.
