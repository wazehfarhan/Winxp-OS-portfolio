class ExplorerApp {
    static launch(windowManager) {
        const content = `
            <div class="explorer-app" style="height: 100%; display: flex;">
                <div class="explorer-sidebar">
                    <div class="sidebar-section">
                        <div class="explorer-item selected">
                            <div class="file-icon folder"></div>
                            <span>Desktop</span>
                        </div>
                        <div class="explorer-item">
                            <div class="file-icon folder"></div>
                            <span>Portfolio</span>
                        </div>
                        <div class="explorer-item">
                            <div class="file-icon folder"></div>
                            <span>Resume</span>
                        </div>
                        <div class="explorer-item">
                            <div class="file-icon folder"></div>
                            <span>Projects</span>
                        </div>
                        <div class="explorer-item">
                            <div class="file-icon folder"></div>
                            <span>Education</span>
                        </div>
                        <div class="explorer-item">
                            <div class="file-icon folder"></div>
                            <span>Notes</span>
                        </div>
                    </div>
                </div>
                <div class="explorer-content" style="flex: 1; padding: 10px;">
                    <div class="explorer-toolbar" style="margin-bottom: 10px;">
                        <button class="xp-button">Back</button>
                        <button class="xp-button">Forward</button>
                        <button class="xp-button">Up</button>
                    </div>
                    <div class="explorer-items" style="display: grid; grid-template-columns: repeat(auto-fill, 80px); gap: 10px;">
                        <div class="explorer-item" onclick="alert('Portfolio Document\\n\\nThis folder contains all portfolio-related files and documents.')">
                            <div class="file-icon folder"></div>
                            <span>Portfolio</span>
                        </div>
                        <div class="explorer-item" onclick="alert('Resume Files\\n\\nContains resume documents in different formats.')">
                            <div class="file-icon folder"></div>
                            <span>Resume</span>
                        </div>
                        <div class="explorer-item" onclick="alert('Project Files\\n\\nAll project source codes and documentation.')">
                            <div class="file-icon folder"></div>
                            <span>Projects</span>
                        </div>
                        <div class="explorer-item" onclick="alert('Education Records\\n\\nAcademic records and certificates.')">
                            <div class="file-icon folder"></div>
                            <span>Education</span>
                        </div>
                        <div class="explorer-item" onclick="alert('Personal Notes\\n\\nStudy notes and personal documentation.')">
                            <div class="file-icon folder"></div>
                            <span>Notes</span>
                        </div>
                        <div class="explorer-item" onclick="alert('readme.txt\\n\\nWelcome to my portfolio file system!\\n\\nThis is a simulated file explorer showcasing my work.')">
                            <div class="file-icon"></div>
                            <span>readme.txt</span>
                        </div>
                        <div class="explorer-item" onclick="alert('skills.txt\\n\\nTechnical Skills:\\n- C, C++, Java, JavaScript\\n- SQL, C#, HTML/CSS\\n- Web Development\\n- OOP, Data Structures')">
                            <div class="file-icon"></div>
                            <span>skills.txt</span>
                        </div>
                        <div class="explorer-item" onclick="alert('contact.txt\\n\\nContact Information:\\nEmail: wzullah.farhan@gmail.com\\nGitHub: w2zfrhn\\nLinkedIn: w2zfrhn')">
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