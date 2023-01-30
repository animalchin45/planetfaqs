import React from 'react'

export default function PlanetStats({
  rotation,
  revolution,
  radius,
  temperature,
}) {
  return (
    <div className='planet__stats'>
      <div>
        <p>Rotation Time</p>
        <h2>{rotation}</h2>
      </div>
      <div>
        <p>Revolution Time</p>
        <h2>{revolution}</h2>
      </div>
      <div>
        <p>Radius</p>
        <h2>{radius}</h2>
      </div>
      <div>
        <p>Average Temp.</p>
        <h2>{temperature}</h2>
      </div>
    </div>
  )
}
