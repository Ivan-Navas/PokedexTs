import Description from "./Description";
import OtherOption from "./OtherOption";
import PokemonForm from "./PokemonForm";
import PokemonSprite from "./PokemonSprite";
import Stats from "./Stats";
import { PokemonInfoType } from "../../interfaces/interfaces";
import { useContext } from "react";
import "../../styles/pokemonInfo.css";
import Context from "../../Context/Context";

function PokemonInfo() { const {pokemonInfo } = useContext(Context) as PokemonInfoType;  
  
  return (
    <section className="pokemonInfo">
      <div className="pokemonInfo__container">
        <PokemonForm />

        { pokemonInfo === undefined ? (
          <div className="pokemonInfo__noneC">
            <img
              className="pokemonInfo__none"
              src="https://res.cloudinary.com/ivannavas/image/upload/v1703363701/pokedex/iconos/pokeball_sm3qyj.png"
              alt="pokeBall"
            />
          </div>
        ) : (
          <>
            <div className="sprite-stats">
              <PokemonSprite />
              <Stats />
            </div>
            <Description />
            <OtherOption />
          </>
        )}
      </div>
    </section>
  );
}

export default PokemonInfo;
