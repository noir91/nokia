import { Button } from '../ui/button';
import { Check } from 'lucide-react';

interface VariantADailyLifeReadyProps {
  onNavigate: (screen: string) => void;
}

export default function VariantADailyLifeReady({ onNavigate }: VariantADailyLifeReadyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-zinc-200">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Check className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-zinc-900 mb-4">Daily Life Mode is now enabled.</h2>
            <p className="text-zinc-600 text-lg mb-8">
              Your apps will work normally — without tracking.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <div className="space-y-4 text-left">
                {[
                  'Full Play Store access with app compatibility',
                  'Google Services sandboxed for your privacy',
                  'Real-time privacy monitoring and control'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => onNavigate('variant-a-dailylife-settings')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
              >
                Get Started
              </Button>
              <button className="w-full text-zinc-500 text-sm hover:text-zinc-700">
                Manage privacy settings
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('variant-a-dailylife-init')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Daily Life Ready
      </div>
    </div>
  );
}
