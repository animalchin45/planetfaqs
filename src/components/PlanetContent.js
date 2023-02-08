import React from 'react'

import data from '../../data.json'

export default function PlanetContent({ selectedPlanet, topic }) {
  const { name, overview, structure, geology, images } = data[selectedPlanet]

  return (
    <div>
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
        </a>
      </p>
    </div>
  )
}
