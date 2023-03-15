import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';

const Sound = (props) => {

  const [valeurInput, setValeurInput] = useState('');
  const [modal, setModal] = useState(false)




  function handleChange(event) {
      setValeurInput(event.target.value)

  }

  function handleSubmit() {
      if (valeurInput === props.valeur) {
          setModal(true)
          props.update()
          props.pause()
          setTimeout(function () {
            setModal(false);
            props.defreez()
      }, 2000);
      } else {
        console.log('Dans le cul')
      }
    }

    
  return (
    <>

    <input type="text" value={valeurInput} onChange={handleChange} />
    <button onClick={handleSubmit}>Envoyer</button>

    <audio
        controls
        autoPlay
        src={props.content}>
            <a href="/#">
                Download audio
            </a>
    </audio>
      {modal && <PopUp />}
    </>
  )
}

export default Sound