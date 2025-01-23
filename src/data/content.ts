export const DEFAULT_IMAGE_URL = "https://ik.imagekit.io/eioac6dye/portfolio/prev.jpg?updatedAt=1727280824298"

export const socialLinks = {
    github: "https://github.com/zafajardo9",
    linkedin: "https://linkedin.com/in/zafajardo9/",
    facebook: "https://facebook.com/zafajardo",
    resume: "https://ik.imagekit.io/23umzxu6uw/Resume/Fajardo,%20Zackery%20Alline%20-%20October-1.pdf?updatedAt=1737615069658"
}

export const personalInfo = {
    name: "Zackery Alline Fajardo",
    title: "Software Engineer",
    bio: "Passionate about creating elegant solutions to complex problems. Specialized in building modern web applications with cutting-edge technologies."
}

export const workExperiences = [
    {
        title: "Software Engineer",
        company: "Kippap",
        period: "May 2024 - Present",
        description: [
            "Developed and maintained web applications using Laravel",
            "Implemented features for the portal system",
            "Collaborated teams for mobile and for its integration"
        ]
    },
    {
        title: "Developer",
        company: "Freelance",
        period: "Present",
        description: [
            "Open to any projects",
            "Supporting my clients in their projects",
        ]
    },
    {
        title: "Web Developer Intern",
        company: "Asceoft",
        period: "March 2024 - May 2024",
        description: [
            "Developed and maintained web applications using Next.js",
            "Implemented responsive designs and user interfaces",
            "Collaborated with cross-functional teams for feature development"
        ]
    },
    // Add more experiences...
]

export const interests = [
    {
        title: "Artificial Intelligence",
        description: "Interested in AI and its applications in solving real-world problems."
    },
    // Add more interests...
]

export const projects = [
    {
        title: "MRP system",
        description: "A system that will have have many feature suce as inventory, sales, purchase, and many more with a POS system.",
        tech: ["NextJS", "PostgreSQL", "Vercel"],
        image: "https://ik.imagekit.io/23umzxu6uw/projects/mrp.png?updatedAt=1737614539443",
        liveUrl: "",
        githubUrl: "",
        isPrivate: true,
        status: "ongoing" as const,
    },
    {
        title: "Website Analytics",
        description: "Kippaps Analytics Website. This is a website that shows the analytics of the kippap portal system.",
        tech: ["NextJS", "Google Sheets", "Vercel"],
        image: "https://ik.imagekit.io/23umzxu6uw/projects/Screenshot%202025-01-20%20214113.png?updatedAt=1737380736752",
        liveUrl: "https://website-analytics-mu.vercel.app/",
        githubUrl: "",
        isPrivate: true,
        status: "ongoing" as const,
    },
    {
        title: "Kippap Portal",
        description: "Kippap Learning website and portal. Needed for kippap flexing its services and goals and user to be able to join with the company's fun interactive way of learning",
        tech: ["PHP", "Laravel", "AWS"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/kippap.png?updatedAt=1728660751626",
        liveUrl: "https://portal.kippap.com/",
        githubUrl: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/holland-no-google.gif?w=2880&quality=85",
        isPrivate: true,
        status: "ongoing" as const,
    },
    {
        title: "BudgetBud",
        description: "Your budget buddy. Our Application or specifically mobile application is named 'BudgetBud' shortened phrase of 'Your Budgeting Buddy'. We envision that this app will make personal finance management or budgeting a breeze for everyone.",
        tech: ["Flutter", "Dart", "Firebase"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/BudgetBud.png?updatedAt=1727280925867",
        liveUrl: "https://budgetbud.netlify.app/",
        githubUrl: "https://github.com/zafajardo9/BudgetBud",
        isPrivate: true,
        status: "completed" as const,
    },
    {
        title: "PUP-RIS",
        description: "University Website. The system will serve as a centralized repository for research papers, enabling students to submit their work for review and approval by research professors or advisers.",
        tech: ["NextJS", "FastAPI", "TailwindCSS"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/RIS.png?updatedAt=1727280899940",
        liveUrl: "https://research-info-system.vercel.app",
        githubUrl: "https://github.com/zafajardo9/research-info-system",
        isPrivate: true,
        status: "completed" as const,
    },
    {
        title: "Market Prediction",
        description: "Learning. From tutorial for learning Machine Leaning with Jupyter Notebook.",
        tech: ["Jupyter Notebook"],
        image: DEFAULT_IMAGE_URL,
        liveUrl: "https://github.com/zafajardo9/marketpredict",
        githubUrl: "https://github.com/zafajardo9/marketpredict",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "Path Finder Algorithm",
        description: "Made in Javascript. Made to learn more JS and tried to make a visualization on how the algorithms work.",
        tech: ["Javascript"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/path-finder.png?updatedAt=1727282291012",
        liveUrl: "https://github.com/zafajardo9/path-finder",
        githubUrl: "https://github.com/zafajardo9/path-finder",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "Messenger Chat",
        description: "Side Project. Learning React and Firebase.",
        tech: ["React", "Firebase"],
        image: DEFAULT_IMAGE_URL,
        liveUrl: "https://github.com/zafajardo9/ChatMessenger",
        githubUrl: "https://github.com/zafajardo9/ChatMessenger",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "Habit Tracker",
        description: "Check and Track yourself. Daily check and tracker for habits and shows heatspots of your activities in days and months.",
        tech: ["Flutter", "Dart", "Firebase"],
        image: DEFAULT_IMAGE_URL,
        liveUrl: "https://github.com/zafajardo9/HabitTrack",
        githubUrl: "https://github.com/zafajardo9/HabitTrack",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "Timer",
        description: "Side Project. Made for learning React Native and Expo.",
        tech: ["React Native", "Expo"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/timer.jpg?updatedAt=1727281800979",
        liveUrl: "https://github.com/zafajardo9/reacttimer",
        githubUrl: "https://github.com/zafajardo9/reacttimer",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "The Weather App",
        description: "Side Project. Made for learning React Native and Expo with fetching data from API.",
        tech: ["React Native", "Expo"],
        image: "https://ik.imagekit.io/eioac6dye/portfolio/weather.jpg?updatedAt=1727281932115",
        liveUrl: "https://github.com/zafajardo9/The-Weather-App",
        githubUrl: "https://github.com/zafajardo9/The-Weather-App",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "Car Rental",
        description: "Programming Assignment. Showcase what we learned with SQL database and PHP.",
        tech: ["PHP", "HTML5", "CSS3"],
        image: "https://raw.githubusercontent.com/zafajardo9/eCommerce_CarRental/main/documentation/1.jpg",
        liveUrl: "https://github.com/zafajardo9/eCommerce_CarRental",
        githubUrl: "https://github.com/zafajardo9/eCommerce_CarRental",
        isPrivate: false,
        status: "completed" as const,
    },
    {
        title: "WokeUpLikeThis",
        description: "Section Project. Showcase what we learned from game development class.",
        tech: ["Unity"],
        image: DEFAULT_IMAGE_URL,
        liveUrl: "https://github.com/zafajardo9/wokeuplikethis",
        githubUrl: "https://github.com/zafajardo9/wokeuplikethis",
        isPrivate: false,
        status: "completed" as const,
    }
] 