import React from 'react';
import PropTypes from 'prop-types';

// styles
import useStyles from './Connect4Cell.styles';

const Connect4Cell = ({ col, row }) => {
  const classes = useStyles();
  return (
    <div className={classes.cell} >
      <div className={classes.mask}></div>
    </div>
  );
}

Connect4Cell.propTypes = {
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};

Connect4Cell.defaultProps = {};

export default Connect4Cell;
