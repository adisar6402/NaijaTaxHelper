# NaijaTaxAssist - Nigeria Tax Reform 2025 Guide

## Overview

NaijaTaxAssist is a full-stack web application designed to help Nigerian citizens understand and benefit from the 2025 tax reforms. The application provides tools for eligibility checking, tax calculations, letter generation, and information about VAT-free items and remote work tax considerations.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Nigeria-themed color palette
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: tsx for TypeScript execution in development

### Monorepo Structure
The application uses a monorepo structure with shared types:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Database Schema
- **users**: User authentication and profiles
- **taxCalculations**: PAYE tax eligibility calculations and results
- **letterRequests**: Generated tax exemption letters for employers/landlords
- **usageStats**: Application usage analytics by date

### API Endpoints
- `/api/check-eligibility` - Tax eligibility checker
- `/api/calculate-paye` - PAYE tax calculations
- `/api/generate-letter` - Letter generation for employers/landlords
- Usage statistics tracking

### Frontend Features
- **Eligibility Checker**: Determines PAYE and stamp duty exemptions
- **PAYE Calculator**: Calculates tax savings under new reforms
- **Letter Generator**: Creates downloadable PDF letters
- **VAT-Free Items Directory**: Searchable database of VAT-exempt items
- **Remote Worker Guide**: Tax guidance for digital nomads

## Data Flow

1. **User Interaction**: Users interact with React components to input tax information
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Requests**: TanStack Query manages API calls to Express backend
4. **Database Operations**: Drizzle ORM handles PostgreSQL operations
5. **Response Handling**: Results displayed in React components with real-time updates
6. **PDF Generation**: Client-side PDF generation using html2pdf.js library
7. **Session Management**: User sessions tracked for letter generation and calculations

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle with Zod integration for type-safe database operations
- **UI Components**: Radix UI primitives with custom styling
- **PDF Generation**: html2pdf.js for client-side PDF creation
- **Fonts**: Google Fonts (Inter) for typography

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Deployment**: Configured for Replit with autoscale deployment
- **Development**: Hot reload with Vite middleware integration

## Deployment Strategy

### Environment Configuration
- **Development**: Uses tsx with Vite middleware for hot reloading
- **Production**: Builds client assets and bundles server with esbuild
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

### Build Process
1. Client assets built with Vite to `dist/public`
2. Server bundled with esbuild to `dist/index.js`
3. Static assets served from build output
4. Database migrations managed via Drizzle Kit

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Run Command**: `npm run dev` for development
- **Build Command**: `npm run build` for production
- **Start Command**: `npm run start` for production server

## Changelog

Changelog:
- June 27, 2025. Initial setup with core tax reform features
- June 27, 2025. Production polish and enhancements:
  * Enhanced PDF letters with government-style letterheads and official formatting
  * Added smooth animations and improved UI polish with Nigeria-themed styling
  * Implemented multi-language selector (English, Yoruba, Hausa, Igbo, Pidgin)
  * Added remote worker illustration and enhanced mobile responsiveness
  * Created comprehensive testing guide and deployment documentation
  * Fixed CSS import order issues and optimized performance
  * Added trust indicators and improved hero section design

## Recent Enhancements

### UI/UX Improvements
- Government-style PDF letter templates with Federal Republic of Nigeria letterheads
- Enhanced animations (fade-in, slide-up, hover effects) throughout the application
- Improved mobile responsiveness and cross-device compatibility
- Added visual illustration for remote worker guide section
- Trust indicators and professional styling upgrades

### Technical Features
- Multi-language support infrastructure with language selector in navigation
- Production-ready CSS with optimized animations and transitions
- Enhanced PDF generation with professional formatting and signatures
- Improved mobile navigation with language options
- Comprehensive deployment guide and testing documentation

### Production Readiness
- All features tested and working correctly
- PWA capabilities fully functional with offline support
- Government-style official letters suitable for FIRS/Ministry presentations
- Complete testing guide with sample data for all scenarios
- Multi-platform deployment options documented

## User Preferences

Preferred communication style: Simple, everyday language.
Focus on production-quality implementation suitable for government presentation.