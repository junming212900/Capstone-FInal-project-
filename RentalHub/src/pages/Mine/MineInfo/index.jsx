// MineInfo.jsx
import React from 'react';

const MineInfo = ({ username, cityName }) => {
    return (
        <div>
            <h2>Welcome, {username}</h2>
            <p>City: {cityName}</p>
        </div>
    );
};

export default MineInfo;
