import React, { useState } from 'react'

import data from '../../data.json'

import Hamburger from '../assets/icon-hamburger.svg'
import Chevron from '../assets/icon-chevron.svg'

export default function NavMobile({ onPlanetSelect }) {
  const [hamState, setHamState] = useState(false)

  const navStylesOpen = {
    opacity: '1',
    right: '0',
  }

  const navStylesClosed = {
    opacity: '0',
    right: '1000px',
  }

  const handleHamClick = () => {
    setHamState((prevState) => !prevState)
  }

  const handlePlanetSelect = (index, planetColor) => {
    onPlanetSelect(index, planetColor)
    setHamState((prevState) => !prevState)
  }

  const renderedNav = data.map((planet, index) => {
    return (
      <li key={index}>
        <button
          className='btn btn--nav'
          onClick={() => handlePlanetSelect(index, planet.color)}
        >
          <div
            className='btn--nav__dot'
            style={{ backgroundColor: `${planet.color}` }}
          ></div>
          <h4>{planet.name}</h4>
          <Chevron />
        </button>
      </li>
    )
  })

  return (
    <nav className='nav'>
      <div className='nav__header'>
        <h1 className='title'>The Planets</h1>
        <button className='btn hamburger' onClick={() => handleHamClick()}>
          <Hamburger
            stroke={hamState ? '#38384f' : '#ffffff'}
            fill={hamState ? '#38384f' : '#ffffff'}
          />
        </button>
      </div>
      <ul style={hamState ? navStylesOpen : navStylesClosed}>{renderedNav}</ul>
    </nav>
  )
}
