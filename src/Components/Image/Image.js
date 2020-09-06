import React, { useState, useEffect } from 'react';

const Image = () => {
    
    const [image, setImage] = useState();
    useEffect(() => {
        const url = `https://randomuser.me/api/` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data.results[0].picture.large))
    }, [])

    const imageStyle = {
        borderRadius: '50%',
    }

    return (
        <div>
            <img style={imageStyle} src={image} alt=""/>
        </div>
    );
};

export default Image;