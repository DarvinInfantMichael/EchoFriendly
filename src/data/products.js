import bambooToothbrush from '../assets/bamboo_toothbrush_1787507749820.png';
import reusableBags from '../assets/reusable_bags_1787507862558.png';
import beeswaxWrap from '../assets/beeswax_wrap_1787507877819.png';
import waterBottle from '../assets/water_bottle_1787507889222.png';
import siliconeBags from '../assets/silicone_bags_1787508870672.png';
import bambooCutlery from '../assets/bamboo_cutlery_1787508881479.png';
import steelStraws from '../assets/steel_straws_1787508895615.png';
import shampooBars from '../assets/shampoo_bars_1787508908226.png';
import organicBeautySerum from '../assets/organic_beauty_serum.jpg';
import handmadeArtisanalSoap from '../assets/handmade_artisanal_soap.jpg';
import woodenHairbrush from '../assets/wooden_hairbrush.jpg';
import reusableCoffeeCup from '../assets/reusable_coffee_cup.jpg';
import organicTowelSet from '../assets/organic_towel_set.jpg';
import handmadeToteBag from '../assets/handmade_tote_bag.jpg';
import upcycledDenimJacket from '../assets/upcycled_denim_jacket.jpg';
import recycledYarnScarf from '../assets/recycled_yarn_scarf.jpg';
import organicCottonTshirt from '../assets/organic_cotton_tshirt.jpg';
import bambooFiberActivewear from '../assets/bamboo_fiber_activewear.jpg';
import recycledPolyesterWindbreaker from '../assets/recycled_polyester_windbreaker.jpg';
import organicTshirtBack from '../assets/organic_tshirt_back.jpg';
import organicTshirtDetail from '../assets/organic_tshirt_detail.jpg';

