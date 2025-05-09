import { PokemonGrid, SimplePokemon } from "@/pokemons";
import { PokemonReponse } from "@/pokemons/interfaces/pokemons-response";

const getPokemons = async (limit= 20, offset = 0):Promise<SimplePokemon[]> => {
  const data:PokemonReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => res.json())

    const pokemons =data.results.map(pokemon => ({ 
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`
    }))

    
    return pokemons;
};

export default async function PokemonsPage() {

  const pokemons = await getPokemons(100, 0)
  return (
    <div className="flex flex-col items-center justify-center   border-2">
      <span>Listado Pokemon <small>statico</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
}