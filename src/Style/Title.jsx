import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        fontFamily: "'Mv Boli','Chalkduster'",
        borderBottom: "thick double #333333",
        width: "160px",
    },
    box: {

    }
});

const Title = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.box}>
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom className={classes.root}>
                {children}
            </Typography>
        </div>
    )
}

export default Title;