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
    }
    
    hideShutdownDialog() {
        this.shutdownDialog.classList.add('hidden');
    }
    
    handleShutdownAction(action) {
        switch (action) {
            case 'standby':
                // Simulate standby
                this.hideShutdownDialog();
                break;
            case 'shutdown':
                // Simulate shutdown - go back to boot screen
                this.performShutdown();
                break;
            case 'restart':
                // Simulate restart
                this.performRestart();
                break;
        }
    }
    
    performShutdown() {
        const desktop = document.getElementById('desktop');
        const bootScreen = document.getElementById('boot-screen');
        
        desktop.classList.add('hidden');
        bootScreen.classList.remove('hidden');
        
        // Reset to initial state after delay
        setTimeout(() => {
            this.hideShutdownDialog();
            // In a real implementation, you might want to reset the entire OS state
        }, 2000);
    }
    
    performRestart() {
        this.performShutdown();
        
        // Simulate restart by showing boot screen then login
        setTimeout(() => {
            const bootScreen = document.getElementById('boot-screen');
            const loginScreen = document.getElementById('login-screen');
            
            bootScreen.classList.add('hidden');
            loginScreen.classList.remove('hidden');
        }, 3000);
    }
}