import { createContext, useContext, useState } from 'react';
import { pokeInterface } from './interface';

// tells the component what its props should look like
interface Props {
  // This component only receives one prop -- an array of children
  children: JSX.Element | JSX.Element[]
};

// This context holds the data retrieved from the api -- not sure why i don't have to tell the code that is empty obj is of type pokeInterface
export const PokeContext = createContext<pokeInterface>({});
export const PokedexContext = createContext<pokeInterface[]>([]);

// This context holds the function needed to update the data from the api
// "pokemon" is the input variable for the setter. Remember to set the variable's type based on the state it is trying to replace
export const UpdatePokeContext = createContext((pokemon: pokeInterface) => { });
export const UpdatePokedexContext = createContext((pokedex: pokeInterface[]) => { });

// custom hooks
export const usePokeContext = () => useContext(PokeContext);
export const useUpdatePokeContext = () => useContext(UpdatePokeContext);
export const usePokedexContext = () => useContext(PokedexContext);
export const useUpdatePokedexContext = () => useContext(UpdatePokedexContext);

const PokeProvider = ({ children }: Props) => {

  const [pokemon, setPokemon] = useState<pokeInterface>({});
  const [pokedex, setPokedex] = useState<pokeInterface[]>([]);

  return (
    <PokedexContext.Provider value={pokedex}>
      <UpdatePokedexContext.Provider value={setPokedex}>
        <PokeContext.Provider value={pokemon}>
          <UpdatePokeContext.Provider value={setPokemon}>
            {children}{/* These children are all the child comps to be wrapped in these providers  */}
          </UpdatePokeContext.Provider>
        </PokeContext.Provider>
      </UpdatePokedexContext.Provider>
    </PokedexContext.Provider>
  );
}

export default PokeProvider;