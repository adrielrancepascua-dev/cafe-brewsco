# Cafe BrewsCo Codebase



## File: index.html
```html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <title>Café BrewsCo | San Carlos City</title>
    <meta name="description" content="Café BrewsCo in San Carlos City, Pangasinan. Brewing Happiness in a Cup. Enjoy specialty coffee, full meals, and party trays in our cozy solar-powered café. Open daily 9AM-12MN.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## File: package.json
```json

{
  "name": "stay-awhile-cafe",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.0.1",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^7.13.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@tailwindcss/postcss": "^4.2.2",
    "@types/node": "^24.12.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "postcss": "^8.5.8",
    "tailwindcss": "^4.2.2",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.57.0",
    "vite": "^8.0.1"
  }
}

```

## File: tailwind.config.js
```js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#EFE6DD',
          brown: '#5D4037',
          cream: '#F9F7F2',
          light: '#F9F7F2', // Alias for backward compatibility
          accent: '#A1887F',
          dark: '#3E2723',
          muted: '#D7CCC8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

```

## File: vite.config.ts
```ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

## File: src/App.css
```css

.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

```

## File: src/App.tsx
```tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PartyTrays from './pages/PartyTrays';
import { useEffect } from 'react';

function App() {
  // Protection against casual copying
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Console warning for developers
    console.log(
      '%cStop!',
      'color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px black;'
    );
    console.log(
      '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.',
      'font-size: 20px;'
    );

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='menu' element={<Menu />} />
          <Route path='party-trays' element={<PartyTrays />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

## File: src/index.css
```css

@import "tailwindcss";
@config "../tailwind.config.js";

@layer base {
  body {
    @apply bg-brand-light text-brand-dark font-sans;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;
  }
}

```

## File: src/main.tsx
```tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## File: src/components/Footer.tsx
```tsx

import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-brand-beige">Café BrewsCo</h3>
            <p className="text-brand-beige/80 mb-6 leading-relaxed">
              Brewing Happiness in a Cup. Love is brewing at Café BrewsCo – come for the coffee, stay for the cozy vibes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cafebrewsco/" target="_blank" rel="noopener noreferrer" className="text-brand-beige/80 hover:text-white transition-colors">
                <span className="font-bold">IG</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61561919513292" target="_blank" rel="noopener noreferrer" className="text-brand-beige/80 hover:text-white transition-colors">
                 <span className="font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-brand-beige">Visit Us</h4>
            <ul className="space-y-4 text-brand-beige/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Thirdy & Julios Commercial Building<br/>Rizal Avenue, Poblacion, San Carlos City</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Daily: 9:00 AM – 12:00 MN</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>0928-794-5998</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-brand-beige">Mobile Coffee Bar</h4>
            <p className="text-brand-beige/80 mb-4">
              We offer a mobile coffee bar and party trays for your events! Send us a message to book.
            </p>
            <div className="mt-8 pt-6 border-t border-brand-beige/10">
              <p className="text-sm text-brand-beige/60">We accept cashless payments:</p>
              <p className="text-brand-beige/80 font-medium">Cash • GCash • Credit/Debit Cards</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-beige/10 mt-12 pt-8 text-center text-brand-beige/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Café BrewsCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

```

## File: src/components/Hero.tsx
```tsx

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-brand-beige h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Stay Awhile Café Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight"
        >
          Brewing Happiness in a Cup
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xl md:text-2xl text-brand-beige mb-4 font-light drop-shadow-md"
        >
          Sip Happens...
        </motion.p>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg text-brand-beige/90 mb-10 drop-shadow-md font-medium tracking-wide"
        >
          Rizal Ave., San Carlos City • Open daily 9 AM – 12 MN
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            to="/menu" 
            className="group bg-brand-brown text-white px-8 py-3 rounded-full hover:bg-brand-dark transition-all duration-300 font-medium flex items-center gap-2 transform hover:-translate-y-1 shadow-lg"
          >
            View Menu
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="https://www.foodpanda.ph/" 
            target="_blank"
            rel="noreferrer"
            className="group bg-brand-beige text-brand-dark px-8 py-3 rounded-full hover:bg-white transition-all duration-300 font-medium transform hover:-translate-y-1 shadow-lg border border-transparent"
          >
            Order via Foodpanda
          </a>
          <a 
            href="tel:09287945998" 
            className="group bg-transparent text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-medium transform hover:-translate-y-1 border border-white"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>
    </div>
  );
}

```

