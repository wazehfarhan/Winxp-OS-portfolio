class BrowserApp {
    static launch(windowManager) {
        const content = `
            <div class="browser-app" style="height: 100%; display: flex; flex-direction: column;">
                <div class="browser-toolbar" style="padding: 5px; background: #f0f0f0; border-bottom: 1px solid #ccc; display: flex; gap: 5px;">
                    <button class="xp-button">Back</button>
                    <button class="xp-button">Forward</button>
                    <button class="xp-button">Refresh</button>
                    <input type="text" class="xp-input" value="http://www.windowsxp.com/" style="flex: 1;">
                    <button class="xp-button">Go</button>
                </div>
                <div class="browser-content" style="flex: 1; padding: 20px; text-align: center; background: white;">
                    <h2>Welcome to Internet Explorer</h2>
                    <p>This is a simulated browser window.</p>
                    <p>In a real implementation, this could load actual web content.</p>
                    <div style="margin-top: 20px;">
                        <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #7db9e8, #1e5799); margin: 0 auto; border-radius: 10px;"></div>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'browser',
            'Internet Explorer',
            content,
            {
                width: 800,
                height: 600
            }
        );
        
        return window;
    }
}