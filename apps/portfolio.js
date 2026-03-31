class PortfolioApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app" style="padding: 0;">
                <div class="modern-hero">
                    <h1>Kazi Md. Wazeh<br/>Ullah Farhan</h1>
                    <p>Computer Science & Engineering Student</p>
                    <div style="margin-top: 16px;">
                        <button class="modern-btn primary" onclick="window.open('https://github.com/wazehfarhan')">🐙 GitHub</button>
                        <button class="modern-btn secondary" onclick="window.open('https://linkedin.com/in/w2zfrhn')">💼 LinkedIn</button>
                    </div>
                </div>
                
                <div class="content-wrapper" style="padding: 0 40px 40px;">
                    <div class="modern-grid">
                        <div class="modern-card">
                            <h3>About Me</h3>
                            <p>Passionate computer science student with a strong foundation in programming, algorithms, and web development. Currently pursuing my degree while building practical projects to enhance my skills.</p>
                        </div>
                        
                        <div class="modern-card">
                            <h3>My Purpose</h3>
                            <p>To become a skilled software developer and contribute to innovative projects that solve real-world problems through technology.</p>
                        </div>
                        
                        <div class="modern-card" style="grid-column: 1 / -1;">
                            <h3>Technical Skills</h3>
                            <div class="modern-flex">
                                <span class="modern-pill">C</span>
                                <span class="modern-pill">C++</span>
                                <span class="modern-pill">Java</span>
                                <span class="modern-pill">JavaScript</span>
                                <span class="modern-pill">SQL</span>
                                <span class="modern-pill">C#</span>
                                <span class="modern-pill">HTML/CSS</span>
                                <span class="modern-pill">Web Development</span>
                                <span class="modern-pill">Object-Oriented Programming</span>
                                <span class="modern-pill">Data Structures & Algorithms</span>
                            </div>
                        </div>
                        
                        <div class="modern-card" style="grid-column: 1 / -1; text-align: center;">
                            <h3>Let's Connect</h3>
                            <div class="modern-flex" style="justify-content: center; margin-top: 10px;">
                                <a href="mailto:wzullah.farhan@gmail.com" class="modern-btn secondary">📧 wzullah.farhan@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'portfolio',
            'My Portfolio',
            content,
            {
                width: 500,
                height: 500
            }
        );
        
        return window;
    }
}