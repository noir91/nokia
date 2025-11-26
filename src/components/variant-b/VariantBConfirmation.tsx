import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export default function VariantBConfirmation({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900 border-b border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <button onClick={() => onNavigate('variant-b-landing')} className="text-white">Nokia Secure</button>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="w-24 h-24 bg-teal-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-white mb-4">Order Confirmed!</h1>
          <p className="text-zinc-400 text-lg mb-12">
            Your Nokia Secure pre-order is confirmed. Welcome to the future of privacy.
          </p>

          <div className="bg-zinc-900 rounded-xl p-8 mb-8 border border-zinc-800">
            <h3 className="text-white mb-6">Order Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-400">Order Number</span>
                <span className="text-white">#NSO-2025-0001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Order Date</span>
                <span className="text-white">November 20, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Est. Delivery</span>
                <span className="text-white">January 15, 2026</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-zinc-800">
                <span className="text-zinc-400">Total Paid</span>
                <span className="text-white">PKR 50,000</span>
              </div>
              <div className="text-zinc-500 text-xs">Tax included</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={() => onNavigate('variant-b-dailylife-setup')} className="bg-teal-500 hover:bg-teal-600 text-white px-8">
              Setup Daily Life Mode
            </Button>
            <Button onClick={() => onNavigate('variant-b-landing')} variant="outline" className="border-zinc-700 text-zinc-300 px-8">
              Return Home
            </Button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Confirmation
      </div>
    </div>
  );
}