// Pomodoro Timer Variables
let timerDuration = 25 * 60; // 25 minutes in seconds
let remainingTime = timerDuration;
let timerInterval = null;
let isRunning = false;

// Timer Element
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startTimerButton');
const resetButton = document.getElementById('resetTimerButton');

// Update Timer Display Function
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
    const seconds = (remainingTime % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start Timer Function
function startTimer() {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;
    
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            remainingTime = timerDuration; // Reset timer to initial duration
            alert("Pomodoro session complete!");
        }
    }, 1000);
}

// Reset Timer Function
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    remainingTime = timerDuration;
    updateTimerDisplay();
}

// Event Listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize Display
updateTimerDisplay();


