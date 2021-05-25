import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PanelBox from '../Style/PanelBox';
import TextBox from '../Style/TextBox';
import Title from '../Style/Title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import pro1 from '../Style/img/pro2.jpg';



const useStyles = makeStyles((theme) => ({
    listTitle: {
        fontSize: "2rem",
        fontFamily: "'Mv Boli','Chalkduster'",
        borderBottom: " thick double #333333",
        fontWeight: "bold"
    },
    listText: {
        fontSize: "1.2rem",
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <PanelBox>
            <CssBaseline />
            <TextBox>
                <Title>
                    Profile
            </Title>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <Avatar src={pro1} variant='circular' className={classes.avatar} />
                    <ListItem>
                        <Typography className={classes.listTitle}>
                            Name
                            </Typography>
                    </ListItem>
                    <List component="div" disablePadding className={classes.listText}>
                        <ListItem>
                            {"林　寛道/Hiromichi Hayashi"}
                        </ListItem>
                        <ListItem>
                            {"1997/09/22"}
                        </ListItem>
                    </List>
                    <ListItem>
                        <Typography className={classes.listTitle}>
                            Career
                            </Typography>
                    </ListItem>
                    <List component="div" disablePadding className={classes.listText}>
                        <ListItem >
                            {"2016年 3月 愛知県立半田農業高等学校卒業"}
                        </ListItem>
                        <Divider />
                        <ListItem>
                            {"2016年 4月 株式会社　名港フラワーブリッジ　入社"}
                        </ListItem>
                        <ListItem>
                            {"2017年 11月 株式会社　名港フラワーブリッジ　退社"}
                        </ListItem>
                        <Divider />
                        <ListItem>
                            {"2017年 12月 株式会社　デンソーロジテム　入社"}
                        </ListItem>
                        <ListItem>
                            {"2020年 6月 プログラミング学習スタート　(HTML・CSS・PHP)"}
                        </ListItem>
                        <ListItem>
                            {"2020年 10月 XAMPPを使ってECサイトを作成　(HTML・CSS・PHP・MySQL)"}
                        </ListItem>
                        <ListItem>
                            {"2020年 10月 PHP・docker・Linuxを使ってメモアプリ作成　(HTML・CSS・PHP・docker・MySQL・bootstrap)"}
                        </ListItem>
                        <ListItem>
                            {"2020年 12月 JavaScript・Reactの学習開始　(プログラミングスクール Code Villege受講)"}
                        </ListItem>
                        <ListItem>
                            {"2021年 2月～ 独学でタイピングゲーム・Chat-Bot作成(React・firebase・Material-UI)"}
                        </ListItem>
                    </List>
                </List>
            </TextBox >
        </PanelBox >

    );
}

export default Home