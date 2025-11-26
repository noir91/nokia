import { Button } from '../ui/button';

interface WireframeLandingProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeLanding({ onNavigate }: WireframeLandingProps) {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-400 py-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="w-32 h-8 bg-zinc-400 rounded" />
          <div className="flex gap-4">
            <div className="w-20 h-8 bg-zinc-300 rounded" />
            <div className="w-20 h-8 bg-zinc-300 rounded" />
            <div className="w-20 h-8 bg-zinc-300 rounded" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 border-b-2 border-zinc-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="w-16 h-2 bg-zinc-500 mb-6" />
                <h1 className="text-zinc-900 mb-6">
                  Nokia Secure — Secure, Fast and Reliable
                </h1>
                <div className="space-y-3">
                  <div className="w-full h-3 bg-zinc-400 rounded" />
                  <div className="w-4/5 h-3 bg-zinc-400 rounded" />
                </div>
              </div>
              <Button
                onClick={() => onNavigate('wireframe-features')}
                className="bg-zinc-700 text-white hover:bg-zinc-800 px-8"
              >
                Explore Features
              </Button>
            </div>
            <div className="bg-zinc-300 aspect-[3/4] rounded-lg flex items-center justify-center border-2 border-zinc-400">
              <div className="text-zinc-500">[ Phone Image Placeholder ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="w-48 h-4 bg-zinc-500 mx-auto mb-4 rounded" />
            <div className="w-96 h-3 bg-zinc-400 mx-auto rounded" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Block 1: Durability */}
            <div className="bg-white border-2 border-zinc-400 rounded-lg p-8">
              <div className="w-16 h-16 bg-zinc-400 rounded-full mx-auto mb-4" />
              <div className="text-center">
                <div className="w-32 h-4 bg-zinc-600 mx-auto mb-3 rounded" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-3/4 h-2 bg-zinc-300 mx-auto rounded" />
                </div>
              </div>
            </div>

            {/* Feature Block 2: Battery Life */}
            <div className="bg-white border-2 border-zinc-400 rounded-lg p-8">
              <div className="w-16 h-16 bg-zinc-400 rounded-full mx-auto mb-4" />
              <div className="text-center">
                <div className="w-32 h-4 bg-zinc-600 mx-auto mb-3 rounded" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-3/4 h-2 bg-zinc-300 mx-auto rounded" />
                </div>
              </div>
            </div>

            {/* Feature Block 3: Security */}
            <div className="bg-white border-2 border-zinc-400 rounded-lg p-8">
              <div className="w-16 h-16 bg-zinc-400 rounded-full mx-auto mb-4" />
              <div className="text-center">
                <div className="w-32 h-4 bg-zinc-600 mx-auto mb-3 rounded" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-full h-2 bg-zinc-300 rounded" />
                  <div className="w-3/4 h-2 bg-zinc-300 mx-auto rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-200 border-y-2 border-zinc-400">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-64 h-5 bg-zinc-600 mx-auto mb-4 rounded" />
          <div className="w-96 h-3 bg-zinc-400 mx-auto mb-8 rounded" />
          <Button
            onClick={() => onNavigate('wireframe-features')}
            className="bg-zinc-700 text-white hover:bg-zinc-800 px-12"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-zinc-400 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
              <div className="space-y-2">
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
              </div>
            </div>
            <div>
              <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
              <div className="space-y-2">
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
              </div>
            </div>
            <div>
              <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
              <div className="space-y-2">
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
              </div>
            </div>
            <div>
              <div className="w-24 h-3 bg-zinc-500 mb-3 rounded" />
              <div className="space-y-2">
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
                <div className="w-20 h-2 bg-zinc-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Landing Page
      </div>
    </div>
  );
}