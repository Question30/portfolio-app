import { useEffect, useState } from "react";
import PokeBtn from "./PokeBtn";

export default function Pokemon({id}) {


    const [pokeData, setPokeData] = useState([]);
    const [pokeUrl, setPokeUrl] = useState(null);
    const [pokeList, setPokeList] = useState([]);
    const [isVisible, setIsVisible] = useState(false)

    const getPokemon = async (id) => {
        try{

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

            const data = await res.json();
            const url = await data.sprites.front_default;
            setPokeData(data);
            setPokeUrl(url);    
            setIsVisible(false);       

        }catch (e){
            console.error(e);
        }    

    }

    const getMorePokemon = async (id) => {
        try {
            
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=4&offset=${id-1}`);

            const data = await res.json();
            console.log(data.results);
            setPokeList(data.results);

        } catch (error) {
            console.error(error)
        }
    }



    useEffect(() => {
        getPokemon(id);
        getMorePokemon(id);
    }, [id]);

    const darkPokemon = () => {
        return <img className="brightness-0 scale-150 h-full" src={pokeUrl} alt={pokeData.name}/>
    }

    const lightPokemon = () => {
        return(<img className="brightness-100 scale-150 h-full" src={pokeUrl} alt={pokeData.name}/> )
    }


   const handleClick = (e) => {
    setIsVisible(true);
    }

    console.log(isVisible);

    const tempList = [...pokeList];
    tempList.sort(() => 0.5 - Math.random());

    return (
        <div>
        <div className="absolute top-[20%] left-[15%] h-1/2">
        {
             !isVisible ? darkPokemon() : lightPokemon()
        }  
        </div>
          {

           tempList.map((pokemon, index) =>(
                <PokeBtn name={pokemon.name} 
                key={index} handleClick={handleClick}  answer={pokeData.name} isVisible={isVisible}/>
            ))
          }
        </div>
    )
}