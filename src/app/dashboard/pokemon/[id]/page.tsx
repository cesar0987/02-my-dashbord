
interface Props {
  params: {
    id: string;
  };
}

const getPokemon = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  console.log(res);
  return res.json();
}

export default async function PokemonPage({params}: Props) {
  const pokemon = await getPokemon(params.id);
  console.log(pokemon);
  
  return (
    <div>
      <h1>Pokemon ID: {params.id}</h1>
      <p>Pokemon Name: {pokemon.name}</p> {/* Displaying the Pokemon name */}
    </div>
  );
}