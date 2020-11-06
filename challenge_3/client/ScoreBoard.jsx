import React, { Component } from 'react';

class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  calculateScore() {

  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Score Board</legend>
          <div className="ScoreBoard">
            <table>
              <tr>
                <fieldset>Player Name</fieldset>
                {Array.from({ length: 10 }).map((_, index) => (
                <th
                  value={index + 1}
                  name="pin"
                  key={index}
                  onClick={(event) => this.onSelection(event)}
                >
                  <fieldset>{index + 1}</fieldset>
                </th>
              ))}
              <fieldset>Total Score</fieldset>
              </tr>
              <tr>
                {/* name */}
                <td><fieldset>{' '}</fieldset></td>
                  {/* scores */}
                  {Array.from({ length: 10 }).map((_, index) => (
                  <td
                    value={index + 1}
                    name="pin"
                    key={index}
                    onClick={(event) => this.onSelection(event)}
                  >
                    <fieldset>
                    </fieldset>
                  </td>
                ))}
                {/* total score  */}
                <td><fieldset>{' '}</fieldset></td>
              </tr>
            </table>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default ScoreBoard;