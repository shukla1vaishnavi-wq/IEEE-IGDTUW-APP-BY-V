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

// Recruitment Criteria Logic
function showCriteria(role) {
    alert(`IEEE Recruitment for ${role} Role:\n\n1. Active IEEE Membership\n2. CGPA > 7.5\n3. Passion for IGDTUW community growth.\n\nForm link will be sent to your student email.`);
}

// Gallery Item Detail Simulation
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.small').innerText;
        alert(`Institutional Memory: Viewing ${title} highlights.\n\n preservation of outcomes and speakers is key to IEEE credibility.`);
    });
});


