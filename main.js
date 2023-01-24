let currentBead = 0;
const totalBeads = 33;

let dailyBead = 0;
let weeklyBead = 0;
let monthlyBead = 0;
let today = new Date().toDateString();
let currentWeek = Math.ceil((new Date().getDate() + new Date().getDay()) / 7);
let currentMonth = new Date().getMonth();

centerBead.addEventListener("click", function() {
    currentBead = (currentBead % totalBeads) + 1;
    if(today === new Date().toDateString()) {
        dailyBead++;
    } else {
        dailyBead = 0;
        today = new Date().toDateString();
    }
    if(currentWeek === Math.ceil((new Date().getDate() + new Date().getDay()) / 7)) {
        weeklyBead++;
    } else {
        weeklyBead = 0;
        currentWeek = Math.ceil((new Date().getDate() + new Date().getDay()) / 7);
    }
    if(currentMonth === new Date().getMonth()) {
        monthlyBead++;
    } else {
        monthlyBead = 0;
        currentMonth = new Date().getMonth();
    }
    activateBead();
});

resetBtn.addEventListener("click", function() {
    currentBead = 0;
    activateBead();
});

if(localStorage.getItem("currentBead")) {
    currentBead = localStorage.getItem("currentBead");
    dailyBead = localStorage.getItem("dailyBead");
    weeklyBead = localStorage.getItem("weeklyBead");
    monthlyBead = localStorage.getItem("monthlyBead");
    activateBead();
} else {
    activateBead();
}

document.addEventListener("DOMContentLoaded", function() {
    activateBead();
});

function activateBead() {
    centerBead.classList.remove('active');
    centerBead.innerHTML = currentBead;
    progress.innerHTML = `
        <div class="total-beads">مجموع التسابيح: ${currentBead}/${totalBeads}</div>
        <div class="daily-beads">مجموع التسابيح اليومي: ${dailyBead}</div>
        <div class="weekly-beads">مجموع التسابيح الأسبوعي: ${weeklyBead}</div>
        <div class="monthly-beads">مجموع التسابيح الشهري: ${monthlyBead}</div>
    `;
    localStorage.setItem("currentBead", currentBead);
    localStorage.setItem("dailyBead", dailyBead);
    localStorage.setItem("weeklyBead", weeklyBead);
    localStorage.setItem("monthlyBead", monthlyBead);
}
