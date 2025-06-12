import connectDB from './mongodb';
import Product from '@/models/Product';
import { products } from './data';

export async function seedProducts() {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany({});

    // Insert seed products
    const seedProducts = products.map(product => ({
      ...product,
      _id: undefined // Let MongoDB generate the ID
    }));

    await Product.insertMany(seedProducts);
    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}