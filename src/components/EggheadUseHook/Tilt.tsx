import React, { useEffect, useRef } from 'react'
import VanillaTilt, { HTMLVanillaTiltElement } from 'vanilla-tilt'

import styles from './styles.module.scss'

interface TileProps {
  children: React.ReactNode
}

interface CustomHTMLVanillaTiltElement extends HTMLVanillaTiltElement {
  align: string
}

const Tilt: React.FunctionComponent<TileProps> = ({ children }) => {
  const titleRef = useRef<CustomHTMLVanillaTiltElement>(null)

  useEffect(() => {
    const currentTitleRef = titleRef.current

    if (currentTitleRef) {
      VanillaTilt.init(currentTitleRef, {
        glare: true,
        max: 25,
        'max-glare': 0.5,
        speed: 400,
      })
    }

    // Will run when the component unmounts
    return () => {
      if (currentTitleRef && currentTitleRef.vanillaTilt) {
        currentTitleRef.vanillaTilt.destroy()
      }
    }
    // Empty array ensures that effect is only run on mount and unmount
  }, [])

  return (
    <div className={styles.root} ref={titleRef}>
      <div className={styles.child}>{children}</div>
    </div>
  )
}

export default Tilt
