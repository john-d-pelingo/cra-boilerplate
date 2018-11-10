import 'react-testing-library/cleanup-after-each'

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
