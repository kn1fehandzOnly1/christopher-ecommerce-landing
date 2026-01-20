'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [stripeLink, setStripeLink] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the Stripe Payment Link from environment
    const link = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
    
    if (link) {
      setStripeLink(link);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
              Christopher Store
            </h1>
          </Link>
        </div>
      </header>

      {/* Checkout Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h2>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Premium Product</span>
                  <span className="font-semibold text-gray-900">$99.99</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">$99.99</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            {stripeLink ? (
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mb-4"
              >
                Proceed to Payment
              </a>
            ) : (
              <div className="w-full bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <p className="text-yellow-800">
                  Stripe Payment Link is not configured. Please contact support.
                </p>
              </div>
            )}

            <Link href="/">
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors">
                Back to Store
              </button>
            </Link>
          </div>

          {/* Security Info */}
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">Secure Checkout</h3>
            <p className="text-sm text-blue-800">
              Your payment is processed securely through Stripe. We never store your credit card information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
