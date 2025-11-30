class NotepadApp {
    static launch(windowManager) {
        const content = `
            <div class="notepad-app">
                <textarea class="notepad-textarea" placeholder="Type your text here..." style="width: 100%; height: 100%; border: none; resize: none; font-family: 'Courier New', monospace; font-size: 12px;"></textarea>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'notepad',
            'Untitled - Notepad',
            content,
            {
                width: 600,
                height: 400
            }
        );
        
        // Add some functionality
        const textarea = window.element.querySelector('.notepad-textarea');
        textarea.addEventListener('input', () => {
            // You could add auto-save functionality here
        });
        
        return window;
    }
}