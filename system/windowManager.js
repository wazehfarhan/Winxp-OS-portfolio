class WindowManager {
    constructor() {
        this.windows = [];
        this.zIndex = 100;
        this.windowsContainer = document.getElementById('windows-container');
        this.taskbarApps = document.getElementById('taskbar-apps');
        
        this.init();
    }
    
    init() {
        // Add event listeners for window management
        document.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    }
    
    createWindow(appId, title, content, options = {}) {
        const windowId = `window-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const windowElement = document.createElement('div');
        windowElement.className = 'window';
        windowElement.id = windowId;
        
        const defaultOptions = {
            width: 400,
            height: 300,
            x: 50 + (this.windows.length * 20),
            y: 50 + (this.windows.length * 20),
            resizable: true,
            minimizable: true,
            maximizable: true,
            closable: true
        };
        
        const config = { ...defaultOptions, ...options };
        
        windowElement.style.width = `${config.width}px`;
        windowElement.style.height = `${config.height}px`;
        windowElement.style.left = `${config.x}px`;
        windowElement.style.top = `${config.y}px`;
        
        windowElement.innerHTML = `
            <div class="window-header">
                <div class="window-title">${title}</div>
                <div class="window-controls">
                    ${config.minimizable ? '<div class="window-control minimize">_</div>' : ''}
                    ${config.maximizable ? '<div class="window-control maximize">□</div>' : ''}
                    ${config.closable ? '<div class="window-control close">×</div>' : ''}
                </div>
            </div>
            <div class="window-content">
                ${content}
            </div>
        `;
        
        this.windowsContainer.appendChild(windowElement);
        
        const windowObj = {
            id: windowId,
            element: windowElement,
            appId: appId,
            title: title,
            config: config,
            isMinimized: false,
            isMaximized: false,
            zIndex: this.zIndex++
        };
        
        this.windows.push(windowObj);
        this.bringToFront(windowObj);
        this.addTaskbarItem(windowObj);
        this.attachWindowEvents(windowObj);
        
        return windowObj;
    }
    
    attachWindowEvents(windowObj) {
        const { element, config } = windowObj;
        const header = element.querySelector('.window-header');
        const minimizeBtn = element.querySelector('.minimize');
        const maximizeBtn = element.querySelector('.maximize');
        const closeBtn = element.querySelector('.close');
        
        // Drag functionality
        header.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('window-control')) return;
            this.startDrag(windowObj, e);
        });
        
        // Window controls
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.minimizeWindow(windowObj));
        }
        
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', () => this.toggleMaximize(windowObj));
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeWindow(windowObj));
        }
        
        // Focus on click
        element.addEventListener('mousedown', () => {
            this.bringToFront(windowObj);
        });
    }
    
    startDrag(windowObj, e) {
        if (windowObj.isMaximized) return;
        
        const element = windowObj.element;
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(element.style.left);
        const startTop = parseInt(element.style.top);
        
        const dragMove = (e) => {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            element.style.left = `${startLeft + deltaX}px`;
            element.style.top = `${startTop + deltaY}px`;
        };
        
        const dragEnd = () => {
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
        };
        
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
        
        e.preventDefault();
    }
    
    bringToFront(windowObj) {
        // Reset all z-indexes
        this.windows.forEach(win => {
            win.element.style.zIndex = win.zIndex;
        });
        
        // Bring clicked window to front
        windowObj.zIndex = this.zIndex++;
        windowObj.element.style.zIndex = windowObj.zIndex;
    }
    
    minimizeWindow(windowObj) {
        windowObj.isMinimized = true;
        windowObj.element.style.display = 'none';
        
        const taskbarItem = document.querySelector(`[data-window-id="${windowObj.id}"]`);
        if (taskbarItem) {
            taskbarItem.classList.remove('active');
        }
    }
    
    toggleMaximize(windowObj) {
        if (windowObj.isMaximized) {
            this.restoreWindow(windowObj);
        } else {
            this.maximizeWindow(windowObj);
        }
    }
    
    maximizeWindow(windowObj) {
        windowObj.isMaximized = true;
        windowObj.element.classList.add('maximized');
        
        const maximizeBtn = windowObj.element.querySelector('.maximize');
        if (maximizeBtn) {
            maximizeBtn.textContent = '❐';
        }
    }
    
    restoreWindow(windowObj) {
        windowObj.isMaximized = false;
        windowObj.element.classList.remove('maximized');
        
        const maximizeBtn = windowObj.element.querySelector('.maximize');
        if (maximizeBtn) {
            maximizeBtn.textContent = '□';
        }
    }
    
    closeWindow(windowObj) {
        const index = this.windows.findIndex(win => win.id === windowObj.id);
        if (index !== -1) {
            this.windows.splice(index, 1);
            windowObj.element.remove();
            
            const taskbarItem = document.querySelector(`[data-window-id="${windowObj.id}"]`);
            if (taskbarItem) {
                taskbarItem.remove();
            }
        }
    }
    
    addTaskbarItem(windowObj) {
        const taskbarItem = document.createElement('div');
        taskbarItem.className = 'taskbar-app';
        taskbarItem.setAttribute('data-window-id', windowObj.id);
        taskbarItem.textContent = windowObj.title;
        
        taskbarItem.addEventListener('click', () => {
            if (windowObj.isMinimized) {
                this.restoreFromTaskbar(windowObj);
            } else {
                this.bringToFront(windowObj);
            }
        });
        
        this.taskbarApps.appendChild(taskbarItem);
    }
    
    restoreFromTaskbar(windowObj) {
        windowObj.isMinimized = false;
        windowObj.element.style.display = 'block';
        this.bringToFront(windowObj);
        
        const taskbarItem = document.querySelector(`[data-window-id="${windowObj.id}"]`);
        if (taskbarItem) {
            taskbarItem.classList.add('active');
        }
    }
    
    handleMouseDown(e) {
        // Handle resize if needed
    }
    
    handleMouseMove(e) {
        // Handle resize if needed
    }
    
    handleMouseUp(e) {
        // Handle resize if needed
    }
    
    getWindowByAppId(appId) {
        return this.windows.find(win => win.appId === appId);
    }
    
    closeAllWindows() {
        while (this.windows.length > 0) {
            this.closeWindow(this.windows[0]);
        }
    }
}