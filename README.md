# 🚀 Chandu D - Professional Portfolio

A modern, high-performance portfolio website showcasing full-stack development expertise, built with cutting-edge technologies and best practices.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38bdf8.svg)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design** - Seamless experience across all devices
- **Dark/Light Mode** - System preference detection with manual toggle
- **Smooth Animations** - Framer Motion powered transitions
- **Glass Morphism** - Modern UI aesthetic with backdrop blur effects

### ⚡ Performance Optimizations
- **Image Optimization** - Sharp-powered WebP/AVIF generation with responsive sizing
- **Lazy Loading** - Intersection Observer-based component loading
- **Code Splitting** - Strategic bundle chunking for faster loads
- **PWA Support** - Offline functionality and installability

### 🛠️ Development Features
- **TypeScript** - Type-safe development
- **ESLint** - Code quality enforcement
- **Error Boundaries** - Graceful error handling
- **Error Monitoring** - Sentry integration for production tracking

### 📊 Analytics & Monitoring
- **Google Analytics** - User behavior tracking
- **Performance Monitoring** - Core Web Vitals tracking
- **Error Tracking** - Real-time error reporting

### 📧 Contact Features
- **EmailJS Integration** - Functional contact form
- **Form Validation** - Client-side validation
- **Loading States** - Enhanced user feedback

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/chandud1124/chandu-d-portfolio-hub.git

# Navigate to project directory
cd chandu-d-portfolio-hub

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Visit `http://localhost:8080` to view the application.

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# EmailJS Configuration (https://www.emailjs.com/)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry Error Monitoring (https://sentry.io/)
VITE_SENTRY_DSN=your_sentry_dsn

# Environment
VITE_APP_ENV=development
```

## 🏗️ Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Build with development mode
npm run build:dev

# Analyze bundle size
npm run build:analyze

# Type checking
npm run type-check

# Lint code
npm run lint
npm run lint:fix
```

## 📦 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components

### Tools & Libraries
- **Sharp** - Image optimization
- **EmailJS** - Contact form functionality
- **Sentry** - Error monitoring
- **Google Analytics** - User tracking
- **React Router** - Navigation
- **TanStack Query** - Data fetching

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   └── ErrorBoundary.tsx
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── utils/              # Helper functions
│   ├── analytics.ts    # GA integration
│   ├── monitoring.ts   # Sentry setup
│   └── imageOptimization.ts
└── assets/             # Static assets
```

## 🎯 Performance Metrics

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: <1.5s
- ✅ Largest Contentful Paint: <2.5s
- ✅ Cumulative Layout Shift: <0.1
- ✅ Time to Interactive: <3.5s

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Chandu D** - MERN Stack Developer
- 📧 Email: chandu.d.professional@gmail.com
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@chandud1124](https://github.com/chandud1124)

---

Built with ❤️ using React, TypeScript, and modern web technologies
