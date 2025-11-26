import { Button } from '../ui/button';

interface WireframeFeaturesProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeFeatures({ onNavigate }: WireframeFeaturesProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
          <div className="flex gap-4">
            <Button
              onClick={() => onNavigate('wireframe-landing')}
              variant="ghost"
              className="text-zinc-600"
            >
              ← Back
            </Button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-12 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="w-64 h-6 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto rounded" />
        </div>
      </section>

      {/* Feature Section 1: Extreme Durability */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-300 aspect-square rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500">[ Durability Visual ]</div>
            </div>
            <div>
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: 2-3 Day Battery Life */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-300 aspect-square rounded-lg flex items-center justify-center border-2 border-zinc-400 order-1 md:order-2">
              <div className="text-zinc-500">[ Battery Visual ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Essential Smart Features */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-300 aspect-square rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500">[ Smart Features Visual ]</div>
            </div>
            <div>
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Ordinary Camera */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-zinc-500 rounded" />
                    <div className="w-full h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-300 aspect-square rounded-lg flex items-center justify-center border-2 border-zinc-400 order-1 md:order-2">
              <div className="text-zinc-500">[ Camera Visual ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 5: Nokia SecureCore Ecosystem */}
      <section className="py-16 bg-zinc-200 border-b-2 border-zinc-400">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="w-64 h-5 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-12 rounded" />
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-12 h-12 bg-zinc-400 rounded-full mx-auto mb-3" />
                <div className="w-24 h-3 bg-zinc-500 mx-auto mb-2 rounded" />
                <div className="w-full h-2 bg-zinc-300 rounded" />
              </div>
            ))}
          </div>

          <Button
            onClick={() => onNavigate('wireframe-securecore')}
            className="bg-zinc-700 text-white hover:bg-zinc-800 px-8"
          >
            Explore SecureCore
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-72 h-6 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-8 rounded" />
          <Button
            onClick={() => onNavigate('wireframe-product')}
            className="bg-zinc-700 text-white hover:bg-zinc-800 px-12"
          >
            View Product Details
          </Button>
        </div>
      </section>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Features
      </div>
    </div>
  );
}
