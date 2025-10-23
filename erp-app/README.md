# ERP Financial - Accounts Payable Dashboard

A modern, responsive ERP dashboard built with Next.js 16, React 19, and shadcn/ui components for managing accounts payable operations.

## Features

### 🏗️ Layout & Navigation
- **Collapsible Sidebar**: Fixed 240px width navigation with collapsible menu items
- **Header Bar**: Breadcrumbs, search functionality, notifications, and user menu
- **Responsive Design**: Mobile-friendly with adaptive layouts

### 📊 Dashboard Components
- **Metrics Cards**: Key performance indicators with trend indicators
- **Vendor Performance Charts**: Interactive pie charts and bar charts using Recharts
- **Data Tables**: Sortable, filterable vendor data with bulk actions
- **Quick Stats Widget**: Real-time metrics and alerts

### 🔧 Interactive Elements
- **Vendor Detail Sheet**: Slide-out panel with comprehensive vendor information
- **Add Vendor Dialog**: Form-based vendor creation with validation
- **Toast Notifications**: User feedback for actions using Sonner
- **Progress Indicators**: Visual progress bars and status badges

### 🎨 UI Components
- **shadcn/ui Integration**: Modern, accessible component library
- **Dark Mode Support**: Built-in theme switching capabilities
- **Custom Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React icons throughout the interface

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: shadcn/ui components
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast messages
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure

```
erp-app/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── app-sidebar.tsx     # Main navigation sidebar
│   ├── site-header.tsx     # Top header bar
│   ├── metrics-cards.tsx   # KPI metric cards
│   ├── vendor-performance-card.tsx # Chart components
│   ├── vendor-table.tsx    # Data table with actions
│   ├── vendor-detail-sheet.tsx # Vendor detail panel
│   ├── add-vendor-dialog.tsx # Add vendor form
│   ├── quick-stats-widget.tsx # Quick stats sidebar
│   └── nav-*.tsx           # Navigation components
├── lib/
│   └── utils.ts           # Utility functions
└── components.json        # shadcn/ui configuration
```

## Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Key Features Implemented

### ✅ Core Dashboard Layout
- Sidebar navigation with collapsible menu items
- Header with breadcrumbs, search, and user menu
- Responsive grid layout for dashboard components

### ✅ Data Visualization
- Interactive pie charts for vendor distribution
- Bar charts for outstanding amounts
- Progress indicators and trend badges
- Real-time metrics display

### ✅ Vendor Management
- Comprehensive vendor data table
- Vendor detail sheet with contact information
- Add vendor dialog with form validation
- Bulk selection and actions

### ✅ Interactive Elements
- Toast notifications for user feedback
- Modal dialogs for forms and confirmations
- Sheet components for detailed views
- Dropdown menus for actions

### ✅ Premium Components
- Advanced data tables with sorting and filtering
- Interactive charts with tooltips
- Form validation with error handling
- Responsive design patterns

## Component Architecture

The dashboard follows a modular component architecture:

- **Layout Components**: `AppSidebar`, `SiteHeader` for structure
- **Data Components**: `VendorTable`, `MetricsCards` for information display
- **Interactive Components**: `AddVendorDialog`, `VendorDetailSheet` for user actions
- **UI Components**: shadcn/ui components for consistent styling

## Customization

The dashboard is built with customization in mind:

- **Theme Variables**: CSS custom properties for easy theming
- **Component Variants**: Multiple variants for different use cases
- **Responsive Breakpoints**: Mobile-first responsive design
- **Accessibility**: WCAG compliant components

## Future Enhancements

- Real-time data updates
- Advanced filtering and search
- Export functionality
- User role management
- Audit trail logging
- Integration with external APIs

## License

This project is part of an ERP system implementation and follows enterprise development standards.