import { Button } from '../ui/button';
import { Shield } from 'lucide-react';

interface VariantBFeaturesProps {
  onNavigate: (screen: string) => void;
}

export default function VariantBFeatures({ onNavigate }: VariantBFeaturesProps) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-b-landing')} className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            <div className="text-zinc-300 text-sm">NOKIA</div>
            <div className="text-white">Secure</div>
          </button>
          <Button onClick={() => onNavigate('variant-b-landing')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </header>

      <section className="py-16 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-white mb-4">Advanced Security Features</h1>
          <p className="text-zinc-400 text-lg">Military-grade protection meets intelligent design</p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8">
          {['Extreme Durability', '3-Day Battery Life', 'Smart Features', 'Pro Camera', 'SecureCore Ecosystem'].map((feature, i) => (
            <div key={i} className={`mb-20 ${i % 2 === 0 ? '' : 'flex flex-row-reverse'}`}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="bg-gradient-to-br from-teal-500/10 to-zinc-900 rounded-2xl p-16 aspect-square flex items-center justify-center border border-teal-500/20">
                  <Shield className="w-32 h-32 text-teal-400" />
                </div>
                <div>
                  <h2 className="text-white mb-6">{feature}</h2>
                  <p className="text-zinc-400 text-lg mb-6">Advanced protection and performance engineered for maximum security.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-teal-950/50 border-y border-teal-500/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Ready to experience true privacy?</h2>
          <Button onClick={() => onNavigate('variant-b-product')} className="bg-teal-500 hover:bg-teal-600 text-white px-12">
            View Product Details
          </Button>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Features
      </div>
    </div>
  );
}