import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

import styles from './styles.tilt.module.scss'

interface ITileProps {
  children: React.ReactNode
}

const Tilt: React.FunctionComponent<ITileProps> = ({ children }) => {
  const titleRef = useRef(null)

  if (titleRef) {
    useEffect(() => {
      VanillaTilt.init(titleRef.current as any, {
        glare: true,
        max: 25,
        'max-glare': 0.5,
        speed: 400,
      })

      // Will run when the component unmounts
      return () => {
        const currentTitleReft = titleRef.current as any

        if (currentTitleReft.vanillatilt) {
          currentTitleReft.vanillatilt.destroy()
        }
      }
      // Empty array ensures that effect is only run on mount and unmount
    }, [])
  }

  return (
    <div className={styles.root} ref={titleRef}>
      <div className={styles.child}>{children}</div>
    </div>
  )
}

export default Tilt
