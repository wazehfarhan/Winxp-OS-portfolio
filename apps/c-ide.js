class CIdeApp {
    static launch(windowManager) {
        const content = `
            <div class="c-ide-app" style="height: 100%; display: flex; flex-direction: column; background: #1e1e1e; color: #d4d4d4; font-family: 'Consolas', 'Courier New', monospace;">
                <!-- Toolbar -->
                <div class="ide-toolbar" style="background: #2d2d2d; padding: 8px 12px; border-bottom: 1px solid #3c3c3c; display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                    <div style="display: flex; gap: 8px;">
                        <button id="run-btn" style="background: #0e639c; color: white; border: none; padding: 4px 16px; cursor: pointer; font-size: 12px; border-radius: 4px; font-weight: 500;">▶ Run</button>
                        <button id="clear-btn" style="background: transparent; color: #ccc; border: 1px solid #3c3c3c; padding: 4px 16px; cursor: pointer; font-size: 12px; border-radius: 4px;">Clear</button>
                    </div>
                    
                    <!-- File templates dropdown -->
                    <select id="template-select" style="background: #3c3c3c; color: #ccc; border: 1px solid #4c4c4c; padding: 3px 8px; border-radius: 3px; font-size: 12px;">
                        <option value="basic">📄 Basic C Program</option>
                        <option value="datatypes">📊 Data Types Demo</option>
                        <option value="arrays">📦 Arrays & Strings</option>
                        <option value="pointers">🔗 Pointers Demo</option>
                        <option value="structs">🏗️ Structures & Unions</option>
                        <option value="functions">⚙️ Functions Demo</option>
                        <option value="fileio">📁 File I/O Demo</option>
                        <option value="dynamic">🔄 Dynamic Memory</option>
                        <option value="linkedlist">🔗 Linked List</option>
                    </select>
                    
                    <div style="flex: 1;"></div>
                    <div style="color: #888; font-size: 12px; background: #3c3c3c; padding: 3px 12px; border-radius: 12px;" id="file-info">main.c</div>
                </div>
                
                <!-- Main container with splitter -->
                <div style="flex: 1; display: flex; flex-direction: column; overflow: hidden;" id="main-container">
                    <!-- Editor section -->
                    <div id="editor-container" style="flex: 1; display: flex; overflow: hidden; min-height: 100px;">
                        <div class="line-numbers" style="width: 50px; background: #1e1e1e; color: #6a9955; text-align: right; padding-right: 10px; padding-top: 10px; border-right: 1px solid #3c3c3c; user-select: none; font-size: 14px; line-height: 1.6; font-family: 'Consolas', monospace; overflow: hidden;" id="line-numbers">
                            1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9
                        </div>
                        <textarea id="code-editor" spellcheck="false" wrap="off" style="flex: 1; background: #1e1e1e; color: #d4d4d4; border: none; resize: none; font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; padding: 10px; outline: none; line-height: 1.6; white-space: pre; overflow: auto;">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;

int main() {
    printf("Welcome to Complete C IDE!\\n");
    return 0;
}</textarea>
                    </div>
                    
                    <!-- Splitter -->
                    <div id="splitter" style="height: 4px; background: #3c3c3c; cursor: ns-resize; user-select: none; display: flex; justify-content: center; align-items: center;">
                        <div style="width: 50px; height: 2px; background: #6a9955; border-radius: 2px;"></div>
                    </div>
                    
                    <!-- Terminal section -->
                    <div id="terminal-container" style="height: 250px; background: #1a1a1a; border-top: 2px solid #3c3c3c; display: flex; flex-direction: column;">
                        <div style="background: #2d2d2d; padding: 4px 12px; color: #888; font-size: 11px; border-bottom: 1px solid #3c3c3c; display: flex; gap: 15px;">
                            <span style="color: #0e639c;">🔴 PROBLEMS</span>
                            <span style="color: #ccc;">🔷 OUTPUT</span>
                            <span style="color: #ccc;">🔷 TERMINAL</span>
                            <span style="flex: 1;"></span>
                            <span style="color: #6a9955;" id="terminal-size">⚡ 30x80</span>
                        </div>
                        <div id="terminal" style="flex: 1; overflow-y: auto; padding: 10px; font-family: 'Consolas', monospace; font-size: 13px; line-height: 1.5; background: #1a1a1a; color: #ccc;"></div>
                    </div>
                </div>
                
                <!-- Status bar -->
                <div style="background: #0e639c; padding: 2px 12px; color: white; font-size: 11px; display: flex; gap: 20px; flex-wrap: wrap;">
                    <span>✨ Complete C IDE</span>
                    <span id="line-count">Ln 1, Col 1</span>
                    <span id="file-size">0 KB</span>
                    <span style="flex: 1;"></span>
                    <span>C18 (2018)</span>
                    <span>GCC 11.2.0</span>
                </div>
            </div>
        `;
        
        const windowObj = windowManager.createWindow(
            'c-ide',
            'Complete C IDE - All C Elements Supported',
            content,
            {
                width: 1000,
                height: 750,
                minWidth: 700,
                minHeight: 600
            }
        );
        
        // Get elements
        const editor = windowObj.element.querySelector('#code-editor');
        const terminal = windowObj.element.querySelector('#terminal');
        const runBtn = windowObj.element.querySelector('#run-btn');
        const clearBtn = windowObj.element.querySelector('#clear-btn');
        const templateSelect = windowObj.element.querySelector('#template-select');
        const lineNumbersDiv = windowObj.element.querySelector('#line-numbers');
        const splitter = windowObj.element.querySelector('#splitter');
        const terminalContainer = windowObj.element.querySelector('#terminal-container');
        const editorContainer = windowObj.element.querySelector('#editor-container');
        const lineCountSpan = windowObj.element.querySelector('#line-count');
        const fileSizeSpan = windowObj.element.querySelector('#file-size');
        const terminalSizeSpan = windowObj.element.querySelector('#terminal-size');
        
        // Templates with all C elements
        const templates = {
            basic: `#include <stdio.h>

int main() {
    // Basic C program
    printf("Hello, World!\\n");
    
    int number = 42;
    printf("The answer is %d\\n", number);
    
    return 0;
}`,

            datatypes: `#include <stdio.h>
#include <stdbool.h>

int main() {
    // All C data types
    char c = 'A';
    short s = 32767;
    int i = 2147483647;
    long l = 9223372036854775807L;
    long long ll = 9223372036854775807LL;
    
    float f = 3.14159f;
    double d = 3.14159265359;
    long double ld = 3.14159265358979323846L;
    
    bool b = true;
    
    // Unsigned variants
    unsigned int ui = 4294967295U;
    unsigned long ul = 18446744073709551615UL;
    
    // Printing all types
    printf("char: %c\\n", c);
    printf("short: %d\\n", s);
    printf("int: %d\\n", i);
    printf("long: %ld\\n", l);
    printf("long long: %lld\\n", ll);
    printf("float: %f\\n", f);
    printf("double: %lf\\n", d);
    printf("bool: %d\\n", b);
    
    return 0;
}`,

            arrays: `#include <stdio.h>
#include <string.h>

int main() {
    // One-dimensional array
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Two-dimensional array
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // String (character array)
    char str1[] = "Hello";
    char str2[20] = "World";
    char *str3 = "C Programming";
    
    // Array access and manipulation
    printf("Numbers: ");
    for(int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    
    printf("\\nMatrix:\\n");
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    // String operations
    printf("\\nString concatenation: %s %s\\n", str1, str2);
    printf("String length: %lu\\n", strlen(str1));
    printf("String comparison: %d\\n", strcmp(str1, "Hello"));
    
    return 0;
}`,

            pointers: `#include <stdio.h>

int main() {
    // Basic pointer
    int x = 10;
    int *ptr = &x;
    
    // Pointer to pointer
    int **ptr2 = &ptr;
    
    // Array pointer
    int arr[] = {1, 2, 3, 4, 5};
    int *arrPtr = arr;
    
    // Function pointer
    int (*funcPtr)(int, int) = NULL;
    
    // Void pointer
    void *voidPtr = &x;
    
    printf("Value of x: %d\\n", x);
    printf("Address of x: %p\\n", &x);
    printf("Pointer value: %p\\n", ptr);
    printf("Dereferenced pointer: %d\\n", *ptr);
    printf("Pointer to pointer: %d\\n", **ptr2);
    
    // Pointer arithmetic
    printf("\\nArray traversal with pointer:\\n");
    for(int i = 0; i < 5; i++) {
        printf("arr[%d] = %d (using pointer: %d)\\n", 
               i, arr[i], *(arrPtr + i));
    }
    
    return 0;
}`,

            structs: `#include <stdio.h>
#include <string.h>

// Structure definition
struct Student {
    char name[50];
    int age;
    float gpa;
    char grade;
};

// Union
union Data {
    int i;
    float f;
    char str[20];
};

// Enumeration
enum Weekday {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

// Typedef
typedef struct {
    int x;
    int y;
} Point;

int main() {
    // Structure usage
    struct Student student1;
    strcpy(student1.name, "John Doe");
    student1.age = 20;
    student1.gpa = 3.75;
    student1.grade = 'A';
    
    printf("Student: %s\\n", student1.name);
    printf("Age: %d\\n", student1.age);
    printf("GPA: %.2f\\n", student1.gpa);
    printf("Grade: %c\\n", student1.grade);
    
    // Union usage
    union Data data;
    data.i = 10;
    printf("\\nUnion as int: %d\\n", data.i);
    data.f = 3.14;
    printf("Union as float: %f\\n", data.f);
    
    // Enum usage
    enum Weekday today = WEDNESDAY;
    printf("\\nDay %d is Wednesday\\n", today);
    
    // Typedef struct
    Point p1 = {10, 20};
    printf("Point: (%d, %d)\\n", p1.x, p1.y);
    
    return 0;
}`,

            functions: `#include <stdio.h>
#include <stdarg.h>

// Function prototypes
int add(int a, int b);
void swap(int *a, int *b);
int factorial(int n);
float average(int count, ...);
inline int square(int x) { return x * x; }
static int counter = 0;

// Recursive function
int fibonacci(int n) {
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Variadic function
float average(int count, ...) {
    va_list args;
    va_start(args, count);
    
    float sum = 0;
    for(int i = 0; i < count; i++) {
        sum += va_arg(args, int);
    }
    
    va_end(args);
    return sum / count;
}

int main() {
    int a = 10, b = 20;
    
    printf("Add: %d + %d = %d\\n", a, b, add(a, b));
    
    swap(&a, &b);
    printf("After swap: a = %d, b = %d\\n", a, b);
    
    printf("Factorial of 5: %d\\n", factorial(5));
    printf("Fibonacci of 10: %d\\n", fibonacci(10));
    
    printf("Square of 7: %d\\n", square(7));
    
    printf("Average of 5 numbers: %.2f\\n", average(5, 10, 20, 30, 40, 50));
    
    counter++;
    printf("Static counter: %d\\n", counter);
    
    return 0;
}

int add(int a, int b) {
    return a + b;
}

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int factorial(int n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}`,

            fileio: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file;
    char buffer[100];
    
    // Writing to file
    file = fopen("test.txt", "w");
    if(file == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    fprintf(file, "Hello, File I/O!\\n");
    fprintf(file, "This is line 2\\n");
    fputs("This is fputs line\\n", file);
    
    fclose(file);
    printf("File written successfully\\n");
    
    // Reading from file
    file = fopen("test.txt", "r");
    if(file == NULL) {
        printf("Error opening file for reading!\\n");
        return 1;
    }
    
    printf("\\nFile contents:\\n");
    while(fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }
    
    fclose(file);
    
    // File positioning
    file = fopen("test.txt", "r");
    fseek(file, 5, SEEK_SET);
    printf("\\nPosition after fseek: %ld\\n", ftell(file));
    fclose(file);
    
    // Remove file
    remove("test.txt");
    printf("File removed\\n");
    
    return 0;
}`,

            dynamic: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // malloc - allocate memory
    int *arr1 = (int*)malloc(5 * sizeof(int));
    if(arr1 == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    
    for(int i = 0; i < 5; i++) {
        arr1[i] = i * 10;
    }
    
    printf("malloc array: ");
    for(int i = 0; i < 5; i++) {
        printf("%d ", arr1[i]);
    }
    printf("\\n");
    
    // calloc - allocate and initialize to zero
    int *arr2 = (int*)calloc(5, sizeof(int));
    printf("calloc array (all zeros): ");
    for(int i = 0; i < 5; i++) {
        printf("%d ", arr2[i]);
    }
    printf("\\n");
    
    // realloc - resize memory
    arr1 = (int*)realloc(arr1, 10 * sizeof(int));
    for(int i = 5; i < 10; i++) {
        arr1[i] = i * 10;
    }
    
    printf("realloc array (expanded): ");
    for(int i = 0; i < 10; i++) {
        printf("%d ", arr1[i]);
    }
    printf("\\n");
    
    // Dynamic string
    char *str = (char*)malloc(50 * sizeof(char));
    strcpy(str, "Dynamic string in C");
    printf("Dynamic string: %s\\n", str);
    
    // Free memory
    free(arr1);
    free(arr2);
    free(str);
    
    printf("All memory freed\\n");
    
    return 0;
}`,

            linkedlist: `#include <stdio.h>
#include <stdlib.h>

// Node structure
struct Node {
    int data;
    struct Node* next;
};

// Function to create new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Insert at beginning
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

// Insert at end
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    
    if(*head == NULL) {
        *head = newNode;
        return;
    }
    
    struct Node* temp = *head;
    while(temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Delete node
void deleteNode(struct Node** head, int key) {
    struct Node *temp = *head, *prev = NULL;
    
    if(temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }
    
    while(temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    
    if(temp == NULL) return;
    
    prev->next = temp->next;
    free(temp);
}

// Search
struct Node* search(struct Node* head, int key) {
    while(head != NULL) {
        if(head->data == key)
            return head;
        head = head->next;
    }
    return NULL;
}

// Display list
void displayList(struct Node* head) {
    printf("Linked List: ");
    while(head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}

// Free list
void freeList(struct Node* head) {
    struct Node* temp;
    while(head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    struct Node* head = NULL;
    
    insertAtEnd(&head, 10);
    insertAtEnd(&head, 20);
    insertAtBeginning(&head, 5);
    insertAtEnd(&head, 30);
    
    displayList(head);
    
    printf("Searching for 20: %s\\n", 
           search(head, 20) ? "Found" : "Not found");
    
    deleteNode(&head, 20);
    printf("After deleting 20:\\n");
    displayList(head);
    
    freeList(head);
    printf("List freed\\n");
    
    return 0;
}`
        };

        // All C keywords for error checking
        const cKeywords = new Set([
            'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
            'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
            'inline', 'int', 'long', 'register', 'restrict', 'return', 'short',
            'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union',
            'unsigned', 'void', 'volatile', 'while', '_Alignas', '_Alignof',
            '_Atomic', '_Bool', '_Complex', '_Generic', '_Imaginary', '_Noreturn',
            '_Static_assert', '_Thread_local'
        ]);

        const cStdlibFunctions = new Set([
            'printf', 'scanf', 'fprintf', 'fscanf', 'sprintf', 'sscanf',
            'fopen', 'fclose', 'fread', 'fwrite', 'fseek', 'ftell', 'rewind',
            'malloc', 'calloc', 'realloc', 'free', 'strlen', 'strcpy', 'strcat',
            'strcmp', 'strchr', 'strstr', 'atoi', 'atof', 'rand', 'srand',
            'time', 'exit', 'abs', 'pow', 'sqrt', 'sin', 'cos', 'tan'
        ]);

        // Template change handler
        templateSelect.addEventListener('change', () => {
            const template = templates[templateSelect.value];
            if(template) {
                editor.value = template;
                updateEditorInfo();
                appendToTerminal(`w2zfrhn@root:~/projects/c-ide# <span style="color: #6a9955;">Loaded template: ${templateSelect.options[templateSelect.selectedIndex].text}</span>`);
            }
        });

        // Rest of the functionality (updateEditorInfo, splitter, terminal functions) remains the same...
        // [Previous functions like updateEditorInfo, splitter logic, etc. go here]
        
        // Enhanced error checking for all C elements
        function checkForErrors(code) {
            const errors = [];
            const lines = code.split('\n');
            const lineCount = lines.length;
            
            if(lineCount === 0) return errors;
            
            let braceCount = 0;
            let lastBraceLine = 0;
            let inComment = false;
            let inString = false;
            let inChar = false;
            let hasMain = false;
            let preprocessorLines = new Set();
            
            for(let i = 0; i < lineCount; i++) {
                const line = lines[i];
                const trimmedLine = line.trim();
                
                // Skip preprocessor directives
                if(trimmedLine.startsWith('#')) {
                    preprocessorLines.add(i + 1);
                    
                    // Check for valid includes
                    if(trimmedLine.startsWith('#include')) {
                        if(!trimmedLine.match(/#include\s*[<"][a-zA-Z0-9_.]+[>"]/)) {
                            errors.push({
                                line: i + 1,
                                message: "invalid #include directive",
                                type: 'error'
                            });
                        }
                    }
                    continue;
                }
                
                // Skip comments
                if(trimmedLine.startsWith('//')) continue;
                
                // Multi-line comment handling
                if(line.includes('/*')) inComment = true;
                if(inComment) {
                    if(line.includes('*/')) inComment = false;
                    continue;
                }
                
                // Check for main function
                if(trimmedLine.includes('main(') && trimmedLine.includes(')')) {
                    hasMain = true;
                }
                
                // Brace counting
                for(let char of line) {
                    if(char === '{') {
                        braceCount++;
                        lastBraceLine = i + 1;
                    }
                    if(char === '}') braceCount--;
                }
                
                // String and character literal checking
                for(let j = 0; j < line.length; j++) {
                    if(line[j] === '"' && (j === 0 || line[j-1] !== '\\')) {
                        inString = !inString;
                    }
                    if(line[j] === "'" && (j === 0 || line[j-1] !== '\\')) {
                        inChar = !inChar;
                    }
                }
                
                if(inString) {
                    errors.push({
                        line: i + 1,
                        message: "unterminated string literal",
                        type: 'error'
                    });
                    break;
                }
                
                if(inChar) {
                    errors.push({
                        line: i + 1,
                        message: "unterminated character constant",
                        type: 'error'
                    });
                    break;
                }
                
                // Check for missing semicolons
                if(trimmedLine && 
                   !trimmedLine.endsWith('{') && 
                   !trimmedLine.endsWith('}') && 
                   !trimmedLine.endsWith(':') && // labels
                   !trimmedLine.startsWith('//') &&
                   !trimmedLine.startsWith('/*') &&
                   !inComment &&
                   !trimmedLine.match(/^(if|else|for|while|do|switch|case|default)\b/)) {
                    
                    // Check if line should end with semicolon
                    if(trimmedLine.match(/[a-zA-Z0-9_]\s*[=;]/) || 
                       trimmedLine.match(/\b(return|break|continue|goto)\b/) ||
                       trimmedLine.match(/[\)\]][\s]*$/)) {
                        if(!trimmedLine.endsWith(';') && !trimmedLine.endsWith('; //')) {
                            errors.push({
                                line: i + 1,
                                message: "expected ';' before end of line",
                                type: 'error'
                            });
                        }
                    }
                }
                
                // Check for undeclared variables (simplified)
                const words = trimmedLine.split(/[\s\(\)\[\]\{\}\*,;]/);
                for(let word of words) {
                    if(word && word.length > 0 && 
                       !cKeywords.has(word) && 
                       !cStdlibFunctions.has(word) &&
                       word.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/) &&
                       !word.match(/^(int|char|float|double|void|struct|union|enum)$/)) {
                        // This is simplified - real variable checking would be more complex
                    }
                }
            }
            
            // Brace balance check
            if(braceCount > 0) {
                errors.push({
                    line: lastBraceLine,
                    message: "expected '}' at end of input",
                    type: 'error'
                });
            } else if(braceCount < 0) {
                errors.push({
                    line: 1,
                    message: "unexpected '}' at top level",
                    type: 'error'
                });
            }
            
            // Check for main function
            if(!hasMain && !preprocessorLines.has(1)) {
                errors.push({
                    line: 1,
                    message: "undefined reference to 'main'",
                    type: 'error'
                });
            }
            
            return errors;
        }

        // Update editor info function
        function updateEditorInfo() {
            const lines = editor.value.split('\n');
            const lineCount = lines.length;
            
            // Update line numbers
            let lineNumbersHtml = '';
            for(let i = 1; i <= lineCount; i++) {
                lineNumbersHtml += i + '<br>';
            }
            lineNumbersDiv.innerHTML = lineNumbersHtml;
            
            // Update cursor position
            const cursorPos = editor.selectionStart;
            const textUpToCursor = editor.value.substring(0, cursorPos);
            const currentLine = (textUpToCursor.match(/\n/g) || []).length + 1;
            const lastNewLine = textUpToCursor.lastIndexOf('\n');
            const currentCol = lastNewLine === -1 ? cursorPos + 1 : cursorPos - lastNewLine;
            
            lineCountSpan.textContent = `Ln ${currentLine}, Col ${currentCol}`;
            
            // Update file size
            const sizeInBytes = new Blob([editor.value]).size;
            fileSizeSpan.textContent = `${(sizeInBytes / 1024).toFixed(2)} KB`;
            
            // Sync scroll
            lineNumbersDiv.style.transform = `translateY(-${editor.scrollTop}px)`;
        }

        // Terminal append function
        function appendToTerminal(text) {
            const terminalDiv = terminal;
            const lines = text.split('<br>');
            
            lines.forEach(line => {
                const lineDiv = document.createElement('div');
                lineDiv.style.marginBottom = '2px';
                lineDiv.style.wordBreak = 'break-all';
                lineDiv.innerHTML = line;
                terminalDiv.appendChild(lineDiv);
            });
            
            // Keep terminal scrolled to bottom
            terminalDiv.scrollTop = terminalDiv.scrollHeight;
            
            // Limit terminal lines
            while(terminalDiv.children.length > 200) {
                terminalDiv.removeChild(terminalDiv.firstChild);
            }
        }

        // Splitter functionality
        let isDragging = false;
        
        splitter.addEventListener('mousedown', (e) => {
            isDragging = true;
            splitter.style.background = '#6a9955';
            document.body.style.cursor = 'ns-resize';
            document.body.style.userSelect = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if(!isDragging) return;
            
            const container = windowObj.element.querySelector('#main-container');
            const containerRect = container.getBoundingClientRect();
            const mouseY = e.clientY - containerRect.top;
            
            const minEditorHeight = 100;
            const minTerminalHeight = 100;
            const maxTerminalHeight = containerRect.height - minEditorHeight;
            
            let terminalHeight = containerRect.height - mouseY;
            terminalHeight = Math.max(minTerminalHeight, Math.min(terminalHeight, maxTerminalHeight));
            
            editorContainer.style.flex = 'none';
            editorContainer.style.height = (containerRect.height - terminalHeight - 4) + 'px';
            terminalContainer.style.height = terminalHeight + 'px';
            
            terminalSizeSpan.textContent = `⚡ ${Math.floor(terminalHeight / 18)}x80`;
        });
        
        document.addEventListener('mouseup', () => {
            if(isDragging) {
                isDragging = false;
                splitter.style.background = '#3c3c3c';
                document.body.style.cursor = 'default';
                document.body.style.userSelect = 'auto';
            }
        });

        // Event listeners
        editor.addEventListener('input', updateEditorInfo);
        editor.addEventListener('scroll', () => {
            lineNumbersDiv.style.transform = `translateY(-${editor.scrollTop}px)`;
        });
        editor.addEventListener('click', updateEditorInfo);
        editor.addEventListener('keyup', updateEditorInfo);
        
        // Tab key handling
        editor.addEventListener('keydown', (e) => {
            if(e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 4;
                updateEditorInfo();
            }
            
            if(e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                runBtn.click();
            }
        });

        // Run button
        runBtn.addEventListener('click', () => {
            const code = editor.value;
            
            appendToTerminal(`w2zfrhn@root:~/projects/c-ide# <span style="color: #6a9955;">gcc -std=c18 -Wall -Wextra main.c -o main</span>`);
            
            const errors = checkForErrors(code);
            
            if(errors.length > 0) {
                errors.forEach(error => {
                    const color = error.type === 'error' ? '#f48771' : '#ffaa00';
                    appendToTerminal(`<span style="color: ${color};">main.c:${error.line}: ${error.type}: ${error.message}</span>`);
                });
                appendToTerminal(`<span style="color: #f48771;">compilation terminated due to -Wfatal-errors</span>`);
            } else {
                appendToTerminal(`<span style="color: #6a9955;">Compilation successful (C18 standard)</span>`);
                appendToTerminal(`w2zfrhn@root:~/projects/c-ide# <span style="color: #6a9955;">./main</span>`);
                
                // Simulate program output
                setTimeout(() => {
                    // Extract and simulate printf statements
                    const printfMatches = code.match(/printf\s*\(\s*"([^"]*)"\s*(?:,[^)]*)?\)/g);
                    
                    if(printfMatches) {
                        printfMatches.forEach(match => {
                            try {
                                const content = match.match(/printf\s*\(\s*"([^"]*)"\s*/)[1];
                                const output = content.replace(/\\n/g, '<br>').replace(/\\t/g, '    ');
                                appendToTerminal(`<span style="color: #9cdcfe;">${output}</span>`);
                            } catch(e) {
                                // Skip if parsing fails
                            }
                        });
                    }
                    
                    appendToTerminal(`<span style="color: #6a9955;">Program exited with code: 0</span>`);
                }, 500);
            }
        });

        // Clear terminal
        clearBtn.addEventListener('click', () => {
            terminal.innerHTML = '';
            appendToTerminal('w2zfrhn@root:~# <span style="color: #6a9955;">Terminal cleared</span>');
        });

        // Initialize terminal
        appendToTerminal('w2zfrhn@root:~# <span style="color: #6a9955;">Complete C IDE v3.0 - All C Elements Supported</span>');
        appendToTerminal('w2zfrhn@root:~# <span style="color: #6a9955;">Select a template from the dropdown to see examples</span>');
        
        // Initial update
        updateEditorInfo();

        return windowObj;
    }
}