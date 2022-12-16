import React from 'react'

export const DisplayPokemon = ({poke}) => {
  return (
    
    <>
    { poke != '' ? 
 
    <div className='detail '>
        
       
        <img src={poke.sprites.other.home.front_default}  />
        <h1>{poke.name}</h1> 
        {/* <p> {poke.stats.stat.name}  </p> */}
        {/* <h3> {poke.moves.move.name} </h3> */}
        <h3> weight : {poke.weight}</h3>
        <h3> height : {poke.height}</h3>
        <h3> abilities: {poke.abilities[0].ability.name} </h3>
    </div> 
    
    : '' } 
    
    </>

    


  )
}
