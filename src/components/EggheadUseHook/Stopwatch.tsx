import React, { useEffect, useReducer, useRef } from 'react'

interface ICurrentState {
  lapse: number
  running: boolean
}

interface INewState {
  lapse?: number
  running?: boolean
}

const reducer = (currentState: ICurrentState, newState: INewState) => ({
  ...currentState,
  ...newState,
})

const useStopWatch = () => {
  const [{ running, lapse }, setState] = useReducer(reducer, {
    lapse: 0,
    running: false,
  })
  const intervalRef = useRef(0)

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleRunClick() {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - lapse
      intervalRef.current = window.setInterval(() => {
        setState({
          lapse: Date.now() - startTime,
        })
      }, 0)
    }
    setState({
      running: !running,
    })
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    setState({
      lapse: 0,
      running: false,
    })
  }

  return {
    handleClearClick,
    handleRunClick,
    lapse,
    running,
  }
}

const Stopwatch: React.FunctionComponent = () => {
  const stopWatchOne = useStopWatch()
  const stopWatchTwo = useStopWatch()

  return (
    <div>
      <label>
        {stopWatchOne.lapse}
        ms
      </label>
      <button onClick={stopWatchOne.handleRunClick}>
        {stopWatchOne.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopWatchOne.handleClearClick}>Clear</button>

      <hr />

      <strong>Lapse Difference:</strong>
      <span>{stopWatchOne.lapse - stopWatchTwo.lapse} ms</span>

      <hr />

      <label>
        {stopWatchTwo.lapse}
        ms
      </label>
      <button onClick={stopWatchTwo.handleRunClick}>
        {stopWatchTwo.running ? 'Stop' : 'Start'}
      </button>
      <button onClick={stopWatchTwo.handleClearClick}>Clear</button>
    </div>
  )
}

export default Stopwatch
