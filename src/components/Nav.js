import React from 'react'

export default function Nav({ onPlanetSelect }) {
  return (
    <nav>
      <h1 className='title'>The Planets</h1>
      <ul>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(0, '#419ebb')}
          >
            <h4>Mercury</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(1, '#eda249')}
          >
            <h4>Venus</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(2, '#6d2ed5')}
          >
            <h4>Earth</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(3, '#d14c32')}
          >
            <h4>Mars</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(4, '#d83a34')}
          >
            <h4>Jupiter</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(5, '#cd5120')}
          >
            <h4>Saturn</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(6, '#1ec1a2')}
          >
            <h4>Uranus</h4>
          </button>
        </li>
        <li>
          <button
            className='btn btn--nav'
            onClick={() => onPlanetSelect(7, '#2d68f0')}
          >
            <h4>Neptune</h4>
          </button>
        </li>
      </ul>
    </nav>
  )
}
