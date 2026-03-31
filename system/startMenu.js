class StartMenuManager {
    constructor(taskbarManager) {
        this.taskbarManager = taskbarManager;
        this.startMenu = document.getElementById('start-menu');
        this.shutdownDialog = document.getElementById('shutdown-dialog');
        
        this.init();
    }
    
    init() {
        // Start menu item clicks
        this.startMenu.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.start-menu-item');
            if (!menuItem) return;
            
            if (menuItem.classList.contains('shutdown')) {
                this.showShutdownDialog();
            } else {
                const appId = menuItem.getAttribute('data-app');
                if (appId) {
                    this.taskbarManager.launchApp(appId);
                }
            }
        });
        
        // Shutdown dialog events
        this.shutdownDialog.addEventListener('click', (e) => {
            const option = e.target.closest('.shutdown-option');
            const button = e.target.closest('.dialog-button');
            
            if (option) {
                const action = option.getAttribute('data-action');
                this.handleShutdownAction(action);
            } else if (button && button.classList.contains('cancel')) {
                this.hideShutdownDialog();
            }
        });
    }
    
    showShutdownDialog() {
        this.shutdownDialog.classList.remove('hidden');
        setTimeout(() => this.shutdownDialog.classList.add('visible'), 10);
    }
    
    hideShutdownDialog() {
        this.shutdownDialog.classList.remove('visible');
        setTimeout(() => this.shutdownDialog.classList.add('hidden'), 300);
    }
    
    handleShutdownAction(action) {
        switch (action) {
            case 'standby':
                this.hideShutdownDialog();
                break;
            case 'shutdown':
                this.performShutdown();
                break;
            case 'restart':
                this.performRestart();
                break;
        }
    }
    
    performShutdown() {
        const desktop = document.getElementById('desktop');
        const bootScreen = document.getElementById('boot-screen');
        
        // Close all open windows to prevent stale windows in memory
        this.taskbarManager.windowManager.closeAllWindows();
        
        this.hideShutdownDialog();
        desktop.classList.add('hidden');
        
        // Show a black screen (boot screen cleared)
        bootScreen.innerHTML = '<div class="boot-terminal"></div>';
        bootScreen.classList.remove('hidden');
    }
    
    performRestart() {
        const desktop = document.getElementById('desktop');
        const bootScreen = document.getElementById('boot-screen');
        
        // Close all open windows
        this.taskbarManager.windowManager.closeAllWindows();
        
        this.hideShutdownDialog();
        desktop.classList.add('hidden');
        
        // Clear and show boot screen, then re-trigger the boot sequence
        bootScreen.innerHTML = '<div class="boot-terminal"></div>';
        bootScreen.classList.remove('hidden');
        
        // Re-trigger the full boot sequence after a brief pause
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}