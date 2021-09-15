import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  token: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    transition: 'top 400ms ease-out'
  }
}));

export default useStyles;