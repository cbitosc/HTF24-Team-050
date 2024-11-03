const ctx = document.getElementById('healthChart').getContext('2d');
const healthChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Calories Burned',
            data: [10, 6, 7, 5, 6, 10, 8],
            backgroundColor: '#ff5d22', // Orange for Calories Burned
            borderRadius: 5,
            barThickness: 20, // Adjusted bar thickness for a cleaner look
        }, {
            label: 'Steps Taken',
            data: [8, 5, 9, 6, 7, 9, 5],
            backgroundColor: '#239f85', // Green for Steps Taken
            borderRadius: 5,
            barThickness: 20, // Match thickness with other dataset
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#333',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: '#DFE4E0', // Light Gray grid lines
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '#333',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#ffffff',
                titleColor: '#333',
                titleFont: { size: 14 },
                bodyColor: '#333',
                bodyFont: { size: 12 },
                borderWidth: 1,
                borderColor: '#ddd'
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 20,
                bottom: 0
            }
        }
    }
});
// Function to update heart rate
function updateHeartRate() {
    const heartRateInput = document.getElementById("heartRateInput").value;
    const heartRateDisplay = document.getElementById("heartRateDisplay");
    const heartRateStatus = document.getElementById("heartRateStatus");

    if (heartRateInput) {
        heartRateDisplay.textContent = heartRateInput;

        // Check if heart rate is normal
        if (heartRateInput >= 60 && heartRateInput <= 100) {
            heartRateStatus.textContent = "normal";
            heartRateStatus.style.color = "#239f85"; // Green for normal
        } else {
            heartRateStatus.textContent = "abnormal";
            heartRateStatus.style.color = "#ff5d22"; // Orange for abnormal
        }
    } else {
        alert("Please enter a valid heart rate");
    }
}

// Function to update blood pressure
function updateBloodPressure() {
    const bloodPressureInput = document.getElementById("bloodPressureInput").value;
    const bloodPressureDisplay = document.getElementById("bloodPressureDisplay");
    const bloodPressureStatus = document.getElementById("bloodPressureStatus");

    if (bloodPressureInput) {
        bloodPressureDisplay.textContent = bloodPressureInput;

        // Check if blood pressure is within a normal range
        if (bloodPressureInput >= 90 && bloodPressureInput <= 120) {
            bloodPressureStatus.textContent = "normal";
            bloodPressureStatus.style.color = "#239f85"; // Green for normal
        } else {
            bloodPressureStatus.textContent = "abnormal";
            bloodPressureStatus.style.color = "#ff5d22"; // Orange for abnormal
        }
    } else {
        alert("Please enter a valid blood pressure");
    }
}
// Function to update steps
function updateSteps() {
    const stepsInput = document.getElementById("stepsInput").value;
    const stepsDisplay = document.getElementById("stepsDisplay");
    const stepsNeeded = document.getElementById("stepsNeeded");
    const totalStepsGoal = 5000;

    if (stepsInput) {
        stepsDisplay.textContent = stepsInput;
        const stepsRemaining = totalStepsGoal - stepsInput;
        stepsNeeded.textContent = stepsRemaining > 0 ? stepsRemaining : 0;

        // Additional feedback based on steps achieved
        if (stepsInput >= totalStepsGoal) {
            stepsNeeded.textContent = "Goal achieved!";
            stepsNeeded.style.color = "green";
        } else {
            stepsNeeded.style.color = "#333";
        }
    } else {
        alert("Please enter a valid step count");
    }
}

// Function to update sleep condition
function updateSleep() {
    const sleepInput = document.getElementById("sleepInput").value;
    const sleepDisplay = document.getElementById("sleepDisplay");
    const sleepStatus = document.getElementById("sleepStatus");

    if (sleepInput) {
        sleepDisplay.textContent = sleepInput;

        // Check if sleep duration is adequate
        if (sleepInput >= 7) {
            sleepStatus.textContent = "sufficient";
            sleepStatus.style.color = "green";
        } else {
            sleepStatus.textContent = "less";
            sleepStatus.style.color = "red";
        }
    } else {
        alert("Please enter a valid sleep duration");
    }
}
function signOut() {  
    // Logic to handle sign out  
    alert("You have been signed out.");  
}

// Similarly update `updateSteps` and `updateSleep` functions...

