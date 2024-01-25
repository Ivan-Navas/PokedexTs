import { useEffect, useContext } from "react";
import Context from "../../Context/Context";
import "../../styles/pokemonList.css";
import {
  PokemonList,
  PokemonListType,
  PokemonInfoType,
  Pokemon,
} from "../../interfaces/interfaces";

function ScreenList() {
  const { setPokemonInfo } = useContext(
    Context
  ) as PokemonInfoType;
  const { setListPokemon, listPokemon } = useContext(
    Context
  ) as PokemonListType;

  const getPokemonList = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
    
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(async (data: PokemonList) => {
        let poke: Array<Pokemon> = data.results;
        for (let i = 0; i < data.results.length; i++) {
          await fetch(poke[i].url)
            .then((res) => {
              return res.json();
            })
            .then((pokem) => {
              poke[i].id = pokem.id;
              setListPokemon(poke);
            });
        }
      });
  };

  const pokemonF = async (url: string) => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((pokemon) => {
        setPokemonInfo(pokemon);
      });
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      {listPokemon.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <button
              id="pokemonList__button"
              onClick={() => {
                pokemonF(pokemon.url);
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="pokemonList__img"
              />
            </button>
            <h2 className="pokemonList__name">
              {" "}
              #{pokemon.id} {pokemon.name}{" "}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default ScreenList;
