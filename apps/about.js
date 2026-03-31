class AboutApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app">
                <div class="modern-card" style="text-align: center; margin-bottom: 24px;">
                    <img src="assets/img/propic.png" style="width: 100px; height: 100px; border-radius: 50%; border: 4px solid #f1f5f9; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin: 0 auto 16px;">
                    <h2 style="margin-bottom: 4px;">Kazi Md. Wazeh Ullah Farhan</h2>
                    <p style="color: #64748b; font-weight: 500; font-size: 1.1rem; margin-bottom: 0;">Computer Science & Engineering Student</p>
                </div>
                
                <div class="modern-grid" style="grid-template-columns: 1fr;">
                    <div class="modern-card" style="background: linear-gradient(to right bottom, #ebf4ff, #e0e7ff); border: none;">
                        <h3 style="color: #4f46e5;">👋 Hello!</h3>
                        <p style="color: #334155;">I'm a passionate computer science student currently pursuing my Bachelor's degree at American International University-Bangladesh (AIUB).</p>
                        <p style="color: #334155; margin-bottom: 0;">From a young age, I've been fascinated by technology and how it can solve complex problems. This curiosity led me to pursue computer science, where I've developed strong foundations in programming, algorithms, and software development.</p>
                    </div>
                    
                    <div class="modern-card">
                        <h3>🎯 My Journey</h3>
                        <p>My journey in computer science began with learning fundamental programming concepts in C, which quickly evolved into exploring object-oriented programming with C++ and Java. I've since expanded my skills to include web technologies and am constantly learning new frameworks and tools.</p>
                        <p style="margin-bottom: 0;">What excites me most about technology is its potential to create meaningful impact. Whether it's building efficient algorithms, creating user-friendly applications, or solving complex problems, I'm always eager to take on new challenges.</p>
                    </div>
                    
                    <div class="modern-card">
                        <h3>🌟 Beyond Coding</h3>
                        <p>When I'm not coding, you can find me:</p>
                        <ul style="color: #475569; padding-left: 20px; line-height: 1.8; margin-bottom: 0;">
                            <li>Exploring new technologies and programming paradigms</li>
                            <li>Participating in coding competitions</li>
                            <li>Contributing to open-source projects</li>
                            <li>Learning about software architecture and design patterns</li>
                            <li>Networking with fellow developers and tech enthusiasts</li>
                        </ul>
                    </div>
                </div>
                
                <div class="modern-card" style="margin-top: 24px; text-align: center; background: #fdf4ff; border-color: #fce7f3;">
                    <p style="font-size: 1.1rem; font-weight: 500; color: #be185d; font-style: italic;">"The computer was born to solve problems that did not exist before."</p>
                    <p style="color: #db2777; margin-bottom: 0; font-size: 0.875rem;">— I believe in this philosophy and strive to create solutions that make a difference.</p>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'about',
            'About Me',
            content,
            {
                width: 500,
                height: 500
            }
        );
        
        return window;
    }
}