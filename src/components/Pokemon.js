import { useEffect, useState } from "react";

export default function Pokemon({answer, id}) {


    const [pokeData, setPokeData] = useState([]);
    const [pokeUrl, setPokeUrl] = useState(null);

    const getPokemon = async (id) => {
        try{

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

            const data = await res.json();
            const url = await data.sprites.front_default;
            setPokeData(data);
            setPokeUrl(url);           

        }catch (e){
            console.error(e);
        }    

    }



    useEffect(() => {
        getPokemon(id);
    }, [id]);

    const darkPokemon = () => {
        return <img className="brightness-0 scale-150 h-full" src={pokeUrl} alt={pokeData.name}/>
    }

    const lightPokemon = () => {
        let name = pokeData.name.toUpperCase();
        return(
        <>
        <h2 className="text-center font-bold text-3xl mb-2">{name}</h2>
        <img className="brightness-100 scale-150 h-full" src={pokeUrl} alt={pokeData.name}/>
        </>
        
        )
    }

    console.log(pokeData.name);
    const displayPokemon = () => {
        if(answer.toLowerCase() === pokeData.name){
            return true;
        }else{
            return false;
        }
    }
    return (
    <div className="absolute top-[20%] left-[15%] h-1/2">
        {/* <h2>{pokeData.name}</h2> */}
        {
            !displayPokemon() ? darkPokemon() : lightPokemon()
        }  
    </div>
    )
}