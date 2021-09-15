import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  textLabelContainer: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputTextContainer: {
    width: '100%'
  },
  inputRow: {
    display: "flex"
  }
}));

export default useStyles;