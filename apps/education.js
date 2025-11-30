class EducationApp {
    static launch(windowManager) {
        const content = `
            <div class="education-content">
                <h3>My Education</h3>
                
                <div style="margin: 20px 0;">
                    <div style="background: #316ac5; color: white; padding: 10px; border-radius: 5px;">
                        <h4>🎓 Higher Secondary Certificate (HSC)</h4>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Institution:</strong> Holy Land College</p>
                        <p><strong>Result:</strong> GPA 5.00</p>
                        <p><strong>Year:</strong> 2021</p>
                    </div>
                </div>
                
                <div style="margin: 20px 0;">
                    <div style="background: #316ac5; color: white; padding: 10px; border-radius: 5px;">
                        <h4>💻 Bachelor of Science in Computer Science & Engineering</h4>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>University:</strong> American International University-Bangladesh (AIUB)</p>
                        <p><strong>Student ID:</strong> 23-50577-1</p>
                        <p><strong>Current Semester:</strong> 9</p>
                        <p><strong>Expected Graduation:</strong> 2026</p>
                    </div>
                </div>
                
                <div style="margin: 20px 0;">
                    <h4>Relevant Coursework</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>
                            <ul>
                                <li>Programming Language I (C)</li>
                                <li>Programming Language II (C++)</li>
                                <li>Object Oriented Programming (Java)</li>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Database Management Systems</li>
                                <li>Web Technologies</li>
                                <li>Software Engineering</li>
                                <li>Computer Architecture</li>
                                <li>Operating Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 20px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">
                    <h4>Academic Achievements</h4>
                    <ul>
                        <li>Maintained excellent academic record throughout studies</li>
                        <li>Active participant in programming competitions</li>
                        <li>Completed multiple course projects with distinction</li>
                    </ul>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'education',
            'My Education',
            content,
            {
                width: 550,
                height: 550
            }
        );
        
        return window;
    }
}