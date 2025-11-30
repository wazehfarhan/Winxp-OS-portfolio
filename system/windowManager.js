class WindowManager {
    constructor() {
        this.windows = [];
        this.zIndex = 100;
        this.windowsContainer = document.getElementById('windows-container');
        this.taskbarApps = document.getElementById('taskbar-apps');
        this.dragging = null;
        this.resizing = null;
        this.dragOffset = { x: 0, y: 0 };
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseup', () => this.handleMouseUp());
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
        
        const resizeHandle = config.resizable ? 
            '<div class="window-resize-handle"></div>' : '';
        
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
            ${resizeHandle}
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
        this.attachWindowEvents(windowObj);
        this.bringToFront(windowObj);
        this.addTaskbarItem(windowObj);
        
        return windowObj;
    }
    
    attachWindowEvents(windowObj) {
        const { element, config } = windowObj;
        const header = element.querySelector('.window-header');
        const minimizeBtn = element.querySelector('.minimize');
        const maximizeBtn = element.querySelector('.maximize');
        const closeBtn = element.querySelector('.close');
        const resizeHandle = element.querySelector('.window-resize-handle');
        
        // Drag functionality - FIXED: Direct event handling for performance
        header.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('window-control')) return;
            this.startDrag(windowObj, e);
        });
        
        // Resize functionality
        if (resizeHandle && config.resizable) {
            resizeHandle.addEventListener('mousedown', (e) => {
                this.startResize(windowObj, e);
            });
        }
        
        // Window controls
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.minimizeWindow(windowObj);
            });
        }
        
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMaximize(windowObj);
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeWindow(windowObj);
            });
        }
        
        // Focus on click
        element.addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains('window-control')) {
                this.bringToFront(windowObj);
            }
        });
    }
    
    startDrag(windowObj, e) {
        if (windowObj.isMaximized) return;
        
        this.dragging = windowObj;
        const rect = windowObj.element.getBoundingClientRect();
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;
        
        this.bringToFront(windowObj);
        e.preventDefault();
    }
    
    startResize(windowObj, e) {
        if (windowObj.isMaximized) return;
        
        this.resizing = windowObj;
        this.initialSize = {
            width: parseInt(windowObj.element.style.width),
            height: parseInt(windowObj.element.style.height)
        };
        this.resizeStart = { x: e.clientX, y: e.clientY };
        
        this.bringToFront(windowObj);
        e.preventDefault();
    }
    
    handleMouseMove(e) {
        // FIXED: Direct DOM manipulation for maximum performance
        if (this.dragging) {
            const x = e.clientX - this.dragOffset.x;
            const y = e.clientY - this.dragOffset.y;
            
            this.dragging.element.style.left = `${x}px`;
            this.dragging.element.style.top = `${y}px`;
        }
        
        if (this.resizing) {
            const deltaX = e.clientX - this.resizeStart.x;
            const deltaY = e.clientY - this.resizeStart.y;
            
            const newWidth = Math.max(300, this.initialSize.width + deltaX);
            const newHeight = Math.max(200, this.initialSize.height + deltaY);
            
            this.resizing.element.style.width = `${newWidth}px`;
            this.resizing.element.style.height = `${newHeight}px`;
        }
    }
    
    handleMouseUp() {
        this.dragging = null;
        this.resizing = null;
    }
    
    bringToFront(windowObj) {
        // Reset all z-indexes
        this.windows.forEach(win => {
            win.element.style.zIndex = win.zIndex;
        });
        
        // Bring clicked window to front
        windowObj.zIndex = this.zIndex++;
        windowObj.element.style.zIndex = windowObj.zIndex;
        
        // Update taskbar active state
        document.querySelectorAll('.taskbar-app').forEach(item => {
            item.classList.remove('active');
        });
        
        const taskbarItem = document.querySelector(`[data-window-id="${windowObj.id}"]`);
        if (taskbarItem) {
            taskbarItem.classList.add('active');
        }
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