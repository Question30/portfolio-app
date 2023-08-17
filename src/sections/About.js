import Skill from "../components/Skill"
import pdf from "../documents/resume.pdf"

export default function About() {
    return (

        <section className="flex flex-col my-0 bg-dark-blueish text-primary pb-4" id="about">
            <div className="text-center font-bold">
            <h2 className="text-3xl mt-6">About Me</h2>
            <p className="text-lg mt-3">This section gives a brief description about myself and technical skills</p>
            </div>
            <div className="flex flex-row justify-evenly mt-8 flex-wrap">
            <div className="container-xs flex flex-col text-center max-w-xs mb-4 border border-primary rounded bg-primary text-dark-blueish">
                <h3 className="text-xl mb-3" >Get to know me!</h3>
                <p className="text-clip">Hello, I'm Alexander Gomez, a determined individual on the path to becoming a skilled full-stack web developer. With a strong background spanning 8 years in retail, customer service, and inventory management, I've honed my interpersonal skills and attention to detail. Beyond coding, I find my passions in diverse outlets: from challenging workouts that reflect my drive, to expressing my creativity through anime-inspired artwork. When I'm not immersed in coding or honing my artistic talents, you'll often find me engrossed in the virtual worlds of video games. My journey is a fusion of technology, creativity, and dedication.</p>
            </div>
            <div>
                <h3 className="text-xl text-center mb-8 underline">Technical Skills:</h3>
                <div className="flex flex-wrap max-w-xs justify-center">
                    <Skill text="HTML" />
                    <Skill text="CSS" />
                    <Skill text="JavaScript" />
                    <Skill text="React.js" />
                    <Skill text="Redux.js" />
                    <Skill text="Git" />
                    <Skill text="Node.js" />
                    <Skill text="Express.js" />
                    <Skill text="MongoDB" />
                </div>
                <div className="border text-center bg-light-blueish text-primary mt-6">
                <a href={pdf} target="_blank" rel="noreferrer">Link to Resume</a>
                </div>
            </div>
            </div>
        </section>

    )
}