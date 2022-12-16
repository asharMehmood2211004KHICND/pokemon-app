import React, { useState } from 'react'
import { useEffect } from 'react';
import { DisplayPokemon } from './DisplayPokemon';
export const PokemonList = () => {


const [pokeList, setpokeList] = useState([]);

const [renderedPokemon, setrenderedPokemon] = useState('')

const [poke, setpoke] = useState('')


// function handleRenderedPokemon (){
//     setrenderedPokemon('ok');
// }



async function renderPokeMon(event){

    await fetch(event.target.id).then(
        res=>{
            return res.json();
        }
    ).then(data=>{
        setpoke(data);
    });

    
}


useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon/").then(
        res=>{
            return res.json();
        }
    ).then(data=>{
        setpokeList(data.results);
    });

}, []);


  return (
    <>
    {/* // <div class  >
    //     PokemonList  sdf
    //     {console.log({pokeList})}
    // </div> */}
     
  <ul className='list'>
  {/* {console.log(posts)} */}
    {
    pokeList.map(
        pokemon => (
                    <li key={pokemon.url} id={pokemon.url} onClick={renderPokeMon}>
                    {pokemon.name}
                    </li>
                )
                )

    }
</ul>

<div>
    
    
     {/* { poke != '' ? <div><h1>{poke.name}</h1> <img src={poke.sprites.back_default}  /></div> : '' } 
    
     */}
    <DisplayPokemon poke={poke} ></DisplayPokemon>

</div>

</>
);
}
