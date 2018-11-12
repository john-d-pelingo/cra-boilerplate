import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

export interface IFadeProps {
  children: React.ReactNode
  in: boolean
}

const Fade = ({ children, ...props }: IFadeProps) => (
  <CSSTransition {...props} timeout={1000} classNames="fade">
    {children}
  </CSSTransition>
)

export default Fade
