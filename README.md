Live Demo: https://shukla1vaishnavi-wq.github.io/IEEE-IGDTUW-APP-BY-V/
A fully functional Progressive Web Application (PWA) for IEEE IGDTUW Student Branch, developed for the Vibe-A-Thon 2026 app development competition.

🚀 Features
Core Features (Required)

✅ Event Announcements & Registration - Centralized hub for upcoming IEEE IGDTUW events with real-time updates and Google Forms integration
✅ Recruitment System - Dedicated sections for Core Team, Associates, and Coordinators recruitment with role-specific forms and eligibility criteria
✅ Past Events Gallery - Curated archive showcasing highlights, speakers, and outcomes of past IEEE events
✅ IEEE Membership Information - Comprehensive module explaining membership benefits and pathways to join
✅ Feedback System - Post-event feedback collection with structured forms and 5-star rating system
✅ Social Media Integration - Quick access to official IEEE IGDTUW platforms (LinkedIn, Instagram, Twitter, Website)

Additional Features (Bonus)

🔐 Member Authentication System - Secure login with IEEE Membership Number validation and IGDTUW email verification
👥 Multi-Role Selection - Support for members holding multiple positions simultaneously
📊 Member Dashboard - Personalized dashboard for event management, analytics, and settings
📱 Progressive Web App (PWA) - Installable on mobile devices with offline capability
🎨 Dark Theme UI - Professional IEEE-branded design with glowing effects and smooth animations
📲 Bottom Navigation - Mobile-optimized navigation bar for seamless user experience
✨ Splash Screen - Animated loading screen with IEEE branding


🛠️ Technologies Used
Languages

HTML5 - Semantic markup and structure
CSS3 - Advanced styling with CSS Grid, Flexbox, and animations
JavaScript (ES6+) - Dynamic functionality and interactivity

Frameworks & Libraries

Font Awesome 6.4.0 - Icon library for UI elements
Progressive Web App (PWA) - Service Worker and Web App Manifest for mobile app capabilities

APIs & External Services

Unsplash API - Dynamic event and gallery images
Google Forms - Event registration and recruitment form integration
GitHub Pages - Application hosting and deployment

Additional Tools

Service Worker - Offline caching and background sync
Session Storage - Client-side authentication state management
CSS Variables - Dynamic theming and color management


📱 Installation & Setup
Option 1: Access the Live App (Recommended)
Simply visit the deployed application:
https://shukla1vaishnavi-wq.github.io/IEEE-IGDTUW-APP-BY-V/
Install as Mobile App (PWA):

Open the URL in Chrome mobile browser
Tap the menu (3 dots) → "Add to Home Screen" / "Install app"
The app icon will appear on your home screen
Launch like a native mobile application!


Option 2: Run Locally
Prerequisites

Git installed on your system
A modern web browser (Chrome, Firefox, Edge, or Safari)
A local web server (optional but recommended for full PWA features)

Steps
1. Clone the Repository
bashgit clone https://github.com/shukla1vaishnavi-wq/IEEE-IGDTUW-APP-BY-V.git
cd IEEE-IGDTUW-APP-BY-V
2. Run with a Local Server
Option A: Using Python (if installed)
bash# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
Option B: Using Node.js (if installed)
bash# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server -p 8000
Option C: Using VS Code Live Server Extension

Open folder in VS Code
Install "Live Server" extension
Right-click on index.html → "Open with Live Server"

3. Access the Application
Open your browser and navigate to:
http://localhost:8000

📂 Project Structure
IEEE-IGDTUW-APP-BY-V/
├── index.html              # Main HTML file with app structure
├── style.css               # Complete styling with responsive design
├── script.js               # JavaScript functionality and event handlers
├── manifest.json           # PWA manifest for installability
├── service-worker.js       # Service worker for offline capability
└── README.md              # Project documentation (this file)

🎯 Key Functionalities
1. Event Management