## File: src/components/Navbar.tsx
```tsx

import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Party Trays', href: '/party-trays' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-brand-beige/90 backdrop-blur-sm fixed w-full z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-brand-brown" />
              <span className="font-serif text-2xl font-bold text-brand-dark">Café BrewsCo</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-brand-brown underline underline-offset-4' : 'text-brand-dark hover:text-brand-brown'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="https://www.foodpanda.ph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-brown text-white px-4 py-2 rounded-full hover:bg-brand-accent transition-colors text-sm font-medium"
            >
              Order Online
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-brown focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-light border-t border-brand-beige">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-brand-beige text-brand-brown' : 'text-brand-dark hover:bg-brand-beige hover:text-brand-brown'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="https://www.foodpanda.ph/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-brand-brown text-white px-4 py-3 rounded-md hover:bg-brand-accent transition-colors font-medium"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

```

## File: src/layouts/Layout.tsx
```tsx

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

```

## File: src/pages/About.tsx
```tsx

export default function About() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="About Café BrewsCo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-serif text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-brand-light text-lg opacity-90">Brewing Happiness in a Cup in the heart of San Carlos.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark text-brand-dark/80 mx-auto">
          <h2>More Than Just a Coffee Shop</h2>
          <p>
            <strong>Café BrewsCo</strong> started in 2024 and has quickly become a beloved hangout spot in 
            San Carlos City. Located in the Thirdy & Julios Commercial Building, we offer a sanctuary where friends 
            can gather for barkada nights, students can focus on study sessions, and families can enjoy warm moments together.
          </p>
          <p>
            We pride ourselves on being a versatile space. Our "spacious aesthetic second floor" provides the perfect 
            ambiance for any occasion, complete with a VIP conference room for professional meetings.
          </p>
          
          <div className="my-12 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80" alt="Coffee pouring" className="rounded-lg shadow-md" />
             <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80" alt="Cafe interior" className="rounded-lg shadow-md mt-8" />
          </div>

          <h2>Sustainable & Extensive</h2>
          <p>
             We are proud to operate with <strong>solar-powered operations</strong>, contributing to a greener future while serving you. 
             Our menu is extensive, ranging from our signature coffee and non-coffee lattes to full rice meals, pasta, 
             and party trays.
          </p>
          <p>
            Whether you are here for our "Ultimate Breakfast", a refreshing "Pink Venom" smoothie, or planning an event 
            with our mobile coffee bar, our mission is simple: <strong>Brewing Happiness in a Cup.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

```

