import { Button } from '../ui/button';
import { Shield, Lock } from 'lucide-react';

export default function VariantBSecureCore({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-b-landing')} className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            <span className="text-white">SecureCore</span>
          </button>
          <Button onClick={() => onNavigate('variant-b-features')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </header>

      <section className="py-20 bg-teal-950/20 border-b border-teal-500/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-white mb-6">Nokia SecureCore</h1>
          <p className="text-zinc-400 text-lg">Five layers of hardware-enforced protection</p>
        </div>
      </section>

      {['Secure Mode', 'Secure Folder', 'Privacy Dashboard', 'Hardware Encryption', 'Privacy Switches'].map((module, i) => (
        <section key={i} className={`py-20 ${i % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900'}`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-teal-500/10 to-zinc-900 rounded-2xl p-16 border border-teal-500/20">
                <Lock className="w-32 h-32 text-teal-400 mx-auto" />
              </div>
              <div>
                <h2 className="text-white mb-6">{module}</h2>
                <p className="text-zinc-400 text-lg">Advanced security technology protecting your data at every level.</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Complete security control</h2>
          <Button onClick={() => onNavigate('variant-b-product')} className="bg-white text-teal-600 hover:bg-zinc-100 px-12">
            See Product Details
          </Button>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: SecureCore
      </div>
    </div>
  );
}
