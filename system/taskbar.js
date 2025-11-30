class TaskbarManager {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.startButton = document.getElementById('start-button');
        this.startMenu = document.getElementById('start-menu');
        this.quickLaunch = document.getElementById('quick-launch');
        this.clock = document.getElementById('clock');
        
        this.init();
    }
    
    init() {
        this.startButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleStartMenu();
        });
        
        // Close start menu when clicking elsewhere
        document.addEventListener('click', () => {
            this.hideStartMenu();
        });
        
        // Quick launch events
        this.quickLaunch.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-icon')) {
                const appId = e.target.getAttribute('data-app');
                this.launchApp(appId);
            }
        });
        
        // Update clock
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }
    
    toggleStartMenu() {
        if (this.startMenu.classList.contains('hidden')) {
            this.showStartMenu();
        } else {
            this.hideStartMenu();
        }
    }
    
    showStartMenu() {
        this.startMenu.classList.remove('hidden');
    }
    
    hideStartMenu() {
        this.startMenu.classList.add('hidden');
    }
    
    launchApp(appId) {
        this.hideStartMenu();
        
        // Check if app is already open
        const existingWindow = this.windowManager.getWindowByAppId(appId);
        if (existingWindow) {
            if (existingWindow.isMinimized) {
                this.windowManager.restoreFromTaskbar(existingWindow);
            }
            this.windowManager.bringToFront(existingWindow);
            return;
        }
        
        // Launch new app instance
        switch (appId) {
            case 'notepad':
                NotepadApp.launch(this.windowManager);
                break;
            case 'explorer':
                ExplorerApp.launch(this.windowManager);
                break;
            case 'browser':
                BrowserApp.launch(this.windowManager);
                break;
            case 'imageviewer':
                ImageViewerApp.launch(this.windowManager);
                break;
        }
    }
    
    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        this.clock.textContent = timeString;
    }
}