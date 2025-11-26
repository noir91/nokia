import { Button } from '../ui/button';
import { Check } from 'lucide-react';

interface WireframeDailyLifeReadyProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeDailyLifeReady({ onNavigate }: WireframeDailyLifeReadyProps) {
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

          {/* Success Content */}
          <div className="text-center mb-12 py-8">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-zinc-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Check className="w-12 h-12 text-white" />
            </div>

            {/* Title */}
            <div className="w-56 h-5 bg-zinc-600 mx-auto mb-3 rounded" />
            <div className="w-48 h-5 bg-zinc-600 mx-auto mb-8 rounded" />
            
            {/* Description */}
            <div className="w-full h-3 bg-zinc-400 mx-auto mb-2 rounded" />
            <div className="w-full h-3 bg-zinc-400 mx-auto mb-2 rounded" />
            <div className="w-3/4 h-3 bg-zinc-400 mx-auto mb-8 rounded" />

            {/* Feature List */}
            <div className="text-left bg-zinc-100 border-2 border-zinc-300 rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                    <div className="w-3/4 h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                    <div className="w-2/3 h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-zinc-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                    <div className="w-4/5 h-2 bg-zinc-300 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <Button
              onClick={() => onNavigate('wireframe-dailylife-settings')}
              className="w-full bg-zinc-700 text-white hover:bg-zinc-800 py-4 mb-3"
            >
              Get Started
            </Button>

            {/* Secondary Link */}
            <div className="w-40 h-2 bg-zinc-400 mx-auto rounded" />
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('wireframe-dailylife-init')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Daily Life Ready (Screen C)
      </div>
    </div>
  );
}
