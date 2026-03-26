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
