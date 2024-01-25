import "../../styles/description.css";

function Description() {
  return (
    <div className="description">
      <div className="description__versions">
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386727/pokedex/juegos/6_vc9zku.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386729/pokedex/juegos/9_b8amnj.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386757/pokedex/juegos/3_hejwt5.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386781/pokedex/juegos/pikachu_wsasls.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386805/pokedex/juegos/lugia_gsbtbx.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386790/pokedex/juegos/ho-ho_jueeyn.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button ">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703387058/pokedex/juegos/suicune_b6yb8j.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386825/pokedex/juegos/Groudon_ziswfo.png"
            alt=""
            className="versions__icon"
          />
        </button>
        <button className="description__button description--border">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1703386828/pokedex/juegos/kyogre_xln6zu.png"
            alt=""
            className="versions__icon"
          />
        </button>
      </div>
      <div className="description__pContainer">
        <p className="description__p">
          CHARIZARD se dedica a volar por los cielos en busca de oponentes
          fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa.
          No obstante, si su rival es más débil que él, no usará este ataque.
        </p>
      </div>
    </div>
  );
}

export default Description;
