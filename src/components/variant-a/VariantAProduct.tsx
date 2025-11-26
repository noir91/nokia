import { Button } from '../ui/button';
import ProductMockup from '../ProductMockup';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface VariantAProductProps {
  onNavigate: (screen: string) => void;
}

export default function VariantAProduct({ onNavigate }: VariantAProductProps) {
  const specs = [
    { category: 'Display', items: [['Size', '6.5" AMOLED'], ['Resolution', '2400 x 1080'], ['Refresh Rate', '120Hz']] },
    { category: 'Performance', items: [['Processor', 'Snapdragon 8 Gen 2'], ['RAM', '8GB / 12GB'], ['Storage', '256GB / 512GB']] },
    { category: 'Camera', items: [['Main', '48MP f/1.8'], ['Ultra-wide', '12MP f/2.2'], ['Front', '16MP f/2.0']] },
    { category: 'Battery', items: [['Capacity', '5500mAh'], ['Charging', '30W Fast / Wireless'], ['Life', '2-3 days']] },
    { category: 'Security', items: [['Chip', 'Hardware encryption'], ['Biometric', 'Fingerprint & Face'], ['Privacy', 'Physical switches']] },
    { category: 'Connectivity', items: [['Network', '5G / Wi-Fi 6E'], ['Other', 'NFC, Dual SIM'], ['Port', 'USB-C 3.2']] }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-a-landing')} className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </button>
          <Button onClick={() => onNavigate('variant-a-securecore')} variant="ghost">← Back</Button>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="sticky top-24 self-start">
              <ProductMockup variant="light" size="large" />
              <div className="grid grid-cols-4 gap-3 mt-6">
                <div className="bg-zinc-100 aspect-square rounded-lg border border-zinc-200 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Front View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-100 aspect-square rounded-lg border border-zinc-200 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1625383659159-e5bb894a73d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZHVyYWJpbGl0eSUyMG1ldGFsfGVufDF8fHx8MTc2MzY1OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Durable Frame"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-100 aspect-square rounded-lg border border-zinc-200 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1746276584005-77376a4af877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwbW9kdWxlfGVufDF8fHx8MTc2MzY1OTg3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Camera"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-100 aspect-square rounded-lg border border-zinc-200 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1645200593913-daf91cdc8f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcnVnZ2VkJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjM2NTk4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Rugged Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-zinc-900 mb-3">Nokia Secure</h1>
              <div className="text-blue-600 mb-6">Secure, Fast and Reliable</div>
              <p className="text-zinc-600 text-lg mb-8">
                The most secure smartphone for privacy-conscious users. Military-grade durability, 
                multi-day battery life, and the revolutionary SecureCore ecosystem.
              </p>

              <div className="bg-zinc-100 rounded-xl p-6 mb-8">
                <div className="text-zinc-900 mb-2">Starting at</div>
                <div className="text-3xl text-zinc-900 mb-2">PKR 50,000</div>
                <div className="text-zinc-600 text-sm">Free shipping • 2-year warranty included</div>
              </div>

              <Button
                onClick={() => onNavigate('variant-a-purchase')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 mb-4"
              >
                Pre-Order Now
              </Button>
              <Button
                onClick={() => onNavigate('variant-a-dailylife-setup')}
                variant="outline"
                className="w-full border-zinc-300"
              >
                See Daily Life Mode Setup
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-zinc-900 mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specs.map((section, i) => (
              <div key={i} className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
                <h3 className="text-zinc-900 mb-4">{section.category}</h3>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex justify-between text-sm">
                      <span className="text-zinc-600">{item[0]}</span>
                      <span className="text-zinc-900">{item[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Product Detail
      </div>
    </div>
  );
}