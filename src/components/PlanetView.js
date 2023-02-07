import React from 'react'

import Svg from './Svg'

import { images } from '../hooks/imageImport'

export default function PlanetView({ img, topic }) {
  let imgPathPlanet
  let imgPathGeology

  if (topic === 'planet') {
    imgPathPlanet = img.planet
    imgPathGeology = img.geology
  } else if (topic === 'internal') {
    imgPathPlanet = img.internal
    imgPathGeology = img.geology
  } else if (topic === 'geology') {
    imgPathPlanet = img.planet
    imgPathGeology = img.geology
  }

  const imgSrcPlanet = images[imgPathPlanet.replace('./assets/', '')]
  const imgSrcGeology = images[imgPathGeology.replace('./assets/', '')]

  return (
    <div className='planet__view'>
      <Svg className='planet__view--planet' name={imgSrcPlanet.default} />
      <div className='planet__view--geology'>
        {topic === 'geology' && <img src={imgSrcGeology.default} />}
      </div>
    </div>
  )
}
