import React from 'react'

import data from '../../data.json'

export default function Nav({ onPlanetSelect }) {
  const renderedNav = data.map((planet, index) => {
    return (
      <li>
        <button
          className='btn btn--nav'
          onClick={() => onPlanetSelect(index, planet.color)}
        >
          <h4>{planet.name}</h4>
        </button>
      </li>
    )
  })

  return (
    <nav className='nav'>
      <h1 className='title'>The Planets</h1>
      <ul>{renderedNav}</ul>
    </nav>
  )
}
