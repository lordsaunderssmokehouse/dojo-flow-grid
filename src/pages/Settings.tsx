import { BrandCard, CardTitle, CardDescription } from '@/components/BrandCard';
import { useBeltTheme, BeltLevel, beltThemes } from '@/contexts/BeltThemeContext';
import { Settings as SettingsIcon, Moon, Sun, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Settings() {
  const { currentBelt, setBelt } = useBeltTheme();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'korean' | 'english'>('korean');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
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
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your training experience</p>
      </div>

      <div className="space-y-6">
        {/* Belt Selection */}
        <BrandCard className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <SettingsIcon className="h-5 w-5 text-muted-foreground mt-0.5" strokeWidth={1.5} />
            <div className="flex-1">
              <CardTitle className="text-base mb-1">Current Belt</CardTitle>
              <CardDescription>Select your current rank to see relevant content</CardDescription>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(Object.keys(beltThemes) as BeltLevel[]).map((belt) => (
              <button
                key={belt}
                onClick={() => setBelt(belt)}
                className={cn(
                  'p-4 rounded-xl border-2 transition-all text-left',
                  currentBelt === belt
                    ? 'border-midnight-700 bg-midnight-50 dark:bg-midnight-900/30'
                    : 'border-border hover:border-midnight-300'
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ 
                      backgroundColor: `hsl(${beltThemes[belt].color})`,
                      border: belt === 'white' ? '1px solid hsl(var(--border))' : 'none',
                    }} 
                  />
                  <span className="text-sm font-medium">{beltThemes[belt].displayName}</span>
                </div>
                <div className="text-xs text-muted-foreground">{beltThemes[belt].koreanName}</div>
              </button>
            ))}
          </div>
        </BrandCard>

        {/* Theme Toggle */}
        <BrandCard className="p-6">
          <div className="flex items-start gap-3 mb-4">
            {theme === 'light' ? (
              <Sun className="h-5 w-5 text-muted-foreground mt-0.5" strokeWidth={1.5} />
            ) : (
              <Moon className="h-5 w-5 text-muted-foreground mt-0.5" strokeWidth={1.5} />
            )}
            <div className="flex-1">
              <CardTitle className="text-base mb-1">Theme</CardTitle>
              <CardDescription>Choose your preferred color scheme</CardDescription>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setTheme('light');
                document.documentElement.classList.remove('dark');
              }}
              className={cn(
                'p-4 rounded-xl border-2 transition-all',
                theme === 'light'
                  ? 'border-midnight-700 bg-midnight-50 dark:bg-midnight-900/30'
                  : 'border-border hover:border-midnight-300'
              )}
            >
              <Sun className="h-5 w-5 mb-2 text-foreground" strokeWidth={1.5} />
              <div className="text-sm font-medium">Light</div>
            </button>
            
            <button
              onClick={() => {
                setTheme('dark');
                document.documentElement.classList.add('dark');
              }}
              className={cn(
                'p-4 rounded-xl border-2 transition-all',
                theme === 'dark'
                  ? 'border-midnight-700 bg-midnight-50 dark:bg-midnight-900/30'
                  : 'border-border hover:border-midnight-300'
              )}
            >
              <Moon className="h-5 w-5 mb-2 text-foreground" strokeWidth={1.5} />
              <div className="text-sm font-medium">Dark</div>
            </button>
          </div>
        </BrandCard>

        {/* Language Preference */}
        <BrandCard className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Languages className="h-5 w-5 text-muted-foreground mt-0.5" strokeWidth={1.5} />
            <div className="flex-1">
              <CardTitle className="text-base mb-1">Language Display</CardTitle>
              <CardDescription>Primary language for techniques and forms</CardDescription>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setLanguage('korean')}
              className={cn(
                'p-4 rounded-xl border-2 transition-all',
                language === 'korean'
                  ? 'border-midnight-700 bg-midnight-50 dark:bg-midnight-900/30'
                  : 'border-border hover:border-midnight-300'
              )}
            >
              <div className="text-sm font-medium mb-1">Korean Primary</div>
              <div className="text-xs text-muted-foreground">English subtitle</div>
            </button>
            
            <button
              onClick={() => setLanguage('english')}
              className={cn(
                'p-4 rounded-xl border-2 transition-all',
                language === 'english'
                  ? 'border-midnight-700 bg-midnight-50 dark:bg-midnight-900/30'
                  : 'border-border hover:border-midnight-300'
              )}
            >
              <div className="text-sm font-medium mb-1">English Primary</div>
              <div className="text-xs text-muted-foreground">Korean subtitle</div>
            </button>
          </div>
        </BrandCard>
      </div>
    </div>
  );
}
