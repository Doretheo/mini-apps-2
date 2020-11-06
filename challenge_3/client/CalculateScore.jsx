import React, { Component } from 'react';

const scores = [
  {
    firstRoll: 10,
    secondRoll: 0,
  },
  {
    firstRoll: 7,
    secondRoll: 3
  },
  {
    firstRoll: 2,
    secondRoll: 4
  }
]

class CalculateScore extends Component {
  constructor() {
    super();
    this.state = {
      firstRow: 0,
      secondRow: 0,
      totalScore: 0,
      finalScore: 0,
      round: 0,
      pins: 0,
      pinsHit: 0,
    };
    this.scoringBoard = this.scoringBoard.bind(this);
    this.strikeAfterBonus = this.strikeAfterBonus.bind(this);
    this.spareAfterBonus = this.spareAfterBonus.bind(this)
    ;
    this.updateScore = this.updateScore.bind(this);
  }

  scoringBoard() {
    const {firstRow, secondRow, totalScore, finalScore, round, pins, pinsHit } = this.state;
    const score = 0;
    for (let i = 0; i < scores.length; i++) {
      const currentRound = scores[i];
      const secondRound = scores[i + 1];
      if (currentRound.firstRoll === 10) {
        score += strikeAfterBonus(secondRound.firstRoll + secondRoll)
      } else if (updateScore(currentRound.firstRoll + currentRound.secondRoll === 10)) {
        score += spareAfterBonus(secondRound.firstRoll)
      } else {
        score += updateScore(currentRound.firstRoll + currentRound + secondRoll)
      }
    }
  }

  strikeAfterBonus(nextTotalScore) {
    return nextTotalScore + 10;
  }

  spareAfterBonus(nextFirstScore) {
    return nextFirstScore + 10
  }

  updateScore(currentScore, nextTotalScore) {
    return currentScore + nextTotalScore;
  }

  render() {
    return (
      <h1> score </h1>
    )
  }
}