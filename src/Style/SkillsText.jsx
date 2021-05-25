import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ComputerIcon from '@material-ui/icons/Computer';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

import { Icon } from '@iconify/react';
import languageJavascript from '@iconify-icons/mdi/language-javascript';
import languageHtml5 from '@iconify-icons/mdi/language-html5';
import languageCss3 from '@iconify-icons/mdi/language-css3';
import languagePhp from '@iconify-icons/mdi/language-php';
import reactIcon from '@iconify-icons/mdi/react';
import firebaseIcon from '@iconify-icons/mdi/firebase';
import materialUi from '@iconify-icons/mdi/material-ui';
import bootstrapIcon from '@iconify-icons/mdi/bootstrap';
import dockerIcon from '@iconify-icons/mdi/docker';
import databaseIcon from '@iconify-icons/mdi/database';
import githubIcon from '@iconify-icons/mdi/github';


import TextBox from '../Style/TextBox';
import Title from '../Style/Title';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    fontSize: {
        fontSize: "25px",
    },
    htmlIcon: {
        fontSize: "25px",
        color: "#FFA500"
    },
    cssIcon: {
        fontSize: "25px",
        color: "#0000CD"
    },
    jsIcon: {
        fontSize: "25px",
    },
    phpIcon: {
        fontSize: "25px",
        color: "#B384FF"
    },
    reactIcon: {
        fontSize: "25px",
        color: "#32EEFF"
    },
    materialIcon: {
        fontSize: "25px",
        color: "#00BFFF"
    },
    firebaseIcon: {
        fontSize: "25px",
        color: "#FFD700"
    },
    bootstrapIcon: {
        fontSize: "25px",
        color: "#7B3CFF"
    },
    dockerIcon: {
        fontSize: "25px",
        color: "#2C7CFF"
    },

});

const SkillsTable = () => {
    const classes = useStyles();

    return (
        <TextBox>
            <Title>
                Skills
                </Title>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem >
                        <ListItemIcon>
                            <ComputerIcon />
                        </ListItemIcon>
                        <ListItemText primary="OS" />
                    </ListItem>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem>
                            <ListItemText primary="Windows10" />
                        </ListItem>
                    </List>

                    <ListItem >
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary="言語" />
                    </ListItem>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem>
                            <Icon icon={languageHtml5} className={classes.htmlIcon} />
                            <ListItemText primary="HTML5" />
                        </ListItem>
                        <ListItem>
                            <Icon icon={languageJavascript} className={classes.jsIcon} />
                            <ListItemText primary="javaScript" />
                        </ListItem>
                        <ListItem>
                            <Icon icon={languageCss3} className={classes.cssIcon} />
                            <ListItemText primary="CSS3" />
                        </ListItem>
                        <ListItem>
                            <Icon icon={languagePhp} className={classes.phpIcon} />
                            <ListItemText primary="PHP" />
                        </ListItem>
                    </List>

                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="ライブラリ・フレームワーク" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                        <Icon icon={reactIcon} className={classes.reactIcon} />
                        <ListItemText primary="React" />
                    </ListItem>
                    <ListItem>
                        <Icon icon={materialUi} className={classes.materialIcon} />
                        <ListItemText primary="Material-UI" />
                    </ListItem>
                    <ListItem>
                        <Icon icon={bootstrapIcon} className={classes.bootstrapIcon} />
                        <ListItemText primary="bootstrap" />
                    </ListItem>
                </List>
                <ListItem>
                    <ListItemIcon>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="その他" />
                </ListItem>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem>
                        <Icon icon={firebaseIcon} className={classes.firebaseIcon} />
                        <ListItemText primary="firebase" />
                    </ListItem>
                    <ListItem>
                        <Icon icon={dockerIcon} className={classes.dockerIcon} />
                        <ListItemText primary="docker" />
                    </ListItem>
                    <ListItem>
                        <Icon icon={databaseIcon} className={classes.fontSize} />
                        <ListItemText primary="MySQL" />
                    </ListItem>
                    <ListItem>
                        <Icon icon={githubIcon} className={classes.fontSize} />
                        <ListItemText primary="GitHub" />
                    </ListItem>
                </List>
            </div>


        </TextBox>

    );
}

export default SkillsTable