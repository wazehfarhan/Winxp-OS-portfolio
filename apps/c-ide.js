class CIdeApp {
  static launch(windowManager) {
        const content = `
            <div class="modern-app modern-app-no-padding" style="height: 100%; display: flex; flex-direction: column; background: #0f172a; color: #f8fafc; font-family: 'Consolas', 'Courier New', monospace;">
                <!-- Toolbar -->
                <div class="ide-toolbar" style="background: #1e293b; padding: 12px; border-bottom: 1px solid #334155; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="display: flex; gap: 8px;">
                        <button class="modern-btn primary" id="run-btn" style="padding: 6px 14px; font-size: 13px; font-weight: 500;">▶ Run</button>
                        <button class="modern-btn secondary" id="clear-btn" style="padding: 6px 14px; font-size: 13px; border-color: #475569; color: #cbd5e1;">Clear</button>
                    </div>
                    
                    <select id="template-select" style="background: #0f172a; color: #cbd5e1; border: 1px solid #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-family: 'Inter', sans-serif;">
                        <option value="basic">📄 Basic C Program</option>
                        <option value="variables">🔢 Variables Demo</option>
                        <option value="arithmetic">🧮 Arithmetic Operations</option>
                        <option value="conditions">⚖️ If-Else Conditions</option>
                        <option value="loops">🔄 Loops Demo</option>
                    </select>
                    
                    <div style="flex: 1;"></div>
                    <div style="color: #94a3b8; font-size: 13px; font-family: 'Inter', sans-serif; background: #0f172a; padding: 4px 12px; border-radius: 12px;" id="file-info">main.c</div>
                </div>
                
                <!-- Main container -->
                <div style="flex: 1; display: flex; flex-direction: column; overflow: hidden; position: relative;" id="main-container">
                    <!-- Editor section -->
                    <div id="editor-container" style="flex: 1; display: flex; overflow: hidden; min-height: 100px; position: relative;">
                        <div id="line-numbers-container" style="width: 50px; background: #0f172a; border-right: 1px solid #334155; overflow: hidden; position: relative;">
                            <div id="line-numbers" style="color: #475569; text-align: right; padding-right: 12px; padding-top: 12px; font-size: 14px; line-height: 1.6; font-family: 'Consolas', monospace; white-space: pre; position: absolute; top: 0; right: 0; left: 0;">
                                1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10
                            </div>
                        </div>
                        <textarea id="code-editor" spellcheck="false" wrap="off" style="flex: 1; background: #0f172a; color: #e2e8f0; border: none; resize: none; font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; padding: 12px; outline: none; line-height: 1.6; white-space: pre; overflow: auto;">#include <stdio.h>

int main() {
    int number = 10;
    printf("The answer is %d\\n", number);
    return 0;
}</textarea>
                    </div>
                    
                    <!-- Splitter -->
                    <div id="splitter" style="height: 6px; background: #1e293b; cursor: ns-resize; user-select: none; display: flex; justify-content: center; align-items: center; border-top: 1px solid #334155; border-bottom: 1px solid #334155;">
                        <div style="width: 60px; height: 2px; background: #475569; border-radius: 2px;"></div>
                    </div>
                    
                    <!-- Terminal -->
                    <div id="terminal-container" style="height: 200px; background: #020617; display: flex; flex-direction: column;">
                        <div style="background: #0f172a; padding: 6px 12px; color: #94a3b8; font-size: 12px; font-family: 'Inter', sans-serif; font-weight: 500; border-bottom: 1px solid #334155;">
                            <span style="color: #3b82f6;">● TERMINAL</span>
                        </div>
                        <div id="terminal" style="flex: 1; overflow-y: auto; padding: 12px; font-family: 'Consolas', monospace; font-size: 13px; line-height: 1.6; background: #020617; color: #cbd5e1;"></div>
                    </div>
                </div>
                
                <!-- Status bar -->
                <div style="background: #3b82f6; padding: 4px 16px; color: white; font-size: 12px; font-family: 'Inter', sans-serif; font-weight: 500; display: flex; gap: 24px;">
                    <span>⚡ C IDE</span>
                    <span id="line-count">Ln 1, Col 1</span>
                    <span id="file-size">0 KB</span>
                    <span style="flex: 1;"></span>
                    <span>C99</span>
                </div>
            </div>
        `;

    const windowObj = windowManager.createWindow(
      "c-ide",
      "C IDE - Variable-Aware Version",
      content,
      {
        width: 800,
        height: 600,
        minWidth: 600,
        minHeight: 500,
      },
    );

    // Get elements
    const editor = windowObj.element.querySelector("#code-editor");
    const terminal = windowObj.element.querySelector("#terminal");
    const runBtn = windowObj.element.querySelector("#run-btn");
    const clearBtn = windowObj.element.querySelector("#clear-btn");
    const templateSelect = windowObj.element.querySelector("#template-select");
    const lineNumbersDiv = windowObj.element.querySelector("#line-numbers");
    const lineCountSpan = windowObj.element.querySelector("#line-count");
    const fileSizeSpan = windowObj.element.querySelector("#file-size");

    // Templates
    const templates = {
      basic: `#include <stdio.h>

int main() {
    int number = 10;
    printf("The answer is %d\\n", number);
    return 0;
}`,

      variables: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 7;
    int c = 10;
    
    printf("a = %d\\n", a);
    printf("b = %d\\n", b);
    printf("c = %d\\n", c);
    
    return 0;
}`,

      arithmetic: `#include <stdio.h>

int main() {
    int x = 15;
    int y = 4;
    
    printf("x + y = %d\\n", x + y);
    printf("x - y = %d\\n", x - y);
    printf("x * y = %d\\n", x * y);
    printf("x / y = %d\\n", x / y);
    printf("x %% y = %d\\n", x % y);
    
    return 0;
}`,

      conditions: `#include <stdio.h>

int main() {
    int age = 18;
    
    if(age >= 18) {
        printf("You are an adult\\n");
    } else {
        printf("You are a minor\\n");
    }
    
    return 0;
}`,

      loops: `#include <stdio.h>

int main() {
    int count = 5;
    
    printf("Counting to %d:\\n", count);
    for(int i = 1; i <= count; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`,
    };

    // Function to update line numbers
    function updateLineNumbers() {
      const lines = editor.value.split("\n");
      const lineCount = lines.length;

      let lineNumbersHtml = "";
      for (let i = 1; i <= lineCount; i++) {
        lineNumbersHtml += i + (i < lineCount ? "<br>" : "");
      }
      lineNumbersDiv.innerHTML = lineNumbersHtml;

      // Calculate cursor position
      const cursorPos = editor.selectionStart;
      const textBeforeCursor = editor.value.substring(0, cursorPos);
      const linesBeforeCursor = (textBeforeCursor.match(/\n/g) || []).length;
      const currentLine = linesBeforeCursor + 1;

      const lastNewLine = textBeforeCursor.lastIndexOf("\n");
      const currentCol =
        lastNewLine === -1 ? cursorPos + 1 : cursorPos - lastNewLine;

      lineCountSpan.textContent = `Ln ${currentLine}, Col ${currentCol}`;

      const sizeInBytes = new Blob([editor.value]).size;
      fileSizeSpan.textContent = `${(sizeInBytes / 1024).toFixed(2)} KB`;

      // Fixed: proper line numbers scrolling using transform
      lineNumbersDiv.style.transform = `translateY(-${editor.scrollTop}px)`;
    }

    // Initialize
    updateLineNumbers();

    // Editor events
    editor.addEventListener("input", updateLineNumbers);
    editor.addEventListener("scroll", () => {
      lineNumbersDiv.style.transform = `translateY(-${editor.scrollTop}px)`;
    });
    editor.addEventListener("click", updateLineNumbers);
    editor.addEventListener("keyup", updateLineNumbers);

    // Tab key
    editor.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value =
          editor.value.substring(0, start) +
          "    " +
          editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
        updateLineNumbers();
      }

      if (e.key === "Enter" && e.ctrlKey) {
        e.preventDefault();
        runBtn.click();
      }
    });

    // Template change
    templateSelect.addEventListener("change", () => {
      const template = templates[templateSelect.value];
      if (template) {
        editor.value = template;
        updateLineNumbers();
        appendToTerminal(
          `w2zfrhn@root:~# <span style="color: #6a9955;">Loaded template: ${templateSelect.options[templateSelect.selectedIndex].text}</span>`,
        );
      }
    });

    // Terminal append
    function appendToTerminal(text) {
      const lineDiv = document.createElement("div");
      lineDiv.style.marginBottom = "2px";
      lineDiv.style.wordBreak = "break-all";
      lineDiv.style.fontFamily = "'Consolas', monospace";
      lineDiv.style.fontSize = "13px";
      lineDiv.innerHTML = text;
      terminal.appendChild(lineDiv);
      terminal.scrollTop = terminal.scrollHeight;

      while (terminal.children.length > 100) {
        terminal.removeChild(terminal.firstChild);
      }
    }

    // Parse and execute C code natively in JS
    function parseCCode(code) {
      let outputs = [];
      let currentLine = "";

      // Simulates C printf - FIXED: escape sequences and format specifiers
      function __printf(format, ...args) {
        let result = "";
        let argIndex = 0;
        let i = 0;

        // Process escape sequences first
        format = format
          .replace(/\\n/g, "\n")
          .replace(/\\t/g, "\t")
          .replace(/\\\\/g, "\\");

        while (i < format.length) {
          if (format[i] === "%" && i + 1 < format.length) {
            const specifier = format[i + 1];
            if (["d", "i", "f", "c", "s", "u", "x"].includes(specifier)) {
              if (argIndex < args.length) {
                let arg = args[argIndex];
                if (specifier === "d" || specifier === "i") {
                  // Integer
                  result += Math.floor(Number(arg));
                } else if (specifier === "f") {
                  // Float - properly format
                  result += parseFloat(arg)
                    .toFixed(6)
                    .replace(/\.?0+$/, "");
                } else if (specifier === "c") {
                  // Character
                  result += String(arg).charAt(0);
                } else if (specifier === "s") {
                  // String
                  result += String(arg);
                } else if (specifier === "u") {
                  // Unsigned
                  result += Math.abs(Math.floor(Number(arg)));
                } else if (specifier === "x") {
                  // Hexadecimal
                  result += Math.abs(Math.floor(Number(arg))).toString(16);
                }
                argIndex++;
              }
              i += 2;
            } else if (specifier === "%") {
              result += "%";
              i += 2;
            } else {
              result += format[i];
              i++;
            }
          } else {
            result += format[i];
            i++;
          }
        }

        // Track newlines to emit distinct lines
        for (let char of result) {
          if (char === "\n") {
            outputs.push(currentLine);
            currentLine = "";
          } else {
            currentLine += char;
          }
        }
      }

      try {
        // Transpile C to JS
        let jsCode = code;

        // Remove preprocessor directives
        jsCode = jsCode.replace(/#include.*$/gm, "");

        // Handle main function signature
        jsCode = jsCode.replace(
          /(int|void)\s+main\s*\([^\)]*\)\s*\{/g,
          "function main() {",
        );

        // Replace float/double with var (to support floating point)
        jsCode = jsCode.replace(/\bfloat\b/g, "var");
        jsCode = jsCode.replace(/\bdouble\b/g, "var");
        // Replace int, char, long, short with let
        jsCode = jsCode.replace(/\b(int|char|long|short|bool)\b/g, "let");

        // Create execution environment
        const execWrapper =
          `
                    (function() {
                        const printf = __printf;
                        ` +
          jsCode +
          `
                        if (typeof main === 'function') {
                            return main();
                        }
                    })();
                `;

        eval(execWrapper);

        // Push any remaining output that didn't end with newline
        if (currentLine !== "") {
          outputs.push(currentLine);
        }

        return outputs;
      } catch (e) {
        let lineStr = "";
        let codeLine = "";
        if (e.stack) {
          const match =
            e.stack.match(/<anonymous>:(\d+)/) || e.stack.match(/eval.*:(\d+)/);
          if (match) {
            const lineNum = parseInt(match[1]) - 3;
            if (lineNum > 0) {
              lineStr = ` at line ${lineNum}`;
              const lines = code.split("\n");
              if (lineNum <= lines.length) {
                codeLine = lines[lineNum - 1].trim();
              }
            }
          }
        }

        if (!lineStr && e.lineNumber) {
          const lineNum = parseInt(e.lineNumber) - 3;
          if (lineNum > 0) {
            lineStr = ` at line ${lineNum}`;
            const lines = code.split("\n");
            if (lineNum <= lines.length) {
              codeLine = lines[lineNum - 1].trim();
            }
          }
        }

        let finalErrorMsg =
          "<span style='color:#f48771;'>Runtime Error: " +
          e.message +
          lineStr +
          "</span>";
        if (codeLine) {
          finalErrorMsg +=
            "<br><span style='color:#f48771; opacity: 0.8;'>> " +
            codeLine +
            "</span>";
        }

        return [finalErrorMsg];
      }
    }

    // Run button
    runBtn.addEventListener("click", () => {
      const code = editor.value;

      appendToTerminal(
        `<span style="color: #6a9955;">w2zfrhn@root:~# gcc program.c -o program</span>`,
      );

      // Simple error checking - FIXED: complete semicolon detection
      let hasError = false;

      if (!code.includes("main(")) {
        appendToTerminal(
          `<span style="color: #f48771;">error: undefined reference to 'main'</span>`,
        );
        hasError = true;
      }

      // Check for missing semicolons - improved detection
      const lines = code.split("\n");
      for (let i = 0; i < lines.length; i++) {
        // Ignore comments for syntax checking
        let lineStr = lines[i].split("//")[0].trim();

        // Skip preprocessor, braces, keywords that don't need semicolons
        if (
          lineStr &&
          !lineStr.startsWith("#") &&
          !lineStr.endsWith("{") &&
          !lineStr.endsWith("}") &&
          !lineStr.startsWith("if") &&
          !lineStr.startsWith("for") &&
          !lineStr.startsWith("while") &&
          !lineStr.startsWith("else") &&
          !lineStr.startsWith("do")
        ) {
          if (!lineStr.endsWith(";")) {
            // Check if it's an assignment, print, return, or declaration
            if (
              lineStr.includes("printf") ||
              lineStr.includes("return") ||
              lineStr.includes("=") ||
              lineStr.match(
                /^(int|float|double|char|long|short|bool|let|var)\s+/,
              )
            ) {
              appendToTerminal(
                `<span style="color: #f48771;">error: expected ';' before end of line (line ${i + 1})</span>`,
              );
              appendToTerminal(
                `<span style="color: #f48771; opacity: 0.8;">> ${lines[i].trim()}</span>`,
              );
              hasError = true;
            }
          }
        }
      }

      // Try to catch JS syntax errors as compile errors
      if (!hasError) {
        try {
          let jsCode = code;
          jsCode = jsCode.replace(/#include.*$/gm, "");
          jsCode = jsCode.replace(
            /(int|void)\s+main\s*\([^\)]*\)\s*\{/g,
            "function main() {",
          );
          jsCode = jsCode.replace(/\b(float|double)\b/g, "var");
          jsCode = jsCode.replace(/\b(int|char|long|short|bool)\b/g, "let");

          // Only check syntax, do not execute
          new Function(jsCode);
        } catch (e) {
          if (e instanceof SyntaxError) {
            let lineStr = "";
            let codeLine = "";
            if (e.stack) {
              const match =
                e.stack.match(/<anonymous>:(\d+)/) ||
                e.stack.match(/eval.*:(\d+)/);
              if (match) {
                const lineNum = parseInt(match[1]) - 2; // new Function adds 2 wrapper lines
                if (lineNum > 0) {
                  lineStr = ` (line ${lineNum})`;
                  if (lineNum <= lines.length)
                    codeLine = lines[lineNum - 1].trim();
                }
              }
            }
            if (!lineStr && e.lineNumber) {
              const lineNum = parseInt(e.lineNumber) - 2;
              if (lineNum > 0) {
                lineStr = ` (line ${lineNum})`;
                if (lineNum <= lines.length)
                  codeLine = lines[lineNum - 1].trim();
              }
            }
            appendToTerminal(
              `<span style="color: #f48771;">error: ${e.message}${lineStr}</span>`,
            );
            if (codeLine)
              appendToTerminal(
                `<span style="color: #f48771; opacity: 0.8;">> ${codeLine}</span>`,
              );
            hasError = true;
          }
        }
      }

      if (hasError) {
        appendToTerminal(
          `<span style="color: #f48771;">compilation terminated</span>`,
        );
      } else {
        appendToTerminal(
          `<span style="color: #6a9955;">Compilation successful</span>`,
        );
        appendToTerminal(
          `<span style="color: #6a9955;">w2zfrhn@root:~# ./program</span>`,
        );

        // Parse and execute the code
        setTimeout(() => {
          const returnedOutputs = parseCCode(code);

          if (returnedOutputs.length > 0) {
            returnedOutputs.forEach((line) => {
              appendToTerminal(
                `<span style="color: #9cdcfe;">${line || "&nbsp;"}</span>`,
              );
            });
          } else {
            appendToTerminal(
              `<span style="color: #ffaa00;">Program executed (no output)</span>`,
            );
          }

          appendToTerminal(
            `<span style="color: #6a9955;">Program exited with code: 0</span>`,
          );
        }, 500);
      }
    });

    // Clear terminal
    clearBtn.addEventListener("click", () => {
      terminal.innerHTML = "";
      appendToTerminal(
        'w2zfrhn@root:~# <span style="color: #6a9955;">Terminal cleared</span>',
      );
    });

    // Splitter functionality - FIXED: proper event handling
    const splitter = windowObj.element.querySelector("#splitter");
    const editorContainer =
      windowObj.element.querySelector("#editor-container");
    const terminalContainer = windowObj.element.querySelector(
      "#terminal-container",
    );
    let isDragging = false;

    splitter.addEventListener("mousedown", (e) => {
      isDragging = true;
      splitter.style.background = "#6a9955";
      document.body.style.cursor = "ns-resize";
      document.body.style.userSelect = "none";
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const container = windowObj.element.querySelector("#main-container");
      const containerRect = container.getBoundingClientRect();
      const mouseY = e.clientY - containerRect.top;

      const containerHeight = containerRect.height;
      const splitterHeight = 4;

      let terminalHeight = containerHeight - mouseY;
      terminalHeight = Math.max(
        100,
        Math.min(terminalHeight, containerHeight - 100),
      );

      editorContainer.style.flex = "none";
      editorContainer.style.height =
        containerHeight - terminalHeight - splitterHeight + "px";
      terminalContainer.style.height = terminalHeight + "px";
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        splitter.style.background = "#3c3c3c";
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
      }
    });

    // Initialize
    appendToTerminal(
      'w2zfrhn@root:~# <span style="color: #6a9955;">Welcome to C IDE - Variable-Aware Version</span>',
    );
    appendToTerminal(
      'w2zfrhn@root:~# <span style="color: #6a9955;">Variables are now tracked correctly!</span>',
    );

    return windowObj;
  }
}
