import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './components/ui/button';

// Import all screen components (will be created)
import WireframeLanding from './components/wireframes/WireframeLanding';
import WireframeFeatures from './components/wireframes/WireframeFeatures';
import WireframeSecureCore from './components/wireframes/WireframeSecureCore';
import WireframeProduct from './components/wireframes/WireframeProduct';
import WireframePurchase from './components/wireframes/WireframePurchase';
import WireframeConfirmation from './components/wireframes/WireframeConfirmation';
import WireframeDailyLifeSetup from './components/wireframes/WireframeDailyLifeSetup';
import WireframeDailyLifeInit from './components/wireframes/WireframeDailyLifeInit';
import WireframeDailyLifeReady from './components/wireframes/WireframeDailyLifeReady';
import WireframeDailyLifeSettings from './components/wireframes/WireframeDailyLifeSettings';

import BrandStyleGuide from './components/branding/BrandStyleGuide';

import VariantALanding from './components/variant-a/VariantALanding';
import VariantAFeatures from './components/variant-a/VariantAFeatures';
import VariantASecureCore from './components/variant-a/VariantASecureCore';
import VariantAProduct from './components/variant-a/VariantAProduct';
import VariantAPurchase from './components/variant-a/VariantAPurchase';
import VariantAConfirmation from './components/variant-a/VariantAConfirmation';
import VariantADailyLifeSetup from './components/variant-a/VariantADailyLifeSetup';
import VariantADailyLifeInit from './components/variant-a/VariantADailyLifeInit';
import VariantADailyLifeReady from './components/variant-a/VariantADailyLifeReady';
import VariantADailyLifeSettings from './components/variant-a/VariantADailyLifeSettings';

import VariantBLanding from './components/variant-b/VariantBLanding';
import VariantBFeatures from './components/variant-b/VariantBFeatures';
import VariantBSecureCore from './components/variant-b/VariantBSecureCore';
import VariantBProduct from './components/variant-b/VariantBProduct';
import VariantBPurchase from './components/variant-b/VariantBPurchase';
import VariantBConfirmation from './components/variant-b/VariantBConfirmation';
import VariantBDailyLifeSetup from './components/variant-b/VariantBDailyLifeSetup';
import VariantBDailyLifeInit from './components/variant-b/VariantBDailyLifeInit';
import VariantBDailyLifeReady from './components/variant-b/VariantBDailyLifeReady';
import VariantBDailyLifeSettings from './components/variant-b/VariantBDailyLifeSettings';

