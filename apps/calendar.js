class CalendarApp {
    static launch(windowManager) {
        const content = `
            <div class="calendar-app" style="height: 100%; display: flex; flex-direction: column;">
                <div class="calendar-header">
                    <button class="xp-button" id="prevMonth">← Previous</button>
                    <h3 id="currentMonth" style="margin: 0 15px; text-align: center; flex: 1;">Month Year</h3>
                    <button class="xp-button" id="nextMonth">Next →</button>
                </div>
                <div style="flex: 1; padding: 10px;">
                    <div class="calendar-grid" id="calendarGrid">
                        <!-- Calendar will be generated here -->
                    </div>
                </div>
            </div>
        `;
        
        const window = windowManager.createWindow(
            'calendar',
            'Calendar',
            content,
            {
                width: 500,
                height: 400
            }
        );
        
        setTimeout(() => {
            this.initializeCalendar(window.element);
        }, 100);
        
        return window;
    }
    
    static initializeCalendar(windowElement) {
        const currentMonthElement = windowElement.querySelector('#currentMonth');
        const calendarGrid = windowElement.querySelector('#calendarGrid');
        const prevButton = windowElement.querySelector('#prevMonth');
        const nextButton = windowElement.querySelector('#nextMonth');
        
        let currentDate = new Date();
        
        function renderCalendar() {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            
            // Update month header
            currentMonthElement.textContent = currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric'
            });
            
            // Clear calendar grid
            calendarGrid.innerHTML = '';
            
            // Add day headers
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            days.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day header';
                dayElement.textContent = day;
                calendarGrid.appendChild(dayElement);
            });
            
            // Get first day of month and total days
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const totalDays = lastDay.getDate();
            const startingDay = firstDay.getDay();
            
            // Get days from previous month
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            
            // Add empty cells for days before the first day of month
            for (let i = startingDay - 1; i >= 0; i--) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day other-month';
                dayElement.textContent = prevMonthLastDay - i;
                calendarGrid.appendChild(dayElement);
            }
            
            // Add days of the current month
            const today = new Date();
            for (let day = 1; day <= totalDays; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;
                
                // Highlight today
                if (day === today.getDate() && 
                    month === today.getMonth() && 
                    year === today.getFullYear()) {
                    dayElement.classList.add('today');
                }
                
                dayElement.addEventListener('click', () => {
                    alert(`Selected date: ${month + 1}/${day}/${year}`);
                });
                
                calendarGrid.appendChild(dayElement);
            }
            
            // Add days from next month to fill the grid
            const totalCells = 42; // 6 weeks * 7 days
            const remainingCells = totalCells - (startingDay + totalDays);
            for (let day = 1; day <= remainingCells; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day other-month';
                dayElement.textContent = day;
                calendarGrid.appendChild(dayElement);
            }
        }
        
        // Navigation
        prevButton.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
        
        nextButton.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
        
        // Initial render
        renderCalendar();
    }
}