// Main application entry point
class WindowsXPWebOS {
  constructor() {
    this.currentScreen = "boot";
    this.wallpaper = "default";
    this.init();
  }

  init() {
    // Initialize boot sequence
    this.startBootSequence();

    // Set up desktop interactions
    this.setupDesktop();
  }

  startBootSequence() {
    const terminal = document.getElementById("boot-terminal");
    const bootMessages = [
      "Initializing Linux kernel v5.15.0-generic...",
      "Loading core components... [ OK ]",
      "Mounting virtual file systems... [ OK ]",
      "Checking disk quotas... [ OK ]",
      "Starting system message bus... [ OK ]",
      "Starting network manager... [ OK ]",
      "Connecting to w2zfrhn interface... [ OK ]",
      "Configuring routing tables... [ OK ]",
      "Establishing secure proxy tunnel... [ OK ]",
      "Initializing cryptosystem modules... [ OK ]",
      "Starting UI subsystem and compositor... [ OK ]",
      "Loading portfolio assets... [ OK ]",
      "Verifying security protocols... [ OK ]",
      "Resolving dependencies... [ OK ]",
      "Mounting user profile 'w2zfrhn'... [ OK ]",
      "System boot sequence complete.",
      "Starting GUI environment...",
      "",
      "<div class='boot-welcome'>Welcome W2ZFRHN</div>",
    ];

    let i = 0;

    const typeMessage = () => {
      if (!terminal) return;

      if (i < bootMessages.length) {
        terminal.innerHTML += bootMessages[i] + "<br>";
        terminal.scrollTop = terminal.scrollHeight;
        i++;
        setTimeout(typeMessage, 50 + Math.random() * 80); // Speed up typing slightly
      } else {
        // Automatically transition to desktop after 1s
        setTimeout(() => {
          this.showLoginScreen();
        }, 1000);
      }
    };

    setTimeout(typeMessage, 300);
  }

