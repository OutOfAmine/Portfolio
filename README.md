# Portfolio
A terminal-style personal website built with AngularCLI, showcasing an interactive and minimalist design. Features include sections for "About Me," "Projects," and other key information, all accessible through intuitive command-line-style navigation. Perfect for developers and tech enthusiasts!

## 🚀 New Features

### 1. **Projects Section with Language Icons**
- Interactive project cards with programming language icons
- Preview modal for detailed project information
- Links to live demos and GitHub repositories
- Hover effects and smooth animations

### 2. **Info Section with Updates**
- Timeline of recent updates and achievements
- Clean card-based layout
- Easy to update with new information

### 3. **Contact Form**
- Functional email contact form
- Real-time form validation
- Success/error status messages
- Integrated with FormSubmit.co for email delivery

### 4. **Interactive Location Map**
- Toggle button to show/hide map
- Google Maps or OpenStreetMap integration
- Displays your location with coordinates

### 5. **Matrix Command Line Mode**
- Awesome Matrix-style falling characters effect
- Toggle on/off with a button
- Full-screen immersive experience
- Perfect for showcasing your developer style

## 🛠️ Setup Instructions

### Contact Form Setup
1. Open `index.html`
2. Find the line: `const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com'`
3. Replace `YOUR_EMAIL@example.com` with your actual email address
4. The form will now send messages to your email

### Map Setup (Choose one option)

**Option 1: Google Maps (Recommended)**
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. In `index.html`, find: `mapIframe.src = \`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY`
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key
4. Update the `lat` and `lng` variables with your coordinates

**Option 2: OpenStreetMap (No API key needed)**
1. In `index.html`, uncomment the OpenStreetMap line
2. Comment out the Google Maps line
3. Update the `lat` and `lng` variables with your coordinates

### Location Info Setup
1. In `index.html`, find the location-info section
2. Update:
   - `Your City` with your actual city
   - `Your Country` with your actual country
   - `UTC+0` with your timezone

### Project Customization
1. In `index.html`, find the `projectData` object
2. Update each project with:
   - Title and description
   - Features list
   - Demo and GitHub links
3. Add more projects by duplicating the project-card HTML structure

## 🎨 Customization

### Adding New Projects
```html
<div class="project-card" data-project="your-project-id">
  <div class="project-header">
    <h3>Your Project Name</h3>
    <div class="tech-icons">
      <!-- Add your tech icons here -->
    </div>
  </div>
  <p class="project-desc">Your project description</p>
  <button class="preview-btn" onclick="openPreview('your-project-id')">View Preview →</button>
</div>
```

### Adding New Updates
```html
<div class="update-card">
  <span class="update-date">[YYYY-MM-DD]</span>
  <h3>Update Title</h3>
  <p>Update description</p>
</div>
```

## 📱 Responsive Design
All new features are fully responsive and work seamlessly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Features Overview

| Feature | Description | Status |
|---------|-------------|--------|
| Matrix Mode | Full-screen Matrix effect | ✅ Active |
| Project Previews | Modal with project details | ✅ Active |
| Contact Form | Email integration | ✅ Active |
| Interactive Map | Location visualization | ✅ Active |
| Info Updates | Timeline of achievements | ✅ Active |
| Responsive Design | Mobile-friendly | ✅ Active |

## 🚀 Quick Start
1. Update your email in the contact form
2. Add your Google Maps API key (or use OpenStreetMap)
3. Customize project information
4. Update location details
5. Deploy to your hosting platform

Enjoy your enhanced terminal-style portfolio! 🎉
