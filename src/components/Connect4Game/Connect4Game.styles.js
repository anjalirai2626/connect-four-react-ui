import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  message: {
    textAlign: 'center'
  },
  token: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: 10,
    verticalAlign: 'middle',
    marginLeft: 10
  }
}));

export default useStyles;