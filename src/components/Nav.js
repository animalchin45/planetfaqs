import React from 'react'

export default function Nav() {
  return (
    <nav>
      <h1 className='title'>The Planets</h1>
      <ul>
        <li>
          <button className='btn btn--nav'>
            <h4>Mercury</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Venus</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Earth</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Mars</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Jupiter</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Saturn</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Uranus</h4>
          </button>
        </li>
        <li>
          <button className='btn btn--nav'>
            <h4>Neptune</h4>
          </button>
        </li>
      </ul>
    </nav>
  )
}
