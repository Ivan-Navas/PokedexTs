import '../../styles/form.css'

function PokemonForm() {
  return (
    <form className='form'>
      <input className='form__input' type="text" placeholder='Nombre o numero del Pokemon'/>
    </form>
  )
}

export default PokemonForm