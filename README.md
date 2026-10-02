

🚀 CalcFlow v1.0.0 — Modern Scientific & Mobile Calculator

Welcome to the initial public release of CalcFlow — a modern, responsive, mobile-first calculator built with React 19, Tailwind CSS, and TanStack Start.

---

✨ Highlights & Features

🧮 Dual Mode (Basic + Scientific)
* Standard Arithmetic: Clean, intuitive keypad for daily quick math.
* Scientific Suite: Full support for trigonometry ($\sin, \cos, \tan$, inverses), logarithms ($\ln, \log_{10}$), powers, roots, factorials ($x!$), and constants ($\pi, e$).
* Real-time Evaluation: Clean expression tape showing current inputs and live results.

🔄 Adaptive Screen Rotation & Landscape Mode
* Auto-Orientation: Automatically expands to the scientific layout when rotated into landscape on mobile devices.
* One-Tap Rotate Toggle: Instantly toggle between compact portrait and full-panel scientific views without physically rotating your screen.

🎨 Custom Theme Palettes
Personalize your workspace with 5 built-in themes:
* Midnight (Dark modern slate)
* Sunrise (Warm radiant amber)
* Forest (Emerald & sage green)
* Rose (Vibrant crimson & blush)
* Mono (High-contrast minimalist grayscale)

📋 Clipboard & Calculation History
* Clipboard Integration: One-click copy for answers, plus direct clipboard pasting for external math strings.
* History Drawer: Automatically captures all solved equations with timestamps; tap any past calculation to restore or re-use its value.

📱 Responsive & Touch-Optimized
* Built with mobile ergonomics in mind — large touch targets, tactile button feedback, and full keyboard shortcut support for desktop users.

---

🛠️ Tech Stack

* Framework: React 19 & TanStack Start
* Styling: Tailwind CSS v4 & Lucide Icons
* Engine: Custom precision calculation engine
* Notifications: Sonner toast alerts

---

📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/HirushaMalindra/Smart-Calculator.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds the app as a static site and deploys it to
GitHub Pages whenever changes are pushed to `main`.

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and set **Build and deployment**
   to **GitHub Actions**.
3. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow
   to finish. The deployed site will be available at
   `https://<your-username>.github.io/<repository-name>/`.

The workflow sets the repository subpath automatically. For a custom domain,
change `BASE_PATH` in `.github/workflows/deploy-pages.yml` to `/`.

---
