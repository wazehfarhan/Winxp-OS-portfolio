class ExplorerApp {
    static launch(windowManager) {
        const content = `
            <div class="explorer-app" style="height: 100%; display: flex;">
                <div class="explorer-sidebar" style="width: 200px; background: #f0f0f0; border-right: 1px solid #ccc; padding: 10px;">
                    <div class="sidebar-section">
                        <div class="sidebar-item selected">
                            <div class="sidebar-icon folder"></div>
                            <span>Desktop</span>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-icon my-computer"></div>
                            <span>My Computer</span>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-icon my-documents"></div>
                            <span>My Documents</span>
                        </div>
                        <div class="sidebar-item">
                            <div class="sidebar-icon network"></div>
                            <span>My Network Places</span>
                        </div>
                    </div>
                </div>
                <div class="explorer-content" style="flex: 1; padding: 10px;">
                    <div class="explorer-toolbar" style="margin-bottom: 10px;">
                        <button class="xp-button">Back</button>
                        <button class="xp-button">Forward</button>
                        <button class="xp-button">Up</button>
                    </div>
                    <div class="explorer-items" style="display: grid; grid-template-columns: repeat(auto-fill, 80px); gap: 10px;">
                        <div class="explorer-item">
                            <div class="item-icon folder"></div>
                            <span>Documents</span>
                        </div>
                        <div class="explorer-item">
                            <div class="item-icon folder"></div>
                            <span>Pictures</span>
                        </div>
                        <div class="explorer-item">
                            <div class="item-icon folder"></div>
                            <span>Music</span>
                        </div>
                        <div class="explorer-item">
                            <div class="item-icon file"></div>
                            <span>readme.txt</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'explorer',
            'My Computer',
            content,
            {
                width: 700,
                height: 500
            }
        );
        
        return window;
    }
}