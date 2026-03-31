class ResumeApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app modern-app-no-padding" style="background: #f1f5f9; padding: 40px 20px;">
                <div class="modern-doc">
                    <h1 style="text-align: center; margin-bottom: 40px;">Kazi Md. Wazeh Ullah Farhan</h1>
                    
                    <div style="margin-bottom: 32px;">
                        <h3 style="border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Education</h3>
                        <div class="modern-timeline">
                            <div class="modern-timeline-item">
                                <div class="modern-timeline-date">Current</div>
                                <h4>American International University-Bangladesh (AIUB)</h4>
                                <p style="margin-bottom: 4px;"><strong>BSc in Computer Science & Engineering</strong></p>
                                <p style="font-size: 0.875rem;">Student ID: 23-50577-1 | Semester: 9</p>
                            </div>
                            <div class="modern-timeline-item" style="margin-bottom: 0;">
                                <div class="modern-timeline-date">Previous</div>
                                <h4>Holy Land College</h4>
                                <p style="margin-bottom: 4px;"><strong>Higher Secondary Certificate (HSC)</strong></p>
                                <p style="font-size: 0.875rem;">GPA: 5.00</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 32px;">
                        <h3 style="border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Technical Skills</h3>
                        <div class="modern-grid" style="gap: 16px;">
                            <div class="modern-card" style="padding: 16px; border: 1px solid #e2e8f0; box-shadow: none;">
                                <h5 style="margin-bottom: 12px;">Programming Languages</h5>
                                <div class="modern-flex" style="gap: 6px;">
                                    <span class="modern-pill">C</span>
                                    <span class="modern-pill">C++</span>
                                    <span class="modern-pill">Java</span>
                                    <span class="modern-pill">JavaScript</span>
                                    <span class="modern-pill">C#</span>
                                </div>
                            </div>
                            <div class="modern-card" style="padding: 16px; border: 1px solid #e2e8f0; box-shadow: none;">
                                <h5 style="margin-bottom: 12px;">Web Technologies</h5>
                                <div class="modern-flex" style="gap: 6px;">
                                    <span class="modern-pill">HTML5</span>
                                    <span class="modern-pill">CSS3</span>
                                    <span class="modern-pill">SQL</span>
                                    <span class="modern-pill">Web Dev</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 40px;">
                        <h3 style="border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Core Competencies</h3>
                        <ul style="color: #475569; padding-left: 20px; line-height: 1.8;">
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Problem Solving</li>
                            <li>Software Development Life Cycle</li>
                            <li>Version Control (Git)</li>
                        </ul>
                    </div>
                    
                    <div style="text-align: center; margin-top: 40px;">
                        <a href="assets/Documents/kaziwazehullahfarhan_Resume.pdf" download="Kazi_Wazeh_Ullah_Farhan_Resume.pdf" style="text-decoration: none;">
                            <button class="modern-btn primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                Download Resume (PDF)
                            </button>
                        </a>
                    </div>
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