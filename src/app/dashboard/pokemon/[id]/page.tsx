import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

// Generar los paths estáticos para los primeros 151 Pokémon
export async function generateStaticParams() {
  const static151Params = Array.from({ length: 151 }, (_, i) => `${i + 1}`);
  return static151Params.map((id) => ({ id }));
}

// Metadata para SEO
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);
  if (!id || !name) {
    notFound();
  }
  return {
    title: `#${id}: ${name}`,
    description: `Página del Pokémon ${name}`,
  };
}

// Obtener datos del Pokémon
const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache",
    });
    const pokemon = await res.json();
    return pokemon;
  } catch {
    notFound();
  }
};

// Página del Pokémon
export default async function PokemonPage({
  params,
}: { params: { id: string } }) {
  const pokemon = await getPokemon(params.id);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white shadow-lg p-3">
        <h1 className="text-xl font-bold capitalize">
          #{pokemon.id} {pokemon.name}
        </h1>

        <Image
          src={pokemon.sprites.other?.dream_world.front_default ?? ""}
          width={150}
          height={150}
          alt={`Imagen del Pokémon ${pokemon.name}`}
          className="mb-5"
        />

        <div className="flex flex-wrap">
          {pokemon.moves.map((move) => (
            <p key={move.move.name} className="mr-2 capitalize">
              {move.move.name}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          <div className="bg-white rounded-2xl shadow-md p-4">
            <p className="text-sm text-gray-600">Types</p>
            <div className="flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4">
            <p className="text-sm text-gray-600">Peso</p>
            <p className="text-base font-medium">{pokemon.weight}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 col-span-2">
            <p className="text-sm text-gray-600">Sprites</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt="front"
              />
              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt="back"
              />
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt="shiny front"
              />
              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt="shiny back"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
