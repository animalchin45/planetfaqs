import React from 'react'
import useDynamicSVGImport from '../hooks/useDynamicSVGImport'

export default function Svg({ name, onCompleted, onError, ...rest }) {
  const { SvgIcon } = useDynamicSVGImport(name)

  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null
}
