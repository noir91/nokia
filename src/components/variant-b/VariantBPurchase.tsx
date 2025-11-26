import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function VariantBPurchase({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-b-landing')} className="text-white">Nokia Secure</button>
          <Button onClick={() => onNavigate('variant-b-product')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-white mb-12">Checkout</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h2 className="text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div><Label className="text-zinc-400">Email</Label><Input type="email" className="bg-zinc-800 border-zinc-700 text-white" /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label className="text-zinc-400">First Name</Label><Input className="bg-zinc-800 border-zinc-700 text-white" /></div>
                    <div><Label className="text-zinc-400">Last Name</Label><Input className="bg-zinc-800 border-zinc-700 text-white" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 sticky top-24">
                <h3 className="text-white mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Nokia Secure</span>
                    <span className="text-white">PKR 50,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Shipping</span>
                    <span className="text-teal-400">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Tax</span>
                    <span className="text-white">Included (PKR 0)</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-zinc-800">
                    <span className="text-white">Total</span>
                    <span className="text-white">PKR 50,000</span>
                  </div>
                </div>
                <Button onClick={() => onNavigate('variant-b-confirmation')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
                  Complete Purchase
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Purchase
      </div>
    </div>
  );
}