class ExplorerApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app modern-app-no-padding" style="height: 100%; display: flex;">
                <div class="explorer-sidebar" style="background: #f8fafc; border-right: 1px solid #e2e8f0;">
                    <div class="sidebar-section" style="padding: 10px 0;">
                        <div class="explorer-item selected" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Desktop</span>
                        </div>
                        <div class="explorer-item" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Portfolio</span>
                        </div>
                        <div class="explorer-item" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Resume</span>
                        </div>
                        <div class="explorer-item" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Projects</span>
                        </div>
                        <div class="explorer-item" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Education</span>
                        </div>
                        <div class="explorer-item" style="padding: 8px 16px;">
                            <div class="file-icon folder"></div>
                            <span style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px;">Notes</span>
                        </div>
                    </div>
                </div>
                <div class="explorer-content" style="flex: 1; padding: 20px; background: white;">
                    <div class="explorer-toolbar" style="margin-bottom: 20px; display: flex; gap: 8px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
                        <button class="modern-btn secondary" style="padding: 6px 14px; font-size: 0.8rem;">← Back</button>
                        <button class="modern-btn secondary" style="padding: 6px 14px; font-size: 0.8rem;">Forward →</button>
                        <button class="modern-btn secondary" style="padding: 6px 14px; font-size: 0.8rem;">↑ Up</button>
                    </div>
                    <div class="explorer-items" style="display: grid; grid-template-columns: repeat(auto-fill, 100px); gap: 20px;">
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('Portfolio Document\\n\\nThis folder contains all portfolio-related files and documents.')">
                            <div class="file-icon folder"></div>
                            <span>Portfolio</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('Resume Files\\n\\nContains resume documents in different formats.')">
                            <div class="file-icon folder"></div>
                            <span>Resume</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('Project Files\\n\\nAll project source codes and documentation.')">
                            <div class="file-icon folder"></div>
                            <span>Projects</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('Education Records\\n\\nAcademic records and certificates.')">
                            <div class="file-icon folder"></div>
                            <span>Education</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('Personal Notes\\n\\nStudy notes and personal documentation.')">
                            <div class="file-icon folder"></div>
                            <span>Notes</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('readme.txt\\n\\nWelcome to my portfolio file system!\\n\\nThis is a simulated file explorer showcasing my work.')">
                            <div class="file-icon"></div>
                            <span>readme.txt</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('skills.txt\\n\\nTechnical Skills:\\n- C, C++, Java, JavaScript\\n- SQL, C#, HTML/CSS\\n- Web Development\\n- OOP, Data Structures')">
                            <div class="file-icon"></div>
                            <span>skills.txt</span>
                        </div>
                        <div class="explorer-item" style="display:flex; flex-direction:column; align-items:center; text-align:center; padding: 10px; border-radius: 8px; transition: background 0.1s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='transparent'" onclick="alert('contact.txt\\n\\nContact Information:\\nEmail: wzullah.farhan@gmail.com\\nGitHub: wazehfarhan\\nLinkedIn: w2zfrhn')">
                            <div class="file-icon"></div>
                            <span>contact.txt</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'explorer',
            'File Explorer',
            content,
            {
                width: 700,
                height: 500
            }
        );
        
        return window;
    }
}