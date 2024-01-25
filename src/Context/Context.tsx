import { createContext, ReactNode, useState } from "react";
import { Pokemon, PokemonInfo } from "../interfaces/interfaces";

const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const PokemonContextProvider = ({ children }: Props) => {
  const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([]);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [error, setError] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        pokemon,
        setPokemon,
        listPokemon,
        setListPokemon,
        pokemonInfo,
        setPokemonInfo,
        error,
        setError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
