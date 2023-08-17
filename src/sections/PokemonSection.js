import Pokemon from "../components/Pokemon";
import { useState } from "react";

export default function PokemonSection() {

    const[id, setId] = useState(1);

    const [answer , setAnswer] = useState("");
    

    const newId = () => {
        let rand = Math.floor(Math.random() * (151 - 1) + 1);
        setId(rand);
    }

    return (
        <section className="my-6 h-full" id="pokemon">
            <h2 className="text-center font-bold text-5xl">Who's that Pokemon</h2>
            <div className="relative border container-lg  w-3/4 mx-auto " id="container">
                
                <img src='https://images3.alphacoders.com/677/677583.png' />

                <Pokemon answer={answer} id={id}/>
                <input className=" border rounded absolute w-1/4 top-[85%] left-[15%]" type="text" value={answer} onChange={(e)=> setAnswer(e.target.value)}/>    

            </div>
                <button className="bg-primary border rounded  ml-[25%] w-[50%]" onClick={() => {newId(); setAnswer("")}}>Reset</button>      
        </section>
    )
}