import React from 'react';

const NotFound = () => {
    const errorStyle = {
        display: 'flex',
        justifyContent: 'center' ,
        alignItems: 'center' ,
        color: 'red' ,
        fontSize:'30px' ,
        fontWeight:'900'

    }
    return (
        <div style={errorStyle}>
            <h1>ERROR 404!!! <br/> Sorry No page.. Try Again :(</h1>
        </div>
    );
};

export default NotFound;