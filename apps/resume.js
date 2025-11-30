class ResumeApp {
    static launch(windowManager) {
        const content = `
            <div class="resume-content">
                <h3>Kazi Md. Wazeh Ullah Farhan - Resume</h3>
                
                <div style="margin: 15px 0;">
                    <h4>Education</h4>
                    <div style="margin-left: 20px;">
                        <p><strong>American International University-Bangladesh (AIUB)</strong></p>
                        <p>BSc in Computer Science & Engineering</p>
                        <p>Student ID: 23-50577-1 | Semester: 9</p>
                        <p><strong>Holy Land College</strong></p>
                        <p>HSC | GPA: 5.00</p>
                    </div>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>Technical Skills</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <h5>Programming Languages:</h5>
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Web Technologies:</h5>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>SQL</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 15px 0;">
                    <h4>Core Competencies</h4>
                    <ul>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Problem Solving</li>
                        <li>Software Development Life Cycle</li>
                        <li>Version Control (Git)</li>
                    </ul>
                </div>
                
                <div style="margin: 15px 0; text-align: center;">
                    <button class="xp-button primary" onclick="alert('Resume download feature would be implemented here!')">
                        Download Resume (PDF)
                    </button>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'resume',
            'My Resume',
            content,
            {
                width: 550,
                height: 550
            }
        );
        
        return window;
    }
}