import * as React from 'react'

interface IFavoriteNumberProps {
  max: number
  min: number
}

interface IFavoriteNumberState {
  numberValue: number
  numberEntered: boolean
}

class FavoriteNumber extends React.Component<
  IFavoriteNumberProps,
  IFavoriteNumberState
> {
  static defaultProps = { min: 1, max: 9 }
  state = { numberValue: 0, numberEntered: false }

  render() {
    const { numberValue, numberEntered } = this.state
    const { min, max } = this.props
    const isValid = !numberEntered || (numberValue >= min && numberValue <= max)
    return (
      <div>
        <label htmlFor="favorite-number">Favorite Number</label>
        <input
          id="favorite-number"
          type="number"
          value={numberValue}
          onChange={this.handleChange}
        />
        {isValid ? null : (
          <div data-testid="error-message">The number is invalid</div>
        )}
      </div>
    )
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      numberEntered: true,
      numberValue: Number(event.currentTarget.value),
    })
  }
}

export default FavoriteNumber
