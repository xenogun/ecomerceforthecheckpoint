import Link from 'next/link';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CheckoutSuccessPage() {
  const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <CheckCircle className="h-20 w-20 text-emerald-500 mx-auto" />
          <h1 className="text-3xl font-bold">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Order Number:</span>
              <span className="font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Estimated Delivery:</span>
              <span className="font-semibold">5-7 business days</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Order Processing</h3>
              <p className="text-sm text-muted-foreground">
                We'll send you an email confirmation with tracking details once your order ships.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-12 w-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Your order will be carefully packaged and delivered to your doorstep.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/orders">
              <Button variant="outline">Track Your Order</Button>
            </Link>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@shophub.com" className="text-primary hover:underline">
              support@shophub.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}