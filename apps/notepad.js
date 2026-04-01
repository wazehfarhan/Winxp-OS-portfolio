class NotepadApp {
    static launch(windowManager) {
        const notepadId = `notepad-${Date.now()}`;
        
        const content = `
            <div class="modern-app" id="${notepadId}" style="height: 100%; display: flex; flex-direction: column; padding: 0; background: #ffffff;">
                
                <!-- Modern Toolbar -->
                <div style="display: flex; gap: 8px; padding: 12px 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; align-items: center; flex-wrap: wrap;">
                    
                    <button class="modern-btn secondary" data-action="new" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>📝</span> New
                    </button>
                    
                    <button class="modern-btn secondary" data-action="save" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>📋</span> Copy
                    </button>
                    
                    <button class="modern-btn secondary" data-action="load" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>📥</span> Paste
                    </button>
                    
                    <button class="modern-btn primary" data-action="download" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>💾</span> Download
                    </button>
                    
                    <div style="width: 1px; height: 24px; background: #cbd5e1; margin: 0 4px;"></div>
                    
                    <button class="modern-btn secondary" data-action="word-wrap" id="${notepadId}-wrap-btn" style="padding: 6px 12px; font-size: 0.8rem; background: #e2e8f0; color: #1e293b;">
                        <span>🔤</span> Wrap: On
                    </button>
                    
                    <button class="modern-btn secondary" data-action="font-decrease" style="padding: 6px 10px; font-size: 0.8rem;">
                        <span>A-</span>
                    </button>
                    
                    <button class="modern-btn secondary" data-action="font-increase" style="padding: 6px 10px; font-size: 0.8rem;">
                        <span>A+</span>
                    </button>
                    
                    <div style="width: 1px; height: 24px; background: #cbd5e1; margin: 0 4px;"></div>
                    
                    <button class="modern-btn secondary" data-action="time" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>🕒</span> Time
                    </button>
                    
                    <button class="modern-btn secondary" data-action="find" style="padding: 6px 12px; font-size: 0.8rem;">
                        <span>🔍</span> Find
                    </button>
                    
                    <button class="modern-btn secondary" data-action="clear" style="padding: 6px 12px; font-size: 0.8rem; color: #ef4444;">
                        <span>🗑️</span> Clear
                    </button>
                    
                </div>
                
                <!-- Find Bar -->
                <div id="${notepadId}-find-bar" style="display: none; padding: 8px 16px; background: #e2e8f0; border-bottom: 1px solid #cbd5e1; align-items: center; gap: 8px;">
                    <input type="text" id="${notepadId}-find-input" placeholder="Find text..." style="padding: 4px 8px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 0.8rem; outline: none; width: 200px;">
                    <button class="modern-btn secondary" id="${notepadId}-find-next" style="padding: 4px 8px; font-size: 0.8rem;">Next</button>
                    <button class="modern-btn secondary" id="${notepadId}-find-close" style="padding: 4px 8px; font-size: 0.8rem;">Close</button>
                    <span id="${notepadId}-find-status" style="font-size: 0.75rem; color: #64748b; margin-left: 8px;"></span>
                </div>
                
                <!-- Text Area -->
                <div style="flex: 1; padding: 16px; display: flex; overflow: hidden; background: #f1f5f9;">
                    <textarea class="notepad-textarea" placeholder="Start typing here..." style="flex: 1; width: 100%; height: 100%; border: 1px solid #e2e8f0; border-radius: 8px; resize: none; font-family: 'Inter', sans-serif; font-size: 14px; padding: 16px; outline: none; white-space: pre-wrap; overflow-wrap: break-word; background: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.02); line-height: 1.6; color: #334155; transition: border-color 0.2s;"></textarea>
                </div>
                
                <!-- Status Bar -->
                <div class="notepad-statusbar" style="display: flex; justify-content: space-between; padding: 10px 16px; background: #ffffff; border-top: 1px solid #e2e8f0; font-size: 0.75rem; color: #64748b; font-weight: 500; align-items: center;">
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <span class="modern-pill notepad-position" style="margin: 0; padding: 2px 10px;">Ln 1, Col 1</span>
                        <span class="notepad-stats">0 chars • 0 words</span>
                    </div>
                </div>
            </div>
        `;
        
        const win = windowManager.createWindow(
            'notepad',
            'Notes',
            content,
            {
                width: 700,
                height: 500
            }
        );
        
        // Set up Notepad interactivity after DOM is ready
        setTimeout(() => {
            const container = document.getElementById(notepadId);
            if (!container) return;
            
            const textarea = container.querySelector('.notepad-textarea');
            const posDisplay = container.querySelector('.notepad-position');
            const statsDisplay = container.querySelector('.notepad-stats');
            const wrapBtn = container.querySelector(`#${notepadId}-wrap-btn`);
            const buttons = container.querySelectorAll('.modern-btn');
            const findBar = container.querySelector(`#${notepadId}-find-bar`);
            const findInput = container.querySelector(`#${notepadId}-find-input`);
            const findNext = container.querySelector(`#${notepadId}-find-next`);
            const findClose = container.querySelector(`#${notepadId}-find-close`);
            const findStatus = container.querySelector(`#${notepadId}-find-status`);
            
            let wordWrap = true;
            let fontSize = 14;
            let lastSearchIndex = -1;
            
            // Auto-load from localStorage
            const savedText = localStorage.getItem('portfolio-notepad-data');
            if (savedText !== null) {
                textarea.value = savedText;
            }
            
            // Focus textarea ring behavior
            textarea.addEventListener('focus', () => {
                textarea.style.borderColor = '#3b82f6';
                textarea.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
            });
            textarea.addEventListener('blur', () => {
                textarea.style.borderColor = '#e2e8f0';
                textarea.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
            });
            
            // Update status bar on input/click
            const updateStatus = () => {
                const text = textarea.value;
                const pos = textarea.selectionStart;
                const lines = text.substring(0, pos).split('\n');
                const ln = lines.length;
                const col = lines[lines.length - 1].length + 1;
                const charCount = text.length;
                const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
                
                posDisplay.textContent = `Ln ${ln}, Col ${col}`;
                statsDisplay.textContent = `${charCount} chars • ${wordCount} words`;
                
                // Auto-save to localStorage
                localStorage.setItem('portfolio-notepad-data', text);
            };
            
            // Initialization update
            updateStatus();
            
            // Find Bar Logic
            const performFind = () => {
                const term = findInput.value.toLowerCase();
                const content = textarea.value.toLowerCase();
                if (!term) return;
                
                const startIndex = lastSearchIndex + 1 >= content.length ? 0 : lastSearchIndex + 1;
                let index = content.indexOf(term, startIndex);
                if (index === -1) {
                    // Try wrapping around
                    index = content.indexOf(term, 0);
                    if (index === -1) {
                        findStatus.textContent = 'No results found.';
                        return;
                    }
                }
                
                findStatus.textContent = '';
                lastSearchIndex = index;
                
                textarea.focus();
                textarea.setSelectionRange(index, index + term.length);
                
                // Approximate scrolling to view
                const textBefore = textarea.value.substring(0, index);
                const lineCount = (textBefore.match(/\n/g) || []).length;
                const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 22;
                textarea.scrollTop = lineCount * lineHeight;
            };
            
            findNext.addEventListener('click', performFind);
            findInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') performFind();
            });
            findClose.addEventListener('click', () => {
                findBar.style.display = 'none';
                lastSearchIndex = -1;
            });
            
            textarea.addEventListener('input', updateStatus);
            textarea.addEventListener('click', updateStatus);
            textarea.addEventListener('keyup', updateStatus);
            
            // Button actions
            buttons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const action = btn.getAttribute('data-action');
                    if (!action) return;
                    
                    switch (action) {
                        case 'new':
                            if (textarea.value && !confirm('Discard current text?')) return;
                            textarea.value = '';
                            updateStatus();
                            break;
                            
                        case 'save': // Copy to clipboard
                            navigator.clipboard.writeText(textarea.value).then(() => {
                                // Simple visual feedback
                                const originalText = btn.innerHTML;
                                btn.innerHTML = '<span>✅</span> Copied!';
                                setTimeout(() => {
                                    btn.innerHTML = originalText;
                                }, 2000);
                            });
                            break;
                            
                        case 'load': // Paste from clipboard
                            navigator.clipboard.readText().then(text => {
                                const start = textarea.selectionStart;
                                const end = textarea.selectionEnd;
                                textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
                                textarea.selectionStart = textarea.selectionEnd = start + text.length;
                                updateStatus();
                            }).catch(() => {
                                alert('Unable to safely read clipboard directly in this browser. Please paste manually (Ctrl+V / Cmd+V).');
                            });
                            break;
                            
                        case 'download':
                            const blob = new Blob([textarea.value], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'Note-' + Date.now() + '.txt';
                            a.click();
                            URL.revokeObjectURL(url);
                            break;
                            
                        case 'word-wrap':
                            wordWrap = !wordWrap;
                            textarea.style.whiteSpace = wordWrap ? 'pre-wrap' : 'pre';
                            textarea.style.overflowX = wordWrap ? 'hidden' : 'auto';
                            
                            // Visual toggle styling
                            if (wordWrap) {
                                btn.innerHTML = '<span>🔤</span> Wrap: On';
                                btn.style.background = '#e2e8f0';
                                btn.style.color = '#1e293b';
                            } else {
                                btn.innerHTML = '<span>🔤</span> Wrap: Off';
                                btn.style.background = '#f1f5f9';
                                btn.style.color = '#475569';
                            }
                            break;
                            
                        case 'font-increase':
                            fontSize = Math.min(32, fontSize + 2);
                            textarea.style.fontSize = fontSize + 'px';
                            break;
                            
                        case 'font-decrease':
                            fontSize = Math.max(10, fontSize - 2);
                            textarea.style.fontSize = fontSize + 'px';
                            break;
                            
                        case 'time':
                            const now = new Date();
                            const stamp = `[${now.toLocaleDateString()} ${now.toLocaleTimeString()}] `;
                            const start = textarea.selectionStart;
                            const end = textarea.selectionEnd;
                            textarea.value = textarea.value.substring(0, start) + stamp + textarea.value.substring(end);
                            textarea.selectionStart = textarea.selectionEnd = start + stamp.length;
                            updateStatus();
                            textarea.focus();
                            break;
                            
                        case 'find':
                            findBar.style.display = findBar.style.display === 'none' ? 'flex' : 'none';
                            if (findBar.style.display === 'flex') {
                                findInput.focus();
                            } else {
                                lastSearchIndex = -1;
                            }
                            break;
                            
                        case 'clear':
                            if (confirm('Are you sure you want to delete all text?')) {
                                textarea.value = '';
                                updateStatus();
                                textarea.focus();
                            }
                            break;
                    }
                });
            });
            
        }, 100);
        
        return win;
    }
}