import React from 'react'
import logo from 'src/assets/logo.svg'

import {
  Countdown,
  Counter,
  Editor,
  ErrorBoundary,
  FavoriteNumber,
  GreetingLoaderDependencyInjection,
  GreetingLoaderHttpJestMock,
  HiddenMessage,
  Modal,
  Names,
  Stopwatch,
  Tilt,
  Toggle,
} from '../'
import styles from './styles.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="App Logo" />
          <h2 className={styles.appTitle}>Welcome to React</h2>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/components/app/app.tsx</code> and save
          to reload.
        </p>
        <br />
        <br />

        <h1 className={styles.title}>Egghead</h1>
        <br />
        <h2 className={styles.subtitle}>useState & useEffect</h2>
        <br />
        <Counter />
        <br />
        <br />

        <h2 className={styles.subtitle}>useEffect & useRef</h2>
        <br />
        <Tilt>vanilla-tilt.js</Tilt>
        <br />
        <br />

        <h2 className={styles.subtitle}>useReducer & useEffect & useRef</h2>
        <br />
        <Stopwatch />
        <br />
        <br />

        <h2 className={styles.subtitle}>useMemo</h2>
        <br />
        <Names />
        <br />
        <br />

        <h1 className={styles.title}>Testing JavaScript</h1>
        <br />
        <h2 className={styles.subtitle}>Basic</h2>
        <br />
        <FavoriteNumber />
        <br />
        <br />

        <h2 className={styles.subtitle}>Mock</h2>
        <br />
        <GreetingLoaderHttpJestMock />
        <br />
        <br />

        <h2 className={styles.subtitle}>Dependency Injection</h2>
        <br />
        <GreetingLoaderDependencyInjection />
        <br />
        <br />

        <h2 className={styles.subtitle}>React Transition Group</h2>
        <br />
        <HiddenMessage>Hello</HiddenMessage>
        <br />
        <br />

        <h2 className={styles.subtitle}>Error Boundary</h2>
        <br />
        <ErrorBoundary>
          {(({ shouldThrow = true }: { shouldThrow?: boolean }) => {
            if (shouldThrow) {
              throw new Error('💣')
            }

            return null
            // IIFE is needed to "render" this component
            // Change `shouldThrow` to true to destroy this app
          })({ shouldThrow: false })}
        </ErrorBoundary>
        <br />
        <br />

        <h2 className={styles.subtitle}>React Router</h2>
        <br />
        {/* Submitting will fail because Redirect is not inside Router */}
        <Editor user={{ id: '1' }} />
        <br />
        <br />

        <h2 className={styles.subtitle}>Render Prop</h2>
        <br />
        <Toggle>
          {({ on, toggle }) => (
            <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
          )}
        </Toggle>
        <br />
        <br />

        <h2 className={styles.subtitle}>React Modal</h2>
        <br />
        <Modal>Modal boyz</Modal>
        <br />
        <br />

        <h2 className={styles.subtitle}>React Unmount</h2>
        <br />
        <Countdown />
      </div>
    )
  }
}

export default App
