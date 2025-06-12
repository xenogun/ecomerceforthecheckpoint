'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { ProductGrid } from '@/components/ProductGrid';
import { products, categories } from '@/lib/data';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(c => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === category.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
        <p className="text-muted-foreground">
          Discover our collection of {category.name.toLowerCase()} products
        </p>
      </div>

      <ProductGrid products={categoryProducts} />

      {categoryProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            No products found in this category. Check back soon for new arrivals!
          </p>
        </div>
      )}
    </div>
  );
}