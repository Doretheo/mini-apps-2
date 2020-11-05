import React,{ Component }  from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import Events from './Events.jsx';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      displayToggle: false,
    };
    this.fetchHistoricData = this.fetchHistoricData.bind(this);
  }

  fetchHistoricData(category, input) {
    const { data } = this.state;
    console.log(category, input)
    axios.get(`http://localhost:3000/events?${category}=${input}&_limit=30`)
      .then((res) => this.setState({
        data: res.data,
        displayToggle: true,
      }))
      .catch((err) => {console.log(err.stack)})
  }

  render() {
    const { displayToggle, data } = this.state;
    return (
      <div>
        <h1> Historic Timelines </h1>

        <Search fetchHistoricData={this.fetchHistoricData}/>
        {displayToggle && <Events data={data} />}
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));

