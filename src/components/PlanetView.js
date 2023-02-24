import React from 'react'

import Svg from './Svg'

import { images } from '../hooks/imageImport'

export default function PlanetView({ img, topic, svgsize }) {
  let imgPathPlanet
  let imgPathGeology = img.geology

  if (topic === 'planet') {
    imgPathPlanet = img.planet
  } else if (topic === 'internal') {
    imgPathPlanet = img.internal
  } else if (topic === 'geology') {
    imgPathPlanet = img.planet
  }

  const imgSrcPlanet = images[imgPathPlanet.replace('./assets/', '')]
  const imgSrcGeology = images[imgPathGeology.replace('./assets/', '')]

  return (
    <div className='planet__view'>
      <Svg
        className='planet__view--planet'
        height='100%'
        width='100%'
        viewBox={svgsize}
        preserveAspectRatio='xMinYMin meet'
        name={imgSrcPlanet.default}
      />
      <div className='planet__view--geology'>
        {topic === 'geology' && <img src={imgSrcGeology.default} />}
      </div>
    </div>
  )
}
