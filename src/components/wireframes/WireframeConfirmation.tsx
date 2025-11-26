import { Button } from '../ui/button';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WireframeConfirmationProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeConfirmation({ onNavigate }: WireframeConfirmationProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
        </div>
      </header>

      {/* Confirmation Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-zinc-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <div className="w-64 h-6 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-3 rounded" />
          <div className="w-80 h-3 bg-zinc-400 mx-auto mb-12 rounded" />

          {/* Order Details Card */}
          <div className="bg-white border-2 border-zinc-400 rounded-lg p-8 mb-8 text-left">
            <div className="w-32 h-4 bg-zinc-600 mb-6 rounded" />
            
            <div className="space-y-4 mb-6 pb-6 border-b-2 border-zinc-300">
              <div className="flex justify-between">
                <div className="w-32 h-3 bg-zinc-400 rounded" />
                <div className="w-40 h-3 bg-zinc-500 rounded" />
              </div>
              <div className="flex justify-between">
                <div className="w-32 h-3 bg-zinc-400 rounded" />
                <div className="w-40 h-3 bg-zinc-500 rounded" />
              </div>
              <div className="flex justify-between">
                <div className="w-32 h-3 bg-zinc-400 rounded" />
                <div className="w-40 h-3 bg-zinc-500 rounded" />
              </div>
            </div>

            {/* Product Ordered */}
            <div className="mb-6 pb-6 border-b-2 border-zinc-300">
              <div className="w-32 h-4 bg-zinc-600 mb-4 rounded" />
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-zinc-200 rounded border-2 border-zinc-400 flex-shrink-0 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwYmxhY2t8ZW58MXx8fHwxNzYzNjIyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Nokia Secure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-full h-3 bg-zinc-500 mb-2 rounded" />
                  <div className="w-32 h-2 bg-zinc-400 mb-3 rounded" />
                  <div className="w-24 h-3 bg-zinc-600 rounded" />
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div>
              <div className="w-32 h-4 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-2">
                <div className="w-48 h-3 bg-zinc-400 rounded" />
                <div className="w-56 h-3 bg-zinc-400 rounded" />
                <div className="w-40 h-3 bg-zinc-400 rounded" />
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-zinc-200 border-2 border-zinc-400 rounded-lg p-8 mb-8">
            <div className="w-32 h-4 bg-zinc-600 mx-auto mb-6 rounded" />
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-zinc-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white">1</span>
                </div>
                <div className="flex-1">
                  <div className="w-48 h-3 bg-zinc-500 mb-2 rounded" />
                  <div className="w-full h-2 bg-zinc-400 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-zinc-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white">2</span>
                </div>
                <div className="flex-1">
                  <div className="w-48 h-3 bg-zinc-500 mb-2 rounded" />
                  <div className="w-full h-2 bg-zinc-400 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-zinc-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white">3</span>
                </div>
                <div className="flex-1">
                  <div className="w-48 h-3 bg-zinc-500 mb-2 rounded" />
                  <div className="w-full h-2 bg-zinc-400 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => onNavigate('wireframe-dailylife-setup')}
              className="bg-zinc-700 text-white hover:bg-zinc-800 px-8"
            >
              Setup Daily Life Mode
            </Button>
            <Button
              onClick={() => onNavigate('wireframe-landing')}
              variant="outline"
              className="px-8"
            >
              Return Home
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-zinc-200 border-t-2 border-zinc-400">
        <div className="max-w-4xl mx-auto px-8">
          <div className="w-40 h-4 bg-zinc-600 mx-auto mb-8 rounded" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-zinc-400 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zinc-400 rounded-full mx-auto mb-3" />
                <div className="w-32 h-3 bg-zinc-500 mx-auto mb-2 rounded" />
                <div className="w-full h-2 bg-zinc-400 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Confirmation
      </div>
    </div>
  );
}