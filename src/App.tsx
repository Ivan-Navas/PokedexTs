import "./App.css";
import Hinge from "./Components/Hinge";
import PokemonInfo from "./Components/Pokemon/PokemonInfo";
import Screen from "./Components/Screen/Screen";
import { PokemonContextProvider } from "./Context/Context";

function App() {
  return (
    <PokemonContextProvider>
      <div className="app">
        <Screen />
        <Hinge />
        <PokemonInfo />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