import UserFlowDiagram from './components/UserFlowDiagram';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = {
    home: { name: 'Overview', component: <HomeScreen onNavigate={setCurrentScreen} /> },
    
    // Wireframes
    'wireframe-landing': { name: 'W: Landing', component: <WireframeLanding onNavigate={setCurrentScreen} /> },
    'wireframe-features': { name: 'W: Features', component: <WireframeFeatures onNavigate={setCurrentScreen} /> },
    'wireframe-securecore': { name: 'W: SecureCore', component: <WireframeSecureCore onNavigate={setCurrentScreen} /> },
    'wireframe-product': { name: 'W: Product', component: <WireframeProduct onNavigate={setCurrentScreen} /> },
    'wireframe-purchase': { name: 'W: Purchase', component: <WireframePurchase onNavigate={setCurrentScreen} /> },
    'wireframe-confirmation': { name: 'W: Confirmation', component: <WireframeConfirmation onNavigate={setCurrentScreen} /> },
    'wireframe-dailylife-setup': { name: 'W: DL Setup', component: <WireframeDailyLifeSetup onNavigate={setCurrentScreen} /> },
    'wireframe-dailylife-init': { name: 'W: DL Init', component: <WireframeDailyLifeInit onNavigate={setCurrentScreen} /> },
    'wireframe-dailylife-ready': { name: 'W: DL Ready', component: <WireframeDailyLifeReady onNavigate={setCurrentScreen} /> },
    'wireframe-dailylife-settings': { name: 'W: DL Settings', component: <WireframeDailyLifeSettings onNavigate={setCurrentScreen} /> },
    
    // Branding
    'brand-guide': { name: 'Brand Guide', component: <BrandStyleGuide onNavigate={setCurrentScreen} /> },
    
    // Variant A
    'variant-a-landing': { name: 'A: Landing', component: <VariantALanding onNavigate={setCurrentScreen} /> },
    'variant-a-features': { name: 'A: Features', component: <VariantAFeatures onNavigate={setCurrentScreen} /> },
    'variant-a-securecore': { name: 'A: SecureCore', component: <VariantASecureCore onNavigate={setCurrentScreen} /> },
    'variant-a-product': { name: 'A: Product', component: <VariantAProduct onNavigate={setCurrentScreen} /> },
    'variant-a-purchase': { name: 'A: Purchase', component: <VariantAPurchase onNavigate={setCurrentScreen} /> },
    'variant-a-confirmation': { name: 'A: Confirmation', component: <VariantAConfirmation onNavigate={setCurrentScreen} /> },
    'variant-a-dailylife-setup': { name: 'A: DL Setup', component: <VariantADailyLifeSetup onNavigate={setCurrentScreen} /> },
    'variant-a-dailylife-init': { name: 'A: DL Init', component: <VariantADailyLifeInit onNavigate={setCurrentScreen} /> },
    'variant-a-dailylife-ready': { name: 'A: DL Ready', component: <VariantADailyLifeReady onNavigate={setCurrentScreen} /> },
    'variant-a-dailylife-settings': { name: 'A: DL Settings', component: <VariantADailyLifeSettings onNavigate={setCurrentScreen} /> },
    
    // Variant B
    'variant-b-landing': { name: 'B: Landing', component: <VariantBLanding onNavigate={setCurrentScreen} /> },
    'variant-b-features': { name: 'B: Features', component: <VariantBFeatures onNavigate={setCurrentScreen} /> },
    'variant-b-securecore': { name: 'B: SecureCore', component: <VariantBSecureCore onNavigate={setCurrentScreen} /> },
    'variant-b-product': { name: 'B: Product', component: <VariantBProduct onNavigate={setCurrentScreen} /> },
    'variant-b-purchase': { name: 'B: Purchase', component: <VariantBPurchase onNavigate={setCurrentScreen} /> },
    'variant-b-confirmation': { name: 'B: Confirmation', component: <VariantBConfirmation onNavigate={setCurrentScreen} /> },
    'variant-b-dailylife-setup': { name: 'B: DL Setup', component: <VariantBDailyLifeSetup onNavigate={setCurrentScreen} /> },
    'variant-b-dailylife-init': { name: 'B: DL Init', component: <VariantBDailyLifeInit onNavigate={setCurrentScreen} /> },
    'variant-b-dailylife-ready': { name: 'B: DL Ready', component: <VariantBDailyLifeReady onNavigate={setCurrentScreen} /> },
    'variant-b-dailylife-settings': { name: 'B: DL Settings', component: <VariantBDailyLifeSettings onNavigate={setCurrentScreen} /> },
    
    // User Flow
    'user-flow': { name: 'User Flow Diagram', component: <UserFlowDiagram onNavigate={setCurrentScreen} /> },
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <span className="text-zinc-900">Nokia Secure — MVP Design System</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentScreen('home')}
          >
            Home
          </Button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar Menu */}
        {menuOpen && (
          <aside className="w-64 bg-white border-r border-zinc-200 min-h-screen p-4 sticky top-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Section 1: Wireframes</h3>
                <div className="space-y-1">
                  {['wireframe-landing', 'wireframe-features', 'wireframe-securecore', 'wireframe-product', 'wireframe-purchase', 'wireframe-confirmation', 'wireframe-dailylife-setup', 'wireframe-dailylife-init', 'wireframe-dailylife-ready', 'wireframe-dailylife-settings'].map((key) => (
                    <button
                      key={key}
                      onClick={() => setCurrentScreen(key)}
                      className={`w-full text-left px-3 py-2 rounded text-sm ${
                        currentScreen === key ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {sections[key].name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Section 2: Branding</h3>
                <button
                  onClick={() => setCurrentScreen('brand-guide')}
                  className={`w-full text-left px-3 py-2 rounded text-sm ${
                    currentScreen === 'brand-guide' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'
                  }`}
                >
                  Brand Style Guide
                </button>
              </div>

              <div>
                <h3 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Section 3: Variant A</h3>
                <div className="space-y-1">
                  {['variant-a-landing', 'variant-a-features', 'variant-a-securecore', 'variant-a-product', 'variant-a-purchase', 'variant-a-confirmation', 'variant-a-dailylife-setup', 'variant-a-dailylife-init', 'variant-a-dailylife-ready', 'variant-a-dailylife-settings'].map((key) => (
                    <button
                      key={key}
                      onClick={() => setCurrentScreen(key)}
                      className={`w-full text-left px-3 py-2 rounded text-sm ${
                        currentScreen === key ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {sections[key].name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Section 3: Variant B</h3>
                <div className="space-y-1">
                  {['variant-b-landing', 'variant-b-features', 'variant-b-securecore', 'variant-b-product', 'variant-b-purchase', 'variant-b-confirmation', 'variant-b-dailylife-setup', 'variant-b-dailylife-init', 'variant-b-dailylife-ready', 'variant-b-dailylife-settings'].map((key) => (
                    <button
                      key={key}
                      onClick={() => setCurrentScreen(key)}
                      className={`w-full text-left px-3 py-2 rounded text-sm ${
                        currentScreen === key ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      {sections[key].name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Section 6: User Flow</h3>
                <button
                  onClick={() => setCurrentScreen('user-flow')}
                  className={`w-full text-left px-3 py-2 rounded text-sm ${
                    currentScreen === 'user-flow' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'
                  }`}
                >
                  User Flow Diagram
                </button>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {sections[currentScreen]?.component || <HomeScreen onNavigate={setCurrentScreen} />}
        </main>
      </div>
    </div>
  );
}

function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-zinc-900 mb-4">🎯 Nokia Secure — Complete MVP Design System</h1>
        <p className="text-zinc-600">
          A comprehensive design system featuring wireframes, branding options, and high-fidelity prototypes for the Nokia Secure privacy-focused smartphone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Section 1 */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6">
          <h2 className="text-zinc-900 mb-2">Section 1: Wireframes</h2>
          <p className="text-zinc-600 text-sm mb-4">
            Low-fidelity grayscale wireframes for all screens including Daily Life Mode flow.
          </p>
          <Button
            onClick={() => onNavigate('wireframe-landing')}
            variant="outline"
            className="w-full"
          >
            View Wireframes
          </Button>
        </div>

        {/* Section 2 */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6">
          <h2 className="text-zinc-900 mb-2">Section 2: Brand Guide</h2>
          <p className="text-zinc-600 text-sm mb-4">
            Logo options, color palettes, taglines, CTAs, and typography system.
          </p>
          <Button
            onClick={() => onNavigate('brand-guide')}
            variant="outline"
            className="w-full"
          >
            View Brand Guide
          </Button>
        </div>

        {/* Section 3A */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6">
          <h2 className="text-zinc-900 mb-2">Section 3: Variant A</h2>
          <p className="text-zinc-600 text-sm mb-4">
            High-fidelity light & premium design with blue branding and "Secure, Fast and Reliable" tagline.
          </p>
          <Button
            onClick={() => onNavigate('variant-a-landing')}
            variant="outline"
            className="w-full"
          >
            View Variant A
          </Button>
        </div>

        {/* Section 3B */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6">
          <h2 className="text-zinc-900 mb-2">Section 3: Variant B</h2>
          <p className="text-zinc-600 text-sm mb-4">
            High-fidelity dark & futuristic design with teal branding and "Secure, Fast and Reliable" tagline.
          </p>
          <Button
            onClick={() => onNavigate('variant-b-landing')}
            variant="outline"
            className="w-full"
          >
            View Variant B
          </Button>
        </div>

        {/* Section 6 */}
        <div className="bg-white border border-zinc-200 rounded-lg p-6">
          <h2 className="text-zinc-900 mb-2">Section 6: User Flow</h2>
          <p className="text-zinc-600 text-sm mb-4">
            Complete user journey from discovery to confirmation including Daily Life Mode.
          </p>
          <Button
            onClick={() => onNavigate('user-flow')}
            variant="outline"
            className="w-full"
          >
            View User Flow
          </Button>
        </div>
      </div>
    </div>
  );
}