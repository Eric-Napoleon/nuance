# Nuance — Daily Nuanced Vocabulary PWA 📱✨

**Nuance** is a personal, mobile-first Progressive Web App designed to help you elevate your daily conversational vocabulary without sounding like a 19th-century dictionary or a GRE prep book.

Instead of memorizing obscure trivia, you learn **high-yield, sophisticated words** that you can immediately use in casual chats, meetings, emails, and thoughtful discussions.

---

## 🌟 Key Features

1. **10 Nuanced Words Every Day** (100 curated foundational words across 10 themed packs):
   - **⚡ Conversational Upgrade**: *"Instead of saying [overused phrase] ➔ Elevate to [Nuanced Word]"*
   - **Plain English Definition**: Clear, direct, and jargon-free.
   - **Real-World Contexts**: Separate examples for **☕ Casual conversation** (friends, coffee, dinners) and **💼 Eloquent workplace** (meetings, emails, strategy).
   - **💡 Nuance & Pitfalls**: Advice on how to use the word naturally without sounding pretentious or forced.
   - **🔊 Audio Pronunciation**: Tap to hear pronunciation aloud (uses native Web Speech synthesis, works completely offline).

2. **Interactive Practice for Every Word**:
   - **1. Context Drill**: Realistic dialogue scenario with multiple-choice application and immediate explanatory feedback.
   - **2. Sentence Crafting Challenge**: Write your own sentence using the word with instant validation and comparison against curated model sentences.

3. **🗣️ Daily Real-Talk Missions**:
   - 3 actionable micro-challenges every day (e.g. *"Slip 'pragmatic' into a text today"*, *"Notice overused simple words and mentally swap them"*).
   - Daily streak tracking 🔥 that persists to your device.

4. **⚡ Spaced Repetition Speed Review**:
   - Rapid 5-word workout testing recall across all your learned words.
   - Tracks your progress from *Learning* to *Mastered*.

5. **📚 Personal Word Vault**:
   - Search across all words, definitions, and "instead of" phrases.
   - Star your favorite words for quick reference.
   - **+ Add Custom Word**: Add any new word you encounter in books or podcasts to your personal vault!
   - Export your entire progress to a JSON backup file anytime.

---

## 🚀 Quick Start (Run & Use on Your Phone)

### 1. Run Locally on Your Computer

Open your terminal in this folder and run:

```bash
python3 server.py
```

You'll see output like this:
```
========================================================
  ✨ Nuance Vocabulary PWA is Running! ✨
========================================================
  • On your computer:  http://localhost:8080
  • On your phone:     http://192.168.1.XX:8080
========================================================
```

### 2. Open and Install on Your Phone

Make sure your phone is connected to the same Wi-Fi as your computer:

#### 📱 On iPhone (iOS):
1. Open **Safari** and go to `http://<your-computer-ip>:8080` (e.g. `http://192.168.1.45:8080`).
2. Tap the **Share** button (the square with an arrow pointing upward at the bottom of Safari).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add** in the top right.
5. **Done!** Nuance will now appear on your home screen with its custom icon. When opened, it runs in full-screen standalone mode with zero browser bars—just like a native App Store app, and works 100% offline!

#### 🤖 On Android:
1. Open **Chrome** and go to `http://<your-computer-ip>:8080`.
2. Tap the **three dots menu (⋮)** in the top right corner.
3. Tap **"Install app"** or **"Add to Home screen"**.
4. Confirm installation. The app will be added to your app drawer and home screen.

---

## 🌐 Free 24/7 Cloud Hosting (No Computer Needed!)

If you don't want to leave your computer running when you're away from home, you can host Nuance completely free in 60 seconds on any static web host:

### Option A: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Visit `https://<your-username>.github.io/<repo-name>/` from your phone!

### Option B: Vercel / Netlify
- Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for an instant, permanent HTTPS URL.

---

## 📂 Project Architecture

```
vocab refinement/
├── index.html        # Responsive mobile app shell & PWA container
├── manifest.json     # PWA manifest (standalone mode, theme colors, icons)
├── sw.js             # Service Worker for 100% offline caching
├── server.py         # Zero-dependency local server with Wi-Fi IP auto-detection
├── css/
│   └── style.css     # Clean iOS/Android native design system (dark & light modes)
├── js/
│   ├── app.js        # Main state manager (LocalStorage, navigation, streak)
│   ├── words.js      # 100 curated high-yield conversational words across 10 themed packs
│   ├── audio.js      # Web Speech pronunciation engine (works offline)
│   └── drills.js     # Scenario drills, sentence evaluator, speed quiz generator
└── icons/
    └── icon.svg      # High-resolution vector app icon
```

---

## 💡 The 10 Curated Day Packs

1. **Day 1: Precision in Decision-Making** (*Pragmatic, Nuance, Tenable, Delineate, Salient...*)
2. **Day 2: Persuasion, Evidence & Articulation** (*Bolster, Articulate, Cogent, Corroborate, Lucid...*)
3. **Day 3: Dynamics, Change & Momentum** (*Galvanize, Catalyst, Mitigate, Exacerbate, Fleeting...*)
4. **Day 4: Perception, Character & People** (*Astute, Discerning, Reticent, Gregarious, Tacit...*)
5. **Day 5: Contrast, Complexity & Substance** (*Quintessential, Ubiquitous, Disparity, Paradox, Arbitrary...*)
6. **Day 6: Social Grace, Tact & Conversation** (*Demur, Defer, Diplomatic, Concede, Resonate...*)
7. **Day 7: Emotional & Mental States** (*Poignant, Ambivalent, Complacent, Resilient, Sanguine...*)
8. **Day 8: Action, Strategy & Leadership** (*Spearhead, Orchestrate, Streamline, Leverage, Pivot...*)
9. **Day 9: Skepticism, Truth & Integrity** (*Specious, Disingenuous, Fallible, Dogmatic, Skeptical...*)
10. **Day 10: Wit, Expression & Eloquence** (*Apt, Pithy, Eloquent, Banter, Panache, Gravitas...*)
