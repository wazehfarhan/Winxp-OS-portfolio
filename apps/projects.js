class ProjectsApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="padding: 30px;">
                <div class="modern-hero" style="padding: 40px 20px; margin-bottom: 24px;">
                    <h2>My Projects</h2>
                    <p style="margin:0;">Here are some of the projects I've worked on</p>
                </div>
                
                <div class="modern-grid">
                    <div class="modern-card" style="cursor: pointer;" 
                         onclick="alert('Windows XP Portfolio OS\\n\\nA fully functional browser-based Windows XP clone showcasing my portfolio with multiple applications and interactive features.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4 style="margin-bottom: 8px;">🏠 Windows XP Portfolio OS</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1;">A browser-based operating system interface showcasing my portfolio</p>
                        <div class="modern-flex" style="gap: 4px; margin-top: 12px;">
                            <span class="modern-pill">HTML</span><span class="modern-pill">CSS</span><span class="modern-pill">JS</span>
                        </div>
                    </div>
                    
                    <div class="modern-card" style="cursor: pointer;"
                         onclick="alert('Student Management System\\n\\nA console-based application for managing student records, grades, and course information.\\n\\nTechnologies: C++, File I/O')">
                        <h4 style="margin-bottom: 8px;">🎓 Student Management System</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1;">Console application for managing student records and grades</p>
                        <div class="modern-flex" style="gap: 4px; margin-top: 12px;">
                            <span class="modern-pill">C++</span><span class="modern-pill">File I/O</span>
                        </div>
                    </div>
                    
                    <div class="modern-card" style="cursor: pointer;"
                         onclick="alert('E-Commerce Website Prototype\\n\\nA responsive e-commerce website prototype with product catalog and shopping cart functionality.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4 style="margin-bottom: 8px;">🛒 E-Commerce Website</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1;">Responsive e-commerce prototype with shopping cart</p>
                        <div class="modern-flex" style="gap: 4px; margin-top: 12px;">
                            <span class="modern-pill">HTML</span><span class="modern-pill">CSS</span><span class="modern-pill">JS</span>
                        </div>
                    </div>
                    
                    <div class="modern-card" style="cursor: pointer;"
                         onclick="alert('Bank Management System\\n\\nA Java application simulating bank operations including account management and transactions.\\n\\nTechnologies: Java, OOP Principles')">
                        <h4 style="margin-bottom: 8px;">💰 Bank Management System</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1;">Java application for bank account management</p>
                        <div class="modern-flex" style="gap: 4px; margin-top: 12px;">
                            <span class="modern-pill">Java</span><span class="modern-pill">OOP</span>
                        </div>
                    </div>
                </div>
                
                <div class="modern-card" style="margin-top: 24px; text-align: center; background: #e0e7ff; border-color: #c7d2fe;">
                    <p style="margin:0; color: #4338ca; font-weight: 500;">🚀 More projects coming soon! I'm continuously working to enhance my skills.</p>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'projects',
            'My Projects',
            content,
            {
                width: 500,
                height: 500
            }
        );
        
        return window;
    }
}