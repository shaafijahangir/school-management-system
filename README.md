# Student Portal

A university student portal built with React, TypeScript, and Tailwind CSS.

## Features

- Course dashboard with tile grid view
- Course detail pages with assignments, discussions, resources, and syllabus
- Calendar with task management
- Grades overview with performance charts
- Fees and invoice history

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **React Query** for data fetching
- **Recharts** for charts

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app runs on `http://localhost:8080`.

## Project Structure

```
src/
├── components/     # Shared components
│   ├── ui/        # shadcn/ui components
│   └── GlobalHeader.tsx
├── features/      # Feature-specific components
│   ├── course/    # Course-related components
│   └── home/      # Dashboard components
├── pages/         # Route pages
├── hooks/         # Custom hooks
└── lib/           # Utilities
```
