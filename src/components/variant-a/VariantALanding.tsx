import { Button } from '../ui/button';
import { Shield, Battery, Smartphone } from 'lucide-react';
import ProductMockup from '../ProductMockup';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VariantALandingProps {
  onNavigate: (screen: string) => void;
}

export default function VariantALanding({ onNavigate }: VariantALandingProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('variant-a-features')} className="text-zinc-600 hover:text-zinc-900">Features</button>
            <button onClick={() => onNavigate('variant-a-securecore')} className="text-zinc-600 hover:text-zinc-900">SecureCore</button>
            <button onClick={() => onNavigate('variant-a-product')} className="text-zinc-600 hover:text-zinc-900">Product</button>
            <Button onClick={() => onNavigate('variant-a-purchase')} className="bg-blue-600 hover:bg-blue-700 text-white">
              Pre-Order
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">
                Secure, Fast and Reliable
              </div>
              <h1 className="text-zinc-900 mb-6">
                Nokia Secure<br />
                Durable. Powerful. Private.
              </h1>
              <p className="text-zinc-600 text-lg mb-8">
                The smartphone that puts your privacy first without compromising on performance. 
                Built to last, designed to protect.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => onNavigate('variant-a-features')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Secure Your Phone
                </Button>
                <Button
                  onClick={() => onNavigate('variant-a-securecore')}
                  variant="outline"
                  className="border-zinc-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <ProductMockup variant="light" size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-zinc-900 mb-4">Built Different</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Three core pillars that make Secure the most trusted smartphone for privacy-conscious users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Durability */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 hover:border-blue-200 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-zinc-900 mb-3">Extreme Durability</h3>
              <p className="text-zinc-600 mb-4">
                Military-grade protection with IP68 water resistance. Drop-tested to survive the real world.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Gorilla Glass Victus 2
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Reinforced aluminum frame
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  MIL-STD-810H certified
                </li>
              </ul>
            </div>

            {/* Battery Life */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 hover:border-blue-200 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Battery className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-zinc-900 mb-3">2-3 Day Battery Life</h3>
              <p className="text-zinc-600 mb-4">
                5500mAh battery with intelligent power management. Stay connected without constant charging.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Fast charging (30W)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Wireless charging
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Smart battery optimization
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 hover:border-blue-200 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-zinc-900 mb-3">SecureCore Ecosystem</h3>
              <p className="text-zinc-600 mb-4">
                Hardware-level privacy protection with physical kill switches. Your data stays yours.
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Hardware encryption chip
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Physical privacy switches
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Secure Mode & Folder
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Mode Callout */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mb-6">
            Introducing Daily Life Mode
          </div>
          <h2 className="text-zinc-900 mb-4">
            All the apps you need.<br />None of the tracking you don't.
          </h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-2xl mx-auto">
            Enable Daily Life Mode to access your favorite apps while maintaining privacy protections. 
            Sandboxed Google Services give you convenience without compromise.
          </p>
          <Button
            onClick={() => onNavigate('variant-a-features')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Discover How It Works
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-zinc-900 mb-4">Ready to take control of your privacy?</h2>
          <p className="text-zinc-600 text-lg mb-8">
            Pre-order the Nokia Secure today and be among the first to experience true privacy.
          </p>
          <Button
            onClick={() => onNavigate('variant-a-product')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12"
          >
            Secure Your Phone
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-1">NOKIA</div>
                <div>Secure</div>
              </div>
              <p className="text-zinc-400 text-sm">Secure, Fast and Reliable</p>
            </div>
            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><button onClick={() => onNavigate('variant-a-features')}>Features</button></li>
                <li><button onClick={() => onNavigate('variant-a-securecore')}>SecureCore</button></li>
                <li><button onClick={() => onNavigate('variant-a-product')}>Specs</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
            © 2025 Nokia. Secure. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed Label */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Landing (Light & Premium)
      </div>
    </div>
  );
}