export const products = [
  {
    id: 1,
    name: 'Bamboo Toothbrush',
    description: 'Biodegradable wooden toothbrush with soft bristles.',
    originalPrice: 15,
    price: 12,
    isSale: true,
    image: bambooToothbrush,
    category: 'Personal Care',
    environmentalImpact: {
      plasticSaved: 20, // grams per year compared to plastic toothbrush
      carbonSaved: 1.5, // kg CO2 equivalent per year
      waterSaved: 0, // liters
      comparison: {
        traditional: 'Plastic Toothbrush',
        traditionalPlastic: 20,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 2,
    name: 'Organic Cotton Produce Bags',
    description: 'Set of 3 reusable mesh bags for groceries and produce.',
    originalPrice: 50,
    price: 40,
    isSale: true,
    weight: '0.2 kg',
    image: reusableBags,
    category: 'Home & Kitchen',
    environmentalImpact: {
      plasticSaved: 350, // grams per year compared to single-use bags
      carbonSaved: 5.2,
      waterSaved: 0,
      comparison: {
        traditional: 'Single-use Plastic Bags (x150)',
        traditionalPlastic: 350,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 3,
    name: 'Natural Beeswax Wrap',
    description: 'Sustainable alternative to plastic wrap. Assorted sizes.',
    originalPrice: 80,
    price: 64,
    isSale: true,
    weight: '0.1 kg',
    image: beeswaxWrap,
    category: 'Home & Kitchen',
    environmentalImpact: {
      plasticSaved: 500, // grams per year
      carbonSaved: 3.8,
      waterSaved: 0,
      comparison: {
        traditional: 'Cling Wrap (4 rolls/year)',
        traditionalPlastic: 500,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    description: 'Matte green insulated bottle keeps drinks cold for 24h.',
    originalPrice: 99,
    price: 79,
    isSale: true,
    image: waterBottle,
    category: 'On the Go',
    environmentalImpact: {
      plasticSaved: 1670, // ~167 plastic bottles (10g each)
      carbonSaved: 25.0,
      waterSaved: 300, // liters (water used to make plastic bottles)
      comparison: {
        traditional: 'PET Water Bottles (167/year)',
        traditionalPlastic: 1670,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 5,
    name: 'Silicone Storage Bags',
    description: 'Leakproof and reusable alternative to single-use ziploc bags.',
    originalPrice: 90,
    price: 72,
    isSale: true,
    weight: '0.3 kg',
    image: siliconeBags,
    category: 'Home & Kitchen',
    environmentalImpact: {
      plasticSaved: 1200,
      carbonSaved: 18.5,
      waterSaved: 0,
      comparison: {
        traditional: 'Ziploc Bags (250/year)',
        traditionalPlastic: 1200,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 6,
    name: 'Bamboo Travel Cutlery',
    description: 'Compact travel set including fork, knife, and spoon in a pouch.',
    originalPrice: 15,
    price: 12,
    isSale: true,
    image: bambooCutlery,
    category: 'On the Go',
    environmentalImpact: {
      plasticSaved: 300,
      carbonSaved: 4.2,
      waterSaved: 0,
      comparison: {
        traditional: 'Disposable Plastic Cutlery (100 sets)',
        traditionalPlastic: 300,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 7,
    name: 'Stainless Steel Straws',
    description: 'Set of 4 elegant reusable straws with a cleaning brush.',
    originalPrice: 49,
    price: 39,
    isSale: true,
    weight: '0.15 kg',
    image: steelStraws,
    category: 'Home & Kitchen',
    environmentalImpact: {
      plasticSaved: 150, // grams
      carbonSaved: 1.2,
      waterSaved: 0,
      comparison: {
        traditional: 'Plastic Straws (300/year)',
        traditionalPlastic: 150,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 8,
    name: 'Solid Shampoo & Conditioner',
    description: 'Plastic-free hair care bars made with natural nourishing oils.',
    originalPrice: 99,
    price: 79,
    isSale: true,
    image: shampooBars,
    category: 'Personal Care',
    environmentalImpact: {
      plasticSaved: 120, // 3 plastic bottles (40g each)
      carbonSaved: 2.1,
      waterSaved: 15,
      comparison: {
        traditional: 'Liquid Shampoo (3 bottles)',
        traditionalPlastic: 120,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 9,
    name: 'Organic Beauty Serum',
    description: 'A premium revitalizing serum with natural ingredients.',
    originalPrice: 45,
    price: 36,
    isSale: true,
    image: organicBeautySerum,
    category: 'Beauty',
    environmentalImpact: {
      plasticSaved: 50,
      carbonSaved: 1.0,
      waterSaved: 0,
      comparison: {
        traditional: 'Conventional Skincare (plastic bottle)',
        traditionalPlastic: 50,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 10,
    name: 'Handmade Artisanal Soap',
    description: 'Eco-friendly soap with natural oats and minimal paper wrapping.',
    originalPrice: 12,
    price: 10,
    isSale: true,
    image: handmadeArtisanalSoap,
    category: 'Handmade',
    environmentalImpact: {
      plasticSaved: 25,
      carbonSaved: 0.5,
      waterSaved: 0,
      comparison: {
        traditional: 'Body Wash (plastic bottle)',
        traditionalPlastic: 25,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 11,
    name: 'Wooden Hairbrush',
    description: 'Eco-friendly bamboo hairbrush that massages your scalp.',
    originalPrice: 18,
    price: 14,
    isSale: true,
    image: woodenHairbrush,
    category: 'Personal Care',
    environmentalImpact: {
      plasticSaved: 80,
      carbonSaved: 1.2,
      waterSaved: 0,
      comparison: {
        traditional: 'Plastic Hairbrush',
        traditionalPlastic: 80,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 12,
    name: 'Reusable Glass Coffee Cup',
    description: 'Sleek glass cup with cork sleeve for your morning brew.',
    originalPrice: 24,
    price: 19,
    isSale: true,
    image: reusableCoffeeCup,
    category: 'On the Go',
    environmentalImpact: {
      plasticSaved: 1500, // 150 disposable cups (10g each)
      carbonSaved: 20.5,
      waterSaved: 50,
      comparison: {
        traditional: 'Disposable Coffee Cups (150/year)',
        traditionalPlastic: 1500,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 13,
    name: 'Organic Cotton Towel Set',
    description: 'Ultra-soft, highly absorbent organic cotton bath towels.',
    originalPrice: 65,
    price: 52,
    isSale: true,
    weight: '1.2 kg',
    image: organicTowelSet,
    category: 'Home & Kitchen',
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 5.0,
      waterSaved: 1200, // liters saved compared to conventional cotton
      comparison: {
        traditional: 'Conventional Cotton Towels',
        traditionalPlastic: 0,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 14,
    name: 'Handmade Organic Cotton Tote Bag',
    description: 'A stylish, durable, and fully biodegradable bag made entirely from organic cotton.',
    originalPrice: 35,
    price: 28,
    isSale: true,
    image: handmadeToteBag,
    category: 'Handmade',
    environmentalImpact: {
      plasticSaved: 400,
      carbonSaved: 6.2,
      waterSaved: 500,
      comparison: {
        traditional: 'Synthetic Fast-Fashion Bag',
        traditionalPlastic: 400,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 15,
    name: 'Upcycled Denim Jacket',
    description: 'Vintage denim jacket given a second life with beautiful handmade embroidery.',
    originalPrice: 120,
    price: 96,
    isSale: true,
    image: upcycledDenimJacket,
    category: 'Clothing',
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 15.0,
      waterSaved: 8000, // Saves immense water vs creating new denim
      comparison: {
        traditional: 'Newly Manufactured Denim Jacket',
        traditionalPlastic: 0,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 16,
    name: 'Hand-woven Recycled Yarn Scarf',
    description: 'Cozy and stylish scarf woven from 100% recycled textile materials.',
    originalPrice: 45,
    price: 36,
    isSale: true,
    image: recycledYarnScarf,
    category: 'Accessories',
    environmentalImpact: {
      plasticSaved: 100, // microplastics from synthetic yarn
      carbonSaved: 4.5,
      waterSaved: 200,
      comparison: {
        traditional: 'Synthetic Acrylic Scarf',
        traditionalPlastic: 100,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 17,
    name: 'Organic Cotton Classic T-Shirt',
    description: 'A premium, ultra-soft t-shirt made entirely from GOTS certified organic cotton in earth tones.',
    originalPrice: 32,
    price: 26,
    isSale: true,
    image: organicCottonTshirt,
    gallery: [organicCottonTshirt, organicTshirtBack, organicTshirtDetail],
    category: 'Clothing',
    environmentalImpact: {
      plasticSaved: 0,
      carbonSaved: 4.0,
      waterSaved: 2500, // liters saved compared to conventional cotton t-shirt
      comparison: {
        traditional: 'Conventional Cotton T-Shirt',
        traditionalPlastic: 0,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 18,
    name: 'Bamboo Fiber Activewear Set',
    description: 'Breathable, moisture-wicking leggings and top made from sustainable bamboo fiber.',
    originalPrice: 85,
    price: 68,
    isSale: true,
    image: bambooFiberActivewear,
    category: 'Clothing',
    environmentalImpact: {
      plasticSaved: 250, // compared to full synthetic set
      carbonSaved: 6.5,
      waterSaved: 1200,
      comparison: {
        traditional: 'Synthetic Polyester Activewear',
        traditionalPlastic: 250,
        ecoPlastic: 0,
      }
    }
  },
  {
    id: 19,
    name: 'Recycled Ocean Plastic Windbreaker',
    description: 'A sleek, lightweight and water-resistant jacket spun from recovered ocean plastics.',
    originalPrice: 110,
    price: 88,
    isSale: true,
    image: recycledPolyesterWindbreaker,
    category: 'Clothing',
    environmentalImpact: {
      plasticSaved: 600, // ~60 plastic bottles worth
      carbonSaved: 8.0,
      waterSaved: 300,
      comparison: {
        traditional: 'Virgin Polyester Jacket',
        traditionalPlastic: 600,
        ecoPlastic: 600, // technically it is plastic, but it is recycled
      }
    }
  }
];
