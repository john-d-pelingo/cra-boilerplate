import React, { useState } from 'react'

interface UpperProps {
  children: string
}

const Upper: React.FunctionComponent<UpperProps> = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      Uppercase version: {children.toUpperCase()}{' '}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

// To see the effect, remove `React.memo` and add a `console log` in the Upper
// component. We'll see that when changing any of the inputs, both `Upper`
// components are re-rendering.
// In contrast to adding a `React.memo` in the `Upper` component, they will
// re-render only of the props has changed. Thus, only the `Upper` component of
// the corresponding state will rerender when changing the input in the below
// example.
const MemoizedUpper = React.memo(Upper)

function Names() {
  const [first, setFirstName] = useState('')
  const [last, setLastName] = useState('')
  return (
    <div>
      <label htmlFor="first-name-input">First Name</label>
      <input
        id="first-name-input"
        onChange={e => setFirstName(e.target.value)}
      />
      <MemoizedUpper>{first}</MemoizedUpper>
      <hr />
      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" onChange={e => setLastName(e.target.value)} />
      <MemoizedUpper>{last}</MemoizedUpper>
    </div>
  )
}

export default Names
