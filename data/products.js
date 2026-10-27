const baseProducts = [
  {
    id: 1,
    title: "Pro Wireless Noise-Cancelling Headphones",
    description: "Premium over-ear wireless headphones with active noise cancellation, 40-hour battery life, and spatial audio support.",
    price: 299.99,
    discountPercentage: 12.5,
    rating: 4.8,
    stock: 45,
    brand: "AuraSound",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 2,
    title: "UltraSlim Flagship Smartphone 256GB",
    description: "6.7-inch Super AMOLED 120Hz display, quad-camera system with 108MP main sensor, and all-day fast-charge battery.",
    price: 899.00,
    discountPercentage: 8.0,
    rating: 4.7,
    stock: 28,
    brand: "Vortex",
    category: "smartphones",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 3,
    title: "Minimalist Mechanical Keyboard RGB",
    description: "Compact 75% hot-swappable mechanical keyboard with lubricated linear switches, aluminum frame, and customizable PBT keycaps.",
    price: 139.50,
    discountPercentage: 15.0,
    rating: 4.9,
    stock: 62,
    brand: "KeyPulse",
    category: "electronics",
    thumbnail: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 4,
    title: "TitanBook 16-inch M-Pro Laptop",
    description: "High-performance creator laptop featuring 32GB unified RAM, 1TB NVMe SSD, and 12-core processing architecture.",
    price: 1899.99,
    discountPercentage: 5.0,
    rating: 4.9,
    stock: 14,
    brand: "Titan",
    category: "laptops",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 5,
    title: "Artisan Roasted Single-Origin Coffee Beans (1kg)",
    description: "Specialty Ethiopian Yirgacheffe medium roast with tasting notes of jasmine, bergamot, and sweet peach.",
    price: 34.00,
    discountPercentage: 0.0,
    rating: 4.6,
    stock: 120,
    brand: "RoastMasters",
    category: "groceries",
    thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 6,
    title: "Nordic Minimalist Ceramic Desk Lamp",
    description: "Warm LED dimmable ambient lamp with matte ceramic base and brushed brass accents, touch control dimmer.",
    price: 79.90,
    discountPercentage: 10.0,
    rating: 4.5,
    stock: 35,
    brand: "Lumina Home",
    category: "home-decoration",
    thumbnail: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 7,
    title: "Classic Waterproof Chronograph Watch",
    description: "Stainless steel case, sapphire crystal glass, Japanese quartz movement, 100m water resistance, and genuine leather strap.",
    price: 249.00,
    discountPercentage: 20.0,
    rating: 4.7,
    stock: 19,
    brand: "Chronos",
    category: "fashion",
    thumbnail: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 8,
    title: "Clean Code & System Design Handbook",
    description: "The essential guide to writing scalable, maintainable, and high-performance software systems for modern engineers.",
    price: 49.99,
    discountPercentage: 15.0,
    rating: 4.95,
    stock: 80,
    brand: "TechPress",
    category: "books",
    thumbnail: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 9,
    title: "Botanical Hydrating Facial Serum 50ml",
    description: "Hyaluronic acid and vitamin C enriched antioxidant serum for radiant skin revitalization and 24h deep hydration.",
    price: 42.50,
    discountPercentage: 5.0,
    rating: 4.4,
    stock: 55,
    brand: "PureGlow",
    category: "skincare",
    thumbnail: "https://images.unsplash.com/photo-1608248597359-5489725f3c95?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597359-5489725f3c95?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  },
  {
    id: 10,
    title: "Ergonomic Mesh Executive Chair",
    description: "Adjustable 4D armrests, dynamic lumbar support, breathable mesh back, and smooth-rolling silent casters.",
    price: 389.00,
    discountPercentage: 18.0,
    rating: 4.8,
    stock: 22,
    brand: "ErgoForm",
    category: "home-decoration",
    thumbnail: "https://images.unsplash.com/photo-1580481077197-28564117b43a?w=500&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1580481077197-28564117b43a?w=500&auto=format&fit=crop&q=80"
    ],
    isAvailable: true
  }
];

