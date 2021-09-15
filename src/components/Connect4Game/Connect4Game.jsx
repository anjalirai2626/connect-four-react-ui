import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CONNECT4_PLAYER_1,
  CONNECT4_PLAYER_2,
  CONNECT4_STATUS_DRAW,
  CONNECT4_STATUS_PLAYER1WIN,
  CONNECT4_STATUS_PLAYER2WIN,
  CONNECT4_STATUS_RUNNING
} from '../../utils/settings';

import Connect4Board from '../Connect4Board';

// styles
import useStyles from './Connect4Game.styles';

const Connect4Game = ({ cols, length, rows }) => {

  const classes = useStyles();

  const [board, setBoard] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState(CONNECT4_PLAYER_1);
  const [status, setStatus] = useState(CONNECT4_STATUS_RUNNING);

  // Generate empty board of given rows and cols
  const generateBoard = (rows, cols) => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < cols; j++) {
        board[i][j] = null;
      }
    }
    return board;
  }

  // on mount
  useEffect(() => {
    const board = generateBoard(rows, cols);
    setBoard(board);
  }, [rows, cols]);

  const cloneBoard = (board) => {
    return board.map(row => [...row]);
  }

  const getTokenRow = (board, col) => {
    let row = board.length - 1;
    while (board[row][col]) {
      row--;
    }
    return row;
  }

  const checkWinDiagonal1 = (board, row, col, player, length) => {
    let suite = 0;
    for (let i = col; i < col + length; i++) {
      suite += board[row + i - col] && board[row + i - col][i] === player;
    }
    return suite === length;
  }

  const checkWinDiagonal2 = (board, row, col, player, length) => {
    let suite = 0;
    for (let i = col; i < col + length; i++) {
      suite += board[row - i + col] && board[row - i + col][i] === player;
    }
    return suite === length;
  }

  const checkWinCol = (board, row, col, player, length) => {
    let suite = 0;
    for (let i = row; i < row + length; i++) {
      suite += board[i] && board[i][col] === player;
    }
    return suite === length;
  }

  const checkWinRow = (board, row, col, player, length) => {
    let suite = 0;
    for (let i = col; i < col + length; i++) {
      suite += board[row] && board[row][i] === player;
    }
    return suite === length;
  }

  const checkWin = (board, row, col, player, length) => {
    let i;
    let win = 0;
    win += checkWinCol(board, row, col, player, length);
    for (i = col; i > col - length; i--) {
      win += checkWinRow(board, row, i, player, length);
    }
    for (i = col; i > col - length; i--) {
      win += checkWinDiagonal1(board, row + i - col, i, player, length);
    }
    for (i = col; i > col - length; i--) {
      win += checkWinDiagonal2(board, row - i + col, i, player, length);
    }
    return Boolean(win);
  }

  const checkDraw = (board, rows, cols) => {
    return board.reduce((acc, row) =>
      acc + row.reduce((acc, cell) => acc + Boolean(cell), 0)
      , 0) === rows * cols
      ? CONNECT4_STATUS_DRAW
      : CONNECT4_STATUS_RUNNING;
  }

  const handleColSelected = (col) => {
    let nextStatus;
    const currBoard = cloneBoard(board);
    const row = getTokenRow(currBoard, col);
    const nextPlayer = currentPlayer === CONNECT4_PLAYER_1
      ? CONNECT4_PLAYER_2
      : CONNECT4_PLAYER_1;
    currBoard[row][col] = currentPlayer;

    const win = checkWin(currBoard, row, col, currentPlayer, length);
    if (win) {
      nextStatus = currentPlayer === CONNECT4_PLAYER_1
        ? CONNECT4_STATUS_PLAYER1WIN
        : CONNECT4_STATUS_PLAYER2WIN;
    } else {
      nextStatus = checkDraw(currBoard, rows, cols);
    }

    setBoard(currBoard);
    setCurrentPlayer(nextPlayer);
    setStatus(nextStatus);
  };

  // render
  return (
    <div>
      {board?.length && (
        <Connect4Board
          board={board}
          onColSelected={handleColSelected}
          status={status}
        />
      )}
      <div className={classes.message}>
        {status === CONNECT4_STATUS_RUNNING && (
          <p>
            Current player :
            <span
              className={classes.token}
              style={{ backgroundColor: currentPlayer }}
            ></span>
          </p>
        )}
        {status === CONNECT4_STATUS_PLAYER1WIN && (
          <p>Player 1 win</p>
        )}
        {status === CONNECT4_STATUS_PLAYER2WIN && (
          <p>Player 2 win</p>
        )}
        {status === CONNECT4_STATUS_DRAW && (
          <p>Draw</p>
        )}
      </div>
    </div>
  );
}

Connect4Game.propTypes = {
  cols: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired
};

Connect4Game.defaultProps = {};

export default React.memo(Connect4Game);
