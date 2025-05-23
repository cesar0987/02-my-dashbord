import Link from 'next/link';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { IoHeartOutline } from 'react-icons/io5';

interface PokemonCardProps {
    pokemon: SimplePokemon;
}


export const PokemonCard = ({pokemon}:PokemonCardProps) => {
    const {id, name} = pokemon;
    return (
        <div className="flex items-center justify-center border-2">
            <div className="mx-auto right-0 mt-2 w-60 ">
                <div className="flex flex-col  bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col  items-center justify-center text-center p-6 bg-gray-800 border-b">
                        <Image className='rounded-full w-15 h-15' 
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                        alt={name} 
                        width={100} 
                        height={100}
                        priority={false} 
                        />
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
                        <p className="text-sm text-gray-100">John@Doe.com</p>
                        <div className="mt-5">
                            <Link href={`pokemon/${id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:cursor-pointer">
                                Mas Informacion
                            </Link>
                        </div>
                    </div>

                    <div className="border-b">
                        <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                            <div className="text-red-600">
                               <IoHeartOutline className="w-8 h-8" />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">No es Favorito</p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </Link>

                        
                    </div>

                
                </div>
            </div>
        </div>
    );
};
