import Skill from "../components/Skill";

export default function Projects() {
  return (
    <section id="projects" className="bg-grayish py-4 my-0">
      <h2 className="text-center text-5xl my-4 text-primary">Projects</h2>
      <p className="text-center text-2xl mb-6 text-primary">Projects I have worked on</p>
      <div className="flex flex-row my-8 justify-evenly flex-wrap ">
        <div className="container flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-xl font-bold py-4 px-">Portfolio v1</h3>
            <p  className="text-clip py-4 px-3">Portfolio website built to showcase my work and experience. It was built using the following technologies: </p>
            <div className="flex flex-wrap max-w-md justify-center">
              <Skill text="React"/>
              <Skill text= "TailwindCss" />
              <Skill text= "React Router Dom"/>
              <Skill text="Restful API" />
            </div>
            <a href="https://github.com/Question30/portfolio-app" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary mb-4">Github Repo</a>
        </div>
        <div className="max-w-lg"><img src="https://i.imgur.com/Xmsowdj.png" alt="Screenshot of portfolio page" />
        <span>Live Site</span></div>
      </div>
      <div className="flex flex-row my-8 justify-evenly flex-wrap">
      <div className="container-sm flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-xl font-bold py-4">Tic Tac Toe</h3>
            <p  className="text-clip">Module 1 project for Per Scholas. Created by manipulating the Dom. You can play against your friends or against the computer. Try it out at the live link below the screenshot. Technologies used: </p>
           <div className="flex flex-wrap max-w-md justify-center">
            <Skill text="HTML"/>
            <Skill text="CSS" />
            <Skill text="JavaScript" />
            <Skill text="Dom manipulation" />
           </div>
            <a href="https://github.com/Question30/Tic-Tac-Toe" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary mb-4">Github Repo</a>
        </div>
        <div className="max-w-lg">
          <img src="https://i.imgur.com/cEvCvpZ.png" alt="Screenshot of Tic Tac Toe game" />
        <a href="https://question30.github.io/Tic-Tac-Toe/">Live Site</a>
        </div>
      </div>
      <div className="flex flex-row my-8 justify-evenly flex-wrap ">
      <div className="container-xs flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-xl font-bold py-4">React Movie Search</h3>
            <p className="text-clip">Movie Search app, using OMBDApi to find mopvies, info such as title, year, img and description.</p>
            <div className="flex flex-wrap max-w-md justify-center">
              <Skill text="React" />
              <Skill text="OMBDAPI"/>
              <Skill text="Bootstrap"/>
            </div>
            <a href="https://github.com/Question30/react-movies" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary mt-4">Github Repo</a>
        </div>
        <div className="max-w-lg">
        <img src="https://i.imgur.com/ungbQ3F.png" alt="screen shot of React movie app" />
            <button>Live Site</button>
        </div>
      </div>
    </section>
  );
}