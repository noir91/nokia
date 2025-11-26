import { Shield } from 'lucide-react';

interface BrandStyleGuideProps {
  onNavigate: (screen: string) => void;
}

export default function BrandStyleGuide({ onNavigate }: BrandStyleGuideProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-zinc-900 text-white py-16 border-b-4 border-zinc-800">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="mb-4">Nokia Secure — Brand Style Guide</h1>
          <p className="text-zinc-300">
            Complete branding system with two distinct variants for high-fidelity prototypes
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Logo Options */}
        <section className="mb-20">
          <h2 className="text-zinc-900 mb-2">Logo Options</h2>
          <p className="text-zinc-600 mb-8">Two distinct logo treatments for different brand personalities</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo Option A */}
            <div className="border-2 border-zinc-300 rounded-lg p-8 bg-zinc-50">
              <div className="bg-white rounded-lg p-12 mb-4 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="text-blue-600 mb-2">NOKIA</div>
                  <div className="text-zinc-800">Secure</div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-zinc-900 mb-2">Option A: Modern Minimal</h3>
                <p className="text-zinc-600 text-sm">Clean wordmark emphasizing the Nokia heritage with modern refinement</p>
              </div>
            </div>

            {/* Logo Option B */}
            <div className="border-2 border-zinc-300 rounded-lg p-8 bg-zinc-50">
              <div className="bg-zinc-900 rounded-lg p-12 mb-4 flex items-center justify-center min-h-[200px]">
                <div className="flex items-center gap-3">
                  <Shield className="w-10 h-10 text-teal-400" />
                  <div className="text-left">
                    <div className="text-zinc-300 text-sm">NOKIA</div>
                    <div className="text-white">Secure</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-zinc-900 mb-2">Option B: Shield Icon + Text</h3>
                <p className="text-zinc-600 text-sm">Security-focused design with shield iconography for trust and protection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palettes */}
        <section className="mb-20">
          <h2 className="text-zinc-900 mb-2">Color Palettes</h2>
          <p className="text-zinc-600 mb-8">Two distinct color systems to match brand personality</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Palette A */}
            <div className="border-2 border-zinc-300 rounded-lg p-8">
              <h3 className="text-zinc-900 mb-6">Palette A: Blue, Black, White</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Primary Blue</div>
                    <div className="text-zinc-500 text-sm">#2563EB</div>
                    <div className="text-zinc-500 text-sm">rgb(37, 99, 235)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-900 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Deep Black</div>
                    <div className="text-zinc-500 text-sm">#18181B</div>
                    <div className="text-zinc-500 text-sm">rgb(24, 24, 27)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Pure White</div>
                    <div className="text-zinc-500 text-sm">#FFFFFF</div>
                    <div className="text-zinc-500 text-sm">rgb(255, 255, 255)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-100 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Light Gray</div>
                    <div className="text-zinc-500 text-sm">#F4F4F5</div>
                    <div className="text-zinc-500 text-sm">rgb(244, 244, 245)</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-zinc-700 text-sm">Clean, minimal, premium feel. Perfect for light backgrounds and modern interfaces.</p>
              </div>
            </div>

            {/* Palette B */}
            <div className="border-2 border-zinc-300 rounded-lg p-8">
              <h3 className="text-zinc-900 mb-6">Palette B: Dark Teal, Silver, Charcoal</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-teal-500 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Teal Green</div>
                    <div className="text-zinc-500 text-sm">#14B8A6</div>
                    <div className="text-zinc-500 text-sm">rgb(20, 184, 166)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-800 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Charcoal</div>
                    <div className="text-zinc-500 text-sm">#27272A</div>
                    <div className="text-zinc-500 text-sm">rgb(39, 39, 42)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-400 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Silver</div>
                    <div className="text-zinc-500 text-sm">#A1A1AA</div>
                    <div className="text-zinc-500 text-sm">rgb(161, 161, 170)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-zinc-950 rounded-lg border-2 border-zinc-300" />
                  <div>
                    <div className="text-zinc-900">Deep Charcoal</div>
                    <div className="text-zinc-500 text-sm">#09090B</div>
                    <div className="text-zinc-500 text-sm">rgb(9, 9, 11)</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <p className="text-zinc-700 text-sm">Dark, futuristic, tech-focused. Ideal for dark mode and security-themed interfaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Taglines */}
        <section className="mb-20">
          <h2 className="text-zinc-900 mb-2">Taglines</h2>
          <p className="text-zinc-600 mb-8">Brand messaging options with supporting copy</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tagline A */}
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <div className="text-center mb-6">
                <h3 className="text-blue-600 mb-3">Tagline A</h3>
                <div className="text-zinc-900 text-2xl mb-4">Secure, Fast and Reliable</div>
                <p className="text-zinc-600">Simple, powerful, and confident. Emphasizes innovation and complete redesign of privacy standards.</p>
              </div>
            </div>

            {/* Tagline B */}
            <div className="border-2 border-teal-200 rounded-lg p-8 bg-teal-50">
              <div className="text-center mb-6">
                <h3 className="text-teal-600 mb-3">Tagline B</h3>
                <div className="text-zinc-900 text-2xl mb-4">Secure, Fast and Reliable</div>
                <p className="text-zinc-600">Direct and user-focused. Emphasizes ownership and control over personal information.</p>
              </div>
            </div>
          </div>

          {/* Daily Life Mode Tagline */}
          <div className="mt-8 border-2 border-purple-200 rounded-lg p-8 bg-purple-50">
            <div className="text-center">
              <h3 className="text-purple-600 mb-3">Daily Life Mode Feature Tagline</h3>
              <div className="text-zinc-900 text-2xl mb-4">
                Daily Life Mode: All the apps you need. None of the tracking you don't.
              </div>
              <p className="text-zinc-600">Feature-specific messaging that balances convenience with privacy protection.</p>
            </div>
          </div>
        </section>

        {/* CTA Styles */}
        <section className="mb-20">
          <h2 className="text-zinc-900 mb-2">Call-to-Action (CTA) Options</h2>
          <p className="text-zinc-600 mb-8">Two distinct CTA styles matching each variant's personality</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* CTA Style A */}
            <div className="border-2 border-zinc-300 rounded-lg p-8">
              <h3 className="text-zinc-900 mb-6">CTA Style A</h3>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Secure Your Phone
                </button>
                <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Secure Your Phone
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Secure Your Phone
                </button>
              </div>
              <div className="mt-6 p-4 bg-zinc-100 rounded-lg">
                <p className="text-zinc-700 text-sm">Action-focused, emphasizes protection and security</p>
              </div>
            </div>

            {/* CTA Style B */}
            <div className="border-2 border-zinc-300 rounded-lg p-8 bg-zinc-900">
              <h3 className="text-white mb-6">CTA Style B</h3>
              <div className="space-y-4">
                <button className="w-full bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors">
                  Get Secure Now
                </button>
                <button className="w-full bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors text-sm">
                  Get Secure Now
                </button>
                <button className="w-full border-2 border-teal-500 text-teal-400 px-8 py-4 rounded-lg hover:bg-teal-950 transition-colors">
                  Get Secure Now
                </button>
              </div>
              <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                <p className="text-zinc-300 text-sm">Direct and urgent, emphasizes immediate acquisition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-zinc-900 mb-2">Typography System</h2>
          <p className="text-zinc-600 mb-8">Clean, modern typefaces for optimal readability</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Headlines */}
            <div className="border-2 border-zinc-300 rounded-lg p-8">
              <h3 className="text-zinc-900 mb-6">Headlines: Geometric Sans</h3>
              <div className="space-y-4 mb-6">
                <div className="text-4xl text-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Nokia Secure
                </div>
                <div className="text-3xl text-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Privacy Rebuilt
                </div>
                <div className="text-2xl text-zinc-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Your Data. Your Phone.
                </div>
              </div>
              <div className="p-4 bg-zinc-100 rounded-lg">
                <p className="text-zinc-700 text-sm">Primary: Inter or Poppins</p>
                <p className="text-zinc-600 text-sm">Modern geometric sans-serif with excellent legibility</p>
              </div>
            </div>

            {/* Body Text */}
            <div className="border-2 border-zinc-300 rounded-lg p-8">
              <h3 className="text-zinc-900 mb-6">Body: Neutral Sans</h3>
              <div className="space-y-4 mb-6">
                <p className="text-zinc-700" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  The Nokia Secure is designed for users who demand both functionality and privacy. 
                  With extreme durability, extended battery life, and the revolutionary SecureCore ecosystem, 
                  it's the smartphone that puts you in control.
                </p>
                <p className="text-zinc-600 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Daily Life Mode gives you access to all your essential apps while maintaining robust 
                  privacy protections. You get the convenience you need without compromising your data.
                </p>
              </div>
              <div className="p-4 bg-zinc-100 rounded-lg">
                <p className="text-zinc-700 text-sm">Primary: Roboto or SF Pro</p>
                <p className="text-zinc-600 text-sm">Highly readable neutral sans-serif for body copy</p>
              </div>
            </div>
          </div>

          {/* Font Hierarchy */}
          <div className="mt-8 border-2 border-zinc-300 rounded-lg p-8 bg-zinc-50">
            <h3 className="text-zinc-900 mb-6">Type Scale & Hierarchy</h3>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">H1</div>
                <div className="text-4xl text-zinc-900">48px / 3rem</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">H2</div>
                <div className="text-3xl text-zinc-900">36px / 2.25rem</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">H3</div>
                <div className="text-2xl text-zinc-900">24px / 1.5rem</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">Body Large</div>
                <div className="text-lg text-zinc-900">18px / 1.125rem</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">Body</div>
                <div className="text-base text-zinc-900">16px / 1rem</div>
              </div>
              <div className="flex items-baseline gap-4">
                <div className="w-24 text-zinc-500 text-sm">Small</div>
                <div className="text-sm text-zinc-900">14px / 0.875rem</div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-zinc-900 mb-2">Variant Application Guidelines</h2>
          <p className="text-zinc-600 mb-8">How to apply each branding system</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-blue-200 rounded-lg p-8 bg-blue-50">
              <h3 className="text-blue-600 mb-4">Variant A: Light & Premium</h3>
              <ul className="space-y-3 text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Use Logo Option A (Modern Minimal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Apply Palette A (Blue, Black, White)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Use Tagline A: "Secure, Fast and Reliable"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>CTA: "Secure Your Phone" in Deep Blue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Light backgrounds, clean layouts, premium feel</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-teal-200 rounded-lg p-8 bg-zinc-900">
              <h3 className="text-teal-400 mb-4">Variant B: Dark & Futuristic</h3>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Use Logo Option B (Shield + Nokia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Apply Palette B (Teal, Silver, Charcoal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Use Tagline B: "Secure, Fast and Reliable"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>CTA: "Get Secure Now" in Teal Green</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400">•</span>
                  <span>Dark backgrounds, futuristic UI, tech-focused</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Fixed Label */}
      <div className="fixed bottom-4 right-4 bg-zinc-800 text-white px-4 py-2 rounded text-sm">
        Section 2: Brand Style Guide
      </div>
    </div>
  );
}