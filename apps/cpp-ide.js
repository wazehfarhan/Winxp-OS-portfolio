class CppIdeApp {
    static launch(windowManager) {
        const content = `
            <div class="modern-app modern-app-no-padding" style="height: 100%; display: flex; flex-direction: column; background: #0f172a; color: #f8fafc; font-family: 'Fira Code', 'Consolas', monospace;">
                <div class="ide-toolbar" style="background: #1e293b; padding: 12px; border-bottom: 1px solid #334155; display: flex; gap: 12px; align-items: center;">
                    <button class="modern-btn primary" style="padding: 6px 14px; font-size: 13px; font-weight: 500;">▶ Run</button>
                    <button class="modern-btn secondary" style="padding: 6px 14px; font-size: 13px; border-color: #475569; color: #cbd5e1;">Save</button>
                    <span style="color: #94a3b8; font-size: 13px; font-family: 'Inter', sans-serif; margin-left: auto;">main.cpp</span>
                </div>
                <div class="ide-editor" style="flex: 1; display: flex;">
                    <div class="line-numbers" style="width: 40px; background: #0f172a; color: #475569; text-align: right; padding-right: 12px; padding-top: 12px; border-right: 1px solid #334155; user-select: none; font-size: 14px;">
                        1<br>2<br>3<br>4<br>5<br>6<br>7<br>8
                    </div>
                    <textarea class="ide-textarea" spellcheck="false" style="flex: 1; background: transparent; color: #e2e8f0; border: none; resize: none; font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; padding: 12px; outline: none; line-height: 1.6; white-space: pre; overflow-wrap: normal; overflow-x: auto;">
#include &lt;iostream&gt;

using namespace std;

int main() {
    cout << "Welcome to W2ZFRHN's C++ IDE!" << endl;
    return 0;
}
</textarea>
                </div>
                <div class="ide-terminal" style="height: 120px; background: #020617; color: #cbd5e1; border-top: 1px solid #334155; padding: 12px; font-size: 13px; font-family: 'Consolas', monospace; overflow-y: auto;">
                    <div style="color: #10b981;">● Terminal ready. Press Run to compile and execute.</div>
                </div>
            </div>
        `;
        
        const windowObj = windowManager.createWindow(
            'cpp-ide',
            'C++ IDE - Visual Studio Code',
            content,
            {
                width: 650,
                height: 500
            }
        );
        
        // Add basic functionality for this app instance
        const runBtn = windowObj.element.querySelector('button');
        const terminal = windowObj.element.querySelector('.ide-terminal');
        
        runBtn.addEventListener('click', () => {
            terminal.innerHTML += '<br><span style="color: #888;">$ g++ main.cpp -o main && ./main</span><br>';
            setTimeout(() => {
                terminal.innerHTML += 'Welcome to W2ZFRHN\'s C++ IDE!<br>';
                terminal.scrollTop = terminal.scrollHeight;
            }, 600);
        });

        return windowObj;
    }
}