## File: src/pages/Contact.tsx
```tsx

import { MapPin, Mail, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-brand-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-center text-brand-dark mb-4">Get in Touch</h1>
        <p className="text-center text-brand-dark/70 mb-16 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our menu, want to book a party tray, or need our mobile coffee bar out for an event!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm h-full">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Visit Us</h3>
                  <p className="text-brand-dark/70">Thirdy & Julios Commercial Building<br/>Rizal Avenue, Poblacion</p>
                  <p className="text-sm text-brand-dark/50 mt-1">San Carlos City, Pangasinan (across Pangasinan Doctors Hospital)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Business Hours</h3>
                  <p className="text-brand-dark/70">Open Daily: 9:00 AM – 12:00 MN</p>
                  <p className="text-sm text-brand-dark/50 mt-1">Dine in, Takeout, & Delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Call Us</h3>
                  <p className="text-brand-dark/70">0928-794-5998</p>
                  <p className="text-brand-dark/70">0928-974-5998 or 0908-161-7838</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Email Us</h3>
                  <p className="text-brand-dark/70">brewsco.mail@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-brand-beige/30">
                <h3 className="font-bold text-brand-dark mb-2">Delivery & Orders</h3>
                <p className="text-brand-dark/70 mb-4">Available on FoodPanda, GrabFood, Undago, Woi and Click.</p>
                <div className="flex gap-2">
                  <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90">FoodPanda</a>
                  <a href="#" className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90">GrabFood</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
             <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Name</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="Your name" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email</label>
                   <input type="email" id="email" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="your@email.com" />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-1">Subject</label>
                 <select id="subject" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none">
                   <option>General Inquiry</option>
                   <option>Party Tray Booking</option>
                   <option>Conference Room / VIP Booking</option>
                   <option>Mobile Coffee Bar Event</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
               </div>

               <button type="submit" className="w-full bg-brand-brown text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors">
                 Send Message
               </button>
             </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-sm border border-brand-beige h-[400px]">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.003180424566!2d120.3444458518939!3d15.922091461623912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339169faecbaaaab%3A0xbcc0e5cb198f2441!2zU2FuIENhcmxvcywgUGFuZ2FzaW5hbg!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             title="Café BrewsCo Location"
           ></iframe>
        </div>
      </div>
    </div>
  );
}

```

## File: src/pages/Gallery.tsx
```tsx

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", caption: "Modern Two-Storey Space" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80", caption: "Cozy Interiors" },
  { src: "https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=800&q=80", caption: "Ultimate Breakfast" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", caption: "Beef Salpicao" },
  { src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", caption: "Flavoured Croffles" },
  { src: "https://images.unsplash.com/photo-1560931560-619058b73a34?auto=format&fit=crop&w=800&q=80", caption: "Spanish Latte" },
  { src: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=800&q=80", caption: "Java Chip Frappé" },
  { src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80", caption: "Tiger Milk Tea" },
];

export default function Gallery() {
  return (
    <div className="bg-brand-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-center text-brand-dark mb-12">Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer h-64">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-end justify-center">
                 <p className="text-white font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

## File: src/pages/Home.tsx
```tsx

import Hero from '../components/Hero';
import { Coffee, Cake, Wifi, Star, MapPin, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-brand-brown" />,
      title: "Specialty Coffee",
      description: "From our classic Coffee-based Frappes to Non-coffee Lattes, enjoy brews made with care."
    },
    {
      icon: <Cake className="h-8 w-8 text-brand-brown" />,
      title: "Diverse Menu",
      description: "Rice meals, pasta, pastries, and party trays perfect for any craving."
    },
    {
      icon: <Wifi className="h-8 w-8 text-brand-brown" />,
      title: "Cozy & Connected",
      description: "Free Wi-Fi, solar-powered operations, and a spacious second floor."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Social Proof & Vibe Section */}
      <section className="bg-brand-brown py-12 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-3 bg-brand-dark/30 px-6 py-4 rounded-lg backdrop-blur-sm">
                    <Star className="h-8 w-8 text-yellow-400 fill-current" />
                    <div className="text-left">
                        <p className="font-bold text-2xl">Must Try</p>
                        <p className="text-sm opacity-90">Café BrewsCo Specials</p>
                    </div>
                </div>
                <div className="max-w-md">
                    <p className="font-serif text-xl italic font-light">
                        "Love is brewing at Café BrewsCo – come for the coffee, stay for the cozy vibes."
                    </p>
                </div>
            </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-cream">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">Why Café BrewsCo?</h2>
          <p className="text-brand-accent max-w-2xl mx-auto">
            Beyond great coffee, we offer a space that feels like home.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand-beige"
            >
              <div className="inline-block p-4 bg-brand-beige/30 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location & Payment Stripe */}
      <section className="bg-brand-beige py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <MapPin className="h-8 w-8 text-brand-brown mb-4" />
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Visit Us</h3>
                    <p className="text-brand-dark/80">Coastway Complex, Arellano St.<br/>Dagupan City</p>
                </div>
                <div className="flex flex-col items-center">
                    <Clock className="h-8 w-8 text-brand-brown mb-4" />
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Opening Hours</h3>
                    <p className="text-brand-dark/80">Daily: 9:00 AM – 10:00 PM</p>
                </div>
                <div className="flex flex-col items-center">
                    <CreditCard className="h-8 w-8 text-brand-brown mb-4" />
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">Payment Methods</h3>
                    <p className="text-brand-dark/80">Cash • Debit/Credit Cards • E-wallets</p>
                </div>
            </div>
        </motion.div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-brand-brown text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="font-serif text-4xl font-bold mb-6">Craving something sweet?</h2>
          <p className="text-xl mb-8 opacity-90">Order our signature Mini Cakes or customize one for your special event.</p>
          <div className="flex justify-center gap-4">
            <Link to="/menu" className="bg-brand-beige text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
              Browse Menu
            </Link>
            <Link to="/contact" className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-colors">
              Inquire Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```

## File: src/pages/Menu.tsx
```tsx

