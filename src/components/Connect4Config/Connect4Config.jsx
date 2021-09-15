import React, { useCallback } from 'react';

// mui componets
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { formatValues } from '../../utils';

// styles
import useStyles from './Connect4Config.styles';

const Connect4Config = ({ config, onConfigUpdated, onGameStart }) => {

  const classes = useStyles();

  const handleBlur = useCallback(() => {
    const values = formatValues({ ...config });
    onConfigUpdated(values);
  }, [config, onConfigUpdated])

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    onConfigUpdated({
      ...config,
      [name]: Number(value)
    });
  }, [config, onConfigUpdated])

  const handleClick = useCallback((event) => {
    event.preventDefault();
    onGameStart();
  }, [onGameStart])

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.inputRow}>
            <div className={classes.textLabelContainer}>
              <Typography>
                Columns:
              </Typography>
            </div>
            <div className={classes.inputTextContainer}>
              <TextField
                name="cols"
                id="col-input"
                type="number"
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                fullWidth
                value={config.cols} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.inputRow}>
            <div className={classes.textLabelContainer}>
              <Typography>
                Rows:
              </Typography>
            </div>
            <div className={classes.inputTextContainer}>
              <TextField
                name="rows"
                id="row-input"
                type="number"
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                fullWidth
                value={config.rows} />
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary">
            Let's Play
          </Button>
        </Grid>
      </Grid>
    </div>
  );

}

Connect4Config.propTypes = {
  config: PropTypes.shape({
    cols: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired
  }).isRequired,
  onConfigUpdated: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired
};

Connect4Config.defaultProps = {};

export default React.memo(Connect4Config);
