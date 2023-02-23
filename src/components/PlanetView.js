import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Svg from './Svg'

import { images } from '../hooks/imageImport'

export default function PlanetView({ img, topic }) {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

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
      {/* <Svg
        className='planet__view--planet'
        viewBox='0 0 450 450'
        preserveAspectRatio='xMinYMin meet'
        name={imgSrcPlanet.default}
      /> */}
      <div className='planet__view--geology'>
        {topic === 'geology' && <img src={imgSrcGeology.default} />}
      </div>
    </div>
  )
}
