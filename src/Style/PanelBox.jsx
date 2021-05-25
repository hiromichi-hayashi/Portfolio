import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    boxStyle: {
        width: "100%",
        height: "100%",
    },

});
const PanelBox = ({ children }) => {
    const classes = useStyles()

    return (

        <Box className={classes.boxStyle} >
            {children}
        </Box>
    )
}

export default PanelBox;