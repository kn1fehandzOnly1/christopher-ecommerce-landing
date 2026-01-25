import Image from 'next/image';

export default function Home() {
  const stripeLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Christopher Store</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/product-image.jpg"
                  alt="Premium Product"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Premium Product
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                High-quality product designed to meet your needs. Experience
                excellence with our carefully crafted offering.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-gray-900">$99.99</span>
                <span className="text-lg text-green-600 font-semibold">
                  Limited Time Offer
                </span>
              </div>
              <a
                href="/checkout"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Premium Quality
              </h4>
              <p className="text-gray-600">
                Crafted with attention to detail using the finest materials
                available in the market.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Fast Shipping
              </h4>
              <p className="text-gray-600">
                Get your order delivered quickly with our reliable shipping
                partners worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                Our dedicated support team is always ready to help with any
                questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <p className="text-2xl text-gray-900 italic mb-4">
              &quot;This product completely exceeded my expectations. The quality
              is outstanding and the customer service was exceptional. Highly
              recommended!&quot;
            </p>
            <p className="text-lg font-semibold text-gray-900">
              - Sarah Johnson, Verified Customer
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                What is the warranty period?
              </h4>
              <p className="text-gray-600">
                We offer a 12-month warranty covering manufacturing defects and
                normal wear and tear.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Do you offer international shipping?
              </h4>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. Shipping costs and
                times vary based on location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                What is your return policy?
              </h4>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee if you are not completely
                satisfied with your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Christopher Store. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
