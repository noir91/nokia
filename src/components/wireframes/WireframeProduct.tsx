import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WireframeProductProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeProduct({ onNavigate }: WireframeProductProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
          <div className="flex gap-4">
            <Button
              onClick={() => onNavigate('wireframe-securecore')}
              variant="ghost"
              className="text-zinc-600"
            >
              ← Back
            </Button>
          </div>
        </div>
      </header>

      {/* Product Overview */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="sticky top-8">
              <div className="bg-zinc-200 aspect-[3/4] rounded-lg overflow-hidden border-2 border-zinc-400 mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nokia Secure - Front View"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-zinc-200 aspect-square rounded border-2 border-zinc-400 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Front View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-200 aspect-square rounded border-2 border-zinc-400 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1625383659159-e5bb894a73d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZHVyYWJpbGl0eSUyMG1ldGFsfGVufDF8fHx8MTc2MzY1OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Durable Frame"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-200 aspect-square rounded border-2 border-zinc-400 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1746276584005-77376a4af877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwY2FtZXJhJTIwbW9kdWxlfGVufDF8fHx8MTc2MzY1OTg3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Camera Module"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-200 aspect-square rounded border-2 border-zinc-400 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1645200593913-daf91cdc8f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcnVnZ2VkJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjM2NTk4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Rugged Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="w-48 h-6 bg-zinc-600 mb-3 rounded" />
              <div className="w-32 h-4 bg-zinc-500 mb-6 rounded" />
              
              <div className="space-y-3 mb-8">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <div className="w-32 h-4 bg-zinc-500 mb-4 rounded" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                    <div className="w-40 h-3 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                    <div className="w-40 h-3 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                    <div className="w-40 h-3 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0" />
                    <div className="w-40 h-3 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-zinc-200 border-2 border-zinc-400 rounded-lg p-6 mb-6">
                <div className="w-32 h-5 bg-zinc-600 mb-2 rounded" />
                <div className="w-48 h-3 bg-zinc-400 rounded" />
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => onNavigate('wireframe-purchase')}
                className="w-full bg-zinc-700 text-white hover:bg-zinc-800 py-6"
              >
                Pre-Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="w-48 h-5 bg-zinc-600 mb-8 rounded" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Specs Column 1 */}
            <div className="space-y-4">
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Specs Column 2 */}
            <div className="space-y-4">
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-zinc-400 rounded-lg p-6">
                <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-20 h-2 bg-zinc-400 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="w-40 h-5 bg-zinc-600 mb-8 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-zinc-300 rounded-full mx-auto mb-3 border-2 border-zinc-400" />
                <div className="w-24 h-3 bg-zinc-400 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Product Detail
      </div>
    </div>
  );
}