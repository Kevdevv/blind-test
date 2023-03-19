import React, { useState } from 'react'
import PopUp from './PopUp';
import '../styles/sound.scss'
import Happy from '../images/happy.jpg'

const Sound = (props) => {

  const [valeurInput, setValeurInput] = useState('');
  const [modal, setModal] = useState(false)


  function handleChange(event) {
      setValeurInput(event.target.value)

  }

  function handleSubmit() {
      if (valeurInput === props.valeur) {
          setModal(true)
          setValeurInput('')
          props.update()
          props.pause()
          setTimeout( () => {
            setModal(false);
            props.defreez()
      }, 2000);
      } else {
        console.log('Dans le cul')
        setValeurInput('')
      }
    }

    
  return (
    <>
  <div className='input_box'>
    <input type="text" value={valeurInput} onChange={handleChange} />
    <button className='answer' onClick={handleSubmit}>Répondre</button>
  </div>  

    <audio className='hidden'
        controls
        autoPlay
        src={props.content}>
            <a href="/#">
                Download audio
            </a>
    </audio>
      {modal && <PopUp text='Bonne réponse !' class='happy' img={Happy} />}
    </>
  )
}

export default Sound