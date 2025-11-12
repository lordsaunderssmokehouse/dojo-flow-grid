import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type BeltLevel = 
  | 'white'
  | 'orange'
  | 'green'
  | 'red'
  | 'cho-dan'
  | 'ee-dan';

interface BeltTheme {
  name: string;
  color: string; // HSL value
  stripe: string; // HSL value
  displayName: string;
  koreanName: string;
}

const beltThemes: Record<BeltLevel, BeltTheme> = {
  white: {
    name: 'white',
    color: '0 0% 100%',
    stripe: '221 76% 20%',
    displayName: 'White Belt',
    koreanName: 'Huin Dee',
  },
  orange: {
    name: 'orange',
    color: '24 100% 55%',
    stripe: '221 76% 20%',
    displayName: 'Orange Belt',
    koreanName: 'Joo Hwang Dee',
  },
  green: {
    name: 'green',
    color: '147 73% 44%',
    stripe: '221 76% 20%',
    displayName: 'Green Belt',
    koreanName: 'Nok Dee',
  },
  red: {
    name: 'red',
    color: '2 71% 52%',
    stripe: '221 76% 20%',
    displayName: 'Red Belt',
    koreanName: 'Pahl Kahn Dee',
  },
  'cho-dan': {
    name: 'cho-dan',
    color: '220 13% 6%',
    stripe: '221 76% 20%',
    displayName: 'Cho Dan',
    koreanName: '일단 (Cho Dan)',
  },
  'ee-dan': {
    name: 'ee-dan',
    color: '220 13% 6%',
    stripe: '221 76% 20%',
    displayName: 'Ee Dan',
    koreanName: '이단 (Ee Dan)',
  },
};

interface BeltThemeContextValue {
  currentBelt: BeltLevel;
  setBelt: (belt: BeltLevel) => void;
  beltTheme: BeltTheme;
}

const BeltThemeContext = createContext<BeltThemeContextValue | undefined>(undefined);

export function BeltThemeProvider({ children }: { children: ReactNode }) {
  const [currentBelt, setCurrentBelt] = useState<BeltLevel>('white');

  useEffect(() => {
    // Apply CSS variables for current belt theme
    const theme = beltThemes[currentBelt];
    document.documentElement.style.setProperty('--belt-color', theme.color);
    document.documentElement.style.setProperty('--belt-stripe', theme.stripe);
  }, [currentBelt]);

  const value = {
    currentBelt,
    setBelt: setCurrentBelt,
    beltTheme: beltThemes[currentBelt],
  };

  return (
    <BeltThemeContext.Provider value={value}>
      {children}
    </BeltThemeContext.Provider>
  );
}

export function useBeltTheme() {
  const context = useContext(BeltThemeContext);
  if (!context) {
    throw new Error('useBeltTheme must be used within BeltThemeProvider');
  }
  return context;
}

export { beltThemes };
export type { BeltTheme };
