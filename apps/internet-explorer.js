class InternetExplorerApp {
    static launch(windowManager) {
        const content = `
            <div class="browser-app" style="height: 100%; display: flex; flex-direction: column;">
                <div class="browser-toolbar">
                    <button class="xp-button" onclick="InternetExplorerApp.goBack(this)">← Back</button>
                    <button class="xp-button" onclick="InternetExplorerApp.goForward(this)">→ Forward</button>
                    <button class="xp-button" onclick="InternetExplorerApp.refreshPage(this)">↻ Refresh</button>
                    <input type="text" class="browser-address-bar" id="browserAddress" 
                           value="https://www.github.com/wazehfarhan.com" 
                           onkeypress="if(event.key=='Enter') InternetExplorerApp.navigateToUrl(this.value)">
                    <button class="xp-button" onclick="InternetExplorerApp.navigateToUrl(document.getElementById('browserAddress').value)">Go</button>
                    <button class="xp-button" onclick="InternetExplorerApp.showHomePage(this)">Home</button>
                </div>
                <div class="browser-content" id="browserContent">
                    <div class="browser-placeholder">
                        <h2>Internet Explorer</h2>
                        <p>Welcome to Farhan's Web Browser</p>
                        <p>This is a simulated browser that can navigate to various websites.</p>
                        
                        <div class="website-list">
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('portfolio')">
                                <h4>My Portfolio</h4>
                                <p>View my complete portfolio</p>
                            </div>
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('github')">
                                <h4>GitHub Profile</h4>
                                <p>Check out my coding projects</p>
                            </div>
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('linkedin')">
                                <h4>LinkedIn</h4>
                                <p>Professional network profile</p>
                            </div>
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('education')">
                                <h4>Education Hub</h4>
                                <p>Academic information and courses</p>
                            </div>
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('projects')">
                                <h4>Projects Gallery</h4>
                                <p>Browse all my projects</p>
                            </div>
                            <div class="website-item" onclick="InternetExplorerApp.navigateToPage('contact')">
                                <h4>Contact Portal</h4>
                                <p>Get in touch with me</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'internet-explorer',
            'Internet Explorer - Farhan\'s Portfolio',
            content,
            {
                width: 800,
                height: 600
            }
        );
        
        return window;
    }
    
    static navigateToPage(page) {
        const content = document.getElementById('browserContent');
        const addressBar = document.getElementById('browserAddress');
        
        switch(page) {
            case 'portfolio':
                addressBar.value = 'https://github.com/wazehfarhan/main';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>My Portfolio</h2>
                        <p><strong>Kazi Md. Wazeh Ullah Farhan</strong></p>
                        <p>Computer Science & Engineering Student</p>
                        <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
                            <h4>About Me</h4>
                            <p>Passionate developer with expertise in multiple programming languages and web technologies.</p>
                            <p><strong>Skills:</strong> C, C++, Java, JavaScript, HTML/CSS, SQL, C#</p>
                        </div>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
                
            case 'github':
                addressBar.value = 'https://github.com/wazehfarhan';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>GitHub Profile</h2>
                        <p><strong>Username:</strong> w2zfrhn</p>
                        <div style="margin: 20px 0;">
                            <h4>Featured Projects:</h4>
                            <ul style="text-align: left; margin: 10px 0;">
                                <li>Windows XP Portfolio OS</li>
                                <li>Student Management System</li>
                                <li>E-Commerce Website Prototype</li>
                                <li>Bank Management System</li>
                            </ul>
                        </div>
                        <p><em>Visit actual GitHub: github.com/wazehfarhan</em></p>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
                
            case 'linkedin':
                addressBar.value = 'https://linkedin.com/in/w2zfrhn';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>LinkedIn Profile</h2>
                        <p><strong>Professional Network</strong></p>
                        <div style="margin: 20px 0; padding: 15px; background: #e8f4f8; border-radius: 5px;">
                            <h4>Connect with me professionally</h4>
                            <p>View my work experience, education, and professional achievements.</p>
                        </div>
                        <p><strong>Current:</strong> Computer Science Student at AIUB</p>
                        <p><em>Visit actual LinkedIn: linkedin.com/in/w2zfrhn</em></p>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
                
            case 'education':
                addressBar.value = 'https://github.com/wazehfarhan/education';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>Education Hub</h2>
                        <div style="text-align: left; margin: 20px 0;">
                            <h4>American International University-Bangladesh (AIUB)</h4>
                            <p>BSc in Computer Science & Engineering</p>
                            <p>Student ID: 23-50577-1 | Semester: 9</p>
                            
                            <h4 style="margin-top: 20px;">Holy Land College</h4>
                            <p>Higher Secondary Certificate (HSC)</p>
                            <p>GPA: 5.00</p>
                        </div>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
                
            case 'projects':
                addressBar.value = 'https://github.com/wazehfarhan/projects';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>Projects Gallery</h2>
                        <div style="display: grid; gap: 15px; margin: 20px 0;">
                            <div style="padding: 15px; background: #f8f9fa; border-radius: 5px;">
                                <h4>Windows XP Portfolio OS</h4>
                                <p>A fully functional browser-based operating system interface</p>
                                <small>Technologies: HTML, CSS, JavaScript</small>
                            </div>
                            <div style="padding: 15px; background: #f8f9fa; border-radius: 5px;">
                                <h4>Student Management System</h4>
                                <p>Console application for managing student records</p>
                                <small>Technologies: C++, File I/O</small>
                            </div>
                            <div style="padding: 15px; background: #f8f9fa; border-radius: 5px;">
                                <h4>E-Commerce Website</h4>
                                <p>Responsive e-commerce prototype with shopping cart</p>
                                <small>Technologies: HTML, CSS, JavaScript</small>
                            </div>
                        </div>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
                
            case 'contact':
                addressBar.value = 'https://github.com/wazehfarhan/contact';
                content.innerHTML = `
                    <div class="browser-placeholder">
                        <h2>Contact Portal</h2>
                        <div style="text-align: left; margin: 20px 0;">
                            <p><strong>Email:</strong> wzullah.farhan@gmail.com</p>
                            <p><strong>GitHub:</strong> github.com/wazehfarhan</p>
                            <p><strong>LinkedIn:</strong> linkedin.com/in/w2zfrhn</p>
                        </div>
                        <div style="padding: 15px; background: #e8f4f8; border-radius: 5px; margin: 20px 0;">
                            <h4>Let's Connect!</h4>
                            <p>I'm always open to discussing new opportunities, collaborations, and technical projects.</p>
                        </div>
                        <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">← Back to Home</button>
                    </div>
                `;
                break;
        }
    }
    
    static navigateToUrl(url) {
        const content = document.getElementById('browserContent');
        const addressBar = document.getElementById('browserAddress');
        
        if (url.includes('farhan-portfolio.com')) {
            const page = url.split('/').pop();
            if (page && page !== 'main') {
                this.navigateToPage(page);
            } else {
                this.showHomePage();
            }
        } else if (url.includes('github.com')) {
            this.navigateToPage('github');
        } else if (url.includes('linkedin.com')) {
            this.navigateToPage('linkedin');
        } else {
            // Show error for external sites
            content.innerHTML = `
                <div class="browser-placeholder">
                    <h2 style="color: #dc3545;">Cannot display the webpage</h2>
                    <p>Internet Explorer cannot display this webpage.</p>
                    <p>This is a simulated browser that only works with Farhan's portfolio websites.</p>
                    <button class="xp-button" onclick="InternetExplorerApp.showHomePage()">Go to Homepage</button>
                </div>
            `;
        }
    }
    
    static showHomePage() {
        const content = document.getElementById('browserContent');
        const addressBar = document.getElementById('browserAddress');
        
        addressBar.value = 'https://github.com/wazehfarhan';
        content.innerHTML = `
            <div class="browser-placeholder">
                <h2>Internet Explorer</h2>
                <p>Welcome to Farhan's Web Browser</p>
                <p>This is a simulated browser that can navigate to various websites.</p>
                
                <div class="website-list">
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('portfolio')">
                        <h4>My Portfolio</h4>
                        <p>View my complete portfolio</p>
                    </div>
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('github')">
                        <h4>GitHub Profile</h4>
                        <p>Check out my coding projects</p>
                    </div>
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('linkedin')">
                        <h4>LinkedIn</h4>
                        <p>Professional network profile</p>
                    </div>
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('education')">
                        <h4>Education Hub</h4>
                        <p>Academic information and courses</p>
                    </div>
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('projects')">
                        <h4>Projects Gallery</h4>
                        <p>Browse all my projects</p>
                    </div>
                    <div class="website-item" onclick="InternetExplorerApp.navigateToPage('contact')">
                        <h4>Contact Portal</h4>
                        <p>Get in touch with me</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    static goBack() {
        // Simple back functionality
        this.showHomePage();
    }
    
    static goForward() {
        // Simple forward functionality
        this.showHomePage();
    }
    
    static refreshPage() {
        const addressBar = document.getElementById('browserAddress');
        this.navigateToUrl(addressBar.value);
    }
}