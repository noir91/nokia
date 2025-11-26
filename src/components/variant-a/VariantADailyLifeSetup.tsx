import { Button } from '../ui/button';
import { Shield } from 'lucide-react';

interface VariantADailyLifeSetupProps {
  onNavigate: (screen: string) => void;
}

export default function VariantADailyLifeSetup({ onNavigate }: VariantADailyLifeSetupProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-zinc-200">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-zinc-900 mb-3">Welcome to Nokia Secure</h1>
            <p className="text-zinc-600 text-lg">Your data stays yours. Always.</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-zinc-900 mb-2">Stay Fully Private</h3>
                  <p className="text-zinc-600 text-sm">
                    Zero Google Services. Maximum privacy. Use your phone with complete data isolation and control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-zinc-300 rounded-xl p-6 hover:border-blue-300 transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-zinc-200 border-2 border-zinc-400 rounded-full flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-zinc-900 mb-2">Enable Daily Life Mode</h3>
                  <p className="text-zinc-600 text-sm">
                    Full app compatibility with privacy still protected. Sandboxed Google Services for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => onNavigate('variant-a-dailylife-init')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              Continue with Selection
            </Button>
            <button className="w-full text-zinc-500 text-sm hover:text-zinc-700">
              Learn more about privacy modes
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('variant-a-confirmation')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back to Confirmation
          </Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Daily Life Setup
      </div>
    </div>
  );
}