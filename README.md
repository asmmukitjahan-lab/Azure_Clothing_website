# AZURE — Fashion E-commerce Demo

A responsive fashion storefront built with React, Vite, React Router, Framer Motion, and Tailwind CSS.

## Features

- Editorial home page and responsive product catalog
- Product details, category filtering, search, sorting, and size selection
- Persistent cart and wishlist using browser local storage
- Demo checkout flow with an order confirmation page
- Collections, brand story, and contact pages
- Responsive navigation, animated transitions, and reduced-motion support

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build
npm run lint     # Run Oxlint
```

## Notes

- Checkout is a front-end demo. It does not process real payments.
- Product and editorial photography is loaded from Unsplash, so images require an internet connection.
- Cart and wishlist data are stored in the browser's local storage.
