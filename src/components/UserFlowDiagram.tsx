import { ArrowRight, Circle } from 'lucide-react';

interface UserFlowDiagramProps {
  onNavigate: (screen: string) => void;
}

export default function UserFlowDiagram({ onNavigate }: UserFlowDiagramProps) {
  const flows = [
    { id: 1, name: 'Landing Page', desc: 'Discovery & Hero', link: 'variant-b-landing', color: 'bg-blue-500' },
    { id: 2, name: 'Feature Overview', desc: 'Explore capabilities', link: 'variant-b-features', color: 'bg-blue-500' },
    { id: 3, name: 'SecureCore', desc: 'Security features', link: 'variant-b-securecore', color: 'bg-blue-500' },
    { id: 4, name: 'Product Detail', desc: 'Specs & pricing', link: 'variant-b-product', color: 'bg-blue-500' },
    { id: 5, name: 'Purchase', desc: 'Checkout flow', link: 'variant-b-purchase', color: 'bg-green-500' },
    { id: 6, name: 'Confirmation', desc: 'Order confirmed', link: 'variant-b-confirmation', color: 'bg-green-500' },
    { id: 7, name: 'Full Privacy Setup', desc: 'Privacy mode selection', link: 'variant-b-dailylife-setup', color: 'bg-purple-500' },
    { id: 8, name: 'Initializing', desc: 'Installing services', link: 'variant-b-dailylife-init', color: 'bg-purple-500' },
    { id: 9, name: 'Ready', desc: 'Setup complete', link: 'variant-b-dailylife-ready', color: 'bg-purple-500' },
    { id: 10, name: 'Settings', desc: 'Privacy hub', link: 'variant-b-dailylife-settings', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-zinc-900 mb-2">User Flow Diagram</h1>
          <p className="text-zinc-600">Complete user journey from discovery to Daily Life Mode setup</p>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Flow Legend */}
          <div className="mb-12 flex gap-6 justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded" />
              <span className="text-zinc-600 text-sm">Discovery & Exploration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded" />
              <span className="text-zinc-600 text-sm">Purchase Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded" />
              <span className="text-zinc-600 text-sm">Daily Life Mode Setup</span>
            </div>
          </div>

          {/* Vertical Flow Chart */}
          <div className="max-w-4xl mx-auto">
            {flows.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Flow Node */}
                <div 
                  onClick={() => onNavigate(step.link)}
                  className="bg-white rounded-xl p-8 border-2 border-zinc-200 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-6">
                    <div className={`${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-zinc-900 mb-2">{step.name}</h3>
                      <p className="text-zinc-600">{step.desc}</p>
                      {step.id === 1 && (
                        <ul className="mt-3 space-y-1 text-zinc-500 text-sm">
                          <li className="flex items-center gap-2">
                            <Circle className="w-1 h-1 fill-current" />
                            Hero section with product preview
                          </li>
                          <li className="flex items-center gap-2">
                            <Circle className="w-1 h-1 fill-current" />
                            Three feature blocks
                          </li>
                          <li className="flex items-center gap-2">
                            <Circle className="w-1 h-1 fill-current" />
                            Daily Life Mode intro
                          </li>
                        </ul>
                      )}
                      {step.id === 7 && (
                        <ul className="mt-3 space-y-1 text-zinc-500 text-sm">
                          <li className="flex items-center gap-2">
                            <Circle className="w-1 h-1 fill-current" />
                            Choose privacy mode
                          </li>
                          <li className="flex items-center gap-2">
                            <Circle className="w-1 h-1 fill-current" />
                            Daily Life Mode option
                          </li>
                        </ul>
                      )}
                    </div>
                    <button className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded text-zinc-700 text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < flows.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-zinc-400 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Alternative Paths */}
          <div className="mt-16 bg-white rounded-xl p-8 border-2 border-zinc-200 max-w-4xl mx-auto">
            <h3 className="text-zinc-900 mb-6">Alternative User Paths</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  A
                </div>
                <div>
                  <h4 className="text-zinc-900 mb-1">Direct to Product</h4>
                  <p className="text-zinc-600 text-sm">
                    Users can navigate directly from Landing → Product Detail → Purchase, skipping feature pages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  B
                </div>
                <div>
                  <h4 className="text-zinc-900 mb-1">Skip Daily Life Mode</h4>
                  <p className="text-zinc-600 text-sm">
                    After confirmation, users can choose "Stay Fully Private" instead of enabling Daily Life Mode
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  C
                </div>
                <div>
                  <h4 className="text-zinc-900 mb-1">Return to Home</h4>
                  <p className="text-zinc-600 text-sm">
                    Users can navigate back to home from any screen to restart their journey or explore different sections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Notes */}
          <div className="mt-8 bg-blue-50 rounded-xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-blue-900 mb-4">Interaction Design Notes</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-3">
                <Circle className="w-1.5 h-1.5 fill-current mt-2 flex-shrink-0" />
                <span>All screens include breadcrumb navigation for easy backtracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Circle className="w-1.5 h-1.5 fill-current mt-2 flex-shrink-0" />
                <span>Daily Life Mode toggle is accessible from settings at any time post-setup</span>
              </li>
              <li className="flex items-start gap-3">
                <Circle className="w-1.5 h-1.5 fill-current mt-2 flex-shrink-0" />
                <span>Primary CTAs maintain consistency across all screens (same color and style per variant)</span>
              </li>
              <li className="flex items-start gap-3">
                <Circle className="w-1.5 h-1.5 fill-current mt-2 flex-shrink-0" />
                <span>Loading states with progress indicators provide clear feedback during Daily Life Mode installation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 6: User Flow Diagram
      </div>
    </div>
  );
}