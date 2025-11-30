class AboutApp {
    static launch(windowManager) {
        const content = `
            <div class="about-content">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #7db9e8, #1e5799); margin: 0 auto 10px; border-radius: 50%;"></div>
                    <h3>Kazi Md. Wazeh Ullah Farhan</h3>
                    <p><em>Computer Science & Engineering Student</em></p>
                </div>
                
                <div style="margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
                    <h4>👋 Hello!</h4>
                    <p>I'm a passionate computer science student currently pursuing my Bachelor's degree at American International University-Bangladesh (AIUB).</p>
                    
                    <p>From a young age, I've been fascinated by technology and how it can solve complex problems. This curiosity led me to pursue computer science, where I've developed strong foundations in programming, algorithms, and software development.</p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>🎯 My Journey</h4>
                    <p>My journey in computer science began with learning fundamental programming concepts in C, which quickly evolved into exploring object-oriented programming with C++ and Java. I've since expanded my skills to include web technologies and am constantly learning new frameworks and tools.</p>
                    
                    <p>What excites me most about technology is its potential to create meaningful impact. Whether it's building efficient algorithms, creating user-friendly applications, or solving complex problems, I'm always eager to take on new challenges.</p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>🌟 Beyond Coding</h4>
                    <p>When I'm not coding, you can find me:</p>
                    <ul>
                        <li>Exploring new technologies and programming paradigms</li>
                        <li>Participating in coding competitions</li>
                        <li>Contributing to open-source projects</li>
                        <li>Learning about software architecture and design patterns</li>
                        <li>Networking with fellow developers and tech enthusiasts</li>
                    </ul>
                </div>
                
                <div style="margin: 15px 0; padding: 10px; background: #e8f4f8; border-radius: 5px;">
                    <p><strong>"The computer was born to solve problems that did not exist before." - Bill Gates</strong></p>
                    <p>I believe in this philosophy and strive to create solutions that make a difference.</p>
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