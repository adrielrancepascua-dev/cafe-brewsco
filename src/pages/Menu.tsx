import { useRef } from 'react';

const MENU_CATEGORIES = [
  { id: 'coffee', name: 'Coffee' },
  { id: 'non-coffee', name: 'Non-Coffee' },
  { id: 'refreshers', name: 'Refreshers' },
  { id: 'ice-blended', name: 'Ice Blended' },
  { id: 'matcha', name: 'Matcha & Hojicha' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'cakes', name: 'Mini Cakes' },
  { id: 'custom-cakes', name: 'Customized Cakes' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'breakfast', name: 'All Day Breakfast' },
  { id: 'snacks', name: 'Snacks' },
];

const MENU_ITEMS = {
  coffee: [
    { name: 'Americano', price: '₱185', description: '16oz. Black coffee brewed with hot water.', image: 'https://images.unsplash.com/photo-1551024601-5629436bb5c1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Café Latte', price: '₱200', description: '16oz. Espresso topped with steamed milk.', image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spanish Latte', price: 'starts at ₱215', description: '16oz. Creamy latte with sweetened milk.', image: 'https://images.unsplash.com/photo-1570968992193-96ab60c397b9?auto=format&fit=crop&w=400&q=80' },
    { name: 'White Chocolate Mocha', price: 'starts at ₱170', description: '16oz. Espresso blended with white-chocolate sauce.', image: 'https://images.unsplash.com/photo-1549826353-83321598f804?auto=format&fit=crop&w=400&q=80' },
    { name: 'Biscoff Latte', price: 'starts at ₱270', description: '16oz. Coffee infused with caramelised biscuit flavour.', image: 'https://images.unsplash.com/photo-1629891041697-3f33664d50c7?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caramel Macchiato', price: 'starts at ₱245', description: '16oz. Espresso layered with steamed milk and caramel.', image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c835569?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sea Salt Latte (Iced)', price: 'starts at ₱245', description: 'Iced latte topped with sea-salt foam.', image: 'https://images.unsplash.com/photo-1553909489-cd47e59239e2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Einspanner Latte (Iced)', price: 'starts at ₱210', description: 'Iced latte with whipped cream.', image: 'https://images.unsplash.com/photo-1557989914-16075f92506e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mocha (Iced)', price: 'starts at ₱245', description: 'Iced chocolate-espresso drink.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dirty Horchata (Iced)', price: 'starts at ₱230', description: 'Cinnamon-flavoured horchata with espresso.', image: 'https://images.unsplash.com/photo-1610452664962-d9db4848d56b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cereal Latte (Iced)', price: 'starts at ₱260', description: 'Iced latte with cereal-milk flavour.', image: 'https://images.unsplash.com/photo-1618215578799-b1d83506ecb6?auto=format&fit=crop&w=400&q=80' },
    { name: 'Quattro Leche (Iced)', price: 'starts at ₱260', description: 'Sweet iced latte inspired by cuatro-leches cake.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&w=400&q=80' },
  ],
  'non-coffee': [
    { name: 'Strawberry Milk', price: '₱200', description: '16oz. Creamy strawberry milk drink.', image: 'https://images.unsplash.com/photo-1571328003758-4a3921661729?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ube Milk with Salted Cream', price: '₱230', description: '16oz. Ube milk topped with salted cream.', image: 'https://images.unsplash.com/photo-1552591637-29332e35327e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Creamy Lemonade', price: '₱230', description: '16oz. Lemonade blended with cream.', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
    { name: 'Strawberry Lychee Milk', price: '₱215', description: '16oz. Milk drink with strawberry and lychee.', image: 'https://images.unsplash.com/photo-1629193751717-3844f2e96030?auto=format&fit=crop&w=400&q=80' },
  ],
  refreshers: [
    { name: 'Strawberry Ade', price: '₱190', description: '16oz. Sparkling strawberry drink.', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mango Calamansi Tea Ade', price: '₱230', description: '16oz. Mango-calamansi iced tea.', image: 'https://images.unsplash.com/photo-1623321588656-78229b9f7158?auto=format&fit=crop&w=400&q=80' },
    { name: 'Apple Peach Chia Black Tea', price: '₱215', description: '16oz. Black tea with apple, peach and chia seeds.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80' },
  ],
  'ice-blended': [
    { name: 'Java Chip', price: '₱260', description: '22oz. Blended coffee with chocolate chips.', image: 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caramel Macchiato Blended', price: '₱260', description: '22oz. Ice-blended caramel macchiato.', image: 'https://images.unsplash.com/photo-1626075908226-9d82121e7805?auto=format&fit=crop&w=400&q=80' },
    { name: 'White Chocolate Mocha Blended', price: '₱260', description: '22oz. Ice-blended white-chocolate mocha.', image: 'https://images.unsplash.com/photo-1598284568600-474087e50529?auto=format&fit=crop&w=400&q=80' },
    { name: 'Biscoff Ice-Blended', price: '₱285', description: '22oz. Non-coffee Biscoff flavoured frappé.', image: 'https://images.unsplash.com/photo-1605333501725-7264a7c067e7?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chocolate Chip Ice-Blended', price: '₱215', description: '22oz. Non-coffee chocolate-chip frappé.', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80' },
    { name: 'Oreo Cream Ice-Blended', price: '₱255', description: '22oz. Non-coffee Oreo-flavoured ice-blended drink.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { name: 'Strawberry Cream Ice-Blended', price: '₱255', description: '22oz. Non-coffee strawberry frappé with cream.', image: 'https://images.unsplash.com/photo-1524316937517-1f4803b9f36f?auto=format&fit=crop&w=400&q=80' },
  ],
  matcha: [
    { name: 'Classic Matcha Latte', price: 'starts at ₱250', description: '16oz. Creamy matcha latte.', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Matcha Einspanner', price: 'starts at ₱300', description: 'Matcha drink topped with cream.', image: 'https://images.unsplash.com/photo-1596700057088-725350ca96ea?auto=format&fit=crop&w=400&q=80' },
    { name: 'Matcha Float', price: 'starts at ₱330', description: 'Matcha latte topped with vanilla ice cream.', image: 'https://images.unsplash.com/photo-1549603058-2041db93949f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Banana Pudding Matcha', price: 'starts at ₱330', description: '12oz-16oz. Matcha latte with banana pudding.', image: 'https://images.unsplash.com/photo-1582650080643-2cb2d0af4978?auto=format&fit=crop&w=400&q=80' },
    { name: 'Classic Hojicha Latte', price: '₱290', description: '12oz. Roasted green-tea latte.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80' },
    { name: 'Hojicha Einspanner', price: '₱275', description: '12oz. Hojicha latte topped with cream.', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80' },
  ],
  pastries: [
    { name: 'Cinnamon Roll', price: 'starts at ₱100', description: 'Sweet spiral-shaped pastry.', image: 'https://images.unsplash.com/photo-1509365465984-133651334e0f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cookies', price: 'starts at ₱100', description: 'Assorted cookies (80g).', image: 'https://images.unsplash.com/photo-1499636138143-bd63ea59436a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Cream Cheese Garlic Bread', price: '₱200', description: 'Savoury bread with cream cheese and garlic.', image: 'https://images.unsplash.com/photo-1619531038896-1875152cc596?auto=format&fit=crop&w=400&q=80' },
    { name: 'Crookie', price: '₱280', description: 'Hybrid cookie baked in a croissant.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pain Au Chocolat', price: '₱190', description: 'Flaky pastry filled with chocolate.', image: 'https://images.unsplash.com/photo-1529580434440-ad4ccdb8303f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Dubai Chewy Cookie', price: '₱155', description: 'Pistachio chewy cookie.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80' },
    { name: 'Croissant', price: '₱140', description: 'Buttery croissant.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80' },
  ],
  cakes: [
    { name: 'Carrot Walnut Cake', price: '₱180', description: '3-inch mini carrot cake with cream cheese.', image: 'https://images.unsplash.com/photo-1509460592788-5136815332f1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Blueberry Cheesecake', price: '₱200', description: '3-inch mini cheesecake with blueberry topping.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80' },
    { name: 'Red Velvet', price: '₱170', description: 'Mini red-velvet cake with cream cheese.', image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chocolate Cake', price: '₱170', description: '3-inch mini chocolate cake.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
    { name: 'Burnt Basque Cheesecake', price: '₱185', description: 'Mini Basque-style cheesecake.', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chocolate Burnt Basque', price: '₱200', description: 'Chocolate Basque cheesecake.', image: 'https://images.unsplash.com/photo-1562747376-78ab3a0889c3?auto=format&fit=crop&w=400&q=80' },
  ],
  'custom-cakes': [
     { name: 'Bento Cake', price: '₱500', description: '4-inch customised cake; note your dedication (max 25 characters).', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=400&q=80' },
     { name: '5-inch Cake', price: '₱785', description: 'Customised 5-inch chocolate cake; dedication up to 25 characters.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=400&q=80' },
  ],
  pasta: [
    { name: 'Truffle Pasta', price: '₱385', description: 'Creamy truffle pasta for 1-2 persons.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bolognese Pasta', price: '₱315', description: 'Meat-sauce pasta for 1-2 persons.', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80' },
    { name: 'Salsiccia Pasta', price: '₱330', description: 'Sausage-infused pasta for 1-2 persons.', image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=400&q=80' },
  ],
  breakfast: [
    { name: 'Beef Tapa', price: 'starts at ₱230', description: 'Beef tapa with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pork Tocino', price: 'starts at ₱230', description: 'Tocino with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1536712399203-4c920c5722fc?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bacon', price: 'starts at ₱250', description: 'Bacon with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1638848775267-8e65e640b3c6?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spam', price: 'starts at ₱260', description: 'Spam with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1600869502947-8dfcda2af365?auto=format&fit=crop&w=400&q=80' },
    { name: 'Adobo Flakes', price: 'starts at ₱245', description: 'Adobo flakes with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1605335029322-6839cf9e3437?auto=format&fit=crop&w=400&q=80' },
    { name: 'Skinless Longganisa', price: 'starts at ₱215', description: 'Longganisa with egg and garlic rice.', image: 'https://images.unsplash.com/photo-1563861826-6b5ebcdfa88e?auto=format&fit=crop&w=400&q=80' },
    { name: 'American Breakfast', price: 'starts at ₱315', description: 'Waffles with eggs and bacon.', image: 'https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Waffle', price: 'starts at ₱215', description: 'Waffle served with butter and syrup.', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400&q=80' },
  ],
  snacks: [
    { name: 'Four Cheese Flatbread', price: '₱215', description: 'Flatbread topped with four cheeses.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mozzarella Sticks', price: '₱250', description: 'Five pieces of fried mozzarella sticks.', image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beef Nachos', price: '₱370', description: 'Nachos platter for 2-3 persons.', image: 'https://images.unsplash.com/photo-1513456852971-30cfa382c916?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beef Quesadilla', price: '₱200', description: 'Three-piece beef quesadilla.', image: 'https://images.unsplash.com/photo-1579992324022-b2c4be2b9bfa?auto=format&fit=crop&w=400&q=80' },
    { name: 'Grilled Cheese', price: '₱260', description: 'Grilled sourdough cheese sandwich.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ham & Cheese Toastie', price: '₱285', description: 'Toasted sourdough with ham and cheese.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bacon Parmesan Fries', price: '₱230', description: 'Fries topped with bacon and Parmesan.', image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=400&q=80' },
  ],
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
          <div 
            key={category.id} 
            ref={el => categoryRefs.current[category.id] = el}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-3xl font-bold text-brand-dark">{category.name}</h2>
              <div className="h-px bg-brand-beige flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {MENU_ITEMS[category.id as keyof typeof MENU_ITEMS]?.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start border border-brand-beige/30 group">
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
                </div>
              ))}
            </div>
          </div>
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
