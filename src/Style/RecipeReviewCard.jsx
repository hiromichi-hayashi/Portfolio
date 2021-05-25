import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import typing from '../Style/img/typing.png';
import chatBot from '../Style/img/chatBot.png';
import web from '../Style/img/web.png';

import TextBox from './TextBox';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-around",
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const content = [
    {
        title: "英単語タイピングゲーム",
        img: typing,
        text: "英単語数2000種類のタイピングゲーム。1分経過後タイピング結果をTwitterに投稿可能",
        content: "React・firebase・Material-UI",
        url: "https://chatbot-demo-d5a78.web.app/",
        gitHubCode: "https://github.com/hiromichi-hayashi/React_typing"
    },
    {
        title: "対話式Chat-bot",
        img: chatBot,
        text: "旅行先を提案してくれるLINE風Chat-Bot。解答後GoogleMapでオススメの場所を表示",
        content: "React・firebase・Material-UI・google-map-react",
        url: "https://chatbot-b5d04.web.app/",
        gitHubCode: "https://github.com/hiromichi-hayashi/Chatbot"
    },
    {
        title: "Webサイト Demo",
        img: web,
        text: "初めて作成した美容院のDemoサイト",
        content: "HTML・CSS・javaScript"
    },

]

const RecipeReviewCard = ({ title }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <TextBox>
                    <Title>
                        {title}
                    </Title>
                </TextBox>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {content.map((value, key) => (
                            <Grid item key={key.toString()} xs={12} sm={6} md={6} lg={6}>
                                <Link href={value.url} color="inherit" target="_blank">
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={value.img}
                                            title={value.title}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="subtitle2" gutterBottom>
                                                {value.text}
                                            </Typography>
                                            <Typography variant="subtitle2" color='secondary' gutterBottom>
                                                {value.content}
                                            </Typography>
                                            <Link href={value.gitHubCode} target="_blank">
                                                <Typography>
                                                    GitHubへ
                                            </Typography>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default RecipeReviewCard;