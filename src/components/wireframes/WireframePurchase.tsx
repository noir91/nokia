import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WireframePurchaseProps {
  onNavigate: (screen: string) => void;
}

export default function WireframePurchase({ onNavigate }: WireframePurchaseProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
          <div className="flex gap-4">
            <Button
              onClick={() => onNavigate('wireframe-product')}
              variant="ghost"
              className="text-zinc-600"
            >
              ← Back
            </Button>
          </div>
        </div>
      </header>

      {/* Purchase Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="w-40 h-6 bg-zinc-600 mb-8 rounded" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-48 h-4 bg-zinc-600 mb-6 rounded" />
                <div className="space-y-4">
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                    <div>
                      <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                  </div>
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-40 h-4 bg-zinc-600 mb-6 rounded" />
                <div className="space-y-4">
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="w-16 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                    <div>
                      <div className="w-16 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                    <div>
                      <div className="w-20 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                  </div>
                  <div>
                    <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-40 h-4 bg-zinc-600 mb-6 rounded" />
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-zinc-400 rounded-full border-2 border-zinc-500" />
                      <div className="w-20 h-3 bg-zinc-400 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-zinc-400 rounded-full border-2 border-zinc-500" />
                      <div className="w-20 h-3 bg-zinc-400 rounded" />
                    </div>
                  </div>
                  <div>
                    <div className="w-32 h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="w-24 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                    <div>
                      <div className="w-16 h-3 bg-zinc-500 mb-2 rounded" />
                      <div className="w-full h-10 bg-zinc-200 border-2 border-zinc-400 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6 sticky top-8">
                <div className="w-32 h-4 bg-zinc-600 mb-6 rounded" />
                
                {/* Product */}
                <div className="flex gap-4 mb-6 pb-6 border-b-2 border-zinc-300">
                  <div className="w-20 h-24 bg-zinc-200 rounded border-2 border-zinc-400 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Nokia Secure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-3 bg-zinc-500 mb-2 rounded" />
                    <div className="w-20 h-2 bg-zinc-400 mb-3 rounded" />
                    <div className="w-24 h-3 bg-zinc-600 rounded" />
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-zinc-300">
                  <div className="flex justify-between">
                    <div className="w-16 h-3 bg-zinc-400 rounded" />
                    <div className="w-20 h-3 bg-zinc-500 rounded" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-16 h-3 bg-zinc-400 rounded" />
                    <div className="w-20 h-3 bg-zinc-500 rounded" />
                  </div>
                  <div className="flex justify-between">
                    <div className="w-16 h-3 bg-zinc-400 rounded" />
                    <div className="w-20 h-3 bg-zinc-500 rounded" />
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between mb-6">
                  <div className="w-16 h-4 bg-zinc-600 rounded" />
                  <div className="w-24 h-4 bg-zinc-600 rounded" />
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={() => onNavigate('wireframe-confirmation')}
                  className="w-full bg-zinc-700 text-white hover:bg-zinc-800 py-6"
                >
                  Complete Purchase
                </Button>

                {/* Security Note */}
                <div className="mt-4 text-center">
                  <div className="w-full h-2 bg-zinc-300 rounded mb-1" />
                  <div className="w-3/4 h-2 bg-zinc-300 rounded mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-zinc-200 border-y-2 border-zinc-400">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-zinc-400 rounded-full mx-auto mb-2" />
                <div className="w-24 h-2 bg-zinc-500 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Purchase
      </div>
    </div>
  );
}