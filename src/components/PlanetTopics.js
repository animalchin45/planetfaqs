import React from 'react'

export default function PlanetTopics({ setTopic }) {
  return (
    <div className='planet__topics'>
      <button className='btn btn--topics' onClick={() => setTopic('planet')}>
        <h3>01</h3>
        <h3>Overview</h3>
      </button>
      <button className='btn btn--topics' onClick={() => setTopic('internal')}>
        <h3>02</h3>
        <h3>Structure</h3>
      </button>
      <button className='btn btn--topics' onClick={() => setTopic('geology')}>
        <h3>03</h3>
        <h3>Geology</h3>
      </button>
    </div>
  )
}
