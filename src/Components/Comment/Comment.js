import React from 'react';

const Comment = (props) => {
    const {name, email, body, id} = props.comment;
    console.log(props.img);

    const commentStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '10px',
        textAlign: 'left',
        boxShadow: '5px 5px 10px gray',
        backgroundImage: 'linear-gradient(-45deg, lightgreen, lightblue)',
    }
    return (
        <div style={commentStyle}>
            <h4>Name: {name}</h4>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;