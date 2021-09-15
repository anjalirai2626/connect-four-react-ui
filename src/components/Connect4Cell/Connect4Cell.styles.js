import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cell: {
    position: 'relative',
    width: 40,
    height: 40,
    overflow: 'hidden'
  },
  mask: {
    position: 'absolute',
    top: -18,
    left: -18,
    width: 36,
    height: 36,
    border: '20px solid #fff',
    borderRadius: '50%'
  }
}));

export default useStyles;