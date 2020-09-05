import React, { useEffect, useState } from 'react';
import {CssBaseline, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import User from '../User/User';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(144, 238, 202, 0.979)',
      paddingTop: '0px', 
      marginTop: '0px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: 'rgba(144, 238, 202, 0.979)',
      border: 'none'
    },
  }));

const Home = () => {
    const classes = useStyles();

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed>

                <p style={{fontSize: '40px', textAlign: 'center'}}>Total Posts: {user.length}</p>
            
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Paper className={classes.paper}>
                            {
                                user.map(user => <User user={user}></User>)
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Home;