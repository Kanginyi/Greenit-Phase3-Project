import React, { useState, useEffect } from 'react';
import User from './User';

function Users() {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0 ) {
                    setUserData(data)
                }
            })
    }, [])

    const checkUsers = userData.map(user => <User key={user.id} username={user.username}/>)
    console.log(checkUsers);

    return (
        <>
            {checkUsers}
        </>
    );
}

export default Users;