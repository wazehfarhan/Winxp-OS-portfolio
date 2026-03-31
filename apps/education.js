class EducationApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app modern-app-no-padding" style="background: #f1f5f9; padding: 40px 20px;">
                <div class="modern-doc">
                    <h2 style="text-align: center; margin-bottom: 40px;">My Education</h2>
                    
                    <div class="modern-timeline" style="margin-bottom: 32px;">
                        <div class="modern-timeline-item">
                            <div class="modern-timeline-date">2023 - 2026 (Expected)</div>
                            <h3 style="margin-bottom: 4px;">BSc in Computer Science & Engineering</h3>
                            <p style="font-weight: 500; color: #1e293b; margin-bottom: 4px;">American International University-Bangladesh (AIUB)</p>
                            <p style="font-size: 0.875rem; color: #64748b;">Current Semester: 9 | Student ID: 23-50577-1</p>
                        </div>
                        <div class="modern-timeline-item" style="margin-bottom: 0;">
                            <div class="modern-timeline-date">2021</div>
                            <h3 style="margin-bottom: 4px;">Higher Secondary Certificate (HSC)</h3>
                            <p style="font-weight: 500; color: #1e293b; margin-bottom: 4px;">Holy Land College</p>
                            <p style="font-size: 0.875rem; color: #64748b;">GPA: 5.00</p>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 32px;">
                        <h3 style="border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Relevant Coursework</h3>
                        <div class="modern-flex" style="gap: 8px;">
                            <span class="modern-pill">Programming Language I & II</span>
                            <span class="modern-pill">Object Oriented Programming</span>
                            <span class="modern-pill">Data Structures & Algorithms</span>
                            <span class="modern-pill">Database Management Systems</span>
                            <span class="modern-pill">Web Technologies</span>
                            <span class="modern-pill">Software Engineering</span>
                            <span class="modern-pill">Computer Architecture</span>
                            <span class="modern-pill">Operating Systems</span>
                        </div>
                    </div>
                    
                    <div class="modern-card" style="background: #eef2ff; border-color: #c7d2fe;">
                        <h4 style="color: #4338ca; margin-bottom: 12px;">🏆 Academic Achievements</h4>
                        <ul style="color: #475569; margin: 0; padding-left: 20px; font-size: 0.95rem; line-height: 1.6;">
                            <li>Maintained excellent academic record throughout studies</li>
                            <li>Active participant in programming competitions</li>
                            <li>Completed multiple course projects with distinction</li>
                        </ul>
                    </div>
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