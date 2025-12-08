# School Management System

A modern, enterprise-ready school management system with AI course planning assistant. Built with React, TypeScript, and Tailwind CSS, designed for easy integration into university/school infrastructures.

## Overview

This is **Phase 1** of the project - a complete UI implementation with mock data. The system supports three user roles (Students, Teachers, Admins) and is designed to integrate with Microsoft OAuth for enterprise SSO.

## Features

### Student Portal
- **Dashboard**: GPA, enrolled courses, credits, upcoming deadlines
- **Grades**: Course grades, GPA tracking, transcript export
- **Calendar**: Class schedule, assignments, exams
- **Fees**: Balance, payment history, invoices
- **Announcements**: Priority-based notifications
- **Courses**: Detailed course information

### Teacher Portal
- **Dashboard**: Course overview, student count, pending grades
- **Course Management**: Roster, assignments, resources
- **Grading**: Assignment grading interface
- **Announcements**: Post course/class announcements

### Admin Portal
- **Dashboard**: System statistics, recent activity
- **User Management**: Students, teachers, admins
- **Course Management**: Create, edit, assign courses
- **Enrollment Management**: Enroll students, bulk operations
- **Reports**: Analytics and insights

## Design System

**Minimalistic Black, White, Blue Theme**
- Primary Navy: `#002855`
- Accent Blue: `#0066CC`
- Microsoft Blue: `#00A4EF`
- Clean typography, 4px border radius
- Consistent 8px spacing grid

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6 with protected routes
- **State**: React Context API
- **Data**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm/pnpm/yarn/bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Demo Access

1. Navigate to `http://localhost:5173`
2. Click "Continue in Demo Mode"
3. Select a role:
   - **Student**: M Shaafi Jahangir
   - **Teacher**: Dr. Sarah Johnson
   - **Admin**: Admin User

## Project Structure

```
/src
  /components
    /auth         # Authentication components
    /layout       # Header, Sidebar, Layout
    /shared       # Reusable components
    /ui           # shadcn/ui primitives
  /features       # Feature-specific components
  /lib
    /contexts     # React contexts
    - types.ts    # TypeScript interfaces
    - mock-data.ts # Mock data library
    - constants.ts # App constants
    - config.ts   # Configuration
  /pages
    /auth         # Login, role selection
    /student      # Student portal pages
    /teacher      # Teacher portal pages
    /admin        # Admin portal pages
```

## Enterprise Features

- **Multi-tenant Ready**: Tenant branding and isolation
- **Microsoft SSO**: UI designed for Azure AD integration
- **Role-based Access**: Automatic routing by user role
- **Responsive Design**: Mobile, tablet, desktop support
- **Accessibility**: WCAG 2.1 compliant
- **Scalable Architecture**: Component-based, modular

## Phase 2 Roadmap

- [ ] Node.js backend (Express/Fastify)
- [ ] PostgreSQL database (Prisma/Drizzle ORM)
- [ ] Real Microsoft OAuth integration
- [ ] RESTful API endpoints
- [ ] AI Course Planning Assistant
- [ ] File upload functionality
- [ ] Real-time notifications
- [ ] Email integration

## Development

### Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file for Phase 2:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_MICROSOFT_CLIENT_ID=your-client-id
VITE_MICROSOFT_AUTHORITY=https://login.microsoftonline.com/your-tenant
VITE_MICROSOFT_REDIRECT_URI=http://localhost:5173/auth/callback
```

## Key Files

- `IMPLEMENTATION_SUMMARY.md` - Detailed implementation documentation
- `src/lib/types.ts` - All TypeScript interfaces
- `src/lib/mock-data.ts` - Comprehensive mock data
- `src/lib/constants.ts` - Application constants
- `src/App.tsx` - Complete routing configuration

## Contributing

This is a private project. For questions or issues, contact the development team.

## License

Proprietary - All rights reserved

## Contact

For support or inquiries about integrating this system into your institution, please contact the development team.

