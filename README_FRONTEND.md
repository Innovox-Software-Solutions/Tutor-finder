# TutorNest Frontend Implementation Summary

The frontend for **TutorNest** has been built using **Next.js 14**, **Tailwind CSS**, and **Lucide React**. It features a premium SaaS-like aesthetic and is fully responsive.

## Folder Structure
```text
/frontend
  /src
    /app
      /dashboard/tutor   - Tutor management interface
      /dashboard/parent  - Parent management interface
      /find-tutor        - Search & Filtering page
      /tutor/[id]         - Dynamic tutor profile page
      /login             - Unified login with role toggle
      /register          - Unified registration with role toggle
      /page.tsx          - High-conversion landing page
    /components          - Reusable UI elements (Navbar, Footer, TutorCard, etc.)
    /data                - Mock JSON data structured for API migration
```

## Key Features

### 1. Premium UI/UX
- **Colors**: Deep Navy (`#1E3A5F`) and Vibrant Orange (`#F97316`).
- **Typography**: Clean sans-serif hierarchy.
- **Micro-interactions**: Hover states, smooth transitions, and glassmorphism navbars.

### 2. Fair Pricing USP
- Included a dedicated **CommissionTable** on the landing page and a **Price Breakdown** on the tutor profile to emphasize the 20% commission advantage.

### 3. Role-Based Dashboards
- **Tutor Dashboard**: Visualizes earnings with Recharts, manages students, and handles demo requests.
- **Parent Dashboard**: Tracks child's learning sessions, manages active tutors, and monitors requests.

### 4. Search & Discovery
- Built a sidebar-based filtering system with subject, price, and city filters to help parents find the best matches quickly.

## Technical Details
- **App Router**: Used for all routing and page structures.
- **Tailwind CSS 4**: Utilized the latest theme configuration and utility patterns.
- **Mock Data**: central `src/data` folder allows for easy transition to real API calls by simply updating these files to fetch data.
