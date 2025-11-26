interface ProductMockupProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export default function ProductMockup({ variant = 'light', size = 'medium' }: ProductMockupProps) {
  const sizeClasses = {
    small: 'w-48',
    medium: 'w-64',
    large: 'w-80'
  };

  const isDark = variant === 'dark';

  return (
    <div className={`${sizeClasses[size]} mx-auto`}>
      {/* Phone Body */}
      <div className={`relative aspect-[9/19] rounded-[2.5rem] ${isDark ? 'bg-zinc-800' : 'bg-zinc-700'} p-3 shadow-2xl`}>
        {/* Screen */}
        <div className={`relative h-full rounded-[2rem] overflow-hidden ${isDark ? 'bg-zinc-900' : 'bg-zinc-800'}`}>
          {/* Notch */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 ${isDark ? 'bg-zinc-800' : 'bg-zinc-700'} rounded-b-2xl flex items-center justify-center gap-2 z-10`}>
            <div className="w-12 h-2 bg-zinc-900 rounded-full" />
            <div className="w-2 h-2 bg-zinc-900 rounded-full" />
          </div>
          
          {/* Screen Content */}
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-zinc-800 to-zinc-900' : 'bg-gradient-to-br from-zinc-700 to-zinc-800'} flex items-center justify-center`}>
            <div className="text-center px-6 mt-8">
              <div className={`${isDark ? 'text-teal-400' : 'text-blue-400'} text-xs mb-2`}>NOKIA</div>
              <div className="text-white text-sm mb-4">Secure</div>
              <div className={`w-12 h-12 ${isDark ? 'bg-teal-500/20 border-teal-400' : 'bg-blue-500/20 border-blue-400'} border-2 rounded-full mx-auto`} />
            </div>
          </div>

          {/* Privacy Switch on Side */}
          <div className={`absolute right-0 top-1/3 w-1 h-8 ${isDark ? 'bg-teal-500' : 'bg-blue-500'} rounded-l`} />
        </div>

        {/* Volume Buttons */}
        <div className={`absolute left-0 top-1/4 w-1 h-12 ${isDark ? 'bg-zinc-700' : 'bg-zinc-600'} rounded-r`} />
        
        {/* Power Button */}
        <div className={`absolute right-0 top-1/4 w-1 h-8 ${isDark ? 'bg-zinc-700' : 'bg-zinc-600'} rounded-l`} />

        {/* Camera Module */}
        <div className="absolute top-6 left-6">
          <div className={`w-10 h-10 ${isDark ? 'bg-zinc-700' : 'bg-zinc-600'} rounded-full flex items-center justify-center`}>
            <div className="w-6 h-6 bg-zinc-900 rounded-full" />
          </div>
        </div>
      </div>

      {/* Rugged Corners Accent */}
      <div className="relative -mt-2">
        <div className={`text-center text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'} pt-4`}>
          Drop-proof | Water-resistant | Military-grade
        </div>
      </div>
    </div>
  );
}