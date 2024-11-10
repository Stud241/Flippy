const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
let currentDate = new Date();

function renderCalendar() {
    // Clear previous calendar days
    calendarDays.innerHTML = "";

    // Set month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYear.textContent = `${currentDate.toLocaleString("default", { month: "long" })} ${year}`;

    // Get first day of the month and total days
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill in blank days
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        calendarDays.appendChild(emptyDay);
    }

    // Populate days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        // Add event listener to add events on click
        dayElement.addEventListener("click", () => addEvent(dayElement));

        calendarDays.appendChild(dayElement);
    }
}

function addEvent(dayElement) {
    const eventText = prompt("Enter event details:");
    if (eventText) {
        const event = document.createElement("div");
        event.classList.add("event");
        event.textContent = eventText;
        dayElement.appendChild(event);
    }
}

// Navigation buttons
document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
