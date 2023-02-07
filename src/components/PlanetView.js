import React from 'react'

import Svg from './Svg'

import { images } from '../hooks/imageImport'

export default function PlanetView({ img }) {
  const imgPath = img.planet
  const imgSrc = images[imgPath.replace('./assets/', '')]

  return (
    <div className='planet__view'>
      <Svg name={imgSrc.default} />
    </div>
  )
}