  showLoginScreen() {
    const bootScreen = document.getElementById("boot-screen");
    const loginScreen = document.getElementById("login-screen");
    bootScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
    this.currentScreen = "login";

    // Reconstruct login screen for macOS lock screen aesthetic
    loginScreen.innerHTML = `
      <div id="mac-lock-screen" style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif; background: rgba(0,0,0,0.2); backdrop-filter: blur(40px) brightness(0.85);">
        
        <!-- Time and Date Section -->
        <div style="text-align: center; margin-bottom: 50px;">
          <div style="background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(25px) saturate(200%); -webkit-backdrop-filter: blur(25px) saturate(200%); border: 1.5px solid rgba(255, 255, 255, 0.4); border-radius: 45px; padding: 25px 90px; box-shadow: 0 20px 50px rgba(0,0,0,0.3), inset 0 0 30px rgba(255,255,255,0.2); margin-bottom: 25px; display: inline-block;">
            <div id="mac-time" style="font-size: 100px; font-weight: 100; letter-spacing: -4px; background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));">00:00</div>
          </div>
          <div id="mac-date" style="font-size: 26px; font-weight: 400; letter-spacing: 0.5px; text-shadow: 0 2px 12px rgba(0,0,0,0.4); opacity: 0.95;">Date</div>
        </div>
        <!-- User Profile Section -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
          <div style="width: 140px; height: 140px; border-radius: 50%; background: #333; border: 1px solid rgba(255,255,255,0.3); overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 40px rgba(0,0,0,0.4); position: relative; z-index: 10;">
            <img src="assets/img/propic.png" onerror="console.error('Profile picture failed to load. Falling back to UI-Avatars.'); this.src='https://ui-avatars.com/api/?name=Wazeh+Farhan&background=0D8ABC&color=fff&size=128'" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="User Profile">
          </div>
          <div style="font-size: 30px; font-weight: 600; text-shadow: 0 4px 12px rgba(0,0,0,0.6); margin-top: 5px;">wazeh farhan</div>
          <button id="mac-continue-btn" style="margin-top: 15px; padding: 10px 45px; border-radius: 25px; border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(12px);">Continue</button>
        </div>

        <!-- Bottom Left: Shutdown -->
        <div id="mac-shutdown" style="position: absolute; bottom: 50px; left: 50px; cursor: pointer; text-align: center; opacity: 0.7; transition: opacity 0.2s;">
          <div style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid white; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; margin-left: auto; margin-right: auto;">
            <span style="font-size: 18px;">⏻</span>
          </div>
          <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Turn Off</span>
        </div>

      </div>
    `;

    // Live Clock Logic
    const updateClock = () => {
      const now = new Date();
      const timeEl = document.getElementById("mac-time");
      const dateEl = document.getElementById("mac-date");
      if (timeEl && dateEl) {
        timeEl.textContent = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        dateEl.textContent = now.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
      }
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    // Button Interactivity
    const contBtn = document.getElementById("mac-continue-btn");
    contBtn.onmouseover = () =>
      (contBtn.style.background = "rgba(255,255,255,0.35)");
    contBtn.onmouseout = () =>
      (contBtn.style.background = "rgba(255,255,255,0.2)");

    const shutBtn = document.getElementById("mac-shutdown");
    shutBtn.onmouseover = () => (shutBtn.style.opacity = "1");
    shutBtn.onmouseout = () => (shutBtn.style.opacity = "0.7");

    contBtn.onclick = () => {
      clearInterval(clockInterval);
      this.showDesktop();
    };

    shutBtn.onclick = () => {
      clearInterval(clockInterval);
      loginScreen.classList.add("hidden");
      bootScreen.innerHTML =
        '<div style="display:flex; height:100%; align-items:center; justify-content:center; flex-direction:column; color:white; font-size:1.5rem; font-family:var(--font-primary);"><img src="assets/img/winlogo.png" style="width:120px; margin-bottom:20px;">Windows is shutting down...</div>';
      bootScreen.classList.remove("hidden");
    };
  }

  showDesktop() {
    // Update user name in start menu
    const userNameEl = document.querySelector(".user-name");
    if (userNameEl) userNameEl.textContent = "wazeh farhan";

    // Show desktop
    document.getElementById("boot-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.add("hidden");
    const desktop = document.getElementById("desktop");
    desktop.classList.remove("hidden"); // Make it visible

    // Apply zoom-in animation for desktop appearance
    desktop.style.opacity = "0"; // Start invisible
    desktop.style.transform = "scale(0.95)"; // Start slightly scaled down
    desktop.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out"; // Define transition

    setTimeout(() => {
      desktop.style.opacity = "1";
      desktop.style.transform = "scale(1)";
    }, 50); // Small delay to ensure initial styles are rendered before transition

    // Clean up animation styles after it completes
    setTimeout(() => {
      desktop.style.transition = "";
      desktop.style.opacity = "";
      desktop.style.transform = "";
    }, 550); // 50ms delay + 500ms transition duration

    this.currentScreen = "desktop";

    // Apply wallpaper
    this.applyWallpaper(this.wallpaper);

    // Initialize desktop components
    this.initializeDesktop();
  }

  applyWallpaper(wallpaperName) {
    const desktop = document.getElementById("desktop");
    // Remove all wallpaper classes
    desktop.classList.remove(
      "wallpaper-default",
      "wallpaper-blue",
      "wallpaper-green",
      "wallpaper-sunset",
      "wallpaper-dark",
    );
    // Add the selected wallpaper class
    desktop.classList.add(`wallpaper-${wallpaperName}`);
    this.wallpaper = wallpaperName;
  }

  changeWallpaper(wallpaperName) {
    this.applyWallpaper(wallpaperName);
  }

  initializeDesktop() {
    // Create window manager
    this.windowManager = new WindowManager();

    // Create taskbar manager
    this.taskbarManager = new TaskbarManager(this.windowManager);

    // Create start menu manager
    this.startMenuManager = new StartMenuManager(this.taskbarManager);

    // Set up desktop icons
    this.setupDesktopIcons();

    // Set up context menu
    this.setupContextMenu();

    // Add wallpaper changer to context menu (optional)
    this.addWallpaperOptions();
  }

  setupDesktopIcons() {
    const desktopIcons = document.querySelectorAll(".desktop-icon");

    desktopIcons.forEach((icon) => {
      // Single click selection
      icon.addEventListener("click", (e) => {
        if (e.detail === 1) {
          // Deselect all other icons
          desktopIcons.forEach((otherIcon) => {
            otherIcon.classList.remove("selected");
          });

          // Select clicked icon
          icon.classList.add("selected");
        }
      });

      // Double click to launch app
      icon.addEventListener("dblclick", () => {
        const appId = icon.getAttribute("data-app");
        this.taskbarManager.launchApp(appId);
      });
    });

    // Deselect icons when clicking on desktop
    document.getElementById("desktop").addEventListener("click", (e) => {
      if (e.target === document.getElementById("desktop")) {
        desktopIcons.forEach((icon) => {
          icon.classList.remove("selected");
        });
      }
    });
  }

  setupContextMenu() {
    const desktop = document.getElementById("desktop");
    const contextMenu = document.getElementById("context-menu");
    this.selectedDesktopIcon = null;

    desktop.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      // Track if right-clicked on an icon
      const icon = e.target.closest(".desktop-icon");
      this.selectedDesktopIcon = icon;

      // Show/hide "Open" based on whether an icon is selected
      const openItem = contextMenu.querySelector('[data-action="open"]');
      if (openItem) {
        openItem.style.display = icon ? "block" : "none";
      }

      // Position context menu at cursor
      const x = Math.min(e.clientX, window.innerWidth - 160);
      const y = Math.min(e.clientY, window.innerHeight - 200);

      contextMenu.style.left = `${x}px`;
      contextMenu.style.top = `${y}px`;
      contextMenu.classList.remove("hidden");
      setTimeout(() => contextMenu.classList.add("visible"), 10);
    });

    // Hide context menu when clicking elsewhere
    document.addEventListener("click", () => {
      contextMenu.classList.remove("visible");
      setTimeout(() => contextMenu.classList.add("hidden"), 200);
    });

    // Context menu item click handlers
    contextMenu.addEventListener("click", (e) => {
      const item = e.target.closest(".context-item");
      if (!item) return;

      const action = item.getAttribute("data-action");
      this.handleContextAction(action);

      // Close context menu after action
      contextMenu.classList.remove("visible");
      setTimeout(() => contextMenu.classList.add("hidden"), 200);
    });
  }

