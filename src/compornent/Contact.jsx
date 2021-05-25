import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PanelBox from '../Style/PanelBox';
import TextBox from '../Style/TextBox';
import Title from '../Style/Title';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    Facebook: {
        color: '#0000CD'
    },
    Instagram: {
        color: '#B22222'
    },
}));

const Contact = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <PanelBox>
            <CssBaseline />
            <TextBox>
                <Title>
                    Social
                </Title>
                <List
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="GitHubアカウント" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <Link href="https://github.com/hiromichi-hayashi" target="_branck" color="inherit">
                                    {"https://github.com/hiromichi-hayashi"}
                                </Link>

                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <List
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <TwitterIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Twitterアカウント" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <Link href="https://twitter.com/04dAVoNmKLHDtJO" target="_branck" color="inherit">
                                    {"https://twitter.com/04dAVoNmKLHDtJO"}
                                </Link>

                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <List
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <InstagramIcon className={classes.Instagram} />
                        </ListItemIcon>
                        <ListItemText primary="Instagramアカウント" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <Link target="_branck" color="inherit">
                                    {"No Account..."}
                                </Link>

                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <List
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <FacebookIcon className={classes.Facebook} />
                        </ListItemIcon>
                        <ListItemText primary="Facebookアカウント" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <Link target="_branck" color="inherit">
                                    {"No Account..."}
                                </Link>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </TextBox>
        </PanelBox >
    );
}

export default Contact