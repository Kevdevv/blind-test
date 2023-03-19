import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/jauge.scss'
import Yakitate from '../sound/yakitate.mp3'
import Sound from '../component/Sound'
import Eyeshield from '../sound/eyeshield.mp3'
import '../styles/blind-test.scss'
import '../styles/jauge.scss'

const BlindTest = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const totalComponents = 3;

  const [seconds, setSeconds] = useState(15);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {

    if (seconds === -1) {
      setCurrentComponent(currentComponent +1)
      setSeconds(15)
    }

    if (currentComponent === totalComponents) {
      alert("c'est fini")
      return
    }
    const interval = setInterval(() => {
      if (!isPaused) {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, isPaused]);


  function update() {
    setCurrentComponent(currentComponent + 1)
    setSeconds(15)
  }

  function freez() {
    setIsPaused(true)
  }
  
  function defreez() {
    setIsPaused(false)
  }


  return (
    <>
    <div className='timer'>
      <CircularProgressbar minValue='0' maxValue='15' value={seconds} text={`${seconds}`} />
    </div>
    {(() => {
        switch (currentComponent) {
          case 1:
            return <Sound defreez={defreez} update={update} pause={freez} content={Yakitate} valeur='yakitate japan' />;
          case 2:
            return <Sound defreez={defreez} update={update} pause={freez} content={Eyeshield} valeur='eyeshield21' />;
          default:
            return <p>FINISH</p>;
        }
      })()}
    </>
  )
}

export default BlindTest