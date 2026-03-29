# GEMINI.md - Project Context

## Project Overview
`my-profile2` is a modern web application built with **Next.js 16.2.1**, **React 19**, and **Tailwind CSS v4**. It is structured using the Next.js **App Router** and is written in **TypeScript**. The project serves as a personal profile or landing page, featuring a clean, minimalist design with dark mode support.

## Core Technologies
- **Framework:** Next.js 16.2.1 (App Router)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS v4 (using CSS-based configuration in `app/globals.css`)
- **Language:** TypeScript
- **Fonts:** Geist Sans and Geist Mono (optimized via `next/font`)
- **Linting:** ESLint 9

## Project Structure
- `app/`: Contains the application routes, layouts, and global styles.
    - `layout.tsx`: Root layout with font and metadata configuration.
    - `page.tsx`: The main landing page component.
    - `globals.css`: Global styles and Tailwind CSS v4 theme configuration.
- `public/`: Static assets such as icons and SVGs.
- `next.config.ts`: Next.js specific configuration.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Project dependencies and scripts.

## Building and Running
The following commands are available for development and deployment:

### Development
Starts the development server with Hot Module Replacement (HMR).
```bash
npm run dev
```

### Production Build
Builds the application for production deployment.
```bash
npm run build
```

### Production Start
Starts the production server after a build.
```bash
npm run start
```

### Linting
Runs ESLint to check for code quality and style issues.
```bash
npm run lint
```

## Development Conventions
- **App Router:** Use the `app/` directory for all routing and page components.
- **Server Components:** Prefer React Server Components (RSC) by default; use `"use client"` only when necessary for interactivity.
- **Tailwind CSS v4:** Configuration is handled via CSS imports and the `@theme` directive in `app/globals.css`. Avoid using a separate `tailwind.config.js` unless specific legacy plugins are required.
- **TypeScript:** Maintain strict typing for all components and utility functions.
- **Styling:** Utilize Tailwind's utility classes and the theme variables defined in `globals.css`.
