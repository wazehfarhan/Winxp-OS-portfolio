class ImageViewerApp {
    static launch(windowManager) {
        const content = `
            <div class="imageviewer-app" style="height: 100%; display: flex; flex-direction: column;">
                <div class="imageviewer-toolbar" style="padding: 5px; background: #f0f0f0; border-bottom: 1px solid #ccc; display: flex; gap: 5px;">
                    <button class="xp-button">Open</button>
                    <button class="xp-button">Zoom In</button>
                    <button class="xp-button">Zoom Out</button>
                    <button class="xp-button">Actual Size</button>
                </div>
                <div class="imageviewer-content" style="flex: 1; display: flex; align-items: center; justify-content: center; background: #2c2c2c;">
                    <div class="image-placeholder" style="width: 300px; height: 200px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                        Sample Image
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'imageviewer',
            'Windows Picture and Fax Viewer',
            content,
            {
                width: 600,
                height: 500
            }
        );
        
        return window;
    }
}