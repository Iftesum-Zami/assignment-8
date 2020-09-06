import React from 'react';
import Image from '../Image/Image';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'blue'
  },
}));

const Comment = (props) => {
    const {name, email, body, id} = props.comment;

    const classes = useStyles();

    const commentStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        textAlign: 'left',
        boxShadow: '5px 5px 10px gray',
        backgroundImage: 'linear-gradient(-45deg, lightgreen, lightblue)',
    }

    const imageStyle = {
        textAlign: 'center',
        justifyContent: 'center',
    }
    return (
    
        <div style={commentStyle} className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    
                        <div style={imageStyle}>
                            <Image></Image>
                            
                        </div>
                    
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <h3>Name: {name}</h3>
                        <p>ID: {id}</p>
                        <p>Email: {email}</p>
                        <p>Body: {body}</p>
                        <Button variant="contained" color="primary">
                            Reply
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Comment;