class ContactApp {
    static launch(windowManager) {
        const content = `
            <div class="contact-content">
                <h3>Contact Information</h3>
                <p>Feel free to reach out to me through any of the following channels:</p>
                
                <div style="margin: 20px 0;">
                    <div style="display: flex; align-items: center; margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                        <div style="width: 40px; height: 40px; background: #dc3545; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: white; font-weight: bold;">@</div>
                        <div>
                            <h4 style="margin: 0;">Email</h4>
                            <p style="margin: 5px 0; font-size: 14px;">wzullah.farhan@gmail.com</p>
                            <button class="xp-button" onclick="window.open('mailto:wzullah.farhan@gmail.com')">Send Email</button>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                        <div style="width: 40px; height: 40px; background: #0077b5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: white; font-weight: bold;">in</div>
                        <div>
                            <h4 style="margin: 0;">LinkedIn</h4>
                            <p style="margin: 5px 0; font-size: 14px;">linkedin.com/in/w2zfrhn</p>
                            <button class="xp-button" onclick="window.open('https://linkedin.com/in/w2zfrhn')">View Profile</button>
                        </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">
                        <div style="width: 40px; height: 40px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: white; font-weight: bold;">🐙</div>
                        <div>
                            <h4 style="margin: 0;">GitHub</h4>
                            <p style="margin: 5px 0; font-size: 14px;">github.com/w2zfrhn</p>
                            <button class="xp-button" onclick="window.open('https://github.com/wazehfarhan')">View Profile</button>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 20px 0; padding: 15px; background: #e8f4f8; border-radius: 5px;">
                    <h4>Let's Connect!</h4>
                    <p>I'm always open to discussing:</p>
                    <ul>
                        <li>New opportunities and collaborations</li>
                        <li>Technical projects and challenges</li>
                        <li>Programming concepts and best practices</li>
                        <li>Open source contributions</li>
                        <li>Technology trends and innovations</li>
                    </ul>
                    
                    <p style="margin-top: 10px;"><strong>Response Time:</strong> I typically respond within 24 hours.</p>
                </div>
                
                <div style="text-align: center; margin-top: 20px;">
                    <p><em>Looking forward to connecting with you! 👨‍💻</em></p>
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