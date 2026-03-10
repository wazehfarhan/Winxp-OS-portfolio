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
                    this.showDesktop();
                }, 1000);
            }
        };

        setTimeout(typeMessage, 300);
    }
    
    showDesktop() {
        // Update user name in start menu
        document.querySelector('.user-name').textContent = 'wazeh farhan';
        
        // Show desktop
        document.getElementById('boot-screen').classList.add('hidden');
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
    // In script.js, add this method to WindowsXPWebOS class
changeWallpaper(wallpaperName) {
    this.applyWallpaper(wallpaperName);
}

// Example usage:
// os.changeWallpaper('green');
// os.changeWallpaper('sunset');
    
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
        
        desktop.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            
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
        
        // Prevent context menu from closing when clicking inside it
        contextMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    addWallpaperOptions() {
        // This can be extended to add wallpaper changing functionality
        console.log('Wallpaper options ready - extend this method to add UI for changing wallpapers');
    }
}

// Start the OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WindowsXPWebOS();
});