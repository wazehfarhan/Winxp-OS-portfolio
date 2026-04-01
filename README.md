# 🚀 Farhan's Portfolio OS — Enhanced Windows XP Web Experience (v2.0)

[![Vanilla](https://img.shields.io/badge/VanillaJS-100%25-blue?style=flat&logo=javascript&logoColor=yellow)](https://vanillajs.net/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

A **fully functional, zero-dependency** browser-based Windows XP clone rebuilt as an interactive portfolio. Features authentic XP UI with **modern upgrades**: macOS-inspired login, C/C++ IDEs with transpilers, responsive design, performance optimizations, and glassmorphism apps.

## 🌟 [Live Demo](https://wazehfarhan.github.io/Winxp-OS-portfolio/)

## 📸 Screenshots

|           Boot/Login           |               Desktop               |          Modern Apps          |
| :----------------------------: | :---------------------------------: | :---------------------------: |
| ![Boot](screenshots/login.png) | ![Desktop](screenshots/desktop.png) | ![Apps](screenshots/apps.png) |

## 🚀 Key Upgrades (v2.0 vs Original)

- **macOS Lock Screen Login**: Live clock, blur effects, smooth animations (**Continue button**).
- **Linux-like Boot Terminal**: Authentic sequence with typing animation.
- **Performance**: Fast drag/resize (direct DOM), no lag.
- **Mobile/Responsive**: Full mobile UI (stacked taskbar, fullscreen apps).
- **Modern Apps**: Glassmorphism cards, Inter/Outfit fonts, dark-mode ready (`css/modern-apps.css`).
- **New IDEs**: **C IDE** (transpiles C→JS, printf parser, templates, resizable terminal), **C++ IDE** (VSCode-style).
- **Enhanced Apps**: Notepad (toolbar, find, stats, download), Explorer (modern grid), IE (portfolio browser).

## 🖥️ Core System Features

- **Desktop**: Icons, context menu (new folder/file), wallpaper.
- **Taskbar**: Start menu, quick launch, live clock, app switching.
- **Window Manager**: Drag/resize/min/max/close, z-index stacking.
- **Start Menu**: User profile (pro pic), categorized apps, shutdown dialog (standby/restart/shutdown).

## 📱 Full App List (14 Apps)

| Portfolio     | Resume          | Projects         | Education           | Skills     | About            | Contact       |
| ------------- | --------------- | ---------------- | ------------------- | ---------- | ---------------- | ------------- |
| Intro & story | View PDF resume | Project showcase | Academic background | Skill bars | Personal details | Contact links |

| Drawing        | Calendar  | Explorer      | IE                | **C IDE**        | **C++ IDE**     | Notepad        |
| -------------- | --------- | ------------- | ----------------- | ---------------- | --------------- | -------------- |
| Canvas drawing | Month nav | File grid sim | Portfolio browser | **C transpiler** | **VSCode-like** | Toolbar + find |

## 🛠️ Tech Stack

- **Frontend**: Pure **HTML5/CSS3/Vanilla JS (ES6+)**
- **No Dependencies**: Zero frameworks/libraries (runs offline).
- **Fonts**: Google Fonts (Inter, Outfit).
- **Design**: XP gradients + **modern glassmorphism**, responsive grids.
- **Assets**: Custom SVG icons, propic.png, wallpaper.png, resume PDF.

## 📁 Project Structure

```
Winxp-OS-portfolio/
├── index.html                 # Entry (SEO meta, boot/login/desktop)
├── script.js                  # OS bootstrap (boot seq, macOS login)
├── style.css                  # XP + responsive styles
├── css/
│   ├── xp.css                 # Classic XP theme
│   └── modern-apps.css        # Glassmorphism/modern UI
├── system/                    # Core OS
│   ├── windowManager.js       # Drag/resize/z-index
│   ├── taskbar.js             # Quick launch/clock
│   └── startMenu.js           # User menu/shutdown
├── apps/ (14)                 # Modular apps
│   ├── portfolio.js, resume.js, ... (portfolio apps)
│   ├── c-ide.js               # C transpiler w/ terminal
│   ├── cpp-ide.js             # C++ VSCode-style
│   └── notepad.js             # Modern editor
├── assets/
│   ├── icons/*.svg (17)       # App icons
│   ├── img/propic.png         # Profile
│   ├── wallpaper/walpaper.png
│   └── Documents/resume.pdf
├── screenshots/
├── LICENSE
└── README.md
```

## 🎯 Quick Start

```bash
# Clone & run (no server needed, but recommended for assets)
git clone https://github.com/wazehfarhan/Winxp-OS-portfolio.git
cd Winxp-OS-portfolio

# Open directly
open index.html

# Or local server
npx http-server . -p 8000    # Node
python -m http.server 8000   # Python
php -S localhost:8000        # PHP
```

**Login**: Click **Continue** button on macOS-style lock screen (no password required).

## 🎮 Usage

- **Desktop**: Double-click icons, right-click context menu.
- **Windows**: Drag titlebar, resize SE corner.
- **C IDE**: Edit C code → Run (transpiles/executes, printf/%d/%f support).
- **Mobile**: Pinch/zoom, tap to focus.

## 📈 Performance & Accessibility

- **60fps Drag/Resize**: Direct style updates.
- **ARIA Labels**: Screen reader friendly.
- **Focus-Visible**: Keyboard nav.
- **PWA-Ready**: Offline-capable.

## 🔄 Changelog

| v2.0 | macOS login, C/C++ IDEs, modern apps, responsive, perf fixes |
| ---- | ------------------------------------------------------------ |
| v1.x | Basic XP clone (old README)                                  |

## 🚧 Roadmap

- [ ] PWA install/manifest.
- [ ] LocalStorage persistence (files/saves).
- [ ] More transpilers (Python?).
- [ ] Themes (dark mode toggle).

## 📄 License

[MIT License](LICENSE) — Free to use/fork.

## 🙏 Credits

Built by [Kazi Md. Wazeh Ullah Farhan](https://wazehfarhan.github.io) — Pure vanilla magic! 🎉

---

⭐ **Star on GitHub** if you like retro-modern vibes!
