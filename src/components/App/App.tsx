import * as React from 'react'

import logo from 'src/assets/logo.svg'

import {
  ErrorBoundary,
  FavoriteNumber,
  GreetingLoaderDependencyInjection,
  GreetingLoaderHttpJestMock,
  HiddenMessage,
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
        <FavoriteNumber />
        <br />
        <GreetingLoaderHttpJestMock />
        <br />
        <GreetingLoaderDependencyInjection />
        <br />
        <HiddenMessage>Hello</HiddenMessage>
        <br />
        <ErrorBoundary>
          {(({ shouldThrow = true }: { shouldThrow?: boolean }) => {
            if (shouldThrow) {
              throw new Error('💣')
            }

            return null
            // IIFE is needed to "render this component
            // Change `shouldThrow` to true to destroy this page
          })({ shouldThrow: false })}
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
