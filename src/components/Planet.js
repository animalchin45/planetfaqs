import React from 'react'

import data from '../../data.json'
import PlanetView from './PlanetView'
import PlanetContent from './PlanetContent'
import PlanetTopics from './PlanetTopics'
import PlanetStats from './PlanetStats'

export default function Planet({
  selectedPlanet,
  planetColor,
  topic,
  setTopic,
}) {
  const { rotation, revolution, radius, temperature, images } =
    data[selectedPlanet]

  return (
    <section className='planet'>
      <div className='planet__main'>
        <PlanetView img={images} topic={topic} />
        <div className='planet__overview'>
          <PlanetContent selectedPlanet={selectedPlanet} topic={topic} />
          <PlanetTopics
            planetColor={planetColor}
            topic={topic}
            setTopic={setTopic}
          />
        </div>
      </div>
      <PlanetStats
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </section>
  )
}
