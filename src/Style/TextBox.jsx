import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(4, 0, 4),
    },
}));
const TextBox = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </div>
    )
}

export default TextBox;

