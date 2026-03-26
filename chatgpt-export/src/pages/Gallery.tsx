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
