// add some helpful assertions
// doing this locally will remove type problems
// import '@testing-library/jest-dom/extend-expect'

// this is basically: afterEach(cleanup)
import '@testing-library/react/cleanup-after-each'

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
