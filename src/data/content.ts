export const DEFAULT_IMAGE_URL = "https://ik.imagekit.io/eioac6dye/portfolio/prev.jpg?updatedAt=1727280824298"

export const socialLinks = {
    github: "https://github.com/zafajardo9",
    linkedin: "https://linkedin.com/in/zafajardo9/",
    facebook: "https://facebook.com/zafajardo",
    resume: "https://drive.google.com/file/d/1HAvGGCqUDvhDNAEGYwSVDLQBtYUd7YDl/view?usp=sharing"

}

export const personalInfo = {
    name: "Zackery Alline Fajardo",
    title: "Software Engineer",
    bio: "Passionate about creating elegant solutions to complex problems. Specialized in building modern web applications with cutting-edge technologies."
}

type MonthDate = {
    year: number
    month: number
}

type ExperiencePeriod = {
    start: MonthDate
    end: MonthDate | null
}

const monthIndex = (date: MonthDate) => date.year * 12 + (date.month - 1)

const getCurrentMonthIndex = () => {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
}

const calculateTotalExperienceMonths = (periods: ExperiencePeriod[]) => {
    const intervals = periods
        .map((p) => {
            const start = monthIndex(p.start)
            const endExclusive = p.end ? monthIndex(p.end) + 1 : getCurrentMonthIndex() + 1
            return { start, endExclusive }
        })
        .filter((i) => i.endExclusive > i.start)
        .sort((a, b) => a.start - b.start)

    let total = 0
    let currentStart = -1
    let currentEndExclusive = -1

    for (const interval of intervals) {
        if (currentStart === -1) {
            currentStart = interval.start
            currentEndExclusive = interval.endExclusive
            continue
        }

        if (interval.start <= currentEndExclusive) {
            currentEndExclusive = Math.max(currentEndExclusive, interval.endExclusive)
            continue
        }

        total += currentEndExclusive - currentStart
        currentStart = interval.start
        currentEndExclusive = interval.endExclusive
    }

    if (currentStart !== -1) {
        total += currentEndExclusive - currentStart
    }

    return total
}

const formatExperienceYears = (totalMonths: number) => {
    const years = totalMonths / 12
    const roundedYears = Math.max(0, Math.round(years))
    return `${roundedYears} ${roundedYears === 1 ? "year" : "years"}`
}

export const workExperiences = [
    {
        title: "Software Engineer",
        company: "Kippap Learning Corporation",
        period: { start: { month: 5, year: 2024 }, end: null },
        description: [
            "Developed a full Learning Management System and student portal with automated enrollment, payment integration, and synchronized academic workflows.",
            "Served as the lead developer responsible for system maintenance, continuous updates, codebase refactoring, and ensuring long-term platform stability.",
            "Managed AWS deployments end-to-end (EC2, S3, RDS), handling production updates, performance tuning, and secure release processes.",
            "Collaborated with cross-functional teams to redesign internal processes, improving administrative efficiency and overall user experience.",
            "Participated in Agile Scrum ceremonies, contributing to iterative releases, sprint planning, and collaborative problem-solving.",
            "Led research and implementation of EdTech solutions while enhancing SEO performance and strengthening the company’s digital presence."
        ]
    },
    {
        title: "Fullstack Developer",
        company: "Xgen Enterprises",
        period: { start: { month: 1, year: 2025 }, end: { month: 8, year: 2025 } },
        description: [
            "Delivered a complete MRP platform with multi-role access, real-time inventory tracking, automated reordering, and dynamic BOM management.",
            "Designed and implemented quality control features including defect tracking, supplier oversight, and QR-based purchase order workflows.",
            "Built real-time analytics dashboards and a client-facing portal that enhanced order transparency and operational reporting.",
            "Worked closely with stakeholders in an Agile environment to refine requirements and ensure smooth system adoption across teams."
        ]
    },
    {
        title: "Web Developer Intern",
        company: "Asceoft",
        period: { start: { month: 3, year: 2024 }, end: { month: 5, year: 2024 } },
        description: [
            "Built responsive, high-performance web interfaces that improved load speeds and UI consistency across multiple projects.",
            "Contributed to team repositories through issue resolution, code reviews, and collaborative pull requests.",
            "Supported deployment, testing, and release activities while applying Agile and SDLC practices in fast-paced sprints.",
            "Strengthened team productivity by learning modern development workflows, version control, and collaborative development practices."
        ]
    },
    // DITO FOR EXPERIENCES
]

const totalExperienceMonths = calculateTotalExperienceMonths(workExperiences.map((w) => w.period))
const totalExperienceYearsLabel = formatExperienceYears(totalExperienceMonths)

export const experienceQnA = [
    {
        question: "Relevant skills and years of experience",
        answer: `${totalExperienceYearsLabel} of professional experience building web and full-stack applications. Strongest in React, Next.js, TypeScript, Tailwind CSS, Laravel, AWS, and PostgreSQL.`
    }
]

export const interests = [
    {
        title: "Web Development",
        description: "Passionate about creating modern web applications using Next.js, React, and other cutting-edge technologies. Love exploring new frameworks and tools that enhance user experience."
    },
    {
        title: "Artificial Intelligence",
        description: "Fascinated by AI's potential in software development, particularly in code generation, automation, and enhancing developer productivity."
    },
    {
        title: "Mobile Development",
        description: "Enjoy building cross-platform mobile applications using Flutter and React Native. Interested in creating seamless mobile experiences."
    },
    {
        title: "System Architecture",
        description: "Love designing scalable and maintainable software architectures. Interested in microservices, cloud computing, and distributed systems."
    },
    {
        title: "Open Source",
        description: "Passionate about contributing to open-source projects and collaborating with the developer community to create better software."
    },
    {
        title: "DevOps",
        description: "Interested in CI/CD pipelines, containerization, and automating development workflows to improve team productivity."
    }
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
        title: "LMS Educate",
        description: "A Moodle-inspired learning management system (LMS) for organizing courses, lessons, and learning progress.",
        tech: ["NextJS", "TailwindCSS", "Vercel"],
        image: DEFAULT_IMAGE_URL,
        liveUrl: "https://lms-educate.vercel.app/",
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
    // PROJECTS DITO
] 