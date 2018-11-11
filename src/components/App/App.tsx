import * as React from 'react'

import logo from 'src/assets/logo.svg'

import {
  FavoriteNumber,
  GreetingLoaderDependencyInjection,
  GreetingLoaderHttpJestMock,
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
        <FavoriteNumber />
        <GreetingLoaderHttpJestMock />
        <GreetingLoaderDependencyInjection />
      </div>
    )
  }
}

export default App
