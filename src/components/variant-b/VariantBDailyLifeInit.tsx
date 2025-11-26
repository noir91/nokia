import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { Loader2, Check, Shield } from 'lucide-react';

export default function VariantBDailyLifeInit({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => prev >= 100 ? 100 : prev + 10);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-zinc-900 rounded-3xl p-12 shadow-2xl border border-teal-500/30">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-teal-500/20 rounded-full mx-auto mb-8 flex items-center justify-center border border-teal-500/30">
              {progress < 100 ? (
                <Loader2 className="w-10 h-10 text-teal-400 animate-spin" />
              ) : (
                <Shield className="w-10 h-10 text-teal-400" />
              )}
            </div>
            <h2 className="text-white mb-8">Activating Full Privacy Mode...</h2>
            
            <div className="w-full h-3 bg-zinc-800 rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="space-y-4">
                {['Disabling all trackers', 'Blocking sensors and permissions', 'Activating privacy protections'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      progress > (i + 1) * 30 ? 'bg-teal-500' : 'bg-zinc-700'
                    }`}>
                      {progress > (i + 1) * 30 ? <Check className="w-4 h-4 text-white" /> : null}
                    </div>
                    <span className="text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {progress === 100 && (
            <Button onClick={() => onNavigate('variant-b-dailylife-ready')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
              Continue
            </Button>
          )}
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => onNavigate('variant-b-dailylife-setup')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Privacy Mode Activating
      </div>
    </div>
  );
}