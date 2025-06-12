import React from 'react';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/lib/data';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
        <p className="text-muted-foreground">
          Explore our diverse range of categories and find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}