# Cafe BrewsCo Codebase

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
    <title>Café BrewsCo | San Carlos City</title>
    <meta name="description" content="Café BrewsCo in San Carlos City, Pangasinan. Brewing Happiness in a Cup. Enjoy specialty coffee, full meals, and party trays in our cozy solar-powered café. Open daily 9AM-12MN.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FFF7ED',   // orange-50: lively warm white
          beige: '#FFEDD5',   // orange-100: soft energetic cream
          primary: '#EA580C', // orange-600: vibrant vibrant primary
          accent: '#F59E0B',  // yellow-500: playful pop
          brown: '#9A3412',   // orange-800: rich warm dark
          dark: '#431407',    // orange-950: deepest contrast
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(67, 20, 7, 1)', // for high-energy cards
        'brutal-hover': '2px 2px 0px 0px rgba(67, 20, 7, 1)',
      }
    },
  },
  plugins: [],
};

```

## src/App.tsx
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

## src/main.tsx
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

## src/index.css
```css
@import "tailwindcss";
@config "../tailwind.config.js";

@layer base {
  body {
    @apply bg-brand-light text-brand-dark font-sans;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

```

## src/components/Hero.tsx
```tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-brand-light min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Café BrewsCo Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent text-brand-dark font-bold text-sm tracking-wider mb-6 uppercase shadow-brutal animate-bounce">
            Open Daily 9 AM - 12 MN
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Your Go-To <span className="text-brand-primary">Hangout Spot</span><br/> in San Carlos
          </h1>
          <p className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-medium">
            Barkada nights, study sessions, and late-night cravings. 
            Come for the coffee, stay for the high-energy, cozy vibes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/menu"
              className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-dark transition-all shadow-brutal hover:shadow-brutal-hover hover:translate-y-1 hover:translate-x-1"
            >
              <Coffee className="w-5 h-5" />
              View Menu
            </Link>
            <a 
              href="https://www.foodpanda.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-light transition-all shadow-brutal hover:shadow-brutal-hover hover:translate-y-1 hover:translate-x-1"
            >
              Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

```

## src/components/Navbar.tsx
```tsx
import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Party Trays', href: '/party-trays' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-brand-light/95 flex backdrop-blur-md fixed w-full z-50 shadow-sm border-b-2 border-brand-dark font-sans h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-primary p-2 rounded-lg shadow-[3px_3px_0_0_#431407] group-hover:shadow-[1px_1px_0_0_#431407] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border border-brand-dark">
            <Coffee className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-2xl font-black text-brand-dark uppercase tracking-tight">Café BrewsCo</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-dark hover:text-brand-primary'
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
            className="bg-brand-dark text-white px-6 py-2 rounded-lg border-2 border-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all text-sm font-bold uppercase shadow-[4px_4px_0_0_#EA580C]"
          >
            Order Delivery
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-dark p-2 bg-brand-beige border-2 border-brand-dark rounded-lg shadow-[3px_3px_0_0_#431407]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-light border-b-4 border-brand-dark shadow-xl md:hidden px-4 py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl border-2 border-brand-dark text-center font-bold uppercase ${
                  isActive ? 'bg-brand-primary text-white shadow-brutal' : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
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
            className="block text-center mt-4 bg-brand-dark text-brand-accent border-2 border-brand-dark px-4 py-4 rounded-xl font-black uppercase text-lg"
          >
            Order Delivery Now
          </a>
        </div>
      )}
    </nav>
  );
}

