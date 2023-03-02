import React, { useState } from 'react'
import Test from '../sound/test.mp3'
import Sound from '../component/Sound'
import Eye from '../sound/21.mp3'

const Landing = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const totalComponents = 3;


  function change() {
    setCurrentComponent(currentComponent < totalComponents ? currentComponent + 1 : 1);
  }


  return (
    <>

    <button onClick={change}>autre son</button>
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