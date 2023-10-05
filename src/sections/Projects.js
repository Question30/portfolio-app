import Skill from "../components/Skill";

export default function Projects() {
  return (
    <section id="projects" className="bg-dark-blueish/75 py-4  my-0">
      <h2 className="text-center text-5xl my-4 text-primary">Projects</h2>
      <p className="text-center text-2xl mb-6 text-primary">Projects I have worked on</p>
      <div className="flex flex-row my-8 justify-evenly flex-wrap ">
        <div className="container flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-2xl font-bold py-4 underline">Fitness Tracker v1</h3>
            <p  className="text-clip py-4 px-2">Fitness tracking featring signup/login, creating workout templates, workout logging and a workout history. It was built using the following technologies: </p>
            <div className="flex flex-wrap max-w-md justify-center ml-6">
              <Skill text="React"/>
              <Skill text= "TailwindCss" />
              <Skill text= "Node"/>
              <Skill text="Express" />
              <Skill text="MongoDB" />
              <Skill text="Mongoose" />
              <Skill text="Bcrypt" />
            </div>
            <a href="https://github.com/Question30/fitness-app" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary mb-4 w-3/4 mx-auto">Github Repo</a>
        </div>
        <div>
        <div className="max-w-lg border-4 border-primary"><img src="https://i.imgur.com/aOpu7z5.png" alt="Screenshot of fitness tracker app" />
        </div>
        <div className="border border-primary bg-greenish-blue rounded text-center  mx-auto w-3/4 mt-2">
        <a href="https://fitness-tracker-87za.onrender.com/" target="_blank" rel="noreferrer" className="text-primary">Live Site</a></div>

        </div>
      </div>
      <div className="flex flex-row my-8 justify-evenly flex-wrap">
      <div className="container-sm flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-2xl font-bold py-4 underline">Tic Tac Toe</h3>
            <p  className="text-clip py-4 px-2">Module 1 project for Per Scholas. Created by manipulating the Dom. You can play against your friends or against the computer. Try it out at the live link below the screenshot. Technologies used: </p>
           <div className="flex flex-wrap max-w-md justify-center ml-6">
            <Skill text="HTML"/>
            <Skill text="CSS" />
            <Skill text="JavaScript" />
            <Skill text="Dom manipulation" />
           </div>
            <a href="https://github.com/Question30/Tic-Tac-Toe" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary mb-4 w-3/4 mx-auto">Github Repo</a>
        </div>
        <div>
        <div className="max-w-lg border-4 border-primary rounded">
          <img src="https://i.imgur.com/cEvCvpZ.png" alt="Screenshot of Tic Tac Toe game" />
        </div>
        <div className="border border-primary bg-greenish-blue rounded text-center  mx-auto w-3/4 mt-2">
        <a  className="text-primary" href="https://question30.github.io/Tic-Tac-Toe/">Live Site</a>
        </div>
        </div>
      </div>
      <div className="flex flex-row my-8 justify-evenly flex-wrap ">
      <div className="container-xs flex flex-col text-center max-w-md mb-4 bg-primary border rounded-md">
            <h3 className="text-2xl font-bold py-4 underline">React Movie Search</h3>
            <p className="text-cli px-2 py-4">Movie Search app, using OMBDApi to find movies, info such as title, year, img and description. Loads a random movie on first visit. Technologies used:</p>
            <div className="flex flex-wrap max-w-md justify-center ml-6">
              <Skill text="React" />
              <Skill text="OMBDAPI"/>
              <Skill text="Bootstrap"/>
            </div>
            <a href="https://github.com/Question30/react-movies" target="_blank" rel="noreferrer" className="border rounded bg-greenish-blue text-primary w-3/4 mx-auto my-4">Github Repo</a>
        </div>
        <div>
        <div className=" max-w-lg border-4 border-primary rounded">
        <img src="https://i.imgur.com/ungbQ3F.png" alt="screen shot of React movie app" />
        </div>
        <div className="border border-primary bg-greenish-blue rounded text-center  mx-auto w-3/4 mt-2">
            <a href="https://main--wondrous-lamington-c29984.netlify.app/" target="_blank" rel="noreferrer" className="text-primary">Live Site</a>
        </div>
        </div>
      </div>
    </section>
  );
}
