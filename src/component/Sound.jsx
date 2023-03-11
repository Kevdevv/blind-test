import React, { useEffect, useState } from 'react'
import PopUp from './PopUp';

const Sound = (props) => {

  const [valeurInput, setValeurInput] = useState('');
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (modal) {
      setTimeout(function () {
        setModal(!modal);
      }, 1000);
    }
  }, [modal]);


  function handleChange(event) {
      setValeurInput(event.target.value)

  }

  function handleSubmit() {
      if (valeurInput === props.valeur) {
          setModal(true)
          props.fonction()
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