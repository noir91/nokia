import { Button } from '../ui/button';
import { Shield, CameraOff, MicOff, EyeOff, WifiOff } from 'lucide-react';

export default function VariantBDailyLifeReady({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-zinc-900 rounded-3xl p-12 shadow-2xl border border-teal-500/30">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-teal-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-white mb-4">You Are Now Fully Private.</h2>
            <p className="text-zinc-400 text-lg mb-8">Your phone disables all trackers, sensors, and permissions.</p>

            <div className="bg-teal-500/10 rounded-xl p-6 mb-8 border border-teal-500/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-zinc-800 rounded-lg">
                  <CameraOff className="w-6 h-6 text-teal-400" />
                  <span className="text-zinc-300 text-sm">Camera Blocked</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-zinc-800 rounded-lg">
                  <MicOff className="w-6 h-6 text-teal-400" />
                  <span className="text-zinc-300 text-sm">Mic Blocked</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-zinc-800 rounded-lg">
                  <EyeOff className="w-6 h-6 text-teal-400" />
                  <span className="text-zinc-300 text-sm">Tracking Blocked</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-zinc-800 rounded-lg">
                  <WifiOff className="w-6 h-6 text-teal-400" />
                  <span className="text-zinc-300 text-sm">Offline Switch</span>
                </div>
              </div>
            </div>

            <Button onClick={() => onNavigate('variant-b-dailylife-settings')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
              Manage Privacy Settings
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => onNavigate('variant-b-dailylife-init')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Full Privacy Active
      </div>
    </div>
  );
}