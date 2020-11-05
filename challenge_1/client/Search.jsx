import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      category: 'category2',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { fetchHistoricData } = this.props;
    const { input, category } = this.state;
    fetchHistoricData(category, input)
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { input, category } = this.state;
    return (
      <form>
        <label>
          What category are you searching for?
          <select name="category" value={category} onChange={(event) => {this.handleInput(event)}}>
            <option value="category2" >Place</option>
            <option value="date" >Year</option>
            <option value="lang" >Language</option>
          </select>
        </label>

        <button type="submit" value="Submit" onClick={(event) => {this.handleSubmit(event)}}>Submit</button>
        <br />
        <label>
          Search Keywords
          <input type="text" name="input" value={input} onChange={(event) => {this.handleInput(event)}} />
        </label>
        <br />
        <br />
      </form>
    )
  }
}

export default Search;