Dynamic event cards with category filtering (Workshops, Webinars, Competitions)
Detailed event modals with date, time, venue, and description
Direct registration via Google Forms integration
Status indicators (Open, Upcoming)

2. Recruitment System

Three-tier recruitment structure (Core Team, Associates, Coordinators)
Eligibility criteria display
Available positions showcase with icons
Role-specific application forms

3. Authentication System

Email validation: name[123]bt[branch][year]@igdtuw.ac.in
IEEE Membership Number verification (9-digit validation)
Multi-role selection with custom dropdown UI
Session-based authentication state
Secure password validation (minimum 6 characters)

4. Member Dashboard

Personalized welcome with name extraction from email
Role(s) display with count badge
Quick access to:

Event Management
Member Management (under development)
Analytics Dashboard (under development)
Account Settings (under development)



5. Gallery System

Year-wise filtering (2022, 2023, 2024, All)
Hover effects with event details
Modal view for enlarged images
Event descriptions and dates

6. Feedback Collection

5-star rating system
Event-specific feedback forms
Suggestions collection
Form validation


🎨 Design Features

IEEE Brand Colors: Official IEEE blue (#00629B) with gradient effects
Dark Theme: Professional dark background with high contrast
Glowing Effects: CSS-based glow animations for interactive elements
Responsive Design: Mobile-first approach with breakpoints at 768px and 480px
Bottom Navigation: Instagram-style mobile navigation for easy access
Smooth Animations: Fade-in, slide-up, and float animations
Custom Scrollbar: Branded scrollbar design


📱 PWA Features
Manifest Configuration

App name: "IEEE IGDTUW - Official App"
Theme color: IEEE Blue (#00629B)
Display mode: Standalone (full-screen)
Icons: 192x192 and 512x512 for various devices

Service Worker Capabilities

Offline Access: Cached HTML, CSS, and JavaScript files
Network-First Strategy: Always fetch fresh content when online
Fallback Support: Serve cached content when offline
Auto-Update: Service worker updates on new deployment

Installation Support

Android Chrome: Add to Home Screen
iOS Safari: Add to Home Screen
Desktop Chrome: Install app from address bar
Shortcuts: Quick access to Events, Recruitment, and Login


🔐 Demo Credentials
Sample Login:

Email: name001btece25@igdtuw.ac.in
IEEE Membership No: 111111111
Role: Select any role(s) from dropdown
Password: Any password (min 6 characters, e.g., Test@123)

Email Format:
[name][3-digits][bt/mt/phd][branch][year]@igdtuw.ac.in

Examples:
- vaishnavi075btece25@igdtuw.ac.in
- priya123mtcse26@igdtuw.ac.in
- anjali456btit27@igdtuw.ac.in

🚧 Future Enhancements

Backend integration with real-time database
Admin panel for event and member management
Push notifications for event updates
Analytics dashboard with charts and statistics
Payment gateway for event registrations
Chat system for member communication
Certificate generation and distribution
API integration with main IEEE IGDTUW website


🤝 Contributing
This project was developed as part of the Vibe-A-Thon 2026 competition. For any suggestions or improvements, please open an issue or submit a pull request.

📄 License
This project is developed for IEEE IGDTUW Student Branch. All rights reserved.

👩‍💻 Developer
Team Name: Vaishnavi's Team
Developer: Vaishnavi Shukla
Branch: B.Tech ECE
Graduation Year: 2029
Institution: Indira Gandhi Delhi Technical University for Women

📞 Contact
For queries or support, reach out to:

Email: ieeeigdtuw@gmail.com
LinkedIn: IEEE IGDTUW
Instagram: @ieeeigdtuw
Website: IEEE IGDTUW Official


🙏 Acknowledgments

IEEE IGDTUW Student Branch for the opportunity
Vibe-A-Thon 2026 organizing committee
Claude AI for development assistance
Unsplash for placeholder images
Font Awesome for icon library


Built with ❤️ for IEEE IGDTUW
