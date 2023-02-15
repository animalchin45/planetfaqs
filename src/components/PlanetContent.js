import React from 'react'

import data from '../../data.json'

import Source from '../assets/icon-source.svg'

export default function PlanetContent({ selectedPlanet, topic }) {
  const { name, overview, structure, geology, images } = data[selectedPlanet]

  return (
    <div className='planet__overview--container'>
      <h1>{name}</h1>
      <p>
        {(topic === 'planet' && overview.content) ||
          (topic === 'internal' && structure.content) ||
          (topic === 'geology' && geology.content)}
      </p>
      <p>
        Source:{' '}
        <a
          href={
            (topic === 'planet' && overview.source) ||
            (topic === 'internal' && structure.source) ||
            (topic === 'geology' && geology.source)
          }
        >
          Wikipedia
        </a>{' '}
        <Source />
      </p>
    </div>
  )
}
