import React from 'react'

import data from '../../data.json'
import PlanetView from './PlanetView'
import PlanetTopics from './PlanetTopics'
import PlanetStats from './PlanetStats'

export default function Planet({
  selectedPlanet,
  planetColor,
  topic,
  setTopic,
}) {
  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = data[selectedPlanet]

  return (
    <section className='planet'>
      <div className='planet__main'>
        <PlanetView img={images} topic={topic} />
        <div className='planet__overview'>
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
