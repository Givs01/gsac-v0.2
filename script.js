// sideBar

function showSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
    sideBar.style.width = '250px'
    document.addEventListener("mousedown", closeSidebarOutside)
}

function hideSidebar() {
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'none'
    sideBar.style.width = '0px'
    document.removeEventListener("mousedown", closeSidebarOutside);
} 

function closeSidebarOutside (event) {
    const sideBar = document.querySelector('.sidebar');
    if (!sideBar.contains(event.target)) {
        hideSidebar();
    }
}

//programme filter

function showDay(dayId) {
    // Hide all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'none';
    });

    // Show the selected day
    var selectedDay = document.getElementById(dayId);
    if (selectedDay) {
        selectedDay.style.display = 'block';
    }
}

function showAllDays() {
    // Show all days
    var days = document.querySelectorAll('.day');
    days.forEach(function(day) {
        day.style.display = 'block';
    });
}
