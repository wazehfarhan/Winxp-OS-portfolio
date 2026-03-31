class SkillsApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app">
                <h2 style="margin-bottom: 24px; text-align:center;">My Technical Skills</h2>
                
                <div class="modern-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 24px;">
                    <div class="modern-card">
                        <h3>Programming Languages</h3>
                        <div class="modern-progress-wrapper">
                            <div class="modern-progress-header"><span>C / C++</span><span>Advanced</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 85%"></div></div>
                        </div>
                        <div class="modern-progress-wrapper">
                            <div class="modern-progress-header"><span>Java</span><span>Intermediate</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 75%"></div></div>
                        </div>
                        <div class="modern-progress-wrapper" style="margin-bottom: 0;">
                            <div class="modern-progress-header"><span>JavaScript / C#</span><span>Intermediate</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 70%"></div></div>
                        </div>
                    </div>
                    
                    <div class="modern-card">
                        <h3>Web & Databases</h3>
                        <div class="modern-progress-wrapper">
                            <div class="modern-progress-header"><span>HTML5 / CSS3</span><span>Advanced</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 90%;"></div></div>
                        </div>
                        <div class="modern-progress-wrapper">
                            <div class="modern-progress-header"><span>SQL</span><span>Intermediate</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 75%"></div></div>
                        </div>
                        <div class="modern-progress-wrapper" style="margin-bottom: 0;">
                            <div class="modern-progress-header"><span>Responsive Design</span><span>Advanced</span></div>
                            <div class="modern-progress-bg"><div class="modern-progress-fill" style="width: 85%"></div></div>
                        </div>
                    </div>
                </div>
                
                <div class="modern-card" style="margin-bottom: 24px;">
                    <h3>Core Concepts</h3>
                    <div class="modern-flex">
                        <span class="modern-pill">Object-Oriented Programming (OOP)</span>
                        <span class="modern-pill">Data Structures</span>
                        <span class="modern-pill">Algorithms</span>
                        <span class="modern-pill">Problem Solving</span>
                        <span class="modern-pill">Software Engineering</span>
                        <span class="modern-pill">Version Control (Git)</span>
                    </div>
                </div>
                
                <div class="modern-card" style="background: #fdf4ff; border-color: #f5d0fe;">
                    <h4 style="color: #c026d3; margin-bottom: 12px;">🚀 Currently Learning</h4>
                    <div class="modern-flex" style="gap: 8px;">
                        <span class="modern-pill" style="background:#fce7f3; color:#db2777; border-color:#fbcfe8;">React.js</span>
                        <span class="modern-pill" style="background:#fce7f3; color:#db2777; border-color:#fbcfe8;">Node.js</span>
                        <span class="modern-pill" style="background:#fce7f3; color:#db2777; border-color:#fbcfe8;">Python</span>
                        <span class="modern-pill" style="background:#fce7f3; color:#db2777; border-color:#fbcfe8;">Advanced DB Design</span>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'skills',
            'My Skills',
            content,
            {
                width: 500,
                height: 500
            }
        );
        
        return window;
    }
}