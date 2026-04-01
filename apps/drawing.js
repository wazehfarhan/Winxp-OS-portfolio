class DrawingApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="height: 100%; display: flex; flex-direction: row; padding: 0; background: #f8fafc; overflow: hidden;">
                
                <!-- Sidebar Tools -->
                <div class="drawing-sidebar" style="width: 260px; min-width: 260px; background: #ffffff; border-right: 1px solid #e2e8f0; padding: 20px; display: flex; flex-direction: column; gap: 24px; overflow-y: auto; box-shadow: 2px 0 8px rgba(0,0,0,0.02); z-index: 10;">
                    
                    <div>
                        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 600; color: #0f172a; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 1.5rem;">🎨</span> Drawing App
                        </h3>
                    </div>

                    <!-- Tool Selection -->
                    <div style="display: flex; gap: 8px;">
                        <button class="modern-btn primary" id="toolPen" style="flex: 1; padding: 8px; font-weight: 600;">🖋️ Pen</button>
                        <button class="modern-btn secondary" id="toolEraser" style="flex: 1; padding: 8px; font-weight: 600;">🧼 Eraser</button>
                    </div>

                    <!-- Properties -->
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <label style="font-weight: 600; font-size: 0.875rem; color: #475569;">Brush Size</label>
                                <span id="brushSizeValue" style="background: #e2e8f0; color: #0f172a; padding: 2px 8px; border-radius: 999px; font-weight: 700; font-size: 0.75rem;">5px</span>
                            </div>
                            <input type="range" id="brushSize" min="1" max="50" value="5" style="width: 100%; accent-color: #3b82f6; cursor: pointer;">
                        </div>
                        
                        <div>
                            <label style="font-weight: 600; font-size: 0.875rem; color: #475569; display: block; margin-bottom: 8px;">Brush Color</label>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <input type="color" id="brushColor" value="#000000" style="width: 48px; height: 48px; padding: 0; border: none; border-radius: 8px; cursor: pointer; background: transparent; overflow: hidden;">
                                <span id="colorHex" style="font-family: monospace; color: #64748b; font-size: 0.875rem; font-weight: 600;">#000000</span>
                            </div>
                            <!-- Swatches -->
                            <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;" id="colorSwatches">
                                <div class="color-swatch" data-color="#000000" style="width: 24px; height: 24px; border-radius: 4px; background: #000000; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#ef4444" style="width: 24px; height: 24px; border-radius: 4px; background: #ef4444; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#f59e0b" style="width: 24px; height: 24px; border-radius: 4px; background: #f59e0b; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#10b981" style="width: 24px; height: 24px; border-radius: 4px; background: #10b981; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#3b82f6" style="width: 24px; height: 24px; border-radius: 4px; background: #3b82f6; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#8b5cf6" style="width: 24px; height: 24px; border-radius: 4px; background: #8b5cf6; cursor: pointer; border: 2px solid transparent;"></div>
                                <div class="color-swatch" data-color="#ffffff" style="width: 24px; height: 24px; border-radius: 4px; background: #ffffff; cursor: pointer; border: 1px solid #cbd5e1;"></div>
                            </div>
                        </div>
                    </div>

                    <div style="height: 1px; background: #e2e8f0; margin: 8px 0;"></div>

                    <!-- Actions -->
                    <div style="display: flex; flex-direction: column; gap: 8px; margin-top: auto;">
                        <button class="modern-btn secondary" id="undoBtn" style="justify-content: flex-start;">↩️ Undo</button>
                        <button class="modern-btn secondary" id="clearCanvas" style="justify-content: flex-start;">🗑️ Clear Canvas</button>
                        <button class="modern-btn primary" id="downloadCanvas" style="justify-content: flex-start; margin-top: 8px; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">💾 Download Image</button>
                    </div>
                </div>
                
                <!-- Canvas Area -->
                <div id="canvasContainer" style="flex: 1; display: flex; justify-content: center; align-items: center; padding: 24px; position: relative; overflow: auto; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px;">
                    <canvas class="drawing-canvas" id="drawingCanvas" width="600" height="400" style="background: white; border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); cursor: crosshair; touch-action: none;"></canvas>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'drawing',
            'Drawing App',
            content,
            {
                width: 900,
                height: 650
            }
        );
        
        // Initialize drawing functionality
        setTimeout(() => {
            this.initializeDrawing(window.element);
        }, 100);
        
        return window;
    }
    
    static initializeDrawing(windowElement) {
        const container = windowElement.querySelector('#canvasContainer');
        const canvas = windowElement.querySelector('#drawingCanvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        
        // Tool elements
        const toolPen = windowElement.querySelector('#toolPen');
        const toolEraser = windowElement.querySelector('#toolEraser');
        const brushSize = windowElement.querySelector('#brushSize');
        const brushSizeValue = windowElement.querySelector('#brushSizeValue');
        const brushColor = windowElement.querySelector('#brushColor');
        const colorHex = windowElement.querySelector('#colorHex');
        const colorSwatches = windowElement.querySelectorAll('.color-swatch');
        
        // Action elements
        const clearButton = windowElement.querySelector('#clearCanvas');
        const undoButton = windowElement.querySelector('#undoBtn');
        const downloadButton = windowElement.querySelector('#downloadCanvas');
        
        let isDrawing = false;
        let currentMode = 'pen'; // 'pen' or 'eraser'
        let lastX = 0;
        let lastY = 0;
        
        // Undo Stack
        let undoStack = [];
        
        function saveState() {
            undoStack.push(canvas.toDataURL());
            if (undoStack.length > 30) {
                undoStack.shift(); // Max 30 states
            }
        }
        
        function fillWhite() {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Initialize canvas
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        fillWhite();
        saveState(); // Save initial empty state
        
        // Dynamic Resize Logic
        let currentWidth = canvas.width;
        let currentHeight = canvas.height;
        
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                // Leave margin inside container (48px due to padding: 24px)
                const targetWidth = Math.floor(Math.max(600, width - 48));
                const targetHeight = Math.floor(Math.max(400, height - 48));
                
                if (currentWidth !== targetWidth || currentHeight !== targetHeight) {
                    // Synchronous copy
                    const imgData = ctx.getImageData(0, 0, currentWidth, currentHeight);
                    
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    currentWidth = targetWidth;
                    currentHeight = targetHeight;
                    
                    // Re-setup context properties
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    fillWhite(); // Fill expanded canvas area
                    
                    // Put original data back
                    ctx.putImageData(imgData, 0, 0);
                }
            }
        });
        resizeObserver.observe(container);
        
        // Mode switching
        function setMode(mode) {
            currentMode = mode;
            if (mode === 'pen') {
                toolPen.className = 'modern-btn primary';
                toolEraser.className = 'modern-btn secondary';
                canvas.style.cursor = 'crosshair';
            } else {
                toolPen.className = 'modern-btn secondary';
                toolEraser.className = 'modern-btn primary';
                canvas.style.cursor = 'cell';
            }
        }
        
        toolPen.addEventListener('click', () => setMode('pen'));
        toolEraser.addEventListener('click', () => setMode('eraser'));
        
        // Brush properties
        brushSize.addEventListener('input', () => {
            brushSizeValue.textContent = brushSize.value + 'px';
        });
        
        function updateColor(color) {
            brushColor.value = color;
            colorHex.textContent = color.toUpperCase();
            setMode('pen'); // Auto-switch to pen if a color is picked
        }
        
        brushColor.addEventListener('input', (e) => {
            updateColor(e.target.value);
        });
        
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                updateColor(swatch.dataset.color);
            });
        });
        
        // Actions
        clearButton.addEventListener('click', () => {
            fillWhite();
            saveState();
        });
        
        undoButton.addEventListener('click', () => {
            if (undoStack.length > 1) {
                undoStack.pop(); // Remove current state
                const prev = undoStack[undoStack.length - 1];
                const img = new Image();
                img.src = prev;
                img.onload = () => {
                    fillWhite();
                    ctx.drawImage(img, 0, 0);
                };
            }
        });
        
        downloadButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = "Drawing-" + Date.now() + ".png";
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
        
        // Drawing logic
        function getMousePos(canvas, evt) {
            const rect = canvas.getBoundingClientRect();
            // Scaling factor if CSS size differs from inner size
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            
            return {
                x: (evt.clientX - rect.left) * scaleX,
                y: (evt.clientY - rect.top) * scaleY
            };
        }
        
        function startDrawing(e) {
            isDrawing = true;
            const pos = getMousePos(canvas, e);
            [lastX, lastY] = [pos.x, pos.y];
            
            // Draw a dot on simple click
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentMode === 'eraser' ? 'white' : brushColor.value;
            ctx.lineWidth = brushSize.value;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(lastX, lastY);
            ctx.stroke();
        }
        
        function draw(e) {
            if (!isDrawing) return;
            e.preventDefault();
            
            const pos = getMousePos(canvas, e);
            
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentMode === 'eraser' ? 'white' : brushColor.value;
            ctx.lineWidth = brushSize.value;
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            
            [lastX, lastY] = [pos.x, pos.y];
        }
        
        function stopDrawing() {
            if (isDrawing) {
                isDrawing = false;
                saveState();
            }
        }
        
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        windowElement.addEventListener('mouseup', stopDrawing);
        
        // Clear references on window close to avoid memory leaks
        const observerTarget = windowElement.closest('.window');
        if (observerTarget) {
            const closeBtn = observerTarget.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    resizeObserver.disconnect();
                });
            }
        }
    }
}