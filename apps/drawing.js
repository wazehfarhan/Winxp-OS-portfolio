class DrawingApp {
    static launch(windowManager) {
        const content = `
            <div class="drawing-app" style="height: 100%; display: flex; flex-direction: column;">
                <div class="drawing-controls">
                    <label>Brush Size:</label>
                    <input type="range" id="brushSize" min="1" max="20" value="5" style="width: 100px;">
                    <span id="brushSizeValue">5</span>
                    
                    <label style="margin-left: 15px;">Color:</label>
                    <input type="color" id="brushColor" value="#000000" style="width: 40px; height: 25px;">
                    
                    <button class="xp-button" id="clearCanvas" style="margin-left: 15px;">Clear Canvas</button>
                </div>
                <div style="flex: 1; display: flex; justify-content: center; align-items: center; background: #f0f0f0; padding: 10px;">
                    <canvas class="drawing-canvas" id="drawingCanvas" width="500" height="300"></canvas>
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