// Initializing IEEE IGDTUW App
document.addEventListener('DOMContentLoaded', () => {
    console.log("App Initialized Successfully.");
});

// Tab switching simulation (Basic)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        console.log("Navigated to: " + item.innerText);
    });
});
