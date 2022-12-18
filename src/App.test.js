import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import { PokemonList } from './components/PokemonList';
import {rest} from "msw";
import {setupServer} from "msw/node";




const pokeListResponse = rest.get("https://pokeapi.co/api/v2/pokemon/",(req,res,ctx)=>{
  return res(ctx.json([
    {
      name:"BULBASAUR",
    },
  ]))
});




const handlers = [pokeListResponse]

const server = setupServer(...handlers);


beforeAll(()=>server.listen());
afterEach(()=>server.resetHandlers());
afterAll(()=>server.close());

test('should render the list of pokemon after get api call',async()=>{
  render(<PokemonList/>);
  const pokemonListItem = await screen.findByTestId("pokemonList");
  expect(pokemonListItem).toBeInTheDocument();
});

test('new',async()=>{
  render(<PokemonList/>)
  const pokeName = await screen.findByTestId("myPokemonListItem");
  fireEvent.click(pokeName);
  const pokeDetail = await screen.findByAltText("pokemon image");
  expect(pokeDetail).toBeInTheDocument();
})