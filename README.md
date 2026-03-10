# 🎵 Dance Dance Little Evlis Zingbah

A 3D rhythm game built with Three.js and Electron.

## How to Play

- Press **A S D F** to hit notes as they cross the hit line
- Build combos for higher scores
- Timing grades: **PERFECT** / **GREAT** / **GOOD** / **MISS**

## Controls

| Key | Lane |
|-----|------|
| A | Lane 1 (Cyan) |
| S | Lane 2 (Magenta) |
| D | Lane 3 (Yellow) |
| F | Lane 4 (Green) |

## Scoring

- Base: 100 pts per hit
- Combo x2 at 4+ combo
- Combo x3 at 8+ combo
- Combo x4 at 16+ combo

## Grades

| Grade | Hit % |
|-------|-------|
| S | 98%+ |
| A | 90%+ |
| B | 75%+ |
| C | 55%+ |
| D | Below 55% |

---

## Running the Game

### Option A — Play instantly (no install)
Just open `index.html` in **Google Chrome** or **Firefox**.

> ⚠️ You need an internet connection the first time (loads Three.js from CDN).
> After that, it works offline if your browser cached it.

### Option B — Desktop App with Electron

**Requirements:** [Node.js](https://nodejs.org) (v18+)

```bash
# 1. Install dependencies
npm install

# 2. Launch the game
npm start
```

### Option C — Build a standalone .exe / .app

```bash
# Install electron-builder
npm install --save-dev electron-builder

# Build for your platform
npx electron-builder build --win     # Windows .exe
npx electron-builder build --mac     # macOS .app
npx electron-builder build --linux   # Linux AppImage
```

---

Made by Khani Lyan & Alex Kurcan
