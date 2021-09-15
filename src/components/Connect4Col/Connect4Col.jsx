import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './Connect4Col.css';

const Connect4Col = ({ col, display, onColSelected }) => {

  const handleClick = useCallback(() => {
    onColSelected(col);
  }, [col, onColSelected]);

  if (display) {
    return (<button className="Connect4Col" onClick={handleClick} >
      <svg className="Connect4Col__image" viewBox="0 0 401.994 401.994">
        <path d="M345.393,266.381c-3.429-7.046-8.948-10.571-16.56-10.571h-54.826V9.419c0-2.664-0.9-4.899-2.707-6.708
          C269.49,0.903,267.351,0,264.88,0h-201c-3.806,0-6.567,1.809-8.285,5.421c-1.713,3.809-1.331,7.044,1.143,9.71l45.682,54.818
          c2.095,2.092,4.475,3.14,7.139,3.14h91.374v182.725h-54.818c-7.614,0-13.134,3.524-16.562,10.567
          c-3.237,7.231-2.378,13.799,2.57,19.698l91.36,109.632c3.429,4.189,8.09,6.283,13.989,6.283s10.561-2.094,13.986-6.283
          l91.365-109.632C347.96,279.987,348.823,273.424,345.393,266.381z"
        />
      </svg>
    </button>);
  } else {
    return (<div className="Connect4Col Connect4Col--placeholder" ></div>);
  }

}

Connect4Col.propTypes = {
  col: PropTypes.number.isRequired,
  onColSelected: PropTypes.func.isRequired
};

Connect4Col.defaultProps = {};

export default React.memo(Connect4Col);
