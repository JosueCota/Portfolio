import { delay, motion, transform } from "framer-motion"

const fadeInVarient = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + 0.05 * index
        }
    })
}

export default function Skill({skills, title}) {

    

    return (
        <div className="my-4 border border-2 rounded-3xl p-5 font-semibold underline">
            <h3 className="mx-auto">{title}:</h3>
            <ul className="flex flex-wrap justify-evenly">
                {skills.map((skill, index) => (
                    <motion.li key={skill}
                        variants={fadeInVarient}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={index}
                    >
                        <img className="aspect-square w-8 hover:scale-150 m-3" src={`../../src/imgs/icons/skills/${skill}.svg`} title={skill.toUpperCase()}/>
                    </motion.li> 
                ))}
            </ul>
        </div>
    )
}