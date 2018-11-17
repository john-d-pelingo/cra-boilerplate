import React, { useEffect, useReducer, useRef } from 'react'

interface IInitialState {
  lapse: number
  running: boolean
}

type Type = 'CLEAR' | 'LAPSE' | 'TOGGLE_RUNNING'

interface IAction {
  payload?: {
    now: number
    startTime: number
  }
  type: Type
}

function reducer(state: IInitialState, { payload, type }: IAction) {
  switch (type) {
    case 'CLEAR':
      return {
        ...state,
        lapse: 0,
        running: false,
      }

    case 'LAPSE':
      return {
        ...state,
        lapse: payload!.now - payload!.startTime,
      }

    case 'TOGGLE_RUNNING':
      return {
        ...state,
        running: !state.running,
      }

    default:
      return state
  }
}

const Stopwatch: React.FunctionComponent = () => {
  const [{ running, lapse }, dispatch] = useReducer(reducer, {
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
        dispatch({
          payload: {
            now: Date.now(),
            startTime,
          },
          type: 'LAPSE',
        })
      }, 0)
    }
    dispatch({
      type: 'TOGGLE_RUNNING',
    })
  }

  function handleClearClick() {
    clearInterval(intervalRef.current)
    dispatch({
      type: 'CLEAR',
    })
  }

  return (
    <div>
      <label>
        {lapse}
        ms
      </label>
      <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  )
}

export default Stopwatch
