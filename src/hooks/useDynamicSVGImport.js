import { useRef } from 'react'

export default function useDynamicSVGImport(name) {
  const ImportedIconRef = useRef()
  ImportedIconRef.current = name

  return { SvgIcon: ImportedIconRef.current }
}
