export interface CalcTheme {
  id: string;
  name: string;
  swatch: string;
  vars: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
  };
}

export const THEMES: CalcTheme[] = [
  {
    id: "midnight",
    name: "Midnight",
    swatch: "oklch(0.65 0.19 250)",
    vars: {
      background: "oklch(0.16 0.02 265)",
      foreground: "oklch(0.95 0.01 260)",
      card: "oklch(0.21 0.025 265)",
      cardForeground: "oklch(0.95 0.01 260)",
      primary: "oklch(0.65 0.19 250)",
      primaryForeground: "oklch(0.98 0.005 250)",
      secondary: "oklch(0.27 0.03 265)",
      secondaryForeground: "oklch(0.9 0.02 260)",
      muted: "oklch(0.25 0.025 265)",
      mutedForeground: "oklch(0.65 0.03 260)",
      accent: "oklch(0.75 0.15 195)",
      accentForeground: "oklch(0.16 0.02 265)",
      border: "oklch(0.3 0.03 265)",
    },
  },
  {
    id: "sunrise",
    name: "Sunrise",
    swatch: "oklch(0.7 0.19 45)",
    vars: {
      background: "oklch(0.97 0.01 80)",
      foreground: "oklch(0.25 0.03 40)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.25 0.03 40)",
      primary: "oklch(0.7 0.19 45)",
      primaryForeground: "oklch(0.99 0.005 80)",
      secondary: "oklch(0.93 0.03 70)",
      secondaryForeground: "oklch(0.3 0.04 40)",
      muted: "oklch(0.94 0.02 75)",
      mutedForeground: "oklch(0.5 0.03 50)",
      accent: "oklch(0.65 0.2 25)",
      accentForeground: "oklch(0.99 0.005 80)",
      border: "oklch(0.9 0.02 70)",
    },
  },
  {
    id: "forest",
    name: "Forest",
    swatch: "oklch(0.6 0.13 155)",
    vars: {
      background: "oklch(0.17 0.02 160)",
      foreground: "oklch(0.93 0.02 150)",
      card: "oklch(0.22 0.025 160)",
      cardForeground: "oklch(0.93 0.02 150)",
      primary: "oklch(0.6 0.13 155)",
      primaryForeground: "oklch(0.15 0.02 160)",
      secondary: "oklch(0.28 0.03 160)",
      secondaryForeground: "oklch(0.88 0.03 150)",
      muted: "oklch(0.26 0.025 160)",
      mutedForeground: "oklch(0.62 0.03 155)",
      accent: "oklch(0.8 0.15 95)",
      accentForeground: "oklch(0.15 0.02 160)",
      border: "oklch(0.31 0.03 160)",
    },
  },
  {
    id: "rose",
    name: "Rose",
    swatch: "oklch(0.65 0.2 10)",
    vars: {
      background: "oklch(0.18 0.02 10)",
      foreground: "oklch(0.94 0.015 15)",
      card: "oklch(0.23 0.025 10)",
      cardForeground: "oklch(0.94 0.015 15)",
      primary: "oklch(0.65 0.2 10)",
      primaryForeground: "oklch(0.98 0.005 15)",
      secondary: "oklch(0.29 0.03 10)",
      secondaryForeground: "oklch(0.9 0.02 15)",
      muted: "oklch(0.27 0.025 10)",
      mutedForeground: "oklch(0.63 0.03 15)",
      accent: "oklch(0.78 0.12 350)",
      accentForeground: "oklch(0.18 0.02 10)",
      border: "oklch(0.32 0.03 10)",
    },
  },
  {
    id: "mono",
    name: "Mono",
    swatch: "oklch(0.7 0 0)",
    vars: {
      background: "oklch(0.14 0 0)",
      foreground: "oklch(0.95 0 0)",
      card: "oklch(0.2 0 0)",
      cardForeground: "oklch(0.95 0 0)",
      primary: "oklch(0.9 0 0)",
      primaryForeground: "oklch(0.14 0 0)",
      secondary: "oklch(0.27 0 0)",
      secondaryForeground: "oklch(0.9 0 0)",
      muted: "oklch(0.25 0 0)",
      mutedForeground: "oklch(0.6 0 0)",
      accent: "oklch(0.8 0 0)",
      accentForeground: "oklch(0.14 0 0)",
      border: "oklch(0.3 0 0)",
    },
  },
];