import { useRef } from 'react';
import { motion } from 'framer-motion';

const MENU_CATEGORIES = [
  { id: 'breakfast', name: 'Breakfast & Rice Bowls' },
  { id: 'appetizers', name: 'Appetizers & À la Carte' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'noodles', name: 'Short Orders & Noodles' },
  { id: 'pastries', name: 'Pastries & Sandwiches' },
  { id: 'party-trays', name: 'Bilao & Party Trays' },
  { id: 'coffee-lattes', name: 'Coffee Lattes' },
  { id: 'non-coffee-lattes', name: 'Non-Coffee Lattes' },
  { id: 'frappe', name: 'Frappe' },
  { id: 'smoothies', name: 'Smoothies' },
  { id: 'milktea', name: 'Milktea' },
  { id: 'rsc', name: 'Rocksalt & Cheese' },
  { id: 'refreshers', name: 'Refreshers & Mocktails' },
  { id: 'addons', name: 'Add-ons' },
];

const MENU_ITEMS = {
  'breakfast': [
    { name: 'Ultimate Breakfast', price: '₱299', description: 'Our signature ultimate breakfast meal.', image: 'https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Tapsilog (Carabeef)', price: 'starts at ₱200', description: 'Classic tapsilog with carabeef.', image: 'https://images.unsplash.com/photo-1536712399203-4c920c5722fc?auto=format&fit=crop&w=400&q=80' },
    { name: 'Longsilog', price: 'starts at ₱200', description: 'Longganisa, sinangag, and itlog.', image: 'https://images.unsplash.com/photo-1563861826-6b5ebcdfa88e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beef Salpicao', price: '₱200', description: 'Savory and garlicky beef sirloin.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beef Broccoli', price: '₱200', description: 'Tender beef and fresh broccoli.', image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bangus a la Pobre', price: 'starts at ₱200', description: 'Fried milkfish topped with garlic bits.', image: 'https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Breaded Chicken', price: 'starts at ₱200', description: 'Crispy fried breaded chicken.', image: 'https://images.unsplash.com/photo-1569058242253-92f92c31c615?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bulgogi', price: 'starts at ₱200', description: 'Korean-style marinated beef.', image: 'https://images.unsplash.com/photo-1623853170709-3def9a139aa2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Steak a la King', price: 'starts at ₱200', description: 'Chicken steak with creamy sauce.', image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=400&q=80' },
    { name: 'Creamy Cream Dory', price: 'starts at ₱200', description: 'Cream dory fish in white sauce.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kimchi & Luncheon Meat', price: 'starts at ₱200', description: 'Spicy kimchi paired with luncheon meat.', image: 'https://images.unsplash.com/photo-1600869502947-8dfcda2af365?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pork Katsudon', price: 'starts at ₱200', description: 'Breaded pork cutlet and egg.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pork Sisig', price: 'starts at ₱200', description: 'Sizzling minced pork.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
    { name: 'Salisbury Steak', price: 'starts at ₱200', description: 'Beef patty topped with gravy.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' }
  ],
  'appetizers': [
    { name: 'Cheesy Beef Nachos', price: 'starts at ₱180', description: 'Crunchy nachos loaded with beef & cheese.', image: 'https://images.unsplash.com/photo-1513456852971-30cfa382c916?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cheesy Potato Bacon', price: 'starts at ₱180', description: 'Potatoes topped with cheese and bacon.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cheese Rolls', price: 'starts at ₱150', description: 'Warm and gooey cheese rolls.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Fingers', price: 'starts at ₱180', description: 'Crispy fried chicken strips.', image: 'https://images.unsplash.com/photo-1569058242253-92f92c31c615?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fish & Chips', price: 'starts at ₱200', description: 'Classic battered fish with fries.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'French Fries', price: 'starts at ₱120', description: 'Crispy golden french fries.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fries Overload', price: 'starts at ₱180', description: 'Fries topped with cheese, beef, and bacon.', image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=400&q=80' },
    { name: 'Calamari', price: 'starts at ₱200', description: 'Crispy fried squid rings.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fried Chicken Wings', price: 'starts at ₱180', description: 'Deep fried and flavorful wings.', image: 'https://images.unsplash.com/photo-1524114664604-cd8133cd6771?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bangus Sisig', price: 'starts at ₱200', description: 'Sizzling shredded milkfish.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Lollipop/Pop', price: 'starts at ₱180', description: 'Bite-sized chicken delights.', image: 'https://images.unsplash.com/photo-1569058242253-92f92c31c615?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Skin', price: 'starts at ₱150', description: 'Crunchy deep-fried chicken skin.', image: 'https://images.unsplash.com/photo-1627308595229-7830f5c9c66e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Special Tofu', price: 'starts at ₱150', description: 'Crispy fried tofu with special sauce.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80' }
  ],
  'pasta': [
    { name: 'Carbonara', price: 'starts at ₱200', description: 'Creamy white sauce with bacon.', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Charlie Chan', price: 'starts at ₱200', description: 'Sweet and spicy Asian-style pasta.', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80' },
    { name: 'Creamy Pesto Chicken', price: 'starts at ₱220', description: 'Pesto sauce with grilled chicken.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spaghetti Meatballs', price: 'starts at ₱200', description: 'Classic red sauce with homemade meatballs.', image: 'https://images.unsplash.com/photo-1522906456132-ce0f585a214d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Tuna & Mushroom', price: 'starts at ₱200', description: 'Savory tuna with mushrooms.', image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=400&q=80' },
    { name: 'Lasagna', price: 'starts at ₱220', description: 'Layers of pasta, meat, and cheese.', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=400&q=80' }
  ],
  'noodles': [
    { name: 'Pancit Bihon Guisado', price: 'starts at ₱180', description: 'Stir-fried rice noodles with veggies and meat.', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pancit Canton', price: 'starts at ₱180', description: 'Stir-fried egg noodles.', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pancit Sotanghon', price: 'starts at ₱180', description: 'Stir-fried glass noodles.', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80' },
    { name: 'Palabok', price: 'starts at ₱180', description: 'Noodles topped with rich shrimp sauce.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pancit Ampute Layag', price: 'starts at ₱180', description: 'Local special noodle dish.', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80' }
  ],
  'pastries': [
    { name: 'Flavoured Croffles', price: 'starts at ₱150', description: 'Blueberry, Strawberry, or Cookies & Cream.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pizza Croffles', price: 'starts at ₱180', description: 'Savory pizza-flavored croffles.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Clubhouse with Fries', price: 'starts at ₱200', description: 'Classic triple-decker sandwich with fries.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beefy Salpicao Wrap', price: 'starts at ₱200', description: 'Savory beef salpicao in a wrap.', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80' }
  ],
  'party-trays': [
    { name: 'Bilaos (S / M / L)', price: 'Ask for Price', description: 'Pancit Bihon, Canton, Sotanghon, or Sisig.', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80' },
    { name: 'Party Trays (12-15 pax)', price: 'Ask for Price', description: 'Buttered Chichoke, Beef & Mushroom, Beef Stroganoff... and more!', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80' }
  ],
  'coffee-lattes': [
    { name: 'Americano', price: '₱120 / ₱130', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1551024601-5629436bb5c1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cappuccino', price: '₱130 / ₱140', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80' },
    { name: 'Café Latte', price: '₱130 / ₱140', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caramel Macchiato', price: '₱135 / ₱160', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c835569?auto=format&fit=crop&w=400&q=80' },
    { name: 'French Vanilla', price: '₱135 / ₱160', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1570968992193-96ab60c397b9?auto=format&fit=crop&w=400&q=80' },
    { name: 'White Mocha', price: '₱135 / ₱160', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1549826353-83321598f804?auto=format&fit=crop&w=400&q=80' },
    { name: 'Café Mocha', price: '₱135 / ₱150', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spanish Latte', price: '₱135 / ₱155', description: 'Hot 12oz. / Iced 16oz.', image: 'https://images.unsplash.com/photo-1560931560-619058b73a34?auto=format&fit=crop&w=400&q=80' },
    { name: 'Toasted Marshmallow / Dirty Matcha / Hazelnut / Macadamia / Popcorn / Crème Brûlée / Black Forest / Chocolate Cookie', price: '₱135 - ₱180', description: 'Specialty coffee lattes.', image: 'https://images.unsplash.com/photo-1553909489-cd47e59239e2?auto=format&fit=crop&w=400&q=80' }
  ],
  'non-coffee-lattes': [
    { name: 'Strawberry Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1571328003758-4a3921661729?auto=format&fit=crop&w=400&q=80' },
    { name: 'Blueberry Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1557989914-16075f92506e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Matcha Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ichigo Matcha / Mango Matcha', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1596700057088-725350ca96ea?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cocoa Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nutella Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { name: 'Biscoff Latte', price: '₱130 - ₱180', description: 'Iced non-coffee latte.', image: 'https://images.unsplash.com/photo-1629891041697-3f33664d50c7?auto=format&fit=crop&w=400&q=80' }
  ],
  'frappe': [
    { name: 'Java Chip / Caramel Vanilla / Dark Choco / Creamy Oreo / White Mocha / Choco Hazelnut / Macadamia / Coffee Jelly', price: '₱150 - ₱175', description: 'Coffee-based Frappe.', image: 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=400&q=80' }
  ],
  'smoothies': [
    { name: 'Creamy Melon / Creamy Avocado / Creamy Oreo / Strawberry Cheesecake / Blueberry Cheesecake / Mango Cheesecake / KitKat Matcha / Pink Venom', price: '₱120 - ₱170', description: 'Fruit and dessert-inspired smoothies.', image: 'https://images.unsplash.com/photo-1524316937517-1f4803b9f36f?auto=format&fit=crop&w=400&q=80' }
  ],
  'milktea': [
    { name: 'Milk Tea with Pearl / Tiger Milk Tea / Oreo Milk Tea / Wintermelon / Matcha / Milo Dinosaur', price: '₱100 - ₱130', description: 'Classic and modern milk teas.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80' }
  ],
  'rsc': [
    { name: 'OG Milk Tea / Wintermelon / Matcha / Cocoa (Rocksalt & Cheese)', price: '₱130 / ₱145', description: 'Topped with premium Rocksalt & Cheese.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80' }
  ],
  'refreshers': [
    { name: 'Lemon Special Coolers / Lemon Yakult / Lemon Yogurt / Apple Fruit Soda / Strawberry Soda / Blueberry Soda', price: '₱100 - ₱135', description: 'BrewsCo Refreshers.', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mocktails', price: '₱120 / ₱140', description: 'Green Lantern, Red Lingerie, Blue Moon, Mon-Chee Summer.', image: 'https://images.unsplash.com/photo-1623321588656-78229b9f7158?auto=format&fit=crop&w=400&q=80' }
  ],
  'addons': [
    { name: 'Espresso Shot (₱60) / Whip Cream (₱30) / Pearl (₱30) / Rainbow Jelly (₱30) / Syrup (₱30) / Coffee Jelly (₱30) / Rock Salt & Cheese (₱40) / Cheese (₱30) / Convert to Oat Milk (+₱50)', price: 'Varies', description: 'Enhance your drink.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' }
  ]
};

export default function Menu() {
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCategory = (id: string) => {
    const element = categoryRefs.current[id];
    if (element) {
      const offset = 100; // Height of the sticky header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold mb-4">Our Menu</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-4">
          Discover our selection of handcrafted beverages, comfort food, and sweet treats.
        </p>
      </div>

      <div className="sticky top-20 z-10 bg-brand-light/95 backdrop-blur-sm border-b border-brand-beige shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 no-scrollbar">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white text-brand-dark hover:bg-brand-brown hover:text-white transition-colors border border-brand-beige"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {MENU_CATEGORIES.map((category) => (
          <motion.div 
            key={category.id} 
            ref={el => { categoryRefs.current[category.id] = el }}
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-dark">{category.name}</h2>
              <div className="h-px bg-brand-beige flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS]?.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start border border-brand-beige/30 group"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-brand-beige relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-serif text-lg font-bold text-brand-dark leading-tight">{item.name}</h3>
                      <span className="font-bold text-brand-brown text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-brand-dark/70 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Note */}
        <div className="mt-16 text-center text-brand-dark/60 text-sm bg-brand-beige/20 p-6 rounded-lg">
          <p className="font-medium">* Prices and availability are subject to change without prior notice.</p>
          <p>Please inform our staff of any food allergies or dietary requirements before ordering.</p>
        </div>
      </div>
    </div>
  );
}

```

## File: src/pages/PartyTrays.tsx
```tsx

import { Link } from 'react-router-dom';

export default function PartyTrays() {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold mb-4">Bilao & Party Trays</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-4">
          Perfect for family gatherings, professional meetings, and events.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark text-brand-dark/80 mx-auto text-center">
          <h2 className="text-3xl mb-8">Make Your Events Sweeter!</h2>
          <p className="mb-6">
            Café BrewsCo accepts advance orders for Party Trays (good for 12-15 people) and Bilao packages (S/M/L) to make your celebrations hassle-free!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-beige">
                <h3 className="font-bold text-xl text-brand-dark mb-4 border-b pb-2">Party Trays (Good for 12-15 pax)</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Buttered Chichoke</li>
                    <li>Beef & Mushroom</li>
                    <li>Beef Stroganoff</li>
                    <li>Beef Caldereta</li>
                    <li>Chicken Cordon Bleu</li>
                    <li>Chicken Afritada</li>
                    <li>Chicken Casserole</li>
                    <li>Creamy Cream Dory</li>
                    <li>Crispy Kare-Kare</li>
                    <li>Pork Humba</li>
                    <li>Pata Tim</li>
                    <li>Sushi Platter</li>
                </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-beige">
                <h3 className="font-bold text-xl text-brand-dark mb-4 border-b pb-2">Bilao Sizes (S / M / L)</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Pancit Bihon</li>
                    <li>Pancit Canton</li>
                    <li>Pancit Sotanghon</li>
                    <li>Pancit Sisig</li>
                </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-6 font-bold text-brand-dark">Send us a message to book your party trays!</p>
            <Link to="/contact" className="inline-block bg-brand-brown text-white font-bold py-3 px-8 rounded-full hover:bg-brand-accent transition-colors">
              Contact us to order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

```
