// Main application entry point
class WindowsXPWebOS {
    constructor() {
        this.currentScreen = 'boot';
        this.init();
    }
    
    init() {
        // Initialize boot sequence
        this.startBootSequence();
        
        // Set up login
        document.getElementById('login-btn').addEventListener('click', () => {
            this.login();
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
    }
    
    login() {
        const username = document.getElementById('username').value || 'Guest';
        
        // Update user name in start menu
        document.querySelector('.user-name').textContent = username;
        
        // Show desktop
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('desktop').classList.remove('hidden');
        this.currentScreen = 'desktop';
        
        // Initialize desktop components
        this.initializeDesktop();
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
                if (appId && appId !== 'recycle-bin') {
                    this.taskbarManager.launchApp(appId);
                }
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
            contextMenu.style.left = `${e.clientX}px`;
            contextMenu.style.top = `${e.clientY}px`;
            contextMenu.classList.remove('hidden');
        });
        
        // Hide context menu when clicking elsewhere
        document.addEventListener('click', () => {
            contextMenu.classList.add('hidden');
        });
        
        // Prevent context menu from closing when clicking inside it
        contextMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    setupDesktop() {
        // Additional desktop setup if needed
    }
}

// Start the OS when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WindowsXPWebOS();
});