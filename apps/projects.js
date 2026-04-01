class ProjectsApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="padding: 30px; background: #f8fafc;">
                <!-- Vivid Hero Banner -->
                <div class="modern-hero" style="padding: 50px 30px; margin-bottom: 32px; background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(59, 130, 246, 0.1); border-radius: 16px;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 8px; color: #ffffff;">My Projects</h2>
                    <p style="margin:0; font-size: 1.1rem; color: #e0e7ff;">A collection of my programming journey and creations.</p>
                </div>
                
                <div class="modern-grid">
                    <!-- Project 1: Emerald Theme -->
                    <div class="modern-card" style="cursor: pointer; border-top: 4px solid #10b981; background: linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%);" 
                         onclick="alert('Windows XP Portfolio OS\\n\\nA fully functional browser-based Windows XP clone showcasing my portfolio with multiple applications and interactive features.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4 style="margin-bottom: 8px; color: #065f46;">🏠 Windows XP Portfolio OS</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1; color: #047857;">A browser-based operating system interface showcasing my portfolio</p>
                        <div class="modern-flex" style="gap: 6px; margin-top: 12px;">
                            <span class="modern-pill" style="background: #10b981; color: white; border: none;">HTML</span>
                            <span class="modern-pill" style="background: #10b981; color: white; border: none;">CSS</span>
                            <span class="modern-pill" style="background: #10b981; color: white; border: none;">JS</span>
                        </div>
                    </div>
                    
                    <!-- Project 2: Amber Theme -->
                    <div class="modern-card" style="cursor: pointer; border-top: 4px solid #f59e0b; background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);"
                         onclick="alert('Student Management System\\n\\nA console-based application for managing student records, grades, and course information.\\n\\nTechnologies: C++, File I/O')">
                        <h4 style="margin-bottom: 8px; color: #92400e;">🎓 Student Management</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1; color: #b45309;">Console application for managing student records and grades</p>
                        <div class="modern-flex" style="gap: 6px; margin-top: 12px;">
                            <span class="modern-pill" style="background: #f59e0b; color: white; border: none;">C++</span>
                            <span class="modern-pill" style="background: #f59e0b; color: white; border: none;">File I/O</span>
                        </div>
                    </div>
                    
                    <!-- Project 3: Violet Theme -->
                    <div class="modern-card" style="cursor: pointer; border-top: 4px solid #8b5cf6; background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%);"
                         onclick="alert('E-Commerce Website Prototype\\n\\nA responsive e-commerce website prototype with product catalog and shopping cart functionality.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4 style="margin-bottom: 8px; color: #5b21b6;">🛒 E-Commerce Website</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1; color: #6d28d9;">Responsive e-commerce prototype with shopping cart</p>
                        <div class="modern-flex" style="gap: 6px; margin-top: 12px;">
                            <span class="modern-pill" style="background: #8b5cf6; color: white; border: none;">HTML</span>
                            <span class="modern-pill" style="background: #8b5cf6; color: white; border: none;">CSS</span>
                            <span class="modern-pill" style="background: #8b5cf6; color: white; border: none;">JS</span>
                        </div>
                    </div>
                    
                    <!-- Project 4: Rose/Pink Theme -->
                    <div class="modern-card" style="cursor: pointer; border-top: 4px solid #ec4899; background: linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%);"
                         onclick="alert('Bank Management System\\n\\nA Java application simulating bank operations including account management and transactions.\\n\\nTechnologies: Java, OOP Principles')">
                        <h4 style="margin-bottom: 8px; color: #9d174d;">💰 Bank Management</h4>
                        <p style="font-size: 0.875rem; flex-grow: 1; color: #be185d;">Java application for bank account management</p>
                        <div class="modern-flex" style="gap: 6px; margin-top: 12px;">
                            <span class="modern-pill" style="background: #ec4899; color: white; border: none;">Java</span>
                            <span class="modern-pill" style="background: #ec4899; color: white; border: none;">OOP</span>
                        </div>
                    </div>
                </div>
                
                <!-- Radiant Footer Banner -->
                <div class="modern-card" style="margin-top: 32px; text-align: center; background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%); border: none; box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);">
                    <p style="margin:0; color: white; font-weight: 600; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">🚀 More projects coming soon! I'm continuously working to enhance my skills.</p>
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