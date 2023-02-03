import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// needs more work
// import { images } from './hooks/imageImport'

import Nav from './components/Nav'
import Planet from './components/Planet'

// import Stars from './img/background-stars.svg'

function App() {
  // const svgString = encodeURIComponent(renderToStaticMarkup(<Stars />))

  return (
    <main
      className='container'
      // style={{ backgroundImage: `url(data:image/svg+xml,${svgString})` }}
    >
      <Nav />
      <Planet />
    </main>
  )
}

export default App
