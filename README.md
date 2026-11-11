# SkillPath AI – AI-Powered Learning and Project Development Platform

## 1. Project Introduction

SkillPath AI is a web-based learning platform designed to help students improve their technical skills, practice typing, follow structured learning roadmaps, explore project ideas, and receive guidance from an AI Mentor.

The platform helps students convert their ideas into practical projects through step-by-step instructions.

## 2. Main Features

### 1. Dashboard
- Displays learning progress.
- Provides access to all learning modules.
- Shows important learning activities.

### 2. Skills
- Explore technical skills.
- Learn programming fundamentals.
- Improve technical knowledge.

### 3. Typing Practice
- Practice typing speed and accuracy.
- Track typing progress.
- Improve keyboard skills.

### 4. Learning Roadmaps
- Follow step-by-step learning paths.
- Learn programming from beginner to advanced level.
- Track learning progress.

### 5. Ideas into Projects
- Explore different project ideas.
- Select a project based on your interests.
- Generate a project plan.
- View objectives and required technologies.
- Understand important features.
- Follow development steps.
- Complete testing checklists.

### 6. AI Mentor
- Ask questions about programming.
- Get explanations for technical topics.
- Receive project development guidance.
- Understand programming concepts.
- Get beginner-friendly learning suggestions.

Note: The current Mentor uses local rule-based responses and does not require an external AI API key.

## 3. Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Local Storage

## 4. Software Requirements

- Windows 10 or Windows 11
- Visual Studio Code
- Node.js and npm
- Google Chrome or another modern browser

## 5. Installation Instructions

### Step 1: Extract the Project

Extract the downloaded SkillPath AI ZIP file.

### Step 2: Open in VS Code

Open Visual Studio Code and select:

File → Open Folder → SkillPath AI

### Step 3: Open Terminal

Select:

Terminal → New Terminal

### Step 4: Install Dependencies

Run:

```bash
npm install
```

### Step 5: Start the Server

Run:

```bash
npm start
```

### Step 6: Open the Website

Open your browser and enter:

```text
http://localhost:3001
```

## 6. Project Structure

```text
skillpath-ai/
│
├── package.json
├── package-lock.json
├── server.js
├── start-local.bat
├── README.md
│
└── public/
    ├── index.html
    ├── css/
    ├── js/
    └── assets/
```

The exact contents of the public folder depend on the project version.

## 7. Local Hosting Configuration

The default development port is:

```text
3001
```

To change the port, configure the PORT environment variable in the server configuration.

Example:

```javascript
const PORT = process.env.PORT || 3001;
```

## 8. Troubleshooting

### Problem 1: npm ENOENT Error

Cause: npm cannot find package.json.

Solution:
1. Open the correct project folder in VS Code.
2. Check that package.json exists.
3. Run npm install inside that folder.

### Problem 2: Port Already in Use

Change the port from 3001 to 3002 and restart the server.

### Problem 3: Website Not Opening

1. Check whether the Node.js server is running.
2. Check the terminal for errors.
3. Verify the correct localhost port.
4. Refresh the browser.

### Problem 4: Mentor Not Responding

1. Check that the server is running.
2. Check the browser console.
3. Check the backend API endpoint.
4. Verify that the frontend and backend use the same response format.

## 9. Future Enhancements

- Real AI-powered mentoring.
- Student authentication.
- Cloud database integration.
- Personalized project recommendations.
- Advanced progress analytics.
- Project code generation.
- Online deployment.

## 10. Conclusion

SkillPath AI provides students with a centralized platform for learning technical skills, practicing typing, following learning roadmaps, exploring project ideas, and receiving programming guidance.

Its main objective is to transform learning into practical development by helping students turn their ideas into real-world projects.
