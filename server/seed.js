const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Bamboo Toothbrush',
    description: 'Biodegradable wooden toothbrush with soft bristles.',
    originalPrice: 15,
    price: 12,
    isSale: true,
    image: '/src/assets/bamboo_toothbrush_1787507749820.png',
    gallery: [
      '/src/assets/bamboo_toothbrush_1787507749820.png',
      '/src/assets/bamboo_toothbrush_angle_1_1788504223886.jpg',
      '/src/assets/bamboo_toothbrush_angle_2_1788504236987.jpg'
    ],
    category: 'Personal Care',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 20,
      carbonSaved: 1.5,
      waterSaved: 0,
      comparison: { traditional: 'Plastic Toothbrush', traditionalPlastic: 20, ecoPlastic: 0 }
    }
  },
  {
    name: 'Organic Cotton Produce Bags',
    description: 'Set of 3 reusable mesh bags for groceries and produce.',
    originalPrice: 50,
    price: 40,
    isSale: true,
    weight: '0.2 kg',
    image: '/src/assets/reusable_bags_1787507862558.png',
    gallery: [
      '/src/assets/reusable_bags_1787507862558.png',
      '/src/assets/reusable_bags_angle_1_1788504522263.jpg',
      '/src/assets/reusable_bags_angle_2_1788504546070.jpg'
    ],
    category: 'Home & Kitchen',
    unit: 'pcs',
    count: 3,
    environmentalImpact: {
      plasticSaved: 350,
      carbonSaved: 5.2,
      waterSaved: 0,
      comparison: { traditional: 'Single-use Plastic Bags (x150)', traditionalPlastic: 350, ecoPlastic: 0 }
    }
  },
  {
    name: 'Natural Beeswax Wrap',
    description: 'Sustainable alternative to plastic wrap. Assorted sizes.',
    originalPrice: 80,
    price: 64,
    isSale: true,
    weight: '0.1 kg',
    image: '/src/assets/beeswax_wrap_1787507877819.png',
    category: 'Home & Kitchen',
    unit: 'pcs',
    count: 3,
    environmentalImpact: {
      plasticSaved: 500,
      carbonSaved: 3.8,
      waterSaved: 0,
      comparison: { traditional: 'Cling Wrap (4 rolls/year)', traditionalPlastic: 500, ecoPlastic: 0 }
    }
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Matte green insulated bottle keeps drinks cold for 24h.',
    originalPrice: 99,
    price: 79,
    isSale: true,
    image: '/src/assets/water_bottle_1787507889222.png',
    gallery: [
      '/src/assets/water_bottle_1787507889222.png',
      '/src/assets/water_bottle_angle_1_1788504181272.jpg',
      '/src/assets/water_bottle_angle_2_1788504208204.jpg'
    ],
    category: 'On the Go',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 1670,
      carbonSaved: 25.0,
      waterSaved: 300,
      comparison: { traditional: 'PET Water Bottles (167/year)', traditionalPlastic: 1670, ecoPlastic: 0 }
    }
  },
  {
    name: 'Silicone Storage Bags',
    description: 'Leakproof and reusable alternative to single-use ziploc bags.',
    originalPrice: 90,
    price: 72,
    isSale: true,
    weight: '0.3 kg',
    image: '/src/assets/silicone_bags_1787508870672.png',
    category: 'Home & Kitchen',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 1200,
      carbonSaved: 18.5,
      waterSaved: 0,
      comparison: { traditional: 'Ziploc Bags (250/year)', traditionalPlastic: 1200, ecoPlastic: 0 }
    }
  },
  {
    name: 'Bamboo Travel Cutlery',
    description: 'Compact travel set including fork, knife, and spoon in a pouch.',
    originalPrice: 15,
    price: 12,
    isSale: true,
    image: '/src/assets/bamboo_cutlery_1787508881479.png',
    category: 'On the Go',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 300,
      carbonSaved: 4.2,
      waterSaved: 0,
      comparison: { traditional: 'Disposable Plastic Cutlery (100 sets)', traditionalPlastic: 300, ecoPlastic: 0 }
    }
  },
  {
    name: 'Stainless Steel Straws',
    description: 'Set of 4 elegant reusable straws with a cleaning brush.',
    originalPrice: 49,
    price: 39,
    isSale: true,
    weight: '0.15 kg',
    image: '/src/assets/steel_straws_1787508895615.png',
    category: 'Home & Kitchen',
    unit: 'pcs',
    count: 4,
    environmentalImpact: {
      plasticSaved: 150,
      carbonSaved: 1.2,
      waterSaved: 0,
      comparison: { traditional: 'Plastic Straws (300/year)', traditionalPlastic: 150, ecoPlastic: 0 }
    }
  },
  {
    name: 'Solid Shampoo & Conditioner',
    description: 'Plastic-free hair care bars made with natural nourishing oils.',
    originalPrice: 99,
    price: 79,
    isSale: true,
    image: '/src/assets/shampoo_bars_1787508908226.png',
    category: 'Personal Care',
    unit: 'pcs',
    count: 2,
    environmentalImpact: {
      plasticSaved: 120,
      carbonSaved: 2.1,
      waterSaved: 15,
      comparison: { traditional: 'Liquid Shampoo (3 bottles)', traditionalPlastic: 120, ecoPlastic: 0 }
    }
  },
  {
    name: 'Organic Beauty Serum',
    description: 'A premium revitalizing serum with natural ingredients.',
    originalPrice: 45,
    price: 36,
    isSale: true,
    image: '/src/assets/organic_beauty_serum.jpg',
    category: 'Beauty',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 50,
      carbonSaved: 1.0,
      waterSaved: 0,
      comparison: { traditional: 'Conventional Skincare (plastic bottle)', traditionalPlastic: 50, ecoPlastic: 0 }
    }
  },
  {
    name: 'Handmade Artisanal Soap',
    description: 'Eco-friendly soap with natural oats and minimal paper wrapping.',
    originalPrice: 12,
    price: 10,
    isSale: true,
    image: '/src/assets/handmade_artisanal_soap.jpg',
    category: 'Handmade',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 25,
      carbonSaved: 0.5,
      waterSaved: 0,
      comparison: { traditional: 'Body Wash (plastic bottle)', traditionalPlastic: 25, ecoPlastic: 0 }
    }
  },
  {
    name: 'Wooden Hairbrush',
    description: 'Eco-friendly bamboo hairbrush that massages your scalp.',
    originalPrice: 18,
    price: 14,
    isSale: true,
    image: '/src/assets/wooden_hairbrush.jpg',
    category: 'Personal Care',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 80,
      carbonSaved: 1.2,
      waterSaved: 0,
      comparison: { traditional: 'Plastic Hairbrush', traditionalPlastic: 80, ecoPlastic: 0 }
    }
  },
  {
    name: 'Reusable Glass Coffee Cup',
    description: 'Sleek glass cup with cork sleeve for your morning brew.',
    originalPrice: 24,
    price: 19,
    isSale: true,
    image: '/src/assets/reusable_coffee_cup.jpg',
    category: 'On the Go',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 1500,
      carbonSaved: 20.5,
      waterSaved: 50,
      comparison: { traditional: 'Disposable Coffee Cups (150/year)', traditionalPlastic: 1500, ecoPlastic: 0 }
    }
  },
  {
    name: 'Organic Cotton Towel Set',
    description: 'Ultra-soft, highly absorbent organic cotton bath towels.',
    originalPrice: 65,
    price: 52,
    isSale: true,
    weight: '1.2 kg',
    image: '/src/assets/organic_towel_set.jpg',
    category: 'Home & Kitchen',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 5.0,
      waterSaved: 1200,
      comparison: { traditional: 'Conventional Cotton Towels', traditionalPlastic: 0, ecoPlastic: 0 }
    }
  },
  {
    name: 'Handmade Organic Cotton Tote Bag',
    description: 'A stylish, durable, and fully biodegradable bag made entirely from organic cotton.',
    originalPrice: 35,
    price: 28,
    isSale: true,
    image: '/src/assets/handmade_tote_bag.jpg',
    category: 'Handmade',
    unit: 'pcs',
    count: 1,
    environmentalImpact: {
      plasticSaved: 400,
      carbonSaved: 6.2,
      waterSaved: 500,
      comparison: { traditional: 'Synthetic Fast-Fashion Bag', traditionalPlastic: 400, ecoPlastic: 0 }
    }
  },
  {
    name: 'Upcycled Denim Jacket',
    description: 'Vintage denim jacket given a second life with beautiful handmade embroidery.',
    originalPrice: 120,
    price: 96,
    isSale: true,
    image: '/src/assets/upcycled_denim_jacket.jpg',
    category: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 15.0,
      waterSaved: 8000,
      comparison: { traditional: 'Newly Manufactured Denim Jacket', traditionalPlastic: 0, ecoPlastic: 0 }
    }
  },
  {
    name: 'Hand-woven Recycled Yarn Scarf',
    description: 'Cozy and stylish scarf woven from 100% recycled textile materials.',
    originalPrice: 45,
    price: 36,
    isSale: true,
    image: '/src/assets/recycled_yarn_scarf.jpg',
    category: 'Accessories',
    unit: 'pcs',
    count: 1,
    sizes: ['One Size'],
    environmentalImpact: {
      plasticSaved: 100,
      carbonSaved: 4.5,
      waterSaved: 200,
      comparison: { traditional: 'Synthetic Acrylic Scarf', traditionalPlastic: 100, ecoPlastic: 0 }
    }
  },
  {
    name: 'Organic Cotton Classic T-Shirt',
    description: 'A premium, ultra-soft t-shirt made entirely from GOTS certified organic cotton in earth tones.',
    originalPrice: 32,
    price: 26,
    isSale: true,
    image: '/src/assets/organic_cotton_tshirt.jpg',
    gallery: [
      '/src/assets/organic_cotton_tshirt.jpg',
      '/src/assets/organic_tshirt_back.jpg',
      '/src/assets/organic_tshirt_detail.jpg'
    ],
    category: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 4.0,
      waterSaved: 2500,
      comparison: { traditional: 'Conventional Cotton T-Shirt', traditionalPlastic: 0, ecoPlastic: 0 }
    }
  },
  {
    name: 'Bamboo Fiber Activewear Set',
    description: 'Breathable, moisture-wicking leggings and top made from sustainable bamboo fiber.',
    originalPrice: 85,
    price: 68,
    isSale: true,
    image: '/src/assets/bamboo_fiber_activewear.jpg',
    category: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    environmentalImpact: {
      plasticSaved: 250,
      carbonSaved: 6.5,
      waterSaved: 1200,
      comparison: { traditional: 'Synthetic Polyester Activewear', traditionalPlastic: 250, ecoPlastic: 0 }
    }
  },
  {
    name: 'Recycled Ocean Plastic Windbreaker',
    description: 'A sleek, lightweight and water-resistant jacket spun from recovered ocean plastics.',
    originalPrice: 110,
    price: 88,
    isSale: true,
    image: '/src/assets/recycled_polyester_windbreaker.jpg',
    category: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    environmentalImpact: {
      plasticSaved: 600,
      carbonSaved: 8.0,
      waterSaved: 300,
      comparison: { traditional: 'Virgin Polyester Jacket', traditionalPlastic: 600, ecoPlastic: 600 }
    }
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared existing products');
    await Product.insertMany(products);
    console.log('Seeded products database successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
