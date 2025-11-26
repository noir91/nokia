import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VariantAPurchaseProps {
  onNavigate: (screen: string) => void;
}

export default function VariantAPurchase({ onNavigate }: VariantAPurchaseProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-a-landing')} className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </button>
          <Button onClick={() => onNavigate('variant-a-product')} variant="ghost">← Back</Button>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-zinc-900 mb-12">Checkout</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <h2 className="text-zinc-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <h2 className="text-zinc-900 mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Address</Label>
                    <Input placeholder="123 Main St" />
                  </div>
                  <div>
                    <Label>Apartment, suite, etc.</Label>
                    <Input placeholder="Apt 4B" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>City</Label>
                      <Input placeholder="New York" />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input placeholder="NY" />
                    </div>
                    <div>
                      <Label>ZIP</Label>
                      <Input placeholder="10001" />
                    </div>
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input value="United States" disabled />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <h2 className="text-zinc-900 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Expiration</Label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label>CVV</Label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 border border-zinc-200 sticky top-24">
                <h3 className="text-zinc-900 mb-6">Order Summary</h3>
                
                <div className="flex gap-4 mb-6 pb-6 border-b border-zinc-200">
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
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-zinc-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Subtotal</span>
                    <span className="text-zinc-900">PKR 50,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Tax</span>
                    <span className="text-zinc-900">Included (PKR 0)</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-zinc-900">Total</span>
                  <span className="text-zinc-900">PKR 50,000</span>
                </div>

                <Button
                  onClick={() => onNavigate('variant-a-confirmation')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                >
                  Complete Purchase
                </Button>

                <div className="mt-4 text-center text-zinc-500 text-sm">
                  Secure payment processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Purchase
      </div>
    </div>
  );
}