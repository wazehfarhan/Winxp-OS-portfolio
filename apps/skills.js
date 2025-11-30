class SkillsApp {
    static launch(windowManager) {
        const content = `
            <div class="skills-content">
                <h3>My Technical Skills</h3>
                
                <div style="margin: 20px 0;">
                    <h4>Programming Languages</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div style="text-align: center; padding: 10px; background: #e8f4f8; border-radius: 5px;">
                            <div style="font-size: 24px;">C</div>
                            <div style="height: 10px; background: #ccc; border-radius: 5px; margin: 5px 0;">
                                <div style="height: 100%; width: 85%; background: #4ecdc4; border-radius: 5px;"></div>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div style="text-align: center; padding: 10px; background: #e8f4f8; border-radius: 5px;">
                            <div style="font-size: 24px;">C++</div>
                            <div style="height: 10px; background: #ccc; border-radius: 5px; margin: 5px 0;">
                                <div style="height: 100%; width: 80%; background: #45b7d1; border-radius: 5px;"></div>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div style="text-align: center; padding: 10px; background: #e8f4f8; border-radius: 5px;">
                            <div style="font-size: 24px;">Java</div>
                            <div style="height: 10px; background: #ccc; border-radius: 5px; margin: 5px 0;">
                                <div style="height: 100%; width: 75%; background: #96ceb4; border-radius: 5px;"></div>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div style="text-align: center; padding: 10px; background: #e8f4f8; border-radius: 5px;">
                            <div style="font-size: 24px;">JavaScript</div>
                            <div style="height: 10px; background: #ccc; border-radius: 5px; margin: 5px 0;">
                                <div style="height: 100%; width: 70%; background: #feca57; border-radius: 5px;"></div>
                            </div>
                            <small>Intermediate</small>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 20px 0;">
                    <h4>Web Technologies</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>SQL</li>
                                <li>C#</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 20px 0;">
                    <h4>Core Concepts</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <ul>
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>Data Structures</li>
                                <li>Algorithms</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Problem Solving</li>
                                <li>Software Engineering</li>
                                <li>Version Control (Git)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="margin: 20px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">
                    <h4>Currently Learning</h4>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Database Design</li>
                    </ul>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'skills',
            'My Skills',
            content,
            {
                width: 500,
                height: 500
            }
        );
        
        return window;
    }
}