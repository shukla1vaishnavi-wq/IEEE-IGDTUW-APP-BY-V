// Splash Screen Animation
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');
    const loadingProgress = document.querySelector('.loading-progress');

    // Animate loading bar
    setTimeout(() => {
        loadingProgress.style.width = '100%';
    }, 500);

    // Hide splash screen and show main app
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainApp.style.display = 'block';
            setTimeout(() => {
                mainApp.style.opacity = '1';
            }, 50);
        }, 500);
    }, 3000);
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        navigateToSection(sectionId);
        
        // Close mobile menu
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

function navigateToSection(sectionId) {
    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');
    
    // Show selected section
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId)?.classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sample Events Data
const eventsData = [
    {
        id: 1,
        title: "Tech Fusion 2024",
        category: "competition",
        date: "2024-03-15",
        time: "10:00 AM",
        venue: "Auditorium, IGDTUW",
        description: "Annual technical competition featuring coding challenges, hackathons, and innovation showcases.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
        registrationLink: "https://forms.gle/sample1",
        status: "open"
    },
    {
        id: 2,
        title: "AI & Machine Learning Workshop",
        category: "workshop",
        date: "2024-03-20",
        time: "2:00 PM",
        venue: "Lab 301, IGDTUW",
        description: "Hands-on workshop on artificial intelligence and machine learning fundamentals with industry experts.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
        registrationLink: "https://forms.gle/sample2",
        status: "open"
    },
    {
        id: 3,
        title: "Women in Tech: Career Webinar",
        category: "webinar",
        date: "2024-03-25",
        time: "5:00 PM",
        venue: "Online (Zoom)",
        description: "Interactive webinar featuring successful women leaders in technology sharing their journeys and insights.",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop",
        registrationLink: "https://forms.gle/sample3",
        status: "open"
    },
    {
        id: 4,
        title: "IoT Innovation Challenge",
        category: "competition",
        date: "2024-04-05",
        time: "9:00 AM",
        venue: "Innovation Center, IGDTUW",
        description: "Build innovative IoT solutions to solve real-world problems. Exciting prizes for winners!",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop",
        registrationLink: "https://forms.gle/sample4",
        status: "upcoming"
    },
    {
        id: 5,
        title: "Web Development Bootcamp",
        category: "workshop",
        date: "2024-04-10",
        time: "11:00 AM",
        venue: "Computer Lab, IGDTUW",
        description: "Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and modern web frameworks.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
        registrationLink: "https://forms.gle/sample5",
        status: "upcoming"
    }
];

