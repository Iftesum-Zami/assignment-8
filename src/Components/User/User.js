import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {title, body, id} = props.user;
    const fontStyle = {
        color: 'black'
    }

    const userListStyle = {
        // border: '1px solid purple',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(-45deg, orange, hotpink)'
    }
    return (
        <div style={userListStyle}>
            <h1 style={fontStyle}>{title}</h1>
            <p>{body}</p>
            <Link to={`/about/${id}`}>
                <Button variant="contained" color="secondary">Show detail</Button>
            </Link>
        </div>
    );
};

export default User;