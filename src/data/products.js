import bambooToothbrush from '../assets/bamboo_toothbrush_1787507749820.png';
import reusableBags from '../assets/reusable_bags_1787507862558.png';
import beeswaxWrap from '../assets/beeswax_wrap_1787507877819.png';
import waterBottle from '../assets/water_bottle_1787507889222.png';
import siliconeBags from '../assets/silicone_bags_1787508870672.png';
import bambooCutlery from '../assets/bamboo_cutlery_1787508881479.png';
import steelStraws from '../assets/steel_straws_1787508895615.png';
import shampooBars from '../assets/shampoo_bars_1787508908226.png';

export const products = [
  {
    id: 1,
    name: 'Bamboo Toothbrush',
    description: 'Biodegradable wooden toothbrush with soft bristles.',
    price: 4.99,
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
    price: 12.99,
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
    price: 18.50,
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
    price: 24.00,
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
    price: 22.00,
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
    price: 14.50,
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
    price: 9.99,
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
    price: 16.00,
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
  }
];
