import { Button } from '../ui/button';
import { Shield, Battery, Smartphone } from 'lucide-react';
import ProductMockup from '../ProductMockup';

interface VariantBLandingProps {
  onNavigate: (screen: string) => void;
}

export default function VariantBLanding({ onNavigate }: VariantBLandingProps) {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            <div className="text-zinc-300 text-sm">NOKIA</div>
            <div className="text-white">Secure</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('variant-b-features')} className="text-zinc-400 hover:text-white">Features</button>
            <button onClick={() => onNavigate('variant-b-securecore')} className="text-zinc-400 hover:text-white">SecureCore</button>
            <button onClick={() => onNavigate('variant-b-product')} className="text-zinc-400 hover:text-white">Product</button>
            <Button onClick={() => onNavigate('variant-b-purchase')} className="bg-teal-500 hover:bg-teal-600 text-white">
              Pre-Order
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm mb-6">
                Secure, Fast and Reliable
              </div>
              <h1 className="text-white mb-6">
                Nokia Secure<br />
                Durable. Powerful. Private.
              </h1>
              <p className="text-zinc-400 text-lg mb-8">
                The ultimate privacy-first smartphone. Military-grade security meets cutting-edge design 
                in the most secure device ever created.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => onNavigate('variant-b-features')}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8"
                >
                  Get Secure Now
                </Button>
                <Button
                  onClick={() => onNavigate('variant-b-securecore')}
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <ProductMockup variant="dark" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Engineered for Security</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Three core technologies that make Secure the fortress of mobile privacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Durability */}
            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700 hover:border-teal-500/50 transition-colors">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/30">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-white mb-3">Extreme Durability</h3>
              <p className="text-zinc-400 mb-4">
                Military-grade protection. IP68 rated. Built to survive anything.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Gorilla Glass Victus 2
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Titanium-reinforced frame
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  MIL-STD-810H certified
                </li>
              </ul>
            </div>

            {/* Battery Life */}
            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700 hover:border-teal-500/50 transition-colors">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/30">
                <Battery className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-white mb-3">Extended Power</h3>
              <p className="text-zinc-400 mb-4">
                5500mAh battery. 72-hour runtime. Never miss a moment.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  30W rapid charging
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Wireless charging
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  AI power optimization
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-zinc-800/50 backdrop-blur rounded-2xl p-8 border border-zinc-700 hover:border-teal-500/50 transition-colors">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/30">
                <Smartphone className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-white mb-3">SecureCore System</h3>
              <p className="text-zinc-400 mb-4">
                Hardware-enforced privacy. Physical kill switches. Total control.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Dedicated security chip
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Hardware privacy switches
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Zero-knowledge architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Mode */}
      <section className="py-20 bg-gradient-to-br from-teal-950 to-zinc-950 border-y border-teal-500/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block px-4 py-1 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full text-sm mb-6">
            Daily Life Mode
          </div>
          <h2 className="text-white mb-4">
            All the apps you need.<br />None of the tracking you don't.
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Sandboxed app environment. Full compatibility. Maximum privacy. Welcome to the future of secure computing.
          </p>
          <Button
            onClick={() => onNavigate('variant-b-features')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8"
          >
            Explore Technology
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Command your digital security</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Join the privacy revolution. Pre-order Secure today.
          </p>
          <Button
            onClick={() => onNavigate('variant-b-product')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-12"
          >
            Get Secure Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-teal-400" />
                <div className="text-zinc-300 text-sm">NOKIA</div>
                <div>Secure</div>
              </div>
              <p className="text-zinc-500 text-sm">Secure, Fast and Reliable</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><button onClick={() => onNavigate('variant-b-features')}>Features</button></li>
                <li><button onClick={() => onNavigate('variant-b-securecore')}>SecureCore</button></li>
                <li><button onClick={() => onNavigate('variant-b-product')}>Specs</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li>Help Center</li>
                <li>Contact</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li>About</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-sm">
            © 2025 Nokia. Secure. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Landing (Dark & Futuristic)
      </div>
    </div>
  );
}