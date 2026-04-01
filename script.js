// Main application entry point
class WindowsXPWebOS {
    constructor() {
        this.currentScreen = 'boot';
        this.wallpaper = 'default';
        this.init();
    }
    
    init() {
        // Initialize boot sequence
        this.startBootSequence();
        
        // Set up desktop interactions
        this.setupDesktop();
    }
    
    startBootSequence() {
        const terminal = document.getElementById('boot-terminal');
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
            "<div class='boot-welcome'>Welcome W2ZFRHN</div>"
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
        document.getElementById('boot-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
        this.currentScreen = 'login';
        
        const loginBtn = document.getElementById('login-btn');
        const loginInput = document.getElementById('login-password');
        
        const loginAction = () => {
            // Check button state to avoid double-clicking
            if (loginBtn.innerHTML === '↻') return;
            
            loginBtn.innerHTML = '↻';
            setTimeout(() => {
                document.getElementById('login-screen').classList.add('hidden');
                this.showDesktop();
                // Reset button for future logoffs if implemented
                loginBtn.innerHTML = '→';
            }, 800);
        };
        
        // Remove existing listener if any to prevent duplicates on reboot
        const newLoginBtn = loginBtn.cloneNode(true);
        loginBtn.parentNode.replaceChild(newLoginBtn, loginBtn);
        newLoginBtn.addEventListener('click', loginAction);
        
        loginInput.value = '';
        loginInput.onkeypress = (e) => {
            if (e.key === 'Enter') loginAction();
        };
        
        setTimeout(() => loginInput.focus(), 100);
    }
    
    showDesktop() {
        // Update user name in start menu
        document.querySelector('.user-name').textContent = 'wazeh farhan';
        
        // Show desktop
        document.getElementById('boot-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('desktop').classList.remove('hidden');
        this.currentScreen = 'desktop';
        
        // Apply wallpaper
        this.applyWallpaper(this.wallpaper);
        
        // Initialize desktop components
        this.initializeDesktop();
    }
    
    applyWallpaper(wallpaperName) {
        const desktop = document.getElementById('desktop');
        // Remove all wallpaper classes
        desktop.classList.remove('wallpaper-default', 'wallpaper-blue', 'wallpaper-green', 'wallpaper-sunset', 'wallpaper-dark');
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
        const desktopIcons = document.querySelectorAll('.desktop-icon');
        
        desktopIcons.forEach(icon => {
            // Single click selection
            icon.addEventListener('click', (e) => {
                if (e.detail === 1) {
                    // Deselect all other icons
                    desktopIcons.forEach(otherIcon => {
                        otherIcon.classList.remove('selected');
                    });
                    
                    // Select clicked icon
                    icon.classList.add('selected');
                }
            });
            
            // Double click to launch app
            icon.addEventListener('dblclick', () => {
                const appId = icon.getAttribute('data-app');
                this.taskbarManager.launchApp(appId);
            });
        });
        
        // Deselect icons when clicking on desktop
        document.getElementById('desktop').addEventListener('click', (e) => {
            if (e.target === document.getElementById('desktop')) {
                desktopIcons.forEach(icon => {
                    icon.classList.remove('selected');
                });
            }
        });
    }
    
    setupContextMenu() {
        const desktop = document.getElementById('desktop');
        const contextMenu = document.getElementById('context-menu');
        this.selectedDesktopIcon = null;
        
        desktop.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            
            // Track if right-clicked on an icon
            const icon = e.target.closest('.desktop-icon');
            this.selectedDesktopIcon = icon;
            
            // Show/hide "Open" based on whether an icon is selected
            const openItem = contextMenu.querySelector('[data-action="open"]');
            if (openItem) {
                openItem.style.display = icon ? 'block' : 'none';
            }
            
            // Position context menu at cursor
            const x = Math.min(e.clientX, window.innerWidth - 160);
            const y = Math.min(e.clientY, window.innerHeight - 200);
            
            contextMenu.style.left = `${x}px`;
            contextMenu.style.top = `${y}px`;
            contextMenu.classList.remove('hidden');
            setTimeout(() => contextMenu.classList.add('visible'), 10);
        });
        
        // Hide context menu when clicking elsewhere
        document.addEventListener('click', () => {
            contextMenu.classList.remove('visible');
            setTimeout(() => contextMenu.classList.add('hidden'), 200);
        });
        
        // Context menu item click handlers
        contextMenu.addEventListener('click', (e) => {
            const item = e.target.closest('.context-item');
            if (!item) return;
            
            const action = item.getAttribute('data-action');
            this.handleContextAction(action);
            
            // Close context menu after action
            contextMenu.classList.remove('visible');
            setTimeout(() => contextMenu.classList.add('hidden'), 200);
        });
    }
    
    handleContextAction(action) {
        switch (action) {
            case 'open':
                if (this.selectedDesktopIcon) {
                    const appId = this.selectedDesktopIcon.getAttribute('data-app');
                    this.taskbarManager.launchApp(appId);
                }
                break;
                
            case 'refresh':
                // Animate desktop icons briefly, then reload
                const icons = document.querySelectorAll('.desktop-icon');
                icons.forEach(icon => {
                    icon.style.opacity = '0.5';
                    setTimeout(() => { icon.style.opacity = '1'; }, 300);
                });
                break;
                
            case 'paste':
                this.showInfoDialog('Paste', 'Clipboard is empty.');
                break;
                
            case 'new-folder':
                this.createDesktopItem('📁', 'New Folder');
                break;
                
            case 'new-text-file':
                this.createDesktopItem('📄', 'New Text Document');
                break;
                
            case 'properties':
                this.showPropertiesDialog();
                break;
        }
    }
    
    createDesktopItem(emoji, name) {
        const desktopIcons = document.querySelector('.desktop-icons');
        const newIcon = document.createElement('div');
        newIcon.className = 'desktop-icon';
        newIcon.innerHTML = `
            <div style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:32px;">${emoji}</div>
            <span>${name}</span>
        `;
        newIcon.addEventListener('dblclick', () => {
            this.showInfoDialog(name, `"${name}" is a simulated desktop item.`);
        });
        desktopIcons.appendChild(newIcon);
    }
    
    showInfoDialog(title, message) {
        const existing = document.getElementById('info-dialog');
        if (existing) existing.remove();
        
        const dialog = document.createElement('div');
        dialog.id = 'info-dialog';
        dialog.className = 'dialog';
        dialog.innerHTML = `
            <div class="dialog-title">${title}</div>
            <div class="dialog-content">
                <p style="font-size:12px;">${message}</p>
            </div>
            <div class="dialog-buttons">
                <button class="dialog-button" onclick="this.closest('.dialog').remove()">OK</button>
            </div>
        `;
        document.getElementById('desktop').appendChild(dialog);
    }
    
    showPropertiesDialog() {
        const windowCount = this.windowManager ? this.windowManager.windows.length : 0;
        const now = new Date();
        const uptime = Math.floor((now - this.bootTime) / 1000);
        const mins = Math.floor(uptime / 60);
        const secs = uptime % 60;
        
        this.showInfoDialog('System Properties', `
            <strong>Farhan's Portfolio OS</strong><br>
            <br>
            Screen: ${window.innerWidth} × ${window.innerHeight}<br>
            Open Windows: ${windowCount}<br>
            Uptime: ${mins}m ${secs}s<br>
            User Agent: ${navigator.userAgent.substring(0, 60)}…
        `);
    }
    
    setupDesktop() {
        // Desktop click to deselect
    }
    
    addWallpaperOptions() {
        this.bootTime = new Date();
    }
}

// Start the OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.os = new WindowsXPWebOS();
});