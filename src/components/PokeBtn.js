
export default function PokeBtn({name, handleClick, answer, isVisible}) {
    
    const renderButtons = () =>{
        if(isVisible === true){
            if(answer === name){
                return(<button onClick={handleClick} className="border rounded bg-greenish-blue text-primary w-1/2">{name}</button>)
            }else{

               return( <button onClick={handleClick} className="border rounded bg-primary w-1/2">{name}</button>)
            }
        }
        return( <button onClick={handleClick} className="border rounded bg-primary w-1/2">{name}</button>)

    }
    
    
    return(
        <>
            {renderButtons()}
        </>
    )
}