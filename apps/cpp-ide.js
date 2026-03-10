class CppIdeApp {
    static launch(windowManager) {
        const content = `
            <div class="cpp-ide-app" style="height: 100%; display: flex; flex-direction: column; background: #1e1e1e; color: #d4d4d4; font-family: 'Consolas', 'Courier New', monospace;">
                <div class="ide-toolbar" style="background: #333; padding: 5px; border-bottom: 1px solid #555; display: flex; gap: 10px;">
                    <button style="background: #4CAF50; color: white; border: none; padding: 2px 10px; cursor: pointer; font-size: 12px;">Run ▷</button>
                    <button style="background: #2b2b2b; color: white; border: 1px solid #555; padding: 2px 10px; cursor: pointer; font-size: 12px;">Save</button>
                    <span style="color: #888; font-size: 12px; margin-left: auto; margin-top: 2px;">main.cpp</span>
                </div>
                <div class="ide-editor" style="flex: 1; display: flex;">
                    <div class="line-numbers" style="width: 30px; background: #1e1e1e; color: #858585; text-align: right; padding-right: 5px; padding-top: 5px; border-right: 1px solid #404040; user-select: none;">
                        1<br>2<br>3<br>4<br>5<br>6<br>7<br>8
                    </div>
                    <textarea class="ide-textarea" spellcheck="false" style="flex: 1; background: transparent; color: #d4d4d4; border: none; resize: none; font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; padding: 5px; outline: none; line-height: 1.5; white-space: pre; overflow-wrap: normal; overflow-x: auto;">
#include &lt;iostream&gt;

using namespace std;

int main() {
    cout << "Welcome to W2ZFRHN's C++ IDE!" << endl;
    return 0;
}
</textarea>
                </div>
                <div class="ide-terminal" style="height: 100px; background: #000; color: #ccc; border-top: 1px solid #404040; padding: 5px; font-size: 12px; font-family: 'Consolas', monospace; overflow-y: auto;">
                    <div style="color: #4CAF50;">Terminal ready. Press Run to compile and execute.</div>
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
