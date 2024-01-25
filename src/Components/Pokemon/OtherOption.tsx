import "../../styles/option.css";

function OtherOption() {
  return (
    <div className="other">
      <div className="option">
        <button className="option__button">Movimientos</button>
        <button className="option__button">Habilidades</button>
        <button className="option__button">Rutas</button>
        <button className="option__button option--border">Juegos</button>
      </div>
      <div className="other__div">
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386567/pokedex/juegos/pokemon_rojo_gpz8vn.jpg" alt="" className="imageGames" />
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386494/pokedex/juegos/azul_ahqzsk.jpg" alt="" className="imageGames" />
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386479/pokedex/juegos/vede_original_ukpxxe.jpg" alt="" className="imageGames" />
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386482/pokedex/juegos/rojo_fuego_lp5n7x.jpg" alt="" className="imageGames" />
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386535/pokedex/juegos/verde_qhv6u9.jpg" alt="" className="imageGames" />
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703386462/pokedex/juegos/plata_tlxuxk.jpg" alt="" className="imageGames" />
        
      </div>
    </div>
  );
}

export default OtherOption;
