import React, { useState } from 'react'
import Sound from '../sound/test.mp3'

const Landing = () => {

  const [valeurInput, setValeurInput] = useState('');

  function handleChange(event) {
    setValeurInput(event.target.value)

  }

  function handleSubmit(event) {
    event.preventDefault();
    if (valeurInput === "chad") {
      alert("Win")
    }
  }

  console.log(valeurInput)


  return (
    <>
    <figure>
    <figcaption>Listen to the Chad:</figcaption>
    <audio
        controls
        autoplay
        src={Sound}>
            <a href="/#">
                Download audio
            </a>
    </audio>
</figure>

    <form>
      <label>
        Entrez une valeur :
        <input type="text" value={valeurInput} onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Envoyer</button>
    </form>
    </>
  )
}

export default Landing