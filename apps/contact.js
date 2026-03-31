class ContactApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="background: #f8fafc; padding: 40px 20px;">
                <div class="modern-doc" style="padding: 40px; text-align: center;">
                    <h2 style="margin-bottom: 8px;">Contact Information</h2>
                    <p style="color: #64748b; margin-bottom: 40px;">Feel free to reach out to me through any of the following channels</p>
                    
                    <div class="modern-grid" style="grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px;">
                        <a href="mailto:wzullah.farhan@gmail.com" class="modern-card" style="text-decoration: none; flex-direction: row; align-items: center; gap: 20px; padding: 20px;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #fee2e2; color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 24px;">📧</div>
                            <div style="text-align: left;">
                                <h4 style="margin: 0; color: #1e293b;">Email</h4>
                                <p style="margin: 0; color: #64748b; font-size: 0.9rem;">wzullah.farhan@gmail.com</p>
                            </div>
                        </a>
                        
                        <a href="https://linkedin.com/in/w2zfrhn" target="_blank" class="modern-card" style="text-decoration: none; flex-direction: row; align-items: center; gap: 20px; padding: 20px;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #e0f2fe; color: #0ea5e9; display: flex; align-items: center; justify-content: center; font-size: 24px;">💼</div>
                            <div style="text-align: left;">
                                <h4 style="margin: 0; color: #1e293b;">LinkedIn</h4>
                                <p style="margin: 0; color: #64748b; font-size: 0.9rem;">linkedin.com/in/w2zfrhn</p>
                            </div>
                        </a>
                        
                        <a href="https://github.com/wazehfarhan" target="_blank" class="modern-card" style="text-decoration: none; flex-direction: row; align-items: center; gap: 20px; padding: 20px;">
                            <div style="width: 48px; height: 48px; border-radius: 12px; background: #f1f5f9; color: #334155; display: flex; align-items: center; justify-content: center; font-size: 24px;">🐙</div>
                            <div style="text-align: left;">
                                <h4 style="margin: 0; color: #1e293b;">GitHub</h4>
                                <p style="margin: 0; color: #64748b; font-size: 0.9rem;">github.com/wazehfarhan</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'contact',
            'Contact Information',
            content,
            {
                width: 500,
                height: 550
            }
        );
        
        return window;
    }
}