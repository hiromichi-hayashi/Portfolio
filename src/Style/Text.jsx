import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        fontFamily: "-apple - system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans - serif",
    },

});

const Text = ({ children }) => {
    const classes = useStyles()
    return (
        <Typography variant="h6" align="center" color="textSecondary" className={classes.root}>
            {children}
        </Typography>
    )
}

export default Text;