  handleContextAction(action) {
    switch (action) {
      case "open":
        if (this.selectedDesktopIcon) {
          const appId = this.selectedDesktopIcon.getAttribute("data-app");
          this.taskbarManager.launchApp(appId);
        }
        break;

      case "refresh":
        // Animate desktop icons briefly, then reload
        const icons = document.querySelectorAll(".desktop-icon");
        icons.forEach((icon) => {
          icon.style.opacity = "0.5";
          setTimeout(() => {
            icon.style.opacity = "1";
          }, 300);
        });
        break;

      case "paste":
        this.showInfoDialog("Paste", "Clipboard is empty.");
        break;

      case "new-folder":
        this.createDesktopItem("📁", "New Folder");
        break;

      case "new-text-file":
        this.createDesktopItem("📄", "New Text Document");
        break;

      case "properties":
        this.showPropertiesDialog();
        break;
    }
  }

  createDesktopItem(emoji, name) {
    const desktopIcons = document.querySelector(".desktop-icons");
    const newIcon = document.createElement("div");
    newIcon.className = "desktop-icon";
    newIcon.innerHTML = `
            <div style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:32px;">${emoji}</div>
            <span>${name}</span>
        `;
    newIcon.addEventListener("dblclick", () => {
      this.showInfoDialog(name, `"${name}" is a simulated desktop item.`);
    });
    desktopIcons.appendChild(newIcon);
  }

  showInfoDialog(title, message) {
    const existing = document.getElementById("info-dialog");
    if (existing) existing.remove();

    const dialog = document.createElement("div");
    dialog.id = "info-dialog";
    dialog.className = "dialog";
    dialog.innerHTML = `
            <div class="dialog-title">${title}</div>
            <div class="dialog-content">
                <p style="font-size:12px;">${message}</p>
            </div>
            <div class="dialog-buttons">
                <button class="dialog-button" onclick="this.closest('.dialog').remove()">OK</button>
            </div>
        `;
    document.getElementById("desktop").appendChild(dialog);
  }

  showPropertiesDialog() {
    const windowCount = this.windowManager
      ? this.windowManager.windows.length
      : 0;
    const now = new Date();
    const uptime = Math.floor((now - this.bootTime) / 1000);
    const mins = Math.floor(uptime / 60);
    const secs = uptime % 60;

    this.showInfoDialog(
      "System Properties",
      `
            <strong>Farhan's Portfolio OS</strong><br>
            <br>
            Screen: ${window.innerWidth} × ${window.innerHeight}<br>
            Open Windows: ${windowCount}<br>
            Uptime: ${mins}m ${secs}s<br>
            User Agent: ${navigator.userAgent.substring(0, 60)}…
        `,
    );
  }

  setupDesktop() {
    // Desktop click to deselect
  }

  addWallpaperOptions() {
    this.bootTime = new Date();
  }
}

// Start the OS when the page loads
document.addEventListener("DOMContentLoaded", () => {
  window.os = new WindowsXPWebOS();
});