const categories = ["electronics", "smartphones", "laptops", "groceries", "home-decoration", "fashion", "books", "skincare"];
const brands = ["AuraSound", "Vortex", "KeyPulse", "Titan", "RoastMasters", "Lumina Home", "Chronos", "TechPress", "PureGlow", "ErgoForm"];

function generateProduct(id) {
  const category = categories[id % categories.length];
  const brand = brands[id % brands.length];
  const price = Number((19.99 + (id * 27.5) % 450).toFixed(2));
  const discount = Number(((id * 3) % 25).toFixed(1));
  const rating = Number((3.8 + ((id * 7) % 12) / 10).toFixed(1));
  const stock = 10 + (id * 17) % 150;

  return {
    id,
    title: `${brand} Standard Edition Item #${id}`,
    description: `High-quality ${category} item designed with durability and premium performance in mind. Product ID: ${id}.`,
    price,
    discountPercentage: discount,
    rating: Math.min(5.0, rating),
    stock,
    brand,
    category,
    thumbnail: `https://images.unsplash.com/photo-${1510000000000 + id}?w=500&auto=format&fit=crop&q=80`,
    images: [
      `https://images.unsplash.com/photo-${1510000000000 + id}?w=500&auto=format&fit=crop&q=80`
    ],
    isAvailable: stock > 0
  };
}

function getProducts(optionsOrCount) {
  let count = 10;
  let filters = {};

  if (typeof optionsOrCount === "number") {
    count = optionsOrCount <= 0 ? 0 : optionsOrCount;
  } else if (typeof optionsOrCount === "object" && optionsOrCount !== null) {
    if (typeof optionsOrCount.count === "number") {
      count = optionsOrCount.count <= 0 ? 0 : optionsOrCount.count;
    } else if (typeof optionsOrCount.limit === "number") {
      count = optionsOrCount.limit <= 0 ? 0 : optionsOrCount.limit;
    }
    filters = optionsOrCount;
  }

  const result = [];
  const targetCount = count > 0 ? count : 0;
  const poolSize = Math.max(targetCount, baseProducts.length);

  for (let i = 0; i < poolSize; i++) {
    const product = i < baseProducts.length ? baseProducts[i] : generateProduct(i + 1);

    if (filters.category && product.category.toLowerCase() !== filters.category.toLowerCase()) continue;
    if (filters.brand && product.brand.toLowerCase() !== filters.brand.toLowerCase()) continue;
    if (typeof filters.minPrice === "number" && product.price < filters.minPrice) continue;
    if (typeof filters.maxPrice === "number" && product.price > filters.maxPrice) continue;
    if (typeof filters.rating === "number" && product.rating < filters.rating) continue;
    if (typeof filters.isAvailable === "boolean" && product.isAvailable !== filters.isAvailable) continue;
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const match = product.title.toLowerCase().includes(q) ||
                    product.description.toLowerCase().includes(q) ||
                    product.brand.toLowerCase().includes(q);
      if (!match) continue;
    }

    result.push(product);
    if (result.length >= targetCount) break;
  }

  if (filters.sortField) {
    const field = filters.sortField;
    const order = filters.sortOrder === "desc" ? -1 : 1;
    result.sort((a, b) => {
      if (a[field] < b[field]) return -1 * order;
      if (a[field] > b[field]) return 1 * order;
      return 0;
    });
  }

  return result;
}

function getProductById(id) {
  const numericId = Number(id);
  if (!numericId || numericId <= 0) return null;
  if (numericId <= baseProducts.length) {
    return baseProducts.find(p => p.id === numericId) || null;
  }
  return generateProduct(numericId);
}

module.exports = {
  getProducts,
  getProductById,
  baseProducts
};
