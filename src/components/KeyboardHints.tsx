interface KeyboardHint {
  key: string;
  label: string;
}

interface KeyboardHintsProps {
  hints: KeyboardHint[];
}

export function KeyboardHints({ hints }: KeyboardHintsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
      {hints.map((hint, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-mono font-medium">
            {hint.key}
          </kbd>
          <span>{hint.label}</span>
        </div>
      ))}
    </div>
  );
}
