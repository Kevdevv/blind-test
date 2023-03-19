import React from 'react'
import '../styles/landing.scss'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Link to='blind'>
    <div className='start_game'>
      <span>Jouer</span>
    </div>
    </Link>
  )
}

export default Landing