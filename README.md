# AI Vibe Lab Salzburg - Coming Soon Page

🚀 **Bringing AI Innovation to Salzburg, Austria**

A modern, responsive coming soon page built with Next.js for the upcoming AI Vibe Lab event in Salzburg.

## Features

- ⏰ **30-day countdown timer** - Dynamic countdown to the event launch
- 📧 **Email signup** - Collect interested participants' emails
- 📱 **Responsive design** - Beautiful UI that works on all devices
- 🎨 **Modern stack** - Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- 🔧 **Production ready** - Optimized for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment on Vercel

1. **Connect GitHub**: Import this repository in Vercel
2. **Environment**: No environment variables needed
3. **Build Settings**: 
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Domain**: Configure vibelab.at custom domain in Vercel settings

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── coming-soon.tsx          # Coming soon page component
├── components/ui/           # shadcn/ui components
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## Customization

The countdown timer is set to 30 days from the current date. To modify:

```typescript
// In coming-soon.tsx, line 23-24
const launchDate = new Date()
launchDate.setDate(launchDate.getDate() + 30) // Change number of days
```

## Contact

- **Email**: info@vibelab.at
- **Event**: AI Vibe Lab Salzburg, Austria
- **Website**: vibelab.at

---

Built with ❤️ for the AI community in Salzburg
