'use client';

import React from 'react';
import { Package, Clock, Truck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OrdersPage() {
  const { user } = useAuth();

  // Mock orders data
  const orders = [
    {
      id: 'ORD-ABC123',
      date: '2025-01-15',
      status: 'delivered',
      total: 299.99,
      items: 3,
      estimatedDelivery: '2025-01-18'
    },
    {
      id: 'ORD-DEF456',
      date: '2025-01-12',
      status: 'shipped',
      total: 149.99,
      items: 2,
      estimatedDelivery: '2025-01-20'
    },
    {
      id: 'ORD-GHI789',
      date: '2025-01-10',
      status: 'processing',
      total: 89.99,
      items: 1,
      estimatedDelivery: '2025-01-22'
    }
  ];

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold">Please Sign In</h1>
          <p className="text-muted-foreground">
            You need to be signed in to view your orders.
          </p>
          <Link href="/auth/login">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-4 w-4" />;
      case 'shipped':
        return <Truck className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-500';
      case 'shipped':
        return 'bg-blue-500';
      case 'delivered':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Orders</h1>
        <p className="text-muted-foreground">
          Track and manage your recent purchases
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Order {order.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(order.status)}
                    <span className="capitalize">{order.status}</span>
                  </div>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium">Order Total</p>
                  <p className="text-lg font-bold">${order.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Items</p>
                  <p className="text-lg">{order.items} {order.items === 1 ? 'item' : 'items'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {order.status === 'delivered' ? 'Delivered' : 'Estimated Delivery'}
                  </p>
                  <p className="text-lg">
                    {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end mt-4 space-x-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                {order.status === 'shipped' && (
                  <Button variant="outline" size="sm">
                    Track Package
                  </Button>
                )}
                {order.status === 'delivered' && (
                  <Button variant="outline" size="sm">
                    Leave Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        
        {orders.length === 0 && (
          <div className="text-center py-16 space-y-6">
            <Package className="h-24 w-24 mx-auto text-muted-foreground" />
            <div>
              <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
              <p className="text-muted-foreground">
                When you place your first order, it will appear here.
              </p>
            </div>
            <Link href="/products">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}