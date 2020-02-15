import React from 'react'
import { CSSTransition } from 'react-transition-group'

export interface FadeProps {
  children: React.ReactNode
  in: boolean
}

const Fade = ({ children, ...props }: FadeProps) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
    {children}
  </CSSTransition>
)

export default Fade