// Load Events
function loadEvents(filter = 'all') {
    const eventsGrid = document.getElementById('eventsGrid');
    const emptyEvents = document.getElementById('emptyEvents');
    
    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category === filter);
    
    if (filteredEvents.length === 0) {
        eventsGrid.style.display = 'none';
        emptyEvents.style.display = 'flex';
        return;
    }
    
    eventsGrid.style.display = 'grid';
    emptyEvents.style.display = 'none';
    
    eventsGrid.innerHTML = filteredEvents.map(event => `
        <div class="event-card" data-category="${event.category}">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <span class="event-badge ${event.status}">${event.status}</span>
            </div>
            <div class="event-content">
                <div class="event-category">${event.category.toUpperCase()}</div>
                <h3>${event.title}</h3>
                <div class="event-details">
                    <div class="event-detail">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.venue}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-actions">
                    <button class="btn btn-primary btn-sm" onclick="openEventModal(${event.id})">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="registerForEvent('${event.registrationLink}')">
                        <i class="fas fa-user-plus"></i> Register
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Event Filter
const eventFilterBtns = document.querySelectorAll('.events-filter .filter-btn');
eventFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        eventFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        loadEvents(filter);
    });
});

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Open Event Modal
function openEventModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    const modal = document.getElementById('eventModal');
    const modalContent = document.getElementById('eventModalContent');
    
    modalContent.innerHTML = `
        <div class="event-modal-header">
            <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="event-modal-body">
            <span class="event-badge ${event.status}">${event.status}</span>
            <h2>${event.title}</h2>
            <div class="event-modal-details">
                <div class="detail-item">
                    <i class="fas fa-calendar"></i>
                    <div>
                        <strong>Date</strong>
                        <p>${formatDate(event.date)}</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <strong>Time</strong>
                        <p>${event.time}</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <strong>Venue</strong>
                        <p>${event.venue}</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-tag"></i>
                    <div>
                        <strong>Category</strong>
                        <p>${event.category.toUpperCase()}</p>
                    </div>
                </div>
            </div>
            <div class="event-modal-description">
                <h3>About This Event</h3>
                <p>${event.description}</p>
            </div>
            <button class="btn btn-primary btn-block" onclick="registerForEvent('${event.registrationLink}')">
                <i class="fas fa-user-plus"></i> Register Now
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Register for Event
function registerForEvent(link) {
    window.open(link, '_blank');
}

// Recruitment Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Open Recruitment Form
function openRecruitmentForm(type) {
    const formLinks = {
        core: 'https://forms.gle/core-team-recruitment',
        associates: 'https://forms.gle/associates-recruitment',
        coordinators: 'https://forms.gle/coordinators-recruitment'
    };
    
    window.open(formLinks[type], '_blank');
}

// Gallery Data
const galleryData = [
    {
        id: 1,
        title: "Tech Symposium 2024",
        year: "2024",
        date: "January 2024",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        description: "Annual technical symposium with keynote speakers and panel discussions."
    },
    {
        id: 2,
        title: "Hackathon 2023",
        year: "2023",
        date: "November 2023",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
        description: "24-hour coding marathon with amazing projects and innovative solutions."
    },
    {
        id: 3,
        title: "Women in Engineering Summit",
        year: "2024",
        date: "February 2024",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
        description: "Celebrating women's achievements in engineering and technology."
    },
    {
        id: 4,
        title: "Workshop on Robotics",
        year: "2023",
        date: "October 2023",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        description: "Hands-on robotics workshop with Arduino and RaspberryPi."
    },
    {
        id: 5,
        title: "AI Conference 2023",
        year: "2023",
        date: "September 2023",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
        description: "International conference on artificial intelligence and machine learning."
    },
    {
        id: 6,
        title: "Coding Competition",
        year: "2024",
        date: "March 2024",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
        description: "Inter-college coding competition with exciting prizes."
    },
    {
        id: 7,
        title: "Industry Connect 2022",
        year: "2022",
        date: "December 2022",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        description: "Networking event connecting students with industry professionals."
    },
    {
        id: 8,
        title: "Tech Fest 2022",
        year: "2022",
        date: "November 2022",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
        description: "Three-day tech festival with competitions, workshops, and exhibitions."
    }
];

// Load Gallery
function loadGallery(year = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    
    const filteredGallery = year === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.year === year);
    
    galleryGrid.innerHTML = filteredGallery.map(item => `
        <div class="gallery-item" data-year="${item.year}" onclick="openGalleryModal(${item.id})">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.date}</p>
            </div>
        </div>
    `).join('');
}

// Gallery Filter
const galleryFilterBtns = document.querySelectorAll('.gallery-filter .filter-btn');
galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const year = btn.getAttribute('data-year');
        loadGallery(year);
    });
});

// Open Gallery Modal
function openGalleryModal(itemId) {
    const item = galleryData.find(i => i.id === itemId);
    const modal = document.getElementById('galleryModal');
    const modalContent = document.getElementById('galleryModalContent');
    
    modalContent.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-modal-info">
            <h2>${item.title}</h2>
            <p class="gallery-date"><i class="fas fa-calendar"></i> ${item.date}</p>
            <p class="gallery-description">${item.description}</p>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Feedback Form - Rating Stars
const ratingStars = document.querySelectorAll('.rating-stars i');
const ratingInput = document.getElementById('rating');

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        ratingInput.value = rating;
        
        ratingStars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
    
    star.addEventListener('mouseenter', () => {
        const rating = star.getAttribute('data-rating');
        ratingStars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('hover');
            } else {
                s.classList.remove('hover');
            }
        });
    });
});

