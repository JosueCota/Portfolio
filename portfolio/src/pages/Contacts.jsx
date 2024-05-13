import style from "./contacts.module.css"

export default function Contacts() {
    return (
        <>
            <div className={style.contactsContainer} >
            <p className={style.p}>
                Hi! Thank you for checking out my Porfolio. If you would like to connect, reach out to me through any of the following!
            </p>
            <ul className={style.list}>
                <li><a href="https://github.com/JosueCota" target="_blank"><img src="./src/imgs/icons/contacts/github.svg"/>Github</a></li>
                <li><a href="https://www.linkedin.com/in/josue-a-cota/" target="_blank"><img src="./src/imgs/icons/contacts/linkedin.svg"/>LinkedIn</a></li>
                <li><a href="mailto:xjaramis@gmail.com" target="_blank"><img src="./src/imgs/icons/contacts/email.svg"/>Email</a></li>
                <li><a href="https://docs.google.com/document/d/e/2PACX-1vRcNHTs2oZXLaLGfOXrOlxdriuuj97gs9n5U6rhv4U9RTzxayuiPXW5YMCjjXUsKHuHjkvzh_MwBFAg/pub" target="_blank"><img src="./src/imgs/icons/contacts/resume.svg"/>Resume</a></li>
            </ul>
            </div>
        </>
    )
}