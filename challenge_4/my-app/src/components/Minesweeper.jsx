import React, { Component } from 'react';
import styled from 'styled-components';

const Board = styled.table`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  justify-content: center;
`;

const BoardData = styled.td`
  width: 90px;
  height: 100px;
  background-color: lightgrey;
  border: 1px dotted black;
  color: black;
`;

class Minesweeper extends Component {
  constructor() {
    super();
    this.state = {
      mines: '',
    };
    this.generateBoard = this.generateBoard.bind(this);
    this.onSelection = this.onSelection.bind(this);
    this.generateMines = this.generateMines.bind(this);
  }

  componentDidMount() {
    this.generateMines()
  }

  generateBoard() {
    return Array.from({ length: 100 }).map((_, index) => {
      return (
        <BoardData
          key={index}
          id={index + 1}
          onClick={(event) => this.onSelection(event)}
        >
          {' '}
        </BoardData>
      )
    })
  }

  generateMines() {
    const mines = []
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    for (let i = 0; i < 11; i++) {
      const randomMine = Math.floor(Math.random() * 100);
      mines.push(randomMine)
    }

    this.setState({
      mines: mines
    })
  }

  onSelection(event) {
    const { id, innerHTML } = event.target;
    const { mines } = this.state;

    console.log('clicked', id, event.target)
    console.log(mines)

    if (mines.includes(Number(id))) {
      event.target.id = 'mine'
    } else {
      event.target.innerHTML = id;
    }
  }

  render() {

    return (
      <div>
        <header>
          <h1>Minesweeper</h1>
        </header>
        <Board>
          {this.generateBoard()}
        </Board>
      </div>

    )
  }
}

export default Minesweeper;