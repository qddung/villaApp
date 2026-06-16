# Villa VungTau - Frontend Application

This is the frontend application for the Villa VungTau booking platform. It is a React Single Page Application (SPA) built with Vite, TypeScript, and TailwindCSS.

## Architecture

The application has been restructured from a Multi-Page setup into a clean, unified SPA structure using React Router DOM.

### Unified Router
All routing across both the client-facing website and the internal admin dashboard is centrally managed in a single router:
- **Router Entry**: `src/root/index.tsx`
- **Main Entry Point**: `src/main.tsx`

### Folder-based Page Routing
We strictly follow a folder-based component structure to mirror URL routing.

- **Client Pages**: Located in `src/pages/client/`
- **Admin Pages**: Located in `src/pages/admin/`
- **Auth Pages**: Located in `src/pages/auth/`

Each route is its own folder (named identically to the route URL snippet), and the primary component file inside is named identically but strictly in `camelCase`. 
For example:
- The route `/` maps to `src/pages/client/home/home.tsx`
- The route `/booking/confirmation` maps to `src/pages/client/bookingConfirmation/bookingConfirmation.tsx`
- The route `/admin/dashboard` maps to `src/pages/admin/dashboard/dashboard.tsx`

### Context Providers
Global states and utilities are provided to the entire application at the root router level via React Context. All Next.js legacy dependencies have been removed to fit the Vite ecosystem.
- `NotificationProvider`: Global toast notifications and confirmation dialogs (`src/contexts/NotificationContext.tsx`).
- `ThemeProvider`: Light/Dark mode state management (`src/contexts/ThemeContext.tsx`).
- `AuthProvider`: User authentication, session persistence, and role-based route guarding (`src/contexts/AuthContext.tsx`).

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and bundles the app for production (outputs to `dist/html/index.html`).
- `npm run preview`: Locally previews the production build.
