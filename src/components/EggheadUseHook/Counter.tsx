import React, { useEffect, useState } from 'react'

function useCounter(step: number = 1) {
  // Passing a function will make sure that the contents of it will run only
  // when the component is rendered for the first time
  const initialCount = (): number => {
    const localStorageCount = window.localStorage.getItem('count') || 0

    if (localStorageCount) {
      return parseInt(localStorageCount, 10)
    }
    return 0
  }

  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + step)

  useEffect(
    () => {
      window.localStorage.setItem('count', `${count}`)
    },
    // Will run only when the count effect changes
    [count],
  )

  return {
    count,
    increment,
  }
}

const Counter: React.FunctionComponent = () => {
  const { count, increment } = useCounter()

  return <button onClick={increment}>{count}</button>
}

export default Counter
