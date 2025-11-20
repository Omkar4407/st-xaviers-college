# St. Xavier's College Website

A modern, responsive website for St. Xavier's College, Mumbai, featuring interactive mind maps for exploring academic streams (Science, Commerce, and Arts).

## Features

- **Hero Section**: Full-width hero image with elegant typography and parallax effect
- **Academic Stream Cards**: Three beautifully designed cards for Science, Commerce, and Arts
- **Interactive Mind Maps**: Touch-enabled, zoomable mind maps for each stream
- **Mobile-First Design**: Fully responsive with touch gestures and optimized mobile experience
- **Smooth Animations**: Professional animations using Framer Motion
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation

## Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── MindMap.jsx       # Interactive mind map component
│   ├── pages/
│   │   ├── HomePage.jsx      # Homepage with hero and stream cards
│   │   ├── SciencePage.jsx   # Science stream page
│   │   ├── CommercePage.jsx # Commerce stream page
│   │   └── ArtsPage.jsx      # Arts stream page
│   ├── App.jsx               # Main app component with routes
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
└── package.json
```

## Mobile Features

- **Touch Gestures**: Pinch-to-zoom and drag-to-pan on mind maps
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Performance**: Optimized for fast loading on mobile networks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for St. Xavier's College, Mumbai.

