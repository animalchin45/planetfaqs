import React from 'react'
import { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { useMediaQuery } from 'react-responsive'

import Nav from './components/Nav'
import NavMobile from './components/NavMobile'
import Planet from './components/Planet'

import Background from './assets/background-stars.svg'

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(2)
  const [planetColor, setPlanetColor] = useState('#6d2ed5')
  const [topic, setTopic] = useState('planet')
  const svgString = encodeURIComponent(renderToStaticMarkup(<Background />))
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

  const onPlanetSelect = (planet, color) => {
    setSelectedPlanet(planet)
    setPlanetColor(color)
    setTopic('planet')
  }

  return (
    <main
      className='container'
      style={{ backgroundImage: `url(data:image/svg+xml,${svgString})` }}
    >
      {!isMobile && <Nav onPlanetSelect={onPlanetSelect} />}
      {isMobile && <NavMobile onPlanetSelect={onPlanetSelect} />}
      <Planet
        selectedPlanet={selectedPlanet}
        planetColor={planetColor}
        topic={topic}
        setTopic={setTopic}
      />
    </main>
  )
}

export default App
