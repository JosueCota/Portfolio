import.meta.env.VITE_IMG_PATH


//Project data, easier than implementing json with fetch, avoids possible errors from rejected promises
export const projects = [
    {
        projectName: "Portfolio",
        projectDesc: "Showcasing the progress I've made throughout my academic career using ReactJS along with TailwindCSS.",
        projectImg: `${import.meta.env.VITE_IMG_PATH}react.svg`,
        projectLink: "https://github.com/JosueCota/Portfolio",
        skills:
            [
                "ReactJS","Tailwind", "Framer Motion", "Figma"
            ],
        date: "Spring 2024"
    },
    {
        projectName: "Speedsters",
        "projectDesc": "A 2D platformer made with a group of artists and programmers for the Video Game Development Club at CSUF.",
        projectImg: `${import.meta.env.VITE_IMG_PATH}speedsters.png`,
        projectLink: "https://wafflefish.itch.io/speedsters",
        skills:
            [
                "C#", "Unity", "Github", "Agile", "Scrum"
            ],
        date: "Fall 2023"
    },
    {
        projectName: "Weather App",
        projectDesc: "An android weather app made with two others using Android Studio. Designed UI/UX with figma and implemented API and weather game. ",
        projectImg: `${import.meta.env.VITE_IMG_PATH}weather-app.png`,
        projectLink: "https://github.com/JhoshuaAmpo/Speedsters",
        skills:
            [
                "Kotlin", "XML", "Android Studio", "Gradle", "Figma", "Retrofit Library"
            ],
        date: "Spring 2023"
}];