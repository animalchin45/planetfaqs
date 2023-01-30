import React from 'react'

import data from '../../data.json'
import PlanetView from './PlanetView'
import PlanetTopics from './PlanetTopics'
import PlanetStats from './PlanetStats'

export default function Planet() {
  const { name, overview, rotation, revolution, radius, temperature } = data[2]

  return (
    <section className='planet'>
      <div className='planet__view'>
        <div>
          <PlanetView />
          <div>
            <h1>{name}</h1>
            <p>{overview.content}</p>
            <p>
              Source: <a href={overview.source}>Wikipedia</a>
            </p>
            <PlanetTopics />
          </div>
        </div>
        <PlanetStats
          rotation={rotation}
          revolution={revolution}
          radius={radius}
          temperature={temperature}
        />
      </div>
    </section>
  )
}
