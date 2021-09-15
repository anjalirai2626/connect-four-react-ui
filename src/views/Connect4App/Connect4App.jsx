import React, { useCallback, useState } from 'react';

// mui exports
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// components export
import Connect4Config from '../../components/Connect4Config';
import Connect4Game from '../../components/Connect4Game';

// styles export
import useStyles from './Connect4App.styles';

const Connect4App = () => {

  const classes = useStyles();

  const [config, setConfig] = useState({
    cols: 7,
    length: 4,
    rows: 6
  });

  const [play, setPlay] = useState(false);

  const handleBack = useCallback(() => {
    setPlay(false);
  }, [])

  const handleConfigUpdated = (newConfig) => {
    setConfig({ ...config, ...newConfig });
  }

  const handleGameStart = () => {
    setPlay(true);
  }

  return (
    <Paper elevation="2">
      <div className="Connect4App" >
        {(play === false) && (
          <Connect4Config
            onConfigUpdated={handleConfigUpdated}
            onGameStart={handleGameStart}
            config={config}
          />
        )}
        {play && (
          <div>
            <Connect4Game {...config} />
            <div className={classes.buttons} >
              <Button onClick={handleBack} variant="contained" color="primary">
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </Paper>
  );
}

export default React.memo(Connect4App);
