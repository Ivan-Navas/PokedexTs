export interface PokemonList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    name: string;
    url: string;
    id?: number;
  }[];
}
export interface Pokemon {
  url: string;
  name: string;
  id? : number
}


interface Error {
  error: boolean
}

export interface PokemonInfo {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
      showdown :{
        back_default: string;
        back_female?: string;
        front_default: string;
        front_female?: string;
        back_shiny: string;
        back_shiny_female?: string;
        front_shiny: string;
        front_shiny_female?: string;
      }
    };
  };
  types: {
    type: {
      name: string;
      url: string;
    }[];
  };
  moves: {
    move: {
      name: string;
      url: string;
    }[];
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  };
}

export type PokemonContextType = {
  pokemon: Pokemon;
  setPokemon: (value: Pokemon) => void;
};

export type PokemonListType = {
  listPokemon: Array<Pokemon>;
  setListPokemon: (value: Array<Pokemon>) => void;
};

export type PokemonInfoType = {
  pokemonInfo: PokemonInfo;
  setPokemonInfo: (value: PokemonInfo) => void;
};



export type ErrorType = {
  error: Error;
  setError: (value: Error) => void;
}