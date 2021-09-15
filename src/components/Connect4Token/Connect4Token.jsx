import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// styles
import useStyles from './Connect4Token.styles';

const Connect4Token = ({ row, cell, col }) => {

  const classes = useStyles();
  const [top, setTop] = useState('0px');

  // on mount
  useEffect(() => {
    const top = `${(row + 1) * 40 + 1}px`
    setTop(top);
  }, [row])

  const styles = {
    backgroundColor: cell,
    left: `${col * 40 + 1}px`,
    top
  };

  return (
    <div className={classes.token} style={styles} ></div>
  );

}

Connect4Token.propTypes = {
  cell: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};

Connect4Token.defaultProps = {};

export default React.memo(Connect4Token);
