import { Button } from '../ui/button';

interface WireframeSecureCoreProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeSecureCore({ onNavigate }: WireframeSecureCoreProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
          <div className="flex gap-4">
            <Button
              onClick={() => onNavigate('wireframe-features')}
              variant="ghost"
              className="text-zinc-600"
            >
              ← Back
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="w-64 h-6 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-3 rounded" />
          <div className="w-80 h-3 bg-zinc-400 mx-auto rounded" />
        </div>
      </section>

      {/* Module 1: Secure Mode */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-300 aspect-[4/3] rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500 text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div>[ Secure Mode Visual ]</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-zinc-400 px-3 py-1 rounded mb-3">
                <div className="w-16 h-2 bg-zinc-600 rounded" />
              </div>
              <div className="w-40 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Secure Folder */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-zinc-400 px-3 py-1 rounded mb-3">
                <div className="w-16 h-2 bg-zinc-600 rounded" />
              </div>
              <div className="w-40 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
            <div className="bg-zinc-300 aspect-[4/3] rounded-lg flex items-center justify-center border-2 border-zinc-400 order-1 md:order-2">
              <div className="text-zinc-500 text-center">
                <div className="text-4xl mb-2">📁</div>
                <div>[ Secure Folder Visual ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Privacy Dashboard */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-300 aspect-[4/3] rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500 text-center">
                <div className="text-4xl mb-2">📊</div>
                <div>[ Privacy Dashboard Visual ]</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-zinc-400 px-3 py-1 rounded mb-3">
                <div className="w-16 h-2 bg-zinc-600 rounded" />
              </div>
              <div className="w-40 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: Hardware Encryption Chip */}
      <section className="py-16 border-b-2 border-zinc-300 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-zinc-400 px-3 py-1 rounded mb-3">
                <div className="w-16 h-2 bg-zinc-600 rounded" />
              </div>
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
            <div className="bg-zinc-300 aspect-[4/3] rounded-lg flex items-center justify-center border-2 border-zinc-400 order-1 md:order-2">
              <div className="text-zinc-500 text-center">
                <div className="text-4xl mb-2">🔐</div>
                <div>[ Hardware Chip Visual ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Physical Privacy Switch */}
      <section className="py-16 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-zinc-300 aspect-[4/3] rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500 text-center">
                <div className="text-4xl mb-2">🔘</div>
                <div>[ Privacy Switch Visual ]</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-zinc-400 px-3 py-1 rounded mb-3">
                <div className="w-16 h-2 bg-zinc-600 rounded" />
              </div>
              <div className="w-48 h-5 bg-zinc-600 mb-4 rounded" />
              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-full h-3 bg-zinc-400 rounded" />
                <div className="w-4/5 h-3 bg-zinc-400 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-zinc-500 rounded flex-shrink-0" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-200 border-b-2 border-zinc-400">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-72 h-6 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-8 rounded" />
          <Button
            onClick={() => onNavigate('wireframe-product')}
            className="bg-zinc-700 text-white hover:bg-zinc-800 px-12"
          >
            See Product Details
          </Button>
        </div>
      </section>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - SecureCore
      </div>
    </div>
  );
}
