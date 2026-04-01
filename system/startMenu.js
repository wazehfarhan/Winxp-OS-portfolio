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
        const loginScreen = document.getElementById('login-screen');
        const bootScreen = document.getElementById('boot-screen');
        
        // Close all open windows to prevent stale memory
        if (this.taskbarManager && this.taskbarManager.windowManager) {
            this.taskbarManager.windowManager.closeAllWindows();
        }
        
        this.hideShutdownDialog();
        desktop.classList.add('hidden');
        if(loginScreen) loginScreen.classList.add('hidden');
        
        // Show a black screen with shutting down text
        bootScreen.innerHTML = '<div style="display:flex; height:100%; align-items:center; justify-content:center; flex-direction:column; color:white; font-size:1.5rem; font-family:var(--font-primary);"><img src="assets/img/winlogo.png" style="width:120px; margin-bottom:20px;">Windows is shutting down...</div>';
        bootScreen.classList.remove('hidden');
    }
    
    performRestart() {
        const desktop = document.getElementById('desktop');
        const loginScreen = document.getElementById('login-screen');
        const bootScreen = document.getElementById('boot-screen');
        
        // Close all open windows
        if (this.taskbarManager && this.taskbarManager.windowManager) {
            this.taskbarManager.windowManager.closeAllWindows();
        }
        
        this.hideShutdownDialog();
        desktop.classList.add('hidden');
        if(loginScreen) loginScreen.classList.add('hidden');
        
        // Show shutting down message
        bootScreen.innerHTML = '<div style="display:flex; height:100%; align-items:center; justify-content:center; flex-direction:column; color:white; font-size:1.5rem; font-family:var(--font-primary);"><img src="assets/img/winlogo.png" style="width:120px; margin-bottom:20px;">Windows is shutting down...</div>';
        bootScreen.classList.remove('hidden');
        
        // Re-trigger the full boot sequence after a brief pause without hard reloading
        setTimeout(() => {
            bootScreen.innerHTML = '<div id="boot-terminal" class="boot-terminal" aria-live="polite"></div>';
            if (window.os) {
                // Wipe the background context so the boot screen has visual priority
                document.getElementById('desktop').className = 'screen hidden';
                window.os.init();
            } else {
                location.reload();
            }
        }, 2500);
    }
}