# 🌿 Into The Wild - Jungle Scroll Experience

A stunning, immersive wildlife exploration website featuring smooth parallax scrolling, video backgrounds, and interactive animations. Built with modern web technologies to showcase the untamed beauty of nature.

![Into The Wild](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## ✨ Features

- 🎬 **Video Background** - Immersive full-screen video backdrop
- 🎯 **Parallax Scrolling** - Smooth multi-layer parallax effects
- 🎨 **Framer Motion Animations** - Fluid, performant animations throughout
- 🦁 **Wildlife Carousel** - Interactive showcase of wildlife imagery
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Modern UI Components** - Built with Radix UI and shadcn/ui
- 🌙 **Theme Support** - Dark/light mode capabilities
- ⚡ **Fast Performance** - Lightning-fast load times with Vite
- 🧩 **Component-Based** - Modular, reusable React components

## 🚀 Tech Stack

### Core
- **React 18.3** - UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 5.4** - Next-generation build tool

### Styling & Animation
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready animation library
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Unstyled, accessible component primitives

### Routing & State
- **React Router DOM 6.30** - Client-side routing
- **TanStack Query 5.83** - Powerful data synchronization

### Additional Libraries
- **Lucide React** - Beautiful icon set
- **Embla Carousel** - Lightweight carousel library
- **Sonner** - Toast notifications
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

## 📁 Project Structure

```
IntoTheWild_Vite_Jungle_Scroll/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── VideoBackground.tsx
│   │   ├── ParallaxLayer.tsx
│   │   ├── WildlifeCarousel.tsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── index.html
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🛠️ Installation

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MethZ0/IntoTheWild_Vite_Jungle_Scroll.git
   cd IntoTheWild_Vite_Jungle_Scroll
   ```

2. **Handle Video Files** (Choose one option)

   ⚠️ **Important**: The project uses video backgrounds (`Jungle.mp4`, `Jungle2.mp4` ~25 MB total) which are too large for standard Git.

   **Option A: Git LFS (Recommended for Contributors)**
   
   Install Git LFS and pull the video files:
   ```bash
   # Install Git LFS (one-time setup)
   # Windows: Download from https://git-lfs.github.com
   # Mac: brew install git-lfs
   # Linux: apt-get install git-lfs
   
   git lfs install
   git lfs pull
   ```

   **Option B: Manual Download (Quick Setup)**
   
   Download the video files separately and place them in `public/`:
   - Contact the repository owner for video files
   - Or use your own MP4 videos (name them `Jungle.mp4` and `Jungle2.mp4`)
   
   **Option C: Host Externally (Production)**
   
   For production deployments:
   1. Upload videos to a CDN (Cloudinary, AWS S3, etc.)
   2. Update `src/components/VideoBackground.tsx` to use the CDN URL
   3. Uncomment video ignore rules in `.gitignore`

3. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```
   Or with pnpm:
   ```bash
   pnpm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Component Overview

### Core Components

- **`VideoBackground`** - Full-screen video background with overlay
- **`Header`** - Navigation header with smooth scroll links
- **`HeroSection`** - Landing section with parallax effects and animations
- **`ParallaxLayer`** - Reusable parallax scrolling wrapper
- **`ParallaxAnimals`** - Animated wildlife elements with parallax
- **`ContentSection`** - Rich content display sections
- **`ExploreSection`** - Interactive exploration features
- **`DiscoverSection`** - Discovery-focused content area
- **`ExperienceSection`** - Immersive experience showcase
- **`WildlifeCarousel`** - Image carousel for wildlife photography
- **`Footer`** - Site footer with links and information

## 🎯 Key Features Implementation

### Parallax Scrolling
The parallax effect is achieved through the `ParallaxLayer` component which uses scroll position to create depth:
- Foreground layers move faster (speed > 1.0)
- Background layers move slower (speed < 1.0)

### Animations
Framer Motion powers all animations with:
- Fade-in effects on scroll
- Smooth transitions between states
- Interactive hover and click animations
- Stagger animations for list items

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized images and videos for different screen sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and spacing in `tailwind.config.ts`

### Vite
Modify build settings and plugins in `vite.config.ts`

### TypeScript
Adjust compiler options in `tsconfig.json`

## 📝 Development Guidelines

1. **Component Structure** - Keep components small and focused
2. **TypeScript** - Use proper typing for all props and functions
3. **Styling** - Use Tailwind utility classes, avoid inline styles
4. **Animations** - Keep animations smooth (60fps) and purposeful
5. **Accessibility** - Ensure all interactive elements are keyboard accessible
6. **Performance** - Lazy load images and code-split where appropriate

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Hosting Services

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
Add to `vite.config.ts`:
```ts
base: '/IntoTheWild_Vite_Jungle_Scroll/'
```
Then build and deploy the `dist/` folder.

### 📹 Managing Video Files with Git LFS

This project uses large video files. Here's how to set up Git LFS:

#### Initial Setup (Repository Owner)

1. **Install Git LFS**
   ```bash
   git lfs install
   ```

2. **Track video files**
   ```bash
   git lfs track "public/*.mp4"
   git lfs track "public/*.webm"
   ```

3. **Commit the LFS configuration**
   ```bash
   git add .gitattributes
   git commit -m "Configure Git LFS for video files"
   ```

4. **Add and push videos**
   ```bash
   git add public/*.mp4
   git commit -m "Add video files via Git LFS"
   git push origin main
   ```

#### For Contributors

Simply run after cloning:
```bash
git lfs install
git lfs pull
```

#### Alternative: External Video Hosting

For better performance and smaller repository size:

1. **Upload to CDN** (Cloudinary, AWS S3, Bunny CDN, etc.)
2. **Update VideoBackground component**:
   ```tsx
   // In src/components/VideoBackground.tsx
   <source src="https://your-cdn.com/jungle.mp4" type="video/mp4" />
   ```
3. **Ignore local videos**:
   Uncomment the video rules in `.gitignore`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**MethZ0**
- GitHub: [@MethZ0](https://github.com/MethZ0)
- Repository: [IntoTheWild_Vite_Jungle_Scroll](https://github.com/MethZ0/IntoTheWild_Vite_Jungle_Scroll)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - For blazing fast build tooling
- [shadcn/ui](https://ui.shadcn.com/) - For beautiful component primitives
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [Radix UI](https://www.radix-ui.com/) - For accessible components

---

<div align="center">
  <strong>🌿 Explore the wild, one scroll at a time 🌿</strong>
</div>
