import { Button } from '../ui/button';
import { Shield } from 'lucide-react';

export default function VariantBDailyLifeSetup({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-zinc-900 rounded-3xl p-12 shadow-2xl border border-teal-500/30">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h1 className="text-white mb-3">Welcome to Nokia Secure</h1>
            <p className="text-zinc-400 text-lg">Your data stays yours. Always.</p>
          </div>

          <div className="mb-8">
            <div className="bg-teal-500/10 border-2 border-teal-500 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Stay Fully Private</h3>
                  <p className="text-zinc-400 text-sm">Zero Google Services. Maximum privacy.</p>
                </div>
              </div>
            </div>
          </div>

          <Button onClick={() => onNavigate('variant-b-dailylife-init')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
            Continue
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => onNavigate('variant-b-confirmation')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Daily Life Setup
      </div>
    </div>
  );
}