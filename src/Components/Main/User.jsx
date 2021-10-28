import React from 'react';

function User ({username}) {
    return (
        <div className="user-div">
            <h2>{username}</h2>
        </div>
    );
}

export default User;