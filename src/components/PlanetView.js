import React from 'react'

// temp planet import
import Earth from '../img/planet-earth.svg'
import Icon from './Icon'

import { images } from '../hooks/imageImport'

export default function PlanetView({ img }) {
  const imgPath = img.geology
  const imgSrc = images[imgPath.replace('./assets/', '')]
  console.log(imgPath, imgSrc, images)

  return (
    <div className='planet__view'>
      {/* <Earth /> */}
      {/* <Icon name={imgPath} /> */}
      <img src={imgSrc.default} />
    </div>
  )
}
