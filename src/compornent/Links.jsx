import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SmsIcon from '@material-ui/icons/Sms';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        height: "100vh",
        width: "100vw",
    },
    box: {
        height: "100%",
        overflow: "auto",
    }
});


function TabPanel(props) {
    const { children, value, index, } = props;

    return (
        <Box
            id={`simple-tabpanel-${index}`}
        >
            {value === index && (
                <Box mb={10} >{children}</Box>
            )}
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Link = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="full width example"
                >
                    <Tab icon={<AccountCircleIcon />} label="Plofile" {...a11yProps(0)} />
                    <Tab icon={<MenuBookIcon />} label="Skills" {...a11yProps(1)} />
                    <Tab icon={<ImportantDevicesIcon />} label="Work" {...a11yProps(2)} />
                    <Tab icon={<SmsIcon />} label="Social" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <div className={classes.box}>
                <TabPanel value={value} index={0} >
                    <Home />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <Skills />
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Work />
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <Contact />
                </TabPanel>
            </div>
        </div>
    );
}

export default Link;

