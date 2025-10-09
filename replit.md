# Portfolio Website

## Overview

This is a personal portfolio website for Jay, a developer and musician. The site is built as a single-page application showcasing professional work, skills, and contact information. It features a modern, animated design with smooth scrolling navigation between sections (Home, About, Projects, Contact).

The application is built with Next.js 14 App Router, featuring a sleek black and white minimal aesthetic with a vibrant neon pink (#ff0055) accent color, inspired by gazijarin.com.

## Recent Changes

**October 9, 2025**
- Initial portfolio setup complete
- Implemented Next.js 14 with App Router, TypeScript, and Tailwind CSS
- Created all core components: Navbar, Hero, About, Projects, Contact, Footer
- Added Framer Motion animations throughout
- Configured Inter and Poppins fonts via next/font optimization
- Set up Replit environment with allowedDevOrigins configuration
- Deployed development server on port 5000

## User Preferences

- Preferred communication style: Simple, everyday language
- Design aesthetic: Minimal, clean, generous whitespace
- Color scheme: Black/white with #ff0055 neon accent

## Project Architecture

### Frontend Architecture

**Framework Choice: Next.js 14 (App Router)**
- **Problem**: Need for a modern, performant portfolio site with good SEO and smooth navigation
- **Solution**: Next.js App Router with client-side interactivity
- **Rationale**: Provides server-side rendering for initial page load, excellent SEO, and seamless integration with React ecosystem
- **Implementation**: All components use "use client" directive for interactivity and animations

**Styling: Tailwind CSS**
- **Problem**: Need for rapid UI development with consistent, responsive design
- **Solution**: Utility-first CSS framework with custom theme extensions
- **Rationale**: Enables quick iteration, built-in responsiveness, and easy customization
- **Configuration**: 
  - Custom neon color (#ff0055)
  - Custom font variables (Inter for body, Poppins available for headings)
  - Custom scrollbar styling with neon accent
  - Black background with white text for minimal aesthetic

**Animation Library: Framer Motion**
- **Problem**: Need for smooth, professional animations and transitions
- **Solution**: Framer Motion for declarative animations
- **Rationale**: React-first animation library with viewport-based triggers and stagger effects
- **Implementation**: 
  - Initial fade-in animations for hero section
  - Viewport-triggered animations for About, Projects, Contact sections
  - Stagger animations for skill icons and project cards
  - Smooth navigation indicator in navbar
  - Hover effects on project cards

**Component Architecture**
- **Pattern**: Component-based architecture with reusable UI elements
- **Structure**: 
  - Shared components: `Navbar`, `Hero`, `Section`, `Footer`
  - Page components: `app/about/page.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`
  - All sections rendered on single home page for SPA experience
- **Design**: Client components for interactivity with viewport-based animation triggers

### Navigation & Routing

**Single-Page Application Pattern**
- **Problem**: Need smooth navigation without page reloads
- **Solution**: Hash-based navigation with smooth scrolling
- **Implementation**: 
  - All sections rendered on homepage with unique IDs
  - Navbar tracks active section via scroll position with IntersectionObserver
  - Smooth scroll behavior for navigation clicks
  - Active section indicator with Framer Motion layoutId animation

### Typography

**Google Fonts Integration**
- **Inter**: Primary font for body text and UI elements
- **Poppins**: Secondary font available for headings (weights: 300, 400, 500, 600, 700)
- **Optimization**: Both fonts loaded via Next.js font optimization system
- **CSS Variables**: `--font-inter` and `--font-poppins` for Tailwind integration

### Responsive Design

**Mobile-First Approach**
- Tailwind's responsive utilities (md:, lg: breakpoints)
- Flexible grid layouts that adapt to screen size
- Touch-friendly navigation and interaction targets
- Responsive text sizing (text-6xl on mobile, text-8xl on desktop for hero)

### Replit Configuration

**Environment Setup**
- Configured `allowedDevOrigins` in next.config.mjs to support Replit iframe
- Uses REPLIT_DOMAINS environment variable for dynamic origin configuration
- Development server runs on port 5000 for Replit compatibility
- Workflow configured to automatically start dev server

## External Dependencies

### Core Framework
- **Next.js 14.2.33**: React framework for production-grade applications
- **React 18.3.1**: UI library for component-based architecture
- **TypeScript 5.7.3**: Static type checking

### UI & Animation
- **Framer Motion 12.23.22**: Animation library for smooth transitions and interactions
- **React Icons 5.5.0**: Icon library providing social media and skill icons (uses Font Awesome, Simple Icons)
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Google Fonts**: Inter and Poppins fonts loaded via Next.js font optimization

### Build Tools
- **PostCSS 8.4.49**: CSS processing tool
- **Autoprefixer 10.4.20**: Automatic vendor prefix addition
- **ESLint 8.57.0**: Code linting with Next.js configuration (Note: Next.js 14 requires ESLint 8, not 9)

### Development Configuration
- Custom dev server port (5000) configured in package.json
- No backend API or database currently configured
- No authentication or user management systems
- No content management system (content is hardcoded in components)

### Future Integration Points
The architecture is prepared for potential additions:
- Contact form backend integration (currently displays static contact information)
- CMS integration for project/content management
- Analytics integration (Google Analytics, Plausible, etc.)
- Blog functionality using Next.js dynamic routes and MDX
- Music/Spotify integration for musician portfolio aspect
- Dark/light theme toggle

## Deployment

### Vercel Deployment Ready
- Project configured for seamless Vercel deployment
- Next.js 14 App Router fully supported
- Environment variables can be set in Vercel dashboard
- Custom domain support available

### Development
- Run `npm run dev` to start development server on port 5000
- Hot reload enabled via Next.js Fast Refresh
- TypeScript checking enabled in development

### Production
- Run `npm run build` to create production build
- Run `npm start` to start production server
- Static optimization for pages without dynamic data
