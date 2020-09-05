import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const UserDetail = () => {
    const classes = useStyles();

    const {userId} = useParams();

    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    const [img, setImg] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImg(data))
    }, [])

    const {title, body, id} = user;
    const postStyle = {
            backgroundColor: 'orange', 
            padding: '10px', 
            borderRadius: '5px', 
            margin: '20px'
        }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed>

                <div style={postStyle}>
                    <p>This is post detail of id({id}): </p>
                    <h1 style={{color: 'red'}}>Title: {title}</h1>
                    <h4>Body: {body}</h4>
                </div>
                

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Paper className={classes.paper}>
                        <p style={{textAlign: 'center', fontSize: '30px'}}><u>Comments: {comment.length}</u></p>
                            {
                                comment.map(comment => <Comment comment={comment}></Comment>)
                            }
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default UserDetail;