import React from 'react'

export default function Nav({ onPlanetSelect }) {
  return (
    <nav>
      <h1 className='title'>The Planets</h1>
      <ul>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(0)}>
            <h4>Mercury</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(1)}>
            <h4>Venus</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(2)}>
            <h4>Earth</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(3)}>
            <h4>Mars</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(4)}>
            <h4>Jupiter</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(5)}>
            <h4>Saturn</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(6)}>
            <h4>Uranus</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav' onClick={() => onPlanetSelect(7)}>
            <h4>Neptune</h4>
          </button>
        </li>
      </ul>
    </nav>
  )
}
