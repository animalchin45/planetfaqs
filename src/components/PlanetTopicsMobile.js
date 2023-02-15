import React from 'react'

export default function PlanetTopicsMobile({ planetColor, topic, setTopic }) {
  return (
    <div className='planet__topics'>
      <button
        style={
          topic === 'planet'
            ? { borderBottom: `4px solid ${planetColor}` }
            : null
        }
        className='btn btn--topics'
        onClick={() => setTopic('planet')}
      >
        <h3 style={topic === 'planet' ? { color: '#ffffff' } : null}>
          Overview
        </h3>
      </button>
      <button
        style={
          topic === 'internal'
            ? { borderBottom: `4px solid ${planetColor}` }
            : null
        }
        className='btn btn--topics'
        onClick={() => setTopic('internal')}
      >
        <h3 style={topic === 'internal' ? { color: '#ffffff' } : null}>
          Structure
        </h3>
      </button>
      <button
        style={
          topic === 'geology'
            ? { borderBottom: `4px solid ${planetColor}` }
            : null
        }
        className='btn btn--topics'
        onClick={() => setTopic('geology')}
      >
        <h3 style={topic === 'geology' ? { color: '#ffffff' } : null}>
          Geology
        </h3>
      </button>
    </div>
  )
}
