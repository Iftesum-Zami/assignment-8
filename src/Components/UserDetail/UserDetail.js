import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Container } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

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

    const {title, body, id} = user;
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed>

            <div style={{padding: '0px 200px'}} className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <div>
                            <p>This is post detail of id({id}): </p>
                            <h1 style={{color: 'red'}}>Title: {title}</h1>
                            <h4>Body: {body}</h4>
                        </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <div style={{alignItems: 'center'  }} className={classes.root} >
                    <Grid container>
                        <Grid>
                            <CommentIcon />
                        </Grid>
                        <Grid>
                            <p style={{textAlign: 'center', fontSize: '30px'}}><u>Comments: {comment.length}</u></p>
                        </Grid>
                    </Grid>
                </div>
                    
                {
                    comment.map( (comment) => <Comment comment={comment}></Comment>)
                }
                    
                </Grid>
            </Grid>

            </Container>
        </div>
    );
};

export default UserDetail;