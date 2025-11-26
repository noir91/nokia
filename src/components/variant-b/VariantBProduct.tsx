import { Button } from '../ui/button';
import ProductMockup from '../ProductMockup';

export default function VariantBProduct({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-b-landing')} className="text-white">Nokia Secure</button>
          <Button onClick={() => onNavigate('variant-b-securecore')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </header>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ProductMockup variant="dark" size="large" />
            </div>
            <div>
              <h1 className="text-white mb-3">Nokia Secure</h1>
              <div className="text-teal-400 mb-6">Secure, Fast and Reliable</div>
              <p className="text-zinc-400 text-lg mb-8">The ultimate secure smartphone with military-grade protection.</p>

              <div className="bg-zinc-800 rounded-xl p-6 mb-8 border border-zinc-700">
                <div className="text-zinc-400 mb-2">Starting at</div>
                <div className="text-3xl text-white mb-2">PKR 50,000</div>
                <div className="text-zinc-500 text-sm">Free shipping • 2-year warranty</div>
              </div>

              <Button onClick={() => onNavigate('variant-b-purchase')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 mb-4">
                Pre-Order Now
              </Button>
              <Button onClick={() => onNavigate('variant-b-dailylife-setup')} variant="outline" className="w-full border-zinc-700 text-zinc-300">
                View Daily Life Mode
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Product Detail
      </div>
    </div>
  );
}