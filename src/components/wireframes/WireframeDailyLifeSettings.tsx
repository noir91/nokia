import { Button } from '../ui/button';

interface WireframeDailyLifeSettingsProps {
  onNavigate: (screen: string) => void;
}

export default function WireframeDailyLifeSettings({ onNavigate }: WireframeDailyLifeSettingsProps) {
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

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-zinc-400 rounded" />
              <div className="w-32 h-5 bg-zinc-600 rounded" />
            </div>
            <div className="w-full h-2 bg-zinc-300 rounded" />
          </div>

          {/* Settings Content */}
          <div className="space-y-6">
            {/* Privacy Hub Section */}
            <div className="bg-zinc-100 border-2 border-zinc-300 rounded-lg p-6">
              <div className="w-32 h-4 bg-zinc-500 mb-4 rounded" />
              
              {/* Daily Life Mode Toggle */}
              <div className="bg-white border-2 border-zinc-400 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="w-40 h-3 bg-zinc-600 mb-2 rounded" />
                    <div className="w-32 h-2 bg-zinc-400 rounded" />
                  </div>
                  {/* Toggle Switch - ON state */}
                  <div className="w-14 h-8 bg-zinc-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 bg-zinc-200 border border-zinc-400 rounded p-3">
                <div className="w-3 h-3 bg-zinc-600 rounded-full flex-shrink-0" />
                <div className="w-full h-2 bg-zinc-500 rounded" />
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-zinc-100 border-2 border-zinc-300 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-zinc-400 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="w-32 h-3 bg-zinc-600 mb-2 rounded" />
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-zinc-400 rounded" />
                    <div className="w-full h-2 bg-zinc-400 rounded" />
                    <div className="w-3/4 h-2 bg-zinc-400 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white border-2 border-zinc-300 rounded-lg p-4">
                <div className="w-40 h-3 bg-zinc-500 rounded" />
                <div className="w-6 h-6 bg-zinc-300 rounded" />
              </div>
              <div className="flex items-center justify-between bg-white border-2 border-zinc-300 rounded-lg p-4">
                <div className="w-40 h-3 bg-zinc-500 rounded" />
                <div className="w-6 h-6 bg-zinc-300 rounded" />
              </div>
              <div className="flex items-center justify-between bg-white border-2 border-zinc-300 rounded-lg p-4">
                <div className="w-40 h-3 bg-zinc-500 rounded" />
                <div className="w-6 h-6 bg-zinc-300 rounded" />
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => onNavigate('wireframe-landing')}
              className="w-full bg-zinc-700 text-white hover:bg-zinc-800 py-4"
            >
              Done
            </Button>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('wireframe-dailylife-ready')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      {/* Wireframe Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 1: Wireframe - Privacy Hub Settings (Screen D)
      </div>
    </div>
  );
}
