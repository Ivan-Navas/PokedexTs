import { useContext, useEffect, useState } from "react";
import "../../styles/stats.css";
import Context from "../../Context/Context";
import { PokemonInfoType } from "../../interfaces/interfaces";
function Stats() {
  const { pokemonInfo } = useContext(Context) as PokemonInfoType;

  const colorBar = (value: number) => {
    if (value == 255) {
      return "#00F9FC";
    }
    if (value > 100 && value < 255) {
      return "#CCF515";
    }
    if (value == 100) {
      return "#F6F811";
    }
    if (value < 100 && value > 50) {
      return "#F78D05";
    }
    if (value < 50) {
      return "#FC2221";
    }
  };

  return (
    <div className="stats">
      <div className="stats__container">
        <h2 className="stats__name">Hp:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[0].base_stat} </h2>
        <div
          className="stats__bar stats--att"
          style={{
            width: pokemonInfo.stats[0].base_stat,
            background: colorBar(pokemonInfo.stats[0].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">Attack:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[1].base_stat} </h2>
        <div
          className="stats__bar stats--att"
          style={{
            width: pokemonInfo.stats[1].base_stat,
            background: colorBar(pokemonInfo.stats[1].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">Defense:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[2].base_stat} </h2>
        <div
          className="stats__bar stats--def"
          style={{
            width: pokemonInfo.stats[2].base_stat,
            background: colorBar(pokemonInfo.stats[2].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">SP. Atk:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[3].base_stat} </h2>
        <div
          className="stats__bar stats--spAtt"
          style={{
            width: pokemonInfo.stats[3].base_stat,
            background: colorBar(pokemonInfo.stats[3].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">SP. Def:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[4].base_stat} </h2>
        <div
          className="stats__bar stats--spDef"
          style={{
            width: pokemonInfo.stats[4].base_stat,
            background: colorBar(pokemonInfo.stats[4].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">Speed:</h2>
        <h2 className="stats__number"> {pokemonInfo.stats[5].base_stat} </h2>
        <div
          className="stats__bar stats--spe"
          style={{
            width: pokemonInfo.stats[5].base_stat,
            background: colorBar(pokemonInfo.stats[5].base_stat),
          }}
        ></div>
      </div>
      <div className="stats__container">
        <h2 className="stats__name">Total: </h2>
        <h2 className="stats__number">
          {" "}
          {pokemonInfo.stats[0].base_stat +
            pokemonInfo.stats[1].base_stat +
            pokemonInfo.stats[2].base_stat +
            pokemonInfo.stats[3].base_stat +
            pokemonInfo.stats[4].base_stat +
            pokemonInfo.stats[5].base_stat}{" "}
        </h2>
      </div>
    </div>
  );
}

export default Stats;
