import.meta.env.VITE_IMG_PATH


//Project data, easier than implementing json with fetch, avoids possible errors from rejected promises
export const projects = [
    {
        projectName: "Weather App",
        projectDesc: "An android weather app made with two others using Android Studio. Designed UI/UX with figma and implemented API and weather game. ",
        projectImg: `./weather-app.png`,
        projectLink: "https://github.com/JhoshuaAmpo/Speedsters",
        skills:
            [
                "Kotlin", "XML", "Android Studio", "Gradle", "Figma", "Retrofit Library"
            ],
        date: "Spring 2023"
    },
    {
        projectName: "Speedsters",
        "projectDesc": "A 2D platformer made with a group of artists and programmers for the Video Game Development Club at CSUF.",
        projectImg: `./speedsters.png`,
        projectLink: "https://wafflefish.itch.io/speedsters",
        skills:
        [
            "C#", "Unity", "Github", "Agile", "Scrum"
        ],
        date: "Fall 2023"
    },
    {
        projectName: "Portfolio",
        projectDesc: "Showcasing the progress I've made throughout my academic career using ReactJS along with TailwindCSS.",
        projectImg: `./react.svg`,
        projectLink: "https://github.com/JosueCota/Portfolio",
        skills:
            [
                "ReactJS","Tailwind", "Framer Motion", "Figma"
            ],
        date: "Spring 2024"
    },
    {
        projectName: "reThread",
        "projectDesc": "A mobile app design project for a design-a-thon that aims to encourage healthier consumer behavior by offering second-hand fashion shopping.",
        projectImg: `./rethread.png`,
        projectLink: "https://www.figma.com/proto/DqyBZ4rVReTktwy6EIL0if/FullyBeyond-2024-Project?node-id=2-2&node-type=canvas&viewport=2050%2C3868%2C0.66&t=kx1QstNcpt3zYK4k-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42%3A5952&show-proto-sidebar=1",
        skills:
            [
                "Figma", "Miro", "Creative Design", "User Research"
            ],
        date: "Fall 2024"
    },
    {
        projectName: "UniRoomies",
        "projectDesc": "Web application made for university students to find roommates and rooms.",
        projectImg: `./uniroomies.png`,
        projectLink: "https://myuniroomies.com",
        skills:
            [
                "React", "Javascript", "Express", "MySQL", "AWS S3","Full Stack Development"
            ],
        date: "Fall 2024"
    },
];