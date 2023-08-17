
export default function Footer () {
    return(
        <div className="flex justify-end bg-greenish-blue text-primary text-xl">
            <div className="mr-auto ml-2"> Created by Alexander Gomez</div>
            <div className="mx-2">
            <i className="bi bi-github"></i>
            </div>
                <a href="https://github.com/Question30" target="_blank" rel="noreferrer">Github</a>
            <div  className="mx-3">
            <i className="bi bi-linkedin"></i>
            </div>
            <div className="mr-2">
                <a href="https://www.linkedin.com/in/alexandergomez15/" target="_blank" rel="noreferrer">Linkedin</a>
            </div>
        </div>
    )
}