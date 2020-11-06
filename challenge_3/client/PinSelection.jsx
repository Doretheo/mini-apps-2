import React, { Component } from 'react';

class PinSelection extends Component {
  constructor() {
    super();
    this.state = {
      pin: '',
    }
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection(event) {
    event.preventDefault();
    const pin = event.target.innerHTML;
    this.setState({
      pin,
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Select Pins</legend>
        <table >
          <tbody>
            <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td
                value={index + 1}
                name="pin"
                key={index}
                onClick={(event) => this.onSelection(event)}
              >
                <fieldset>{index + 1}</fieldset>
              </td>
            ))}
            </tr>
            <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td
                value={index + 4}
                name="pin"
                key={index}
                onClick={(event) => this.onSelection(event)}
              >
                <fieldset>{index + 4}</fieldset>
              </td>
            ))}
            </tr>
            <tr>
            {Array.from({ length: 3 }).map((_, index) => (
              <td
                value={index + 7}
                name="pin"
                key={index}
                onClick={(event) => this.onSelection(event)}
              >
                <fieldset>{index + 7}</fieldset>
              </td>
            ))}
            </tr>
          </tbody>
          <tfoot>
            <td>
              <fieldset>10</fieldset>
            </td>
          </tfoot>
        </table>
      </fieldset>
    )
  }
}

export default PinSelection;