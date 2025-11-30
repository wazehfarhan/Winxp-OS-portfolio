class PortfolioApp {
    static launch(windowManager) {
        const content = `
            <div class="portfolio-content">
                <h3>Kazi Md. Wazeh Ullah Farhan</h3>
                <p><strong>Computer Science & Engineering Student</strong></p>
                
                <div style="margin: 15px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">
                    <h4>About Me</h4>
                    <p>Passionate computer science student with strong foundation in programming, algorithms, and web development. Currently pursuing my degree while building practical projects to enhance my skills.</p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>My Purpose</h4>
                    <p>To become a skilled software developer and contribute to innovative projects that solve real-world problems through technology.</p>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>Technical Skills</h4>
                    <ul>
                        <li>C, C++, Java, JavaScript</li>
                        <li>SQL, C#, HTML/CSS</li>
                        <li>Web Development</li>
                        <li>Object-Oriented Programming</li>
                        <li>Data Structures & Algorithms</li>
                    </ul>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>Connect With Me</h4>
                    <p>📧 <span class="contact-link" onclick="window.open('mailto:wzullah.farhan@gmail.com')">wzullah.farhan@gmail.com</span></p>
                    <p>💼 <span class="contact-link" onclick="window.open('https://linkedin.com/in/w2zfrhn')">LinkedIn: w2zfrhn</span></p>
                    <p>🐙 <span class="contact-link" onclick="window.open('https://github.com/w2zfrhn')">GitHub: w2zfrhn</span></p>
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