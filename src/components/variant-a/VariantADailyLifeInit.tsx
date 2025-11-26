import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

interface VariantADailyLifeInitProps {
  onNavigate: (screen: string) => void;
}

export default function VariantADailyLifeInit({ onNavigate }: VariantADailyLifeInitProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    'Sandboxed Google Services installing',
    'Play Store activated',
    'Privacy protections enabled'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-zinc-200">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>

            <h2 className="text-zinc-900 mb-8">Setting up Daily Life Mode...</h2>
            
            <div className="w-full h-3 bg-zinc-200 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="bg-zinc-50 rounded-xl p-6 text-left border border-zinc-200">
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      progress > (i + 1) * 30 ? 'bg-blue-600' : 'bg-zinc-200'
                    }`}>
                      {progress > (i + 1) * 30 ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-zinc-400 rounded-full" />
                      )}
                    </div>
                    <span className="text-zinc-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-zinc-500 text-sm mt-6">
              This may take a few minutes. Please don't turn off your device.
            </p>
          </div>

          {progress === 100 && (
            <Button
              onClick={() => onNavigate('variant-a-dailylife-ready')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              Installation Complete - Continue
            </Button>
          )}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('variant-a-dailylife-setup')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Daily Life Initializing
      </div>
    </div>
  );
}
