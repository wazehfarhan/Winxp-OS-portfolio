class DrawingApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="height: 100%; display: flex; flex-direction: column; padding: 20px;">
                <div class="modern-card" style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px; padding: 16px;">
                    <label style="font-weight: 500; color: #1e293b;">Brush Size:</label>
                    <input type="range" id="brushSize" min="1" max="20" value="5" style="width: 100px; accent-color: #3b82f6;">
                    <span id="brushSizeValue" style="background: #e2e8f0; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.875rem;">5</span>
                    
                    <label style="margin-left:auto; font-weight: 500; color: #1e293b;">Color:</label>
                    <input type="color" id="brushColor" value="#000000" style="width: 40px; height: 32px; border: none; border-radius: 4px; cursor: pointer;">
                    
                    <button class="modern-btn secondary" id="clearCanvas" style="margin-left: 16px;">Clear Canvas</button>
                </div>
                <div class="modern-card" style="flex: 1; padding: 0; overflow: hidden; display: flex; justify-content: center; align-items: center; background: #f1f5f9; border: 4px solid #e2e8f0;">
                    <canvas class="drawing-canvas" id="drawingCanvas" width="500" height="300" style="background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);"></canvas>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'drawing',
            'Drawing App',
            content,
            {
                width: 600,
                height: 450
            }
        );
        
        // Initialize drawing functionality
        setTimeout(() => {
            this.initializeDrawing(window.element);
        }, 100);
        
        return window;
    }
    
    static initializeDrawing(windowElement) {
        const canvas = windowElement.querySelector('#drawingCanvas');
        const ctx = canvas.getContext('2d');
        const brushSize = windowElement.querySelector('#brushSize');
        const brushSizeValue = windowElement.querySelector('#brushSizeValue');
        const brushColor = windowElement.querySelector('#brushColor');
        const clearButton = windowElement.querySelector('#clearCanvas');
        
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        
        // Set canvas background to white
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Update brush size display
        brushSize.addEventListener('input', () => {
            brushSizeValue.textContent = brushSize.value;
        });
        
        // Clear canvas
        clearButton.addEventListener('click', () => {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });
        
        // Get correct mouse position
        function getMousePos(canvas, evt) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        
        // Drawing functions
        function startDrawing(e) {
            isDrawing = true;
            const pos = getMousePos(canvas, e);
            [lastX, lastY] = [pos.x, pos.y];
        }
        
        function draw(e) {
            if (!isDrawing) return;
            
            const pos = getMousePos(canvas, e);
            
            ctx.strokeStyle = brushColor.value;
            ctx.lineWidth = brushSize.value;
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            
            [lastX, lastY] = [pos.x, pos.y];
        }
        
        function stopDrawing() {
            isDrawing = false;
        }
        
        // Event listeners
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
    }
}