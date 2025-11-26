import { Button } from '../ui/button';

interface WireframeDailyLifeSetupProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeDailyLifeSetup({ onNavigate }: WireframeDailyLifeSetupProps) {
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

          {/* Welcome Content */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-zinc-400 rounded-full mx-auto mb-6" />
            <div className="w-48 h-5 bg-zinc-600 mx-auto mb-3 rounded" />
            <div className="w-40 h-5 bg-zinc-600 mx-auto mb-6 rounded" />
            <div className="w-full h-3 bg-zinc-400 mx-auto mb-2 rounded" />
            <div className="w-full h-3 bg-zinc-400 mx-auto mb-2 rounded" />
            <div className="w-3/4 h-3 bg-zinc-400 mx-auto rounded" />
          </div>

          {/* Option 1: Stay Fully Private (Default Selected) */}
          <div className="bg-zinc-200 border-3 border-zinc-600 rounded-lg p-6 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 bg-zinc-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="flex-1">
                <div className="w-48 h-4 bg-zinc-700 mb-2 rounded" />
                <div className="w-full h-2 bg-zinc-500 mb-1 rounded" />
                <div className="w-full h-2 bg-zinc-500 mb-1 rounded" />
                <div className="w-3/4 h-2 bg-zinc-500 rounded" />
              </div>
            </div>
          </div>

          {/* Option 2: Enable Daily Life Mode */}
          <div className="bg-white border-2 border-zinc-400 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 bg-zinc-300 rounded-full border-2 border-zinc-500 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="w-48 h-4 bg-zinc-600 mb-2 rounded" />
                <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                <div className="w-full h-2 bg-zinc-400 mb-1 rounded" />
                <div className="w-3/4 h-2 bg-zinc-400 rounded" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => onNavigate('wireframe-dailylife-init')}
              className="w-full bg-zinc-700 text-white hover:bg-zinc-800 py-4"
            >
              Continue
            </Button>
            <div className="w-32 h-2 bg-zinc-300 mx-auto rounded" />
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('wireframe-confirmation')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back to Confirmation
          </Button>
        </div>
      </div>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Daily Life Setup (Screen A)
      </div>
    </div>
  );
}
