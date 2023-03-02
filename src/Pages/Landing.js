import React, { useState, useEffect } from 'react'
import Test from '../sound/test.mp3'
import Sound from '../component/Sound'
import Eye from '../sound/21.mp3'

const Landing = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const totalComponents = 3;

  const [seconds, setSeconds] = useState(3);

  useEffect(() => {

    if (seconds === -1) {
      setCurrentComponent(currentComponent +1)
      setSeconds(3)
    }

    if (currentComponent === totalComponents) {
      alert("c'est fini")
      return
    }
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);


  return (
    <>
    <div>
      <h1>Timer: {seconds} secondes</h1>
    </div>
    {(() => {
        switch (currentComponent) {
          case 1:
            return <Sound content={Test} valeur='chad' />;
          case 2:
            return <Sound content={Eye} valeur='eye' />;
          default:
            return <p>PROUT</p>;
        }
      })()}
    </>
  )
}

export default Landing