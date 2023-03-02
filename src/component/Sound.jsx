import React, { useState } from 'react'

const Sound = (props) => {

  const [valeurInput, setValeurInput] = useState('');


  function handleChange(event) {
      setValeurInput(event.target.value)

  }

  function handleSubmit() {
      if (valeurInput === props.valeur) {
          alert("Bonne réponse")
      } else {
        alert('Dans le cul')
      }
    }

    
  return (
    <>

    <form>
      <label>
        Entrez une valeur :
        <input type="text" value={valeurInput} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Envoyer</button>
   </form>

    <audio
        controls
        autoplay
        src={props.content}>
            <a href="/#">
                Download audio
            </a>
    </audio>
    </>
  )
}

export default Sound