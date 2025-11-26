import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Settings, CameraOff, MicOff, Activity, Shield, WifiOff } from 'lucide-react';

export default function VariantBDailyLifeSettings({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-zinc-900 rounded-3xl p-12 shadow-2xl border border-teal-500/30">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="w-6 h-6 text-teal-400" />
            <h2 className="text-white">Privacy Settings</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <h3 className="text-white mb-4">Full Privacy Mode Controls</h3>
              
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CameraOff className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-white mb-1">Block Camera</div>
                        <div className="text-zinc-400 text-sm">Disable all camera access</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MicOff className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-white mb-1">Block Microphone</div>
                        <div className="text-zinc-400 text-sm">Disable all microphone access</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-white mb-1">Sensor Kill Switch</div>
                        <div className="text-zinc-400 text-sm">Disable gyroscope, accelerometer</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-white mb-1">App Tracking Monitor</div>
                        <div className="text-zinc-400 text-sm">Block all app tracking attempts</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <WifiOff className="w-5 h-5 text-teal-400" />
                      <div>
                        <div className="text-white mb-1">Offline Mode Switch</div>
                        <div className="text-zinc-400 text-sm">Disconnect all network access</div>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-500/10 rounded-xl p-6 border border-teal-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full" />
                <span className="text-teal-400">Full Privacy Mode Active</span>
              </div>
              <p className="text-zinc-400 text-sm">All privacy protections enabled. Your data is completely secure.</p>
            </div>

            <Button onClick={() => onNavigate('variant-b-landing')} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6">
              Done
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => onNavigate('variant-b-dailylife-ready')} variant="ghost" className="text-zinc-400">← Back</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant B: Privacy Settings
      </div>
    </div>
  );
}