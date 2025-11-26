import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Settings, Shield, Info } from 'lucide-react';

interface VariantADailyLifeSettingsProps {
  onNavigate: (screen: string) => void;
}

export default function VariantADailyLifeSettings({ onNavigate }: VariantADailyLifeSettingsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8 py-16">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-zinc-200">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-zinc-900">Privacy Hub</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
              <h3 className="text-zinc-900 mb-4">Daily Life Mode</h3>
              
              <div className="bg-white rounded-lg p-5 mb-4 border border-zinc-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-zinc-900 mb-1">Daily Life Mode</div>
                    <div className="text-zinc-600 text-sm">App compatibility with privacy protection</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-blue-900 text-sm">Mode active — Google services sandboxed</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-zinc-900 mb-2">How it works</h4>
                  <p className="text-zinc-600 text-sm">
                    Turn off anytime — Google services pause instantly. Your apps continue working in 
                    secure mode with limited functionality. Toggle back on when you need full compatibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                <span className="text-zinc-700">Privacy Dashboard</span>
                <Button variant="ghost" size="sm" className="text-blue-600">View</Button>
              </div>
              <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                <span className="text-zinc-700">Secure Folder</span>
                <Button variant="ghost" size="sm" className="text-blue-600">Open</Button>
              </div>
              <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200 rounded-lg p-4">
                <span className="text-zinc-700">Privacy Switches</span>
                <Button variant="ghost" size="sm" className="text-blue-600">Configure</Button>
              </div>
            </div>

            <Button
              onClick={() => onNavigate('variant-a-landing')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
            >
              Done
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('variant-a-dailylife-ready')}
            variant="ghost"
            className="text-zinc-600"
          >
            ← Back
          </Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: Daily Life Settings
      </div>
    </div>
  );
}
