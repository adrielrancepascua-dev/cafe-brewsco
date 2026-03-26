const fs = require('fs');

const fontLinks = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">`;

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Lato[^>]+>/, fontLinks);
fs.writeFileSync('index.html', indexHtml);

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
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
`;
fs.writeFileSync('tailwind.config.js', tailwindConfig);

const heroCode = `import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
`;
fs.writeFileSync('src/components/Hero.tsx', heroCode);

const homeCode = `import Hero from '../components/Hero';
import { Users, Wifi, Clock, Star, Gift, Utensils, Coffee } from 'lucide-react';
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
`;
fs.writeFileSync('src/pages/Home.tsx', homeCode);

const navbarCode = `import { Link, NavLink } from 'react-router-dom';
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
                \`text-sm font-bold uppercase tracking-wide transition-colors duration-200 \${
                  isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-dark hover:text-brand-primary'
                }\`
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
                \`block px-4 py-3 rounded-xl border-2 border-brand-dark text-center font-bold uppercase \${
                  isActive ? 'bg-brand-primary text-white shadow-brutal' : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
                }\`
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
`;
fs.writeFileSync('src/components/Navbar.tsx', navbarCode);

const menuCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_DATA = {
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
            className={\`px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 border-brand-dark transition-all \${
              activeTab === tab.id 
                ? 'bg-brand-primary text-white shadow-[4px_4px_0_0_#431407] -translate-y-1 -translate-x-1' 
                : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
            }\`}
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
            {MENU_DATA[activeTab].map((item, index) => (
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
`;
fs.writeFileSync('src/pages/Menu.tsx', menuCode);

console.log("Rewrote files successfully.");
