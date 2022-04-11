import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const size = 50;

class Square extends React.Component {
  render() {
    return (
        <button className="square">
          {/* TODO */}
        </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  renderRows() {
    let grid = []
    for(let i=0; i<size; i++) {
      let row = [];
      for(let j=0; j<size; j++) {
        row.push(this.renderSquare())
      }
      grid.push(<div className="board-row">{row}</div>)
    }
    return grid;
  }

  render() {
    const status = 'Step X';

    return (
        <div>
          <div className="status">{status}</div>
          {this.renderRows()}
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
