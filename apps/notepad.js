class NotepadApp {
    static launch(windowManager) {
        const notepadId = `notepad-${Date.now()}`;
        
        const content = `
            <div class="notepad-app" id="${notepadId}" style="height: 100%; display: flex; flex-direction: column;">
                <!-- Menu Bar -->
                <div class="notepad-menubar" style="display: flex; background: #ece9d8; border-bottom: 1px solid #ccc; padding: 2px 0; font-size: 12px;">
                    <div class="notepad-menu-item" data-menu="file" style="padding: 2px 10px; cursor: pointer; position: relative;">
                        File
                        <div class="notepad-dropdown" style="display:none; position: absolute; top: 100%; left: 0; background: #ece9d8; border: 1px solid #003399; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); min-width: 160px; z-index: 10;">
                            <div class="notepad-dropdown-item" data-action="new" style="padding: 5px 20px; cursor: pointer;">New</div>
                            <div style="height: 1px; background: #ccc; margin: 2px 0;"></div>
                            <div class="notepad-dropdown-item" data-action="save" style="padding: 5px 20px; cursor: pointer;">Save to Clipboard</div>
                            <div class="notepad-dropdown-item" data-action="load" style="padding: 5px 20px; cursor: pointer;">Load from Clipboard</div>
                            <div style="height: 1px; background: #ccc; margin: 2px 0;"></div>
                            <div class="notepad-dropdown-item" data-action="download" style="padding: 5px 20px; cursor: pointer;">Download as .txt</div>
                        </div>
                    </div>
                    <div class="notepad-menu-item" data-menu="edit" style="padding: 2px 10px; cursor: pointer; position: relative;">
                        Edit
                        <div class="notepad-dropdown" style="display:none; position: absolute; top: 100%; left: 0; background: #ece9d8; border: 1px solid #003399; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); min-width: 160px; z-index: 10;">
                            <div class="notepad-dropdown-item" data-action="undo" style="padding: 5px 20px; cursor: pointer;">Undo</div>
                            <div style="height: 1px; background: #ccc; margin: 2px 0;"></div>
                            <div class="notepad-dropdown-item" data-action="select-all" style="padding: 5px 20px; cursor: pointer;">Select All</div>
                            <div class="notepad-dropdown-item" data-action="clear" style="padding: 5px 20px; cursor: pointer;">Clear All</div>
                        </div>
                    </div>
                    <div class="notepad-menu-item" data-menu="format" style="padding: 2px 10px; cursor: pointer; position: relative;">
                        Format
                        <div class="notepad-dropdown" style="display:none; position: absolute; top: 100%; left: 0; background: #ece9d8; border: 1px solid #003399; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); min-width: 160px; z-index: 10;">
                            <div class="notepad-dropdown-item" data-action="word-wrap" style="padding: 5px 20px; cursor: pointer;">✓ Word Wrap</div>
                            <div class="notepad-dropdown-item" data-action="font-increase" style="padding: 5px 20px; cursor: pointer;">Increase Font Size</div>
                            <div class="notepad-dropdown-item" data-action="font-decrease" style="padding: 5px 20px; cursor: pointer;">Decrease Font Size</div>
                        </div>
                    </div>
                </div>
                <!-- Text Area -->
                <textarea class="notepad-textarea" placeholder="Type your text here..." style="flex: 1; width: 100%; border: none; resize: none; font-family: 'Courier New', monospace; font-size: 13px; padding: 8px; outline: none; white-space: pre-wrap; overflow-wrap: break-word;"></textarea>
                <!-- Status Bar -->
                <div class="notepad-statusbar" style="display: flex; justify-content: space-between; padding: 3px 8px; background: #ece9d8; border-top: 1px solid #ccc; font-size: 11px; color: #555;">
                    <span class="notepad-position">Ln 1, Col 1</span>
                    <span class="notepad-stats">0 characters | 0 words</span>
                </div>
            </div>
        `;
        
        const win = windowManager.createWindow(
            'notepad',
            'Untitled - Notepad',
            content,
            {
                width: 650,
                height: 450
            }
        );
        
        // Set up Notepad interactivity after DOM is ready
        setTimeout(() => {
            const container = document.getElementById(notepadId);
            if (!container) return;
            
            const textarea = container.querySelector('.notepad-textarea');
            const posDisplay = container.querySelector('.notepad-position');
            const statsDisplay = container.querySelector('.notepad-stats');
            const menuItems = container.querySelectorAll('.notepad-menu-item');
            let wordWrap = true;
            let fontSize = 13;
            
            // Update status bar on input/click
            const updateStatus = () => {
                const text = textarea.value;
                const pos = textarea.selectionStart;
                const lines = text.substring(0, pos).split('\\n');
                const ln = lines.length;
                const col = lines[lines.length - 1].length + 1;
                const charCount = text.length;
                const wordCount = text.trim() ? text.trim().split(/\\s+/).length : 0;
                
                posDisplay.textContent = `Ln ${ln}, Col ${col}`;
                statsDisplay.textContent = `${charCount} characters | ${wordCount} words`;
            };
            
            textarea.addEventListener('input', updateStatus);
            textarea.addEventListener('click', updateStatus);
            textarea.addEventListener('keyup', updateStatus);
            
            // Menu dropdowns
            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = item.querySelector('.notepad-dropdown');
                    
                    // Close all other dropdowns
                    menuItems.forEach(other => {
                        if (other !== item) {
                            other.querySelector('.notepad-dropdown').style.display = 'none';
                        }
                    });
                    
                    // Toggle this dropdown
                    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                });
            });
            
            // Close dropdowns on click outside
            document.addEventListener('click', () => {
                menuItems.forEach(item => {
                    item.querySelector('.notepad-dropdown').style.display = 'none';
                });
            });
            
            // Dropdown hover
            container.querySelectorAll('.notepad-dropdown-item').forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.background = '#316ac5';
                    item.style.color = 'white';
                });
                item.addEventListener('mouseleave', () => {
                    item.style.background = '';
                    item.style.color = '';
                });
            });
            
            // Dropdown actions
            container.addEventListener('click', (e) => {
                const actionItem = e.target.closest('.notepad-dropdown-item');
                if (!actionItem) return;
                
                const action = actionItem.getAttribute('data-action');
                
                switch (action) {
                    case 'new':
                        if (textarea.value && !confirm('Discard current text?')) return;
                        textarea.value = '';
                        updateStatus();
                        break;
                        
                    case 'save':
                        navigator.clipboard.writeText(textarea.value).then(() => {
                            alert('Text copied to clipboard!');
                        });
                        break;
                        
                    case 'load':
                        navigator.clipboard.readText().then(text => {
                            textarea.value = text;
                            updateStatus();
                        }).catch(() => {
                            alert('Unable to read clipboard. Please paste manually (Ctrl+V).');
                        });
                        break;
                        
                    case 'download':
                        const blob = new Blob([textarea.value], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'untitled.txt';
                        a.click();
                        URL.revokeObjectURL(url);
                        break;
                        
                    case 'undo':
                        document.execCommand('undo');
                        break;
                        
                    case 'select-all':
                        textarea.select();
                        break;
                        
                    case 'clear':
                        textarea.value = '';
                        updateStatus();
                        break;
                        
                    case 'word-wrap':
                        wordWrap = !wordWrap;
                        textarea.style.whiteSpace = wordWrap ? 'pre-wrap' : 'pre';
                        textarea.style.overflowX = wordWrap ? 'hidden' : 'auto';
                        actionItem.textContent = (wordWrap ? '✓ ' : '') + 'Word Wrap';
                        break;
                        
                    case 'font-increase':
                        fontSize = Math.min(24, fontSize + 1);
                        textarea.style.fontSize = fontSize + 'px';
                        break;
                        
                    case 'font-decrease':
                        fontSize = Math.max(8, fontSize - 1);
                        textarea.style.fontSize = fontSize + 'px';
                        break;
                }
                
                // Close all dropdowns
                menuItems.forEach(m => {
                    m.querySelector('.notepad-dropdown').style.display = 'none';
                });
            });
            
        }, 100);
        
        return win;
    }
}