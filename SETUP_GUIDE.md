# Quick Setup Guide

## 🔧 Essential Configuration Steps

### 1. Contact Form (5 minutes)
**File:** `index.html` (line ~280)

```javascript
// Find this line:
const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com', {

// Replace with:
const response = await fetch('https://formsubmit.co/ajax/your.actual.email@gmail.com', {
```

**How it works:**
- FormSubmit.co is a free service that sends form submissions to your email
- First submission requires email confirmation
- No backend server needed!

---

### 2. Location Map (10 minutes)

**File:** `index.html` (line ~300)

#### Option A: Google Maps (Better looking)
1. Get API key: https://console.cloud.google.com/
2. Enable "Maps Embed API"
3. Update coordinates and API key:

```javascript
// Update these values:
const lat = 40.7128;  // Your latitude
const lng = -74.0060; // Your longitude

// Add your API key:
mapIframe.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${lat},${lng}&zoom=12`;
```

#### Option B: OpenStreetMap (Free, no API key)
```javascript
// Uncomment this line and comment out Google Maps:
mapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1},${lat-0.1},${lng+0.1},${lat+0.1}&layer=mapnik&marker=${lat},${lng}`;
```

**Find your coordinates:**
- Go to Google Maps
- Right-click your location
- Click the coordinates to copy them

---

### 3. Update Location Info (2 minutes)

**File:** `index.html` (line ~180)

```html
<!-- Find and update: -->
<p><span class="prompt">$</span> City: <span class="highlight">Your City</span></p>
<p><span class="prompt">$</span> Country: <span class="highlight">Your Country</span></p>
<p><span class="prompt">$</span> Timezone: <span class="highlight">UTC+0</span></p>

<!-- Example: -->
<p><span class="prompt">$</span> City: <span class="highlight">New York</span></p>
<p><span class="prompt">$</span> Country: <span class="highlight">USA</span></p>
<p><span class="prompt">$</span> Timezone: <span class="highlight">UTC-5</span></p>
```

---

### 4. Customize Projects (15 minutes)

**File:** `index.html` (line ~220)

Update the `projectData` object:

```javascript
const projectData = {
  'web-app': {
    title: 'Your Project Name',
    description: 'Brief description of your project',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/yourusername/your-repo'
  },
  // Add more projects...
};
```

---

### 5. Add Recent Updates (5 minutes)

**File:** `index.html` (line ~150)

```html
<div class="update-card">
  <span class="update-date">[2024-11-24]</span>
  <h3>Your Update Title</h3>
  <p>Description of what you did or achieved</p>
</div>
```

---

## 🎨 Optional Customizations

### Change Color Scheme
**File:** `index.html` (inline styles)

```css
:root {
  --terminal-bg: #1a1b26;        /* Background color */
  --terminal-text: #a9b1d6;      /* Text color */
  --terminal-prompt: #7aa2f7;    /* Accent color */
  --terminal-cursor: #7aa2f7;    /* Cursor color */
}
```

### Add More Programming Language Icons

Find SVG icons at:
- [Simple Icons](https://simpleicons.org/)
- [DevIcon](https://devicon.dev/)

Add to project cards:
```html
<span class="tech-icon" title="Python">
  <svg viewBox="0 0 24 24" width="24" height="24">
    <!-- Paste SVG path here -->
  </svg>
</span>
```

---

## 🚀 Testing

1. **Contact Form:**
   - Fill out the form
   - Check your email for confirmation (first time only)
   - Confirm the email
   - Test sending another message

2. **Map:**
   - Click "Show on Map" button
   - Verify your location appears correctly

3. **Matrix Mode:**
   - Click "Toggle Matrix" button
   - Enjoy the falling characters!

4. **Project Previews:**
   - Click "View Preview" on any project
   - Check that modal opens with correct info

---

## 📝 Checklist

- [ ] Updated email address in contact form
- [ ] Added Google Maps API key OR enabled OpenStreetMap
- [ ] Updated location coordinates (lat/lng)
- [ ] Updated city, country, and timezone
- [ ] Customized project information
- [ ] Added recent updates
- [ ] Tested contact form
- [ ] Tested map display
- [ ] Tested Matrix mode
- [ ] Tested project previews

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check email address is correct
- Confirm the FormSubmit verification email
- Check browser console for errors

**Map not showing?**
- Verify API key is correct (Google Maps)
- Check coordinates are valid numbers
- Try OpenStreetMap alternative

**Matrix effect laggy?**
- Normal on slower devices
- Can reduce canvas size or character count in code

**Styles not loading?**
- Verify `enhanced-styles.css` is in the same directory
- Check browser console for 404 errors
- Clear browser cache

---

## 🎉 You're Done!

Your portfolio now has:
- ✅ Interactive project showcases
- ✅ Working contact form
- ✅ Location map
- ✅ Matrix command line effect
- ✅ Info updates section

Deploy and share your awesome portfolio! 🚀