document.querySelector('.rating-stars').addEventListener('mouseleave', () => {
    ratingStars.forEach(s => s.classList.remove('hover'));
});

// Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('feedbackName').value,
        email: document.getElementById('feedbackEmail').value,
        eventName: document.getElementById('eventName').value,
        rating: document.getElementById('rating').value,
        feedback: document.getElementById('feedbackMessage').value,
        suggestions: document.getElementById('suggestions').value
    };
    
    // Here you would normally send data to a server
    console.log('Feedback submitted:', formData);
    
    // Show success message
    alert('Thank you for your feedback! We appreciate your time and input.');
    feedbackForm.reset();
    ratingStars.forEach(s => s.classList.remove('active'));
    ratingInput.value = '';
});

// Login Form
const loginForm = document.getElementById('loginForm');
const loginCard = document.querySelector('.login-card');
const memberDashboard = document.getElementById('memberDashboard');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const ieeeMemberNo = document.getElementById('ieeeMembershipNo').value;
    const selectedRole = document.getElementById('memberRole').value;
    const password = document.getElementById('loginPassword').value;
    
    // Validate email domain - must be @igdtuw.ac.in
    if (!email.endsWith('@igdtuw.ac.in')) {
        alert('❌ Please use your IGDTUW college email (@igdtuw.ac.in)');
        return;
    }
    
    // Validate email format: name + roll number digits + btece/btcse etc + year + @igdtuw.ac.in
    const emailPattern = /^[a-z]+\d{3}(bt|mt|phd)(cse|ece|it|mca|mae|en|ep)[a-z]*\d{2}@igdtuw\.ac\.in$/i;
    if (!emailPattern.test(email)) {
        alert('❌ Invalid email format!\n\nExpected format: name + 3 digits + bt/mt + branch + year\nExample: vaishnavi075btece25@igdtuw.ac.in');
        return;
    }
    
    // Validate IEEE Membership Number format (9 digits)
    if (!/^\d{9}$/.test(ieeeMemberNo)) {
        alert('❌ IEEE Membership Number must be exactly 9 digits');
        return;
    }
    
    // Validate role selection
    if (!selectedRole) {
        alert('❌ Please select your role in IEEE IGDTUW');
        return;
    }
    
    // Extract name from email (part before the numbers)
    const nameFromEmail = email.match(/^([a-z]+)/i)[1];
    const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    
    // For demo: Accept any password with minimum 6 characters
    // In production, this would be validated against a database
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters long');
        return;
    }
    
    // Success - All validations passed
    // Hide login form, show dashboard
    loginCard.style.display = 'none';
    memberDashboard.style.display = 'block';
    
    // Update member info
    document.getElementById('memberName').textContent = `Welcome, ${capitalizedName}!`;
    document.getElementById('memberRole').textContent = selectedRole;
    
    // Store login state
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('memberName', capitalizedName);
    sessionStorage.setItem('memberRole', selectedRole);
    sessionStorage.setItem('memberEmail', email);
    sessionStorage.setItem('ieeeMemberNo', ieeeMemberNo);
    
    // Success message
    alert(`✅ Welcome ${capitalizedName}!\n\nRole: ${selectedRole}\nIEEE Member ID: ${ieeeMemberNo}\nEmail: ${email}`);
});
// Logout Function
function logout() {
    loginCard.style.display = 'block';
    memberDashboard.style.display = 'none';
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('memberName');
    sessionStorage.removeItem('memberRole');
    loginForm.reset();
}

// Check if already logged in
window.addEventListener('load', () => {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        loginCard.style.display = 'none';
        memberDashboard.style.display = 'block';
        document.getElementById('memberName').textContent = sessionStorage.getItem('memberName');
        document.getElementById('memberRole').textContent = sessionStorage.getItem('memberRole');
    }
});

// Modal Close Functionality
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    loadGallery();
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#login') {
            e.preventDefault();
        }
    });
});


