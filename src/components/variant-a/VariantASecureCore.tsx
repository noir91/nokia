import { Button } from '../ui/button';
import { Lock, FolderLock, BarChart3, Cpu, ToggleRight } from 'lucide-react';

interface VariantASecureCoreProps {
  onNavigate: (screen: string) => void;
}

export default function VariantASecureCore({ onNavigate }: VariantASecureCoreProps) {
  const modules = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure Mode',
      description: 'One-tap lockdown that disables all network connections, cameras, and microphones. Complete privacy when you need it most.',
      features: ['Network isolation', 'Camera & mic lockdown', 'App sandboxing']
    },
    {
      icon: <FolderLock className="w-8 h-8" />,
      title: 'Secure Folder',
      description: 'Encrypted vault for your sensitive files and apps. Protected by hardware encryption and biometric authentication.',
      features: ['AES-256 encryption', 'Biometric access', 'Hidden from system']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Privacy Dashboard',
      description: 'Real-time monitoring of app permissions and data access. See exactly what your apps are doing.',
      features: ['Permission tracking', 'Access logs', 'Data usage insights']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Hardware Encryption Chip',
      description: 'Dedicated security processor that handles all encryption operations independently from the main CPU.',
      features: ['Isolated processing', 'Key storage', 'Tamper detection']
    },
    {
      icon: <ToggleRight className="w-8 h-8" />,
      title: 'Physical Privacy Switch',
      description: 'Hardware kill switches that physically disconnect cameras and microphones. No software can override them.',
      features: ['Camera disconnect', 'Microphone cutoff', 'Physical indicator']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <button onClick={() => onNavigate('variant-a-landing')} className="flex items-center">
            <div className="text-blue-600 mr-1">NOKIA</div>
            <div className="text-zinc-900">Secure</div>
          </button>
          <Button onClick={() => onNavigate('variant-a-features')} variant="ghost">
            ← Back
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block px-4 py-1 bg-blue-500 rounded-full text-sm mb-6">
            Nokia SecureCore
          </div>
          <h1 className="text-white mb-6">Five Layers of Protection</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Hardware and software working together to create the most secure smartphone experience. 
            Every layer designed to keep your data yours.
          </p>
        </div>
      </section>

      {/* Modules */}
      {modules.map((module, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 1 ? 'order-2' : ''}`}>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
                  Module {index + 1}
                </div>
                <h2 className="text-zinc-900 mb-6">{module.title}</h2>
                <p className="text-zinc-600 text-lg mb-6">
                  {module.description}
                </p>
                <ul className="space-y-3">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-br from-blue-50 to-zinc-100 rounded-2xl p-16 flex items-center justify-center ${index % 2 === 1 ? 'order-1' : ''}`}>
                <div className="text-blue-600">
                  {module.icon}
                  <div className="w-48 h-48 border-4 border-blue-200 rounded-full mt-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-blue-600 mb-2">{module.title}</div>
                      <div className="text-zinc-500 text-sm">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-white mb-4">Complete privacy control at your fingertips</h2>
          <p className="text-blue-100 text-lg mb-8">
            Experience the Nokia SecureCore ecosystem. Pre-order now.
          </p>
          <Button
            onClick={() => onNavigate('variant-a-product')}
            className="bg-white text-blue-600 hover:bg-zinc-100 px-12"
          >
            See Product Details
          </Button>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded text-sm shadow-lg">
        Variant A: SecureCore
      </div>
    </div>
  );
}