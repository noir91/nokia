import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VariantAConfirmationProps {
  onNavigate: (screen: string) => void;
}

export default function VariantAConfirmation({ onNavigate }: VariantAConfirmationProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-a-landing')} className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </button>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-zinc-900 mb-4">Order Confirmed!</h1>
          <p className="text-zinc-600 text-lg mb-12">
            Thank you for pre-ordering the Nokia Secure. You'll receive a confirmation email shortly.
          </p>

          <div className="bg-white rounded-xl p-8 mb-8 text-left border border-zinc-200">
            <h3 className="text-zinc-900 mb-6">Order Details</h3>
            
            <div className="space-y-3 mb-6 pb-6 border-b border-zinc-200">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Order Number</span>
                <span className="text-zinc-900">#NSO-2025-0001</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Order Date</span>
                <span className="text-zinc-900">November 20, 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600">Estimated Delivery</span>
                <span className="text-zinc-900">January 15, 2026</span>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-zinc-200">
              <h4 className="text-zinc-900 mb-4">Product Ordered</h4>
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-zinc-100 rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Nokia Secure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-zinc-900 mb-1">Nokia Secure</div>
                  <div className="text-zinc-600 text-sm mb-2">256GB, Midnight Black</div>
                  <div className="text-zinc-900">PKR 50,000</div>
                  <div className="text-zinc-600 text-sm mt-1">Tax included</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-zinc-900 mb-4">Shipping Address</h4>
              <div className="text-zinc-600 text-sm space-y-1">
                <div>John Doe</div>
                <div>123 Main St, Apt 4B</div>
                <div>New York, NY 10001</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <h3 className="text-zinc-900 mb-6">What's Next?</h3>
            <div className="space-y-4 text-left">
              {[
                { num: '1', text: 'Confirmation Email', desc: 'Check your inbox for order confirmation and tracking details' },
                { num: '2', text: 'Shipping Updates', desc: "We'll keep you informed as your Secure is prepared and shipped" },
                { num: '3', text: 'Setup Guide', desc: 'Receive setup instructions and Daily Life Mode configuration guide' }
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                    {step.num}
                  </div>
                  <div>
                    <div className="text-zinc-900 mb-1">{step.text}</div>
                    <div className="text-zinc-600 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => onNavigate('variant-a-dailylife-setup')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Preview Daily Life Mode Setup
            </Button>
            <Button
              onClick={() => onNavigate('variant-a-landing')}
              variant="outline"
              className="border-zinc-300 px-8"
            >
              Return Home
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Confirmation
      </div>
    </div>
  );
}