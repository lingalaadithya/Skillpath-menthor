const express = require("express");
const path = require("path");

const app = express();

const PORT = Number(process.env.PORT) || 3001;

app.use(express.json({ limit: "1mb" }));

const publicFolder = path.join(__dirname, "public");

app.use(express.static(publicFolder));

/* =========================================================
   SKILLS
========================================================= */

const skills = [
    {
        id: "python",
        title: "Python",
        category: "Trending",
        level: "Beginner",
        icon: "🐍",
        description: "Learn Python programming from fundamentals to practical projects."
    },
    {
        id: "javascript",
        title: "JavaScript",
        category: "Trending",
        level: "Beginner",
        icon: "⚡",
        description: "Build interactive websites and modern web applications."
    },
    {
        id: "web-development",
        title: "Web Development",
        category: "Trending",
        level: "Beginner",
        icon: "🌐",
        description: "Learn HTML, CSS, JavaScript and full-stack development."
    },
    {
        id: "machine-learning",
        title: "Machine Learning",
        category: "Trending",
        level: "Intermediate",
        icon: "🧠",
        description: "Understand machine learning concepts and practical workflows."
    },
    {
        id: "data-science",
        title: "Data Science",
        category: "Trending",
        level: "Intermediate",
        icon: "📊",
        description: "Work with data, statistics, visualization and analysis."
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity",
        category: "Trending",
        level: "Intermediate",
        icon: "🔐",
        description: "Learn defensive cybersecurity concepts and security fundamentals."
    },
    {
        id: "sql",
        title: "SQL",
        category: "Trending",
        level: "Beginner",
        icon: "🗄️",
        description: "Learn databases, queries, filtering, joins and data management."
    },
    {
        id: "cloud",
        title: "Cloud Computing",
        category: "Trending",
        level: "Intermediate",
        icon: "☁️",
        description: "Understand cloud platforms, deployment and infrastructure."
    },
    {
        id: "generative-ai",
        title: "Generative AI",
        category: "Trending",
        level: "Intermediate",
        icon: "✨",
        description: "Explore generative AI concepts, prompts and applications."
    },
    {
        id: "ai-agents",
        title: "AI Agents",
        category: "Upcoming",
        level: "Advanced",
        icon: "🤖",
        description: "Learn how intelligent systems can plan and perform tasks."
    },
    {
        id: "edge-ai",
        title: "Edge AI",
        category: "Upcoming",
        level: "Advanced",
        icon: "📡",
        description: "Explore AI workloads running directly on edge devices."
    },
    {
        id: "robotics-ai",
        title: "Robotics AI",
        category: "Upcoming",
        level: "Advanced",
        icon: "🦾",
        description: "Learn about AI-powered robotic systems."
    },
    {
        id: "multimodal-ai",
        title: "Multimodal AI",
        category: "Upcoming",
        level: "Advanced",
        icon: "👁️",
        description: "Understand systems that work with text, images, audio and more."
    },
    {
        id: "ai-automation",
        title: "AI Automation",
        category: "Upcoming",
        level: "Intermediate",
        icon: "⚙️",
        description: "Learn how AI can automate useful workflows."
    },
    {
        id: "quantum-computing",
        title: "Quantum Computing",
        category: "Upcoming",
        level: "Advanced",
        icon: "⚛️",
        description: "Explore the fundamentals of quantum computing."
    }
];

/* =========================================================
   TYPING LEVELS
========================================================= */

const typingLevels = [
    {
        level: 1,
        difficulty: "Easy",
        text: "The quick brown fox jumps over the lazy dog."
    },
    {
        level: 2,
        difficulty: "Easy",
        text: "Learning to type accurately is an important computer skill."
    },
    {
        level: 3,
        difficulty: "Easy",
        text: "Practice every day and your typing speed will improve naturally."
    },
    {
        level: 4,
        difficulty: "Medium",
        text: "JavaScript allows developers to create interactive web applications."
    },
    {
        level: 5,
        difficulty: "Medium",
        text: "Good programmers focus on clean code, logical thinking, and useful solutions."
    },
    {
        level: 6,
        difficulty: "Hard",
        text: "Modern software development combines programming, databases, APIs, testing, and deployment."
    },
    {
        level: 7,
        difficulty: "Hard",
        text: "Artificial intelligence is changing how people build products, analyze information, and solve complex problems."
    },
    {
        level: 8,
        difficulty: "Hard",
        text: "Cybersecurity requires continuous learning because technologies, threats, and defensive techniques evolve rapidly."
    },
    {
        level: 9,
        difficulty: "Very Hard",
        text: "Successful developers combine technical knowledge with communication, problem solving, debugging, documentation, and continuous improvement."
    },
    {
        level: 10,
        difficulty: "Very Hard",
        text: "Building reliable applications requires careful planning, readable code, testing, security awareness, performance optimization, and a strong understanding of the users who depend on the software."
    }
];

const advancedParagraphs = [
    "Technology is changing rapidly, and developers must continuously improve their knowledge. Regular typing practice helps programmers write code, documentation, commands, and technical notes more efficiently.",
    "A strong developer does more than write code. Developers analyze problems, design solutions, test applications, fix errors, understand users, and continuously improve the quality of their software.",
    "Artificial intelligence, cloud computing, cybersecurity, data science, and web development are creating new opportunities for learners. Building practical projects is one of the best ways to connect technical concepts with real-world applications."
];

/* =========================================================
   ROADMAP
========================================================= */

const roadmaps = [
    {
        id: "web-development",
        title: "Web Development Roadmap",
        icon: "🌐",
        steps: [
            "HTML fundamentals",
            "CSS fundamentals",
            "Responsive design",
            "JavaScript basics",
            "DOM manipulation",
            "APIs",
            "Node.js",
            "Express.js",
            "Databases",
            "Deployment"
        ]
    },
    {
        id: "python",
        title: "Python Roadmap",
        icon: "🐍",
        steps: [
            "Python syntax",
            "Variables and data types",
            "Conditions and loops",
            "Functions",
            "Lists and dictionaries",
            "Object-oriented programming",
            "File handling",
            "APIs",
            "Automation",
            "Projects"
        ]
    },
    {
        id: "javascript",
        title: "JavaScript Roadmap",
        icon: "⚡",
        steps: [
            "Variables",
            "Functions",
            "Arrays and objects",
            "DOM",
            "Events",
            "Async JavaScript",
            "Fetch API",
            "Modules",
            "Node.js",
            "Projects"
        ]
    },
    {
        id: "ai",
        title: "AI Roadmap",
        icon: "🧠",
        steps: [
            "Programming fundamentals",
            "Mathematics basics",
            "Data handling",
            "Machine learning",
            "Neural networks",
            "Deep learning",
            "Generative AI",
            "AI applications",
            "AI projects",
            "Advanced AI"
        ]
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity Roadmap",
        icon: "🔐",
        steps: [
            "Computer networks",
            "Operating systems",
            "Linux fundamentals",
            "Security fundamentals",
            "Authentication",
            "Cryptography basics",
            "Web security",
            "Monitoring",
            "Incident response",
            "Security projects"
        ]
    }
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
    {
        title: "Personal Portfolio",
        level: "Beginner",
        icon: "💼",
        description: "Create a responsive personal portfolio website."
    },
    {
        title: "Weather Dashboard",
        level: "Beginner",
        icon: "🌦️",
        description: "Build a weather dashboard with API data."
    },
    {
        title: "Expense Tracker",
        level: "Beginner",
        icon: "💰",
        description: "Create an application for tracking expenses."
    },
    {
        title: "AI Study Assistant",
        level: "Intermediate",
        icon: "📚",
        description: "Create a study assistant interface with learning tools."
    },
    {
        title: "Spam Message Detector",
        level: "Intermediate",
        icon: "🛡️",
        description: "Build a system that identifies suspicious messages."
    },
    {
        title: "Cybersecurity Dashboard",
        level: "Intermediate",
        icon: "🔐",
        description: "Create a security monitoring dashboard."
    },
    {
        title: "Skill Recommendation System",
        level: "Intermediate",
        icon: "🎯",
        description: "Recommend learning paths based on selected interests."
    },
    {
        title: "Chat Application",
        level: "Intermediate",
        icon: "💬",
        description: "Build a real-time style chat interface."
    },
    {
        title: "Smart Attendance System",
        level: "Advanced",
        icon: "🧑‍🎓",
        description: "Design a digital attendance management system."
    },
    {
        title: "Energy Monitoring Dashboard",
        level: "Advanced",
        icon: "⚡",
        description: "Visualize energy measurements and usage information."
    }
];

/* =========================================================
   LOCAL MENTOR
========================================================= */

function mentorReply(message) {
    const input = String(message || "").trim().toLowerCase();

    if (!input) {
        return {
            answer: "Tell me what you want to learn, and I will explain it step by step.",
            topics: []
        };
    }

    // Project-builder requests are handled locally; no external AI key is needed.
    const projectRequest = /\b(project|build|create|develop|make)\b/.test(input);
    if (projectRequest && (input.includes("project") || input.includes("build"))) {
        const projectNames = projects.map(item => item.title);
        const matchedProject = projectNames.find(name =>
            input.includes(name.toLowerCase())
        );
        const projectName = matchedProject || "your project idea";
        const normalizedName = matchedProject || "Custom Project";
        const isPortfolio = /portfolio/.test(input);
        const isWeather = /weather/.test(input);
        const isExpense = /expense|budget/.test(input);
        const isStudy = /study|assistant/.test(input);
        const isSpam = /spam|message detector/.test(input);
        const isChat = /chat/.test(input);
        let stack = "HTML, CSS and JavaScript";
        if (isWeather) stack += " with a weather data API";
        if (isExpense) stack += " with localStorage for saving entries";
        if (isSpam) stack += " with a rule-based keyword classifier";
        if (isStudy) stack += " with localStorage for notes and study tasks";
        if (isChat) stack += " with Node.js and Express for a later real-time backend";
        if (isPortfolio) stack += " with responsive sections and a contact form";
        return {
            answer: `Let's turn ${projectName} into a working beginner-friendly project.\n\n` +
                `**1. Goal**\nBuild a usable ${normalizedName} with a clear interface and one core workflow.\n\n` +
                `**2. Suggested technology**\n${stack}. Start with the browser version first; add a database or hosting only after the basic version works.\n\n` +
                `**3. Core features**\n- A responsive home/dashboard screen\n- A form to enter or update information\n- Validation with clear error messages\n- A results/list view with edit and delete actions where relevant\n- Save and restore data (localStorage for the first version)\n- Empty, loading and error states\n\n` +
                `**4. Starter folder structure**\n\n\`\`\`text\n${normalizedName.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}/\n  index.html\n  css/\n    style.css\n  js/\n    app.js\n  README.txt\n\`\`\`\n\n` +
                `**5. Development steps**\n1. Write down the user problem and the main screen.\n2. Create the HTML structure.\n3. Add responsive styling.\n4. Implement the main JavaScript interaction.\n5. Add validation and local saving.\n6. Test on desktop and mobile, including empty and invalid inputs.\n7. Document how to run the project.\n\n` +
                `**6. Test checklist**\n- The page loads without console errors.\n- Every button performs its stated action.\n- Invalid input is rejected with a helpful message.\n- Data remains after refreshing (if saved locally).\n- Layout works on a phone-sized screen.\n\n` +
                `**Next step:** Tell me which feature you want to code first, and I will explain the files and code in beginner-friendly steps.`,
            topics: ["Project goal", "Technology stack", "Features", "Folder structure", "Development steps", "Testing"]
        };
    }

    if (
        input.includes("typing") ||
        input.includes("wpm") ||
        input.includes("keyboard")
    ) {
        return {
            answer:
                "Typing improvement comes from accuracy first and speed second. Start with short practice sessions. Keep your eyes on the text instead of the keyboard, use the correct fingers, and avoid rushing. After Level 10, use the advanced paragraph practice to build endurance. A useful target is to improve accuracy while gradually increasing your words per minute.",
            topics: [
                "Home-row position",
                "Touch typing",
                "Accuracy",
                "WPM",
                "Daily practice"
            ]
        };
    }

    if (
        input.includes("javascript") ||
        input.includes(" js ")
    ) {
        return {
            answer:
                "JavaScript is a programming language commonly used to make web pages interactive. Start with variables, data types, operators, conditions, loops, functions, arrays, and objects. Then learn the DOM and events. After that, study asynchronous JavaScript, Fetch API, modules, and Node.js.\n\nReal-world example: a button on a website can trigger JavaScript that reads a form, validates the information, sends data to a server, and updates the page without reloading it.",
            topics: [
                "Variables",
                "Functions",
                "Arrays",
                "Objects",
                "DOM",
                "Events",
                "Fetch API",
                "Node.js"
            ]
        };
    }

    if (input.includes("python")) {
        return {
            answer:
                "Python is a beginner-friendly programming language used for web development, automation, data science, AI, scripting, and many other tasks. Begin with variables, data types, conditions, loops, functions, lists, dictionaries, and file handling. Then move to modules, classes, APIs, and practical projects.\n\nReal-world example: Python can read a CSV file, calculate statistics, and generate a useful report automatically.",
            topics: [
                "Syntax",
                "Variables",
                "Conditions",
                "Loops",
                "Functions",
                "Lists",
                "Dictionaries",
                "Projects"
            ]
        };
    }

    if (
        input.includes("html") ||
        input.includes("css") ||
        input.includes("web development") ||
        input.includes("website")
    ) {
        return {
            answer:
                "Web development combines HTML, CSS, and JavaScript. HTML defines the structure of a page, CSS controls presentation and layout, and JavaScript adds behavior and interaction.\n\nA practical learning sequence is: HTML → CSS → responsive design → JavaScript → DOM → APIs → backend development → databases → deployment.\n\nReal-world example: an online shopping page can use HTML for product information, CSS for the layout, and JavaScript for search, filters, cart actions, and dynamic updates.",
            topics: [
                "HTML",
                "CSS",
                "Responsive design",
                "JavaScript",
                "DOM",
                "APIs",
                "Backend",
                "Databases"
            ]
        };
    }

    if (
        input.includes("ai") ||
        input.includes("artificial intelligence") ||
        input.includes("machine learning")
    ) {
        return {
            answer:
                "Artificial intelligence is a broad field focused on creating systems that perform tasks requiring capabilities such as pattern recognition, prediction, language processing, or decision support. Machine learning is one important approach where systems learn patterns from data.\n\nA useful learning path is programming fundamentals → mathematics basics → data handling → machine learning → neural networks → deep learning → generative AI → practical projects.",
            topics: [
                "Programming",
                "Data",
                "Machine Learning",
                "Neural Networks",
                "Deep Learning",
                "Generative AI",
                "Projects"
            ]
        };
    }

    if (
        input.includes("roadmap") ||
        input.includes("learning path") ||
        input.includes("learn")
    ) {
        return {
            answer:
                "A good learning strategy is to choose one skill, learn the fundamentals, practice small exercises, build a project, review your mistakes, and then move to a more advanced project. SkillPath AI provides roadmaps for Web Development, Python, JavaScript, AI, and Cybersecurity.",
            topics: [
                "Choose a skill",
                "Learn fundamentals",
                "Practice",
                "Build projects",
                "Review",
                "Advance"
            ]
        };
    }

    return {
        answer:
            "I can help you learn programming, web development, Python, JavaScript, AI, machine learning, cybersecurity, cloud computing, SQL, data science, typing, and learning roadmaps. Ask me a specific question and I will break the topic into simple steps with examples and practice ideas.",
        topics: [
            "Programming",
            "Web Development",
            "Python",
            "JavaScript",
            "AI",
            "Cybersecurity",
            "Typing"
        ]
    };
}

/* =========================================================
   API ROUTES
========================================================= */

app.get("/test", function (req, res) {
    res.json({
        success: true,
        message: "SkillPath AI server is working.",
        port: PORT
    });
});

app.get("/api/skills", function (req, res) {
    res.json({
        success: true,
        skills: skills
    });
});

app.get("/api/typing", function (req, res) {
    res.json({
        success: true,
        levels: typingLevels,
        advancedParagraphs: advancedParagraphs
    });
});

app.get("/api/roadmap", function (req, res) {
    res.json({
        success: true,
        roadmaps: roadmaps
    });
});

app.get("/api/roadmaps", function (req, res) {
    res.json({
        success: true,
        roadmaps: roadmaps
    });
});

app.get("/api/projects", function (req, res) {
    res.json({
        success: true,
        projects: projects
    });
});

app.post("/api/mentor", function (req, res) {
    const message = req.body && typeof req.body.message === "string"
        ? req.body.message.trim()
        : "";

    if (!message) {
        return res.status(400).json({
            success: false,
            error: "Please enter a question for the mentor."
        });
    }

    if (message.length > 4000) {
        return res.status(413).json({
            success: false,
            error: "Your question is too long. Please keep it under 4,000 characters."
        });
    }

    try {
        const result = mentorReply(message);
        // Return aliases so both current and older frontend versions work.
        return res.json({
            success: true,
            answer: result.answer,
            reply: result.answer,
            topics: result.topics
        });
    } catch (error) {
        console.error("Mentor API error:", error);
        return res.status(500).json({
            success: false,
            error: "The mentor could not process that question. Please try again."
        });
    }
});

/* =========================================================
   HOME PAGE
========================================================= */

app.get("/", function (req, res) {
    res.sendFile(path.join(publicFolder, "index.html"));
});

/* =========================================================
   SERVER
========================================================= */

app.listen(PORT, "0.0.0.0", function () {
    console.log("");
    console.log("========================================");
    console.log("        SKILLPATH AI");
    console.log("========================================");
    console.log("Server running successfully");
    console.log("Local: http://127.0.0.1:" + PORT);
    console.log("Test:  http://127.0.0.1:" + PORT + "/test");
    console.log("========================================");
    console.log("");
});