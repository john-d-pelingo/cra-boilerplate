import React from 'react'
import logo from 'src/assets/logo.svg'

import {
  Countdown,
  Editor,
  ErrorBoundary,
  FavoriteNumber,
  GreetingLoaderDependencyInjection,
  GreetingLoaderHttpJestMock,
  HiddenMessage,
  Modal,
  Toggle,
} from '../'
import styles from './styles.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="App Logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/components/app/app.tsx</code> and save
          to reload.
        </p>
        <br />
        <br />

        <h1 className={styles.titles}>Basic</h1>
        <br />
        <FavoriteNumber />
        <br />
        <br />

        <h1 className={styles.titles}>Mock</h1>
        <br />
        <GreetingLoaderHttpJestMock />
        <br />
        <br />

        <h1 className={styles.titles}>Dependency Injection</h1>
        <br />
        <GreetingLoaderDependencyInjection />
        <br />
        <br />

        <h1 className={styles.titles}>React Transition Group</h1>
        <br />
        <HiddenMessage>Hello</HiddenMessage>
        <br />
        <br />

        <h1 className={styles.titles}>Error Boundary</h1>
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

        <h1 className={styles.titles}>React Router</h1>
        <br />
        {/* Submitting will fail because Redirect is not inside Router */}
        <Editor user={{ id: '1' }} />
        <br />
        <br />

        <h1 className={styles.titles}>Render Prop</h1>
        <br />
        <Toggle>
          {({ on, toggle }) => (
            <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
          )}
        </Toggle>
        <br />
        <br />

        <h1 className={styles.titles}>React Modal</h1>
        <br />
        <Modal>Modal boyz</Modal>
        <br />
        <br />

        <h1 className={styles.titles}>React Unmount</h1>
        <br />
        <Countdown />
      </div>
    )
  }
}

export default App
