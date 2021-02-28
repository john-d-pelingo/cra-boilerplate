import logo from 'assets/logo.svg'
import { FC } from 'react'

import styles from './styles.module.scss'

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="App Logo" />
        <h2 className={styles.appTitle}>Welcome to React</h2>
      </header>
      <p className={styles.appIntro}>
        To get started, edit <code>src/components/app/app.tsx</code> and save to
        reload.
      </p>
    </div>
  )
}
