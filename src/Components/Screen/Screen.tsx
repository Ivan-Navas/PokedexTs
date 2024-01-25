import "../../styles/screen.css";
import Header from "./Header";
import Error from "../Error/Error";
import { useContext, useState } from "react";
import ScreenList from "./ScreenList";
import Context from "../../Context/Context";
import { ErrorType } from "../../interfaces/interfaces";

function Screen() {
  
  const {error} = useContext(Context) as ErrorType

  
  return (
    <section className="listPokemon">
      <Header />
      <div className="screen">
        <section className="screen__frame">
          <div className="light">
            <div className="light__circle"></div>
            <div className="light__circle"></div>
          </div>
          {error ? <Error /> : <div className="screen__list"><ScreenList /></div>}
          <div className="screen__circleBottom">
            <div className="circleBottom__circle"></div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Screen;
