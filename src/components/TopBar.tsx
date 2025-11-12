import { Moon, Sun, User, Search } from 'lucide-react';
import { BeltPill } from './BeltPill';
import { BrandButton } from './BrandButton';
import { useBeltTheme, BeltLevel, beltThemes } from '@/contexts/BeltThemeContext';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TopBar() {
  const { setBelt } = useBeltTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showBeltMenu, setShowBeltMenu] = useState(false);

  useEffect(() => {
    // Check system preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight-700 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M12 12l8-5M12 12v10M12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Storming the Castle</h1>
            <p className="text-xs text-muted-foreground">Tang Soo Do Training</p>
          </div>
        </div>

        {/* Center Search (hidden on mobile) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search forms, one steps..."
              className="w-full rounded-xl border bg-background pl-10 pr-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button 
              onClick={() => setShowBeltMenu(!showBeltMenu)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
            >
              <BeltPill />
            </button>
            
            {showBeltMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowBeltMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 z-50 w-48 rounded-2xl border bg-popover p-2 shadow-card">
                  {(Object.keys(beltThemes) as BeltLevel[]).map((belt) => (
                    <button
                      key={belt}
                      onClick={() => {
                        setBelt(belt);
                        setShowBeltMenu(false);
                      }}
                      className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-muted transition-colors"
                    >
                      {beltThemes[belt].displayName}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-foreground" />
            ) : (
              <Sun className="h-5 w-5 text-foreground" />
            )}
          </button>

          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label="Profile menu"
          >
            <User className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
