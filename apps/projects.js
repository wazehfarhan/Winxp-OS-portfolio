class ProjectsApp {
    static launch(windowManager) {
        const content = `
            <div class="projects-content">
                <h3>My Projects</h3>
                <p>Here are some of the projects I've worked on:</p>
                
                <div style="margin: 15px 0;">
                    <div class="project-item" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0; border-radius: 5px; cursor: pointer;" 
                         onclick="alert('Windows XP Portfolio OS\\n\\nA fully functional browser-based Windows XP clone showcasing my portfolio with multiple applications and interactive features.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4>🏠 Windows XP Portfolio OS</h4>
                        <p>A browser-based operating system interface showcasing my portfolio</p>
                        <small>HTML, CSS, JavaScript</small>
                    </div>
                    
                    <div class="project-item" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0; border-radius: 5px; cursor: pointer;"
                         onclick="alert('Student Management System\\n\\nA console-based application for managing student records, grades, and course information.\\n\\nTechnologies: C++, File I/O')">
                        <h4>🎓 Student Management System</h4>
                        <p>Console application for managing student records and grades</p>
                        <small>C++, File I/O</small>
                    </div>
                    
                    <div class="project-item" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0; border-radius: 5px; cursor: pointer;"
                         onclick="alert('E-Commerce Website Prototype\\n\\nA responsive e-commerce website prototype with product catalog and shopping cart functionality.\\n\\nTechnologies: HTML, CSS, JavaScript')">
                        <h4>🛒 E-Commerce Website</h4>
                        <p>Responsive e-commerce prototype with shopping cart</p>
                        <small>HTML, CSS, JavaScript</small>
                    </div>
                    
                    <div class="project-item" style="padding: 10px; border: 1px solid #ccc; margin: 10px 0; border-radius: 5px; cursor: pointer;"
                         onclick="alert('Bank Management System\\n\\nA Java application simulating bank operations including account management and transactions.\\n\\nTechnologies: Java, OOP Principles')">
                        <h4>💰 Bank Management System</h4>
                        <p>Java application for bank account management</p>
                        <small>Java, OOP</small>
                    </div>
                </div>
                
                <div style="margin-top: 20px; padding: 10px; background: #f0f0f0; border-radius: 5px;">
                    <p><strong>More projects coming soon!</strong></p>
                    <p>I'm continuously working on new projects to enhance my skills.</p>
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