import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/jauge.scss'
import PopUp from '../component/PopUp';
import Yakitate from '../sound/yakitate.mp3'
import Sound from '../component/Sound'
import Eyeshield from '../sound/eyeshield.mp3'
import School from '../sound/school-rumble.mp3'
import Toradora from '../sound/toradora.mp3'
import Naruto from '../sound/naruto.mp3'
import Bleach from '../sound/bleach.mp3'
import Fmp from '../sound/fmp.mp3'
import Fma from '../sound/fma.mp3'
import Dbz from '../sound/dbz.mp3'
import Nodame from '../sound/nodame.mp3'
import '../styles/blind-test.scss'
import '../styles/jauge.scss'

const BlindTest = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const totalComponents = 11;

  const [seconds, setSeconds] = useState(1);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {

    if (seconds === -1) {
      setCurrentComponent(currentComponent +1)
      setSeconds(1)
    }

    if (currentComponent === totalComponents) {
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
    setSeconds(1)
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
      <CircularProgressbar minValue='0' maxValue='30' value={seconds} text={`${seconds}`} />
    </div>
    {(() => {
        switch (currentComponent) {
          case 1:
            return <Sound defreez={defreez} update={update} pause={freez} content={Yakitate} valeur='yakitate japan' />;
          case 2:
            return <Sound defreez={defreez} update={update} pause={freez} content={Eyeshield} valeur='eyeshield21' />;
          case 3:
            return <Sound defreez={defreez} update={update} pause={freez} content={Toradora} valeur='toradora' />;
          case 4:
            return <Sound defreez={defreez} update={update} pause={freez} content={School} valeur='school rumble' />;
          case 5:
            return <Sound defreez={defreez} update={update} pause={freez} content={Naruto} valeur='naruto' />;
          case 6:
            return <Sound defreez={defreez} update={update} pause={freez} content={Bleach} valeur='bleach' />;
          case 7:
            return <Sound defreez={defreez} update={update} pause={freez} content={Fmp} valeur='full métal panic' />;
          case 8:
            return <Sound defreez={defreez} update={update} pause={freez} content={Fma} valeur='full métal alchemist' />;
          case 9:
            return <Sound defreez={defreez} update={update} pause={freez} content={Dbz} valeur='dragon ball z' />;
          case 10:
            return <Sound defreez={defreez} update={update} pause={freez} content={Nodame} valeur='nodame cantabile' />;
          default:
            return <PopUp text="Merci d'avoir jouer !" class="hidden" />
        }
      })()}
    </>
  )
}

export default BlindTest