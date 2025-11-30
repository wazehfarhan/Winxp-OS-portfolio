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
        
        // Set up login
        document.getElementById('login-btn').addEventListener('click', () => {
            this.login();
        });
        
        // Allow login with Enter key
        document.getElementById('password').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.login();
            }
        });
        
        // Set up desktop interactions
        this.setupDesktop();
    }
    
    startBootSequence() {
        const progressFill = document.querySelector('.progress-fill');
        let progress = 0;
        
        const bootInterval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(bootInterval);
                
                // Boot complete, show login screen
                setTimeout(() => {
                    this.showLoginScreen();
                }, 500);
            }
            
            progressFill.style.width = `${progress}%`;
        }, 200);
    }
    
    showLoginScreen() {
        document.getElementById('boot-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
        this.currentScreen = 'login';
        
        // Focus on password field
        setTimeout(() => {
            document.getElementById('password').focus();
        }, 100);
    }
    
    login() {
        const password = document.getElementById('password').value;
        const loginError = document.getElementById('login-error');
        
        // Check password (1234)
        if (password === '1234') {
            const username = document.getElementById('username').value || 'Guest';
            
            // Update user name in start menu
            document.querySelector('.user-name').textContent = username;
            
            // Show desktop
            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('desktop').classList.remove('hidden');
            this.currentScreen = 'desktop';
            
            // Apply wallpaper
            this.applyWallpaper(this.wallpaper);
            
            // Initialize desktop components
            this.initializeDesktop();
            
            // Clear password field for next login
            document.getElementById('password').value = '';
            loginError.classList.add('hidden');
        } else {
            // Show error message
            loginError.classList.remove('hidden');
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
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