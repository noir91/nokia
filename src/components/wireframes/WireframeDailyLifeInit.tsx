import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

interface WireframeDailyLifeInitProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeDailyLifeInit({ onNavigate }: WireframeDailyLifeInitProps) {
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

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        {/* Phone Frame Mockup */}
        <div className="bg-white border-4 border-zinc-400 rounded-3xl p-8 mx-auto max-w-md shadow-2xl">
          {/* Status Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-zinc-400 rounded" />
              <div className="w-1 h-3 bg-zinc-400 rounded" />
              <div className="w-1 h-3 bg-zinc-400 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-3 bg-zinc-400 rounded" />
              <div className="w-6 h-3 bg-zinc-400 rounded" />
            </div>
          </div>

          {/* Loading Content */}
          <div className="text-center mb-12 py-12">
            {/* Loading Spinner */}
            <div className="w-20 h-20 bg-zinc-400 rounded-full mx-auto mb-8 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin" />
            </div>

            <div className="w-56 h-5 bg-zinc-600 mx-auto mb-8 rounded" />
            
            {/* Progress Bar */}
            <div className="w-full h-3 bg-zinc-200 rounded-full mb-6 overflow-hidden">
              <div 
                className="h-full bg-zinc-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status Messages */}
            <div className="space-y-3 text-left bg-zinc-100 border-2 border-zinc-300 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                  <div className="w-3/4 h-2 bg-zinc-300 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                  <div className="w-2/3 h-2 bg-zinc-300 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                  <div className="w-4/5 h-2 bg-zinc-300 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center">
            <div className="w-full h-2 bg-zinc-300 mx-auto mb-2 rounded" />
            <div className="w-3/4 h-2 bg-zinc-300 mx-auto rounded" />
          </div>
        </div>

        {/* Auto-advance when complete */}
        {progress === 100 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => onNavigate('wireframe-dailylife-ready')}
              className="bg-zinc-700 text-white hover:bg-zinc-800"
            >
              Installation Complete - Continue
            </Button>
          </div>
        )}

        {/* Navigation Hint */}
        <div className="text-center mt-4">
          <Button
            onClick={() => onNavigate('wireframe-dailylife-setup')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Daily Life Initializing (Screen B)
      </div>
    </div>
  );
}
