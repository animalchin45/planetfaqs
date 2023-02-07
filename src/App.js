import React from 'react'
import { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Nav from './components/Nav'
import Planet from './components/Planet'

import Background from './assets/background-stars.svg'

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(2)
  const [topic, setTopic] = useState('planet')
  const svgString = encodeURIComponent(renderToStaticMarkup(<Background />))

  const onPlanetSelect = (planet) => {
    setSelectedPlanet(planet)
    setTopic('planet')
  }

  return (
    <main
      className='container'
      style={{ backgroundImage: `url(data:image/svg+xml,${svgString})` }}
    >
      <Nav onPlanetSelect={onPlanetSelect} />
      <Planet
        selectedPlanet={selectedPlanet}
        topic={topic}
        setTopic={setTopic}
      />
    </main>
  )
}

export default App