```

## src/components/Footer.tsx
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

## src/pages/Home.tsx
```tsx
import Hero from '../components/Hero';
import { Users, Wifi, Clock, Star, Gift, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const experiences = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Barkada Core",
      desc: "Spacious seating designed for groups. Laugh, eat, and stay as long as you want."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-accent" />,
      title: "Late Night Hangs",
      desc: "Open from 9 AM all the way to 12 Midnight for your late-night food & coffee cravings."
    },
    {
      icon: <Wifi className="w-8 h-8 text-brand-primary" />,
      title: "Study & Work",
      desc: "Free speedy WiFi, cozy corners on our second floor, and unlimited caffeine."
    },
    {
      icon: <Star className="w-8 h-8 text-brand-accent" />,
      title: "VIP Room",
      desc: "Need privacy? Book our conference room for professional meetings or private parties."
    }
  ];

  const bestSellers = [
    { name: "Spanish Latte", type: "Drink", img: "https://images.unsplash.com/photo-1560931560-619058b73a34?auto=format&fit=crop&w=600&q=80" },
    { name: "Java Chip Frappe", type: "Frappe", img: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=600&q=80" },
    { name: "Beef Salpicao", type: "Meal", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
    { name: "Flavoured Croffles", type: "Pastry", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="bg-brand-light font-sans">
      <Hero />

      {/* Experience Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Why People Come Here</h2>
          <p className="mt-4 text-brand-brown font-medium text-lg">This is where you go with friends.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border-2 border-brand-dark shadow-brutal transition-transform"
            >
              <div className="bg-brand-beige w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-brand-dark">
                {exp.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-3">{exp.title}</h3>
              <p className="text-brand-brown/80 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Menu / Best Sellers */}
      <section className="py-24 bg-brand-dark text-brand-light px-4 border-y-4 border-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Crowd Favorites</h2>
              <p className="mt-4 text-brand-accent font-medium text-lg">You can never go wrong with these Bestsellers.</p>
            </div>
            <Link to="/menu" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-xl border-2 border-transparent hover:border-white transition-all shadow-[4px_4px_0_0_#FFF]">
              See Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl overflow-hidden bg-brand-brown/40 border border-brand-brown relative"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.type}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Trays Emphasis - SALES FEATURE */}
      <section className="py-24 px-4 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
          <Gift className="w-64 h-64 text-white" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center bg-brand-dark p-12 md:p-16 rounded-3xl shadow-[12px_12px_0_0_#F59E0B] border-4 border-brand-dark">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
            Perfect for <br/><span className="text-brand-accent">Groups & Events</span>
          </h2>
          <p className="text-xl text-brand-light opacity-90 max-w-2xl mx-auto mb-10">
            Make your celebrations hassle-free! Our Party Trays are good for 12-15 pax. Choose from savory classics like Beef Caldereta, Crispy Kare-Kare, and massive Pancit Bilaos.
          </p>
          <Link 
            to="/party-trays"
            className="inline-block bg-brand-accent text-brand-dark px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-wide hover:bg-white transition-colors duration-300 shadow-[6px_6px_0_0_#FFF]"
          >
            Book Your Tray Now
          </Link>
        </div>
      </section>

      {/* Location / CTA Banner */}
      <section className="py-24 bg-brand-beige px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-black text-brand-dark uppercase mb-8">Pull Up! We're Waiting For You.</h2>
          <div className="bg-white p-8 rounded-2xl shadow-brutal border-2 border-brand-dark inline-block text-left mb-8">
            <p className="text-brand-dark font-bold text-xl mb-4 flex items-center gap-2">
              <span className="bg-brand-primary p-2 rounded-full text-white"><Utensils className="w-5 h-5"/></span>
              Thirdy & Julios Commercial Building
            </p>
            <p className="text-brand-brown">Rizal Avenue, Poblacion, San Carlos City</p>
            <p className="text-brand-brown text-sm mt-1 mb-6">Just after Manzon Bridge, across Pangasinan Doctors Hospital.</p>
            <div className="h-px w-full bg-brand-beige mb-6"></div>
            <p className="text-brand-dark font-bold">Hours: <span className="text-brand-primary">9 AM - 12 Midnight</span></p>
          </div>
          <div>
            <Link to="/contact" className="text-brand-dark font-bold underline hover:text-brand-primary text-lg flex items-center justify-center gap-2">
              Need Directions? Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

```

## src/pages/Menu.tsx
```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_DATA: Record<string, {name: string, price: string, desc: string}[]> = {
  meals: [
    { name: 'Ultimate Breakfast', price: '₱299', desc: 'Signature meal with everything you love.' },
    { name: 'Beef Salpicao', price: '₱200', desc: 'Garlicky beef sirloin with rice.' },
    { name: 'Tapsilog (Carabeef)', price: '₱200', desc: 'Classic hit, cured perfectly.' },
    { name: 'Pork Katsudon', price: '₱200', desc: 'Crispy cutlet in sweet savory egg sauce.' },
  ],
  pasta_snacks: [
    { name: 'Carbonara', price: '₱200', desc: 'Creamy white sauce with bacon.' },
    { name: 'Creamy Pesto Chicken', price: '₱220', desc: 'Rich pesto topped with chicken.' },
    { name: 'Cheesy Beef Nachos', price: '₱180', desc: 'Massive platter to share with friends.' },
    { name: 'Pizza Croffles', price: '₱180', desc: 'Savory cheesy pastry hybrid.' },
  ],
  drinks: [
    { name: 'Spanish Latte', price: '₱135/155', desc: 'Sweet, creamy, rich espresso base.' },
    { name: 'Java Chip Frappe', price: '₱150', desc: 'Ice blended mocha with chocolate chips.' },
    { name: 'Pink Venom Smoothie', price: '₱170', desc: 'Fruity vibrant smoothie.' },
    { name: 'Mango Matcha', price: '₱130', desc: 'Layered iced non-coffee perfection.' },
  ],
  party: [
    { name: 'Pancit Canton Bilao', price: 'Ask us', desc: 'Small, Medium, Large to feed the whole gang.' },
    { name: 'Beef Caldereta Tray', price: 'Ask us', desc: 'Good for 12-15 pax. Order in advance!' },
    { name: 'Sushi Platter', price: 'Ask us', desc: 'Perfect party centerpiece.' },
    { name: 'Chicken Cordon Bleu Tray', price: 'Ask us', desc: 'Golden fried chicken and cheese.' },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('meals');

  const tabs = [
    { id: 'meals', label: 'Full Meals' },
    { id: 'pasta_snacks', label: 'Pasta & Snacks' },
    { id: 'drinks', label: 'Drinks & Coffee' },
    { id: 'party', label: 'Party Trays' },
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-20 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black text-brand-dark uppercase tracking-tight mb-4">Our Menu</h1>
        <p className="text-xl text-brand-brown font-medium max-w-2xl mx-auto">
          Huge portions, bold flavors, endless caffeine. Pick your poison.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 border-brand-dark transition-all ${
              activeTab === tab.id 
                ? 'bg-brand-primary text-white shadow-[4px_4px_0_0_#431407] -translate-y-1 -translate-x-1' 
                : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {MENU_DATA[activeTab].map((item: any, index: number) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-brand-dark shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-display text-2xl font-bold text-brand-dark uppercase leading-tight">{item.name}</h3>
                    <span className="bg-brand-accent text-brand-dark px-3 py-1 rounded-lg font-black text-sm whitespace-nowrap border border-brand-dark">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-brand-brown/80 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 bg-brand-beige border-2 border-brand-dark p-8 rounded-2xl text-center shadow-[6px_6px_0_0_#EA580C]">
            <h4 className="font-display text-2xl font-black uppercase text-brand-dark mb-2">Want the full list?</h4>
            <p className="text-brand-brown font-medium mb-4">We have dozens of options in-store! From specialty sodas to 15+ different rice bowls.</p>
            <p className="bg-white inline-block px-4 py-2 font-bold text-brand-dark border-2 border-brand-dark rounded-xl">Just pull up and check our in-store menu cards.</p>
        </div>
      </div>
    </div>
  );
}

```

## src/pages/About.tsx
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

## src/pages/Contact.tsx
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

## src/pages/Gallery.tsx
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

## src/pages/PartyTrays.tsx
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

## src/layouts/Layout.tsx
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

