# 🚀 Interactive Terminal Portfolio

## Overview

A fully interactive, command-line style portfolio with advanced features including:
- ✅ Command-based navigation
- ✅ Smart autocomplete with TAB
- ✅ "Did you mean?" suggestions
- ✅ Matrix effect background
- ✅ Windows-style CV Explorer
- ✅ Smart Recruiter Match system
- ✅ Command history (↑/↓ arrows)
- ✅ Multiple commands display
- ✅ Clickable command links

## 🎮 How to Use

### Basic Commands

Type any of these commands in the terminal:

```bash
help              # Show all available commands
about             # Display information about me
skills            # Show technical skills
skills frontend   # Show specific skill category
projects          # List all projects
projects --detail web-app  # Show project details
experience        # Show work experience
education         # Display education background
contact           # Get contact information
updates           # Show latest updates
cv                # Open Windows-style CV Explorer
map               # Show location on map
matrix            # Toggle Matrix effect
clear             # Clear terminal screen
all               # Show everything at once
```

### 🎯 Features

#### 1. Autocomplete
- Start typing a command
- Press **TAB** to autocomplete
- See suggestions automatically
- Use **↑/↓** arrows to navigate suggestions

#### 2. "Did You Mean?"
- Misspell a command (e.g., "skilz")
- Get smart suggestions for closest match
- Uses Levenshtein distance algorithm

#### 3. Command History
- Press **↑** to go back in history
- Press **↓** to go forward
- Navigate through all previous commands

#### 4. Matrix Mode
- Click ⚡ button or type `matrix`
- Enjoy the Matrix falling characters effect
- Toggle on/off anytime

#### 5. CV Explorer (Windows-Style)
- Type `cv` to open
- Click folders to explore:
  - 📂 Experience
  - 📂 Skills (with progress bars)
  - 📂 Education
  - 📂 Projects
  - 📂 Certifications

#### 6. Recruiter Smart Match 🎯
- Click 👔 button in header
- Paste job description
- Get instant match analysis:
  - Match percentage
  - Matched skills
  - Experience relevance
  - Hiring recommendation

## 📝 Customization

### Update Your Information

Edit `terminal-engine.js` and modify the `portfolioData` object:

```javascript
const portfolioData = {
  about: {
    name: "Your Name",
    title: "Your Title",
    location: "Your City, Country",
    email: "your.email@example.com",
    bio: "Your bio here"
  },
  
  skills: {
    frontend: [
      { name: "JavaScript", level: 95 },
      // Add more skills
    ],
    // Add more categories
  },
  
  projects: [
    {
      id: "project-id",
      name: "Project Name",
      description: "Description",
      tech: ["Tech1", "Tech2"],
      github: "https://github.com/...",
      demo: "https://demo.com"
    }
  ],
  
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      period: "2020 - Present",
      description: "Job description",
      achievements: ["Achievement 1", "Achievement 2"]
    }
  ],
  
  education: [
    {
      degree: "Degree Name",
      school: "School Name",
      period: "2018 - 2020",
      gpa: "3.8/4.0"
    }
  ],
  
  certifications: [
    "Certification 1",
    "Certification 2"
  ],
  
  updates: [
    {
      date: "2024-11-24",
      title: "Update Title",
      description: "Update description"
    }
  ]
};
```

### Add New Commands

Add to the `commands` object:

```javascript
const commands = {
  // ... existing commands
  
  mycommand: {
    desc: "Description of your command",
    usage: "mycommand [options]",
    exec: function(args) {
      printOutput('Your command output', 'success');
    }
  }
};
```

### Customize Colors

Edit `terminal-styles.css`:

```css
:root {
  --bg-dark: #0a0e27;           /* Background */
  --terminal-bg: #1a1b26;       /* Terminal background */
  --terminal-text: #a9b1d6;     /* Text color */
  --prompt-color: #7aa2f7;      /* Prompt/accent color */
  --success-color: #9ece6a;     /* Success messages */
  --error-color: #f7768e;        /* Error messages */
  --warning-color: #e0af68;      /* Warning messages */
  --matrix-green: #0F0;          /* Matrix effect */
}
```

## 🚀 Deployment

1. Upload all files to your web server:
   - `terminal.html`
   - `terminal-styles.css`
   - `terminal-engine.js`
   - `favicon.ico`

2. Access via: `https://yourdomain.com/terminal.html`

3. Or rename `terminal.html` to `index.html` for root access

## 🎨 Features Breakdown

### For Visitors
- Interactive command-line experience
- Easy navigation with autocomplete
- Visual feedback for all actions
- Multiple ways to explore content
- Responsive design for mobile

### For Recruiters
- Smart job match analysis
- Quick skill assessment
- Professional CV explorer
- Easy contact access
- Comprehensive overview

## 💡 Tips

1. **Type `all`** to see everything at once
2. **Use TAB** for quick command completion
3. **Try misspelling** to see "did you mean" feature
4. **Click links** in output to run commands
5. **Use `help <command>`** for detailed help
6. **Press ↑** to repeat previous commands

## 🔧 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📱 Mobile Experience

- Touch-friendly interface
- Responsive layout
- Virtual keyboard support
- Optimized for small screens

## 🎯 Advanced Features

### Command Chaining
Currently single commands only, but you can extend to support:
```bash
about && skills && projects
```

### Command Aliases
Add shortcuts:
```javascript
const aliases = {
  'ls': 'projects',
  'info': 'about',
  'h': 'help'
};
```

### Custom Themes
Switch between color schemes dynamically

## 🐛 Troubleshooting

**Commands not working?**
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page

**Autocomplete not showing?**
- Make sure you're typing in the input field
- Check if suggestions div is visible

**Matrix effect laggy?**
- Normal on slower devices
- Toggle off if needed
- Reduce canvas size in code

## 📄 License

Free to use and customize for your portfolio!

## 🎉 Enjoy!

Your interactive terminal portfolio is ready to impress visitors and recruiters alike!
