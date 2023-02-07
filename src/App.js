import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import Nav from './components/Nav'
import Planet from './components/Planet'

import Background from './assets/background-stars.svg'

function App() {
  const svgString = encodeURIComponent(renderToStaticMarkup(<Background />))

  return (
    <main
      className='container'
      style={{ backgroundImage: `url(data:image/svg+xml,${svgString})` }}
    >
      <Nav />
      <Planet />
    </main>
  )
}

export default App
