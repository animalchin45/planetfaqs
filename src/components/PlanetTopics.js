import React from 'react'

export default function PlanetTopics({ planetColor, topic, setTopic }) {
  return (
    <div className='planet__topics'>
      <button
        style={topic === 'planet' ? { backgroundColor: planetColor } : null}
        className='btn btn--topics'
        onClick={() => setTopic('planet')}
      >
        <h3>01</h3>
        <h3>Overview</h3>
      </button>
      <button
        style={topic === 'internal' ? { backgroundColor: planetColor } : null}
        className='btn btn--topics'
        onClick={() => setTopic('internal')}
      >
        <h3>02</h3>
        <h3>Structure</h3>
      </button>
      <button
        style={topic === 'geology' ? { backgroundColor: planetColor } : null}
        className='btn btn--topics'
        onClick={() => setTopic('geology')}
      >
        <h3>03</h3>
        <h3>Geology</h3>
      </button>
    </div>
  )
}
