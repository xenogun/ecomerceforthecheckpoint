import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    originalPrice: 249.99,
    description: 'Premium wireless headphones with active noise cancellation and superior sound quality.',
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Fast Charging', 'Bluetooth 5.0'],
    specifications: {
      'Weight': '250g',
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Driver Size': '40mm'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smart notifications.',
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Casual Cotton T-Shirt',
    price: 29.99,
    description: 'Comfortable, breathable cotton t-shirt perfect for everyday wear.',
    category: 'Fashion',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.3,
    reviews: 234,
    inStock: true,
    features: ['100% Cotton', 'Machine Washable', 'Various Colors', 'Comfortable Fit'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine Washable',
      'Origin': 'Made in USA'
    }
  },
  {
    id: '4',
    name: 'Designer Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    description: 'Premium leather jacket with modern design and superior craftsmanship.',
    category: 'Fashion',
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviews: 67,
    inStock: true,
    features: ['Genuine Leather', 'Multiple Pockets', 'YKK Zippers', 'Tailored Fit'],
    specifications: {
      'Material': 'Genuine Leather',
      'Lining': '100% Polyester',
      'Closure': 'Zipper',
      'Pockets': '4 External, 2 Internal'
    }
  },
  {
    id: '5',
    name: 'Modern Table Lamp',
    price: 89.99,
    description: 'Elegant table lamp with adjustable brightness and modern minimalist design.',
    category: 'Home & Garden',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviews: 123,
    inStock: true,
    features: ['LED Bulb Included', 'Adjustable Brightness', 'USB Charging Port', 'Touch Control'],
    specifications: {
      'Height': '18 inches',
      'Base Material': 'Metal',
      'Bulb Type': 'LED (included)',
      'Power': '15W'
    }
  },
  {
    id: '6',
    name: 'Yoga Mat Pro',
    price: 69.99,
    description: 'Professional-grade yoga mat with superior grip and eco-friendly materials.',
    category: 'Sports',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviews: 198,
    inStock: true,
    features: ['Non-Slip Surface', 'Eco-Friendly', '6mm Thickness', 'Carrying Strap'],
    specifications: {
      'Dimensions': '72" x 24"',
      'Thickness': '6mm',
      'Material': 'TPE',
      'Weight': '2.5 lbs'
    }
  },
  {
    id: '7',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    description: 'Insulated water bottle that keeps drinks hot for 12 hours and cold for 24 hours.',
    category: 'Sports',
    images: [
      'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3199166/pexels-photo-3199166.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviews: 87,
    inStock: true,
    features: ['Double Wall Insulation', 'Leak Proof', 'BPA Free', '32oz Capacity'],
    specifications: {
      'Capacity': '32 oz',
      'Material': 'Stainless Steel',
      'Insulation': 'Double Wall Vacuum',
      'Dimensions': '10.5" x 3.5"'
    }
  },
  {
    id: '8',
    name: 'Wireless Charging Pad',
    price: 49.99,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.2,
    reviews: 156,
    inStock: false,
    features: ['Fast Charging', 'LED Indicator', 'Non-Slip Base', 'Universal Compatibility'],
    specifications: {
      'Input': '9V/2A',
      'Output': '10W Max',
      'Compatibility': 'Qi-enabled devices',
      'Dimensions': '4" x 4" x 0.4"'
    }
  }
];