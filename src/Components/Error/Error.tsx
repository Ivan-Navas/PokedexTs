import '../../styles/error.css'

function Error() {
  return (
    <div className='error'>
      <h2 className='error__tittle'>No se ha encontrado al pokemon</h2>
      <div className='error__container'>
        <h2 className='error__h2'>?</h2>
        <img src="https://res.cloudinary.com/ivannavas/image/upload/v1703363698/pokedex/iconos/slowbro_g8fl69.png" alt="error_pokemon"  className='error__pokemon'/>
      </div>
    </div>
  )
}

export default Error