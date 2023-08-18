import Pokemon from "../components/Pokemon";
import { useState } from "react";

export default function PokemonSection() {
    
    const[id, setId] = useState(Math.floor(Math.random() * (151 - 1) + 1));
    
    
        const newId = () => {
            let rand = Math.floor(Math.random() * (151 - 1) + 1);
            setId(rand);
        }
    

    return (
        <section className=" h-full bg-grayish/75 py-6" id="pokemon">
            <h2 className="text-center font-bold text-primary text-5xl mb-4">Who's that Pokemon</h2>
            <div className="relative border container-lg  w-3/4 mx-auto " id="container">
                
                <img src='https://images3.alphacoders.com/677/677583.png' alt='Whos that pokemon background'/>

                <Pokemon id={id}/> 

            </div>
                <button className="bg-primary border rounded  ml-[25%] w-[50%]" onClick={() => {newId()}}>Play Again</button>      
        </section>
    )
}