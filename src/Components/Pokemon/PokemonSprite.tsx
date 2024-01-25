import { useContext } from "react";
import "../../styles/sprite.css";
import Context from "../../Context/Context";
import { PokemonInfoType } from "../../interfaces/interfaces";

function PokemonSprite() {
  const { pokemonInfo } = useContext(Context) as PokemonInfoType;

  return (
    <div className="sprite">
      <div className="buttons">
        <button className="buttons__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703363698/pokedex/iconos/shiny_quywav.png"
            alt="icon__shiny"
            className="buttons__icon"
          />
        </button>
        <button className="buttons__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703363698/pokedex/iconos/male_b2o3te.png"
            alt="icon__macho"
            className="buttons__icon"
          />
        </button>
        <button className="buttons__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703363698/pokedex/iconos/famale_bimvyq.png"
            alt="icon__hembra"
            className="buttons__icon"
          />
        </button>
        <button className="buttons__button buttons--border">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703363697/pokedex/iconos/rotate_sbbh4y.png"
            alt="icon__girar"
            className="buttons__icon"
          />
        </button>
      </div>
      <div className="sprite__pokemon">
        <div className="sprite__type">
          
          <h2 className="sprite__name"> {pokemonInfo.name} </h2>
        </div>
        <img src={pokemonInfo.sprites.other.showdown.front_default} alt="pokemon__imagen" className="sprite__gif" />
      </div>
    </div>
  );
}

export default PokemonSprite;
