import { NextRequest, NextResponse } from 'next/server';
import { seedProducts } from '@/lib/seed';

export async function POST(request: NextRequest) {
  try {
    // Only allow seeding in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Seeding is not allowed in production' },
        { status: 403 }
      );
    }

    await seedProducts();

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully'
    });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}