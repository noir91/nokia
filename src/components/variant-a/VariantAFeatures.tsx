import { Button } from '../ui/button';
import { Shield, Battery, Smartphone, Camera, Lock } from 'lucide-react';

interface VariantAFeaturesProps {
  onNavigate: (screen: string) => void;
}

export default function VariantAFeatures({ onNavigate }: VariantAFeaturesProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-a-landing')} className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </button>
          <Button onClick={() => onNavigate('variant-a-landing')} variant="ghost">
            ← Back
          </Button>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-zinc-900 mb-4">Features That Matter</h1>
          <p className="text-zinc-600 text-lg">
            Every feature designed with one goal: give you the phone you need, with the privacy you deserve.
          </p>
        </div>
      </section>

      {/* Feature 1: Extreme Durability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-zinc-100 rounded-2xl p-12 aspect-square flex items-center justify-center">
              <Shield className="w-32 h-32 text-blue-600" />
            </div>
            <div>
              <h2 className="text-zinc-900 mb-6">Extreme Durability</h2>
              <p className="text-zinc-600 text-lg mb-6">
                Built for the real world. The Nokia Secure features military-grade durability 
                with IP68 water and dust resistance, drop protection, and scratch-resistant glass.
              </p>
              <ul className="space-y-4">
                {['Gorilla Glass Victus 2 — Industry-leading protection', 
                  'Reinforced Aluminum Frame — Lightweight yet strong',
                  'MIL-STD-810H Certified — Military-grade durability'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Battery Life */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-zinc-900 mb-6">2-3 Day Battery Life</h2>
              <p className="text-zinc-600 text-lg mb-6">
                5500mAh battery with intelligent power management keeps you connected for days, 
                not hours. Fast charging and wireless charging included.
              </p>
              <ul className="space-y-4">
                {['Up to 72 hours of mixed use — Real-world battery life', 
                  '30W Fast Charging — 0-50% in 30 minutes',
                  'Wireless Charging Support — Convenient and cable-free'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-zinc-100 rounded-2xl p-12 aspect-square flex items-center justify-center order-1 lg:order-2">
              <Battery className="w-32 h-32 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Essential Smart Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-zinc-100 rounded-2xl p-12 aspect-square flex items-center justify-center">
              <Smartphone className="w-32 h-32 text-blue-600" />
            </div>
            <div>
              <h2 className="text-zinc-900 mb-6">Essential Smart Features</h2>
              <p className="text-zinc-600 text-lg mb-6">
                All the smartphone features you need: 5G connectivity, NFC payments, dual SIM support, 
                and a clean Android experience with Nokia's security enhancements.
              </p>
              <ul className="space-y-4">
                {['5G & Wi-Fi 6E — Lightning-fast connectivity', 
                  'NFC & Dual SIM — Mobile payments and flexibility',
                  'Stock Android + Security — Clean, secure, and updatable'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Ordinary Camera */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-zinc-900 mb-6">Practical Camera System</h2>
              <p className="text-zinc-600 text-lg mb-6">
                A reliable 48MP main camera and 12MP ultra-wide for everyday photography. 
                No gimmicks, just quality photos when you need them.
              </p>
              <ul className="space-y-4">
                {['48MP Main Camera — Sharp, detailed photos in any light', 
                  '12MP Ultra-Wide — Capture more of the moment'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-zinc-100 rounded-2xl p-12 aspect-square flex items-center justify-center order-1 lg:order-2">
              <Camera className="w-32 h-32 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: SecureCore Ecosystem */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Nokia SecureCore Ecosystem</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Five layers of hardware and software protection that put you in complete control of your digital life.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              { icon: <Lock />, title: 'Secure Mode' },
              { icon: <Shield />, title: 'Secure Folder' },
              { icon: <Smartphone />, title: 'Privacy Dashboard' },
              { icon: <Lock />, title: 'Hardware Encryption' },
              { icon: <Shield />, title: 'Privacy Switch' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-700 rounded-xl p-6 hover:bg-blue-800 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white w-6 h-6">{item.icon}</div>
                </div>
                <div className="text-white text-sm">{item.title}</div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => onNavigate('variant-a-securecore')}
            className="bg-white text-blue-600 hover:bg-zinc-100"
          >
            Explore SecureCore
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-zinc-900 mb-4">Experience the difference</h2>
          <p className="text-zinc-600 text-lg mb-8">
            See all specifications and pre-order your Nokia Secure today.
          </p>
          <Button
            onClick={() => onNavigate('variant-a-product')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12"
          >
            View Product Details
          </Button>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Features
      </div>
    </div>
  );
}