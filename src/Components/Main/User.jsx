import React, { useState, useEffect } from 'react';

function User ({username, id}) {
    // This is for comments length
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/comments")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0) {
                    setCommentsData(data);
                }
            });
    }, [])

    const checkComments = commentsData.filter(comment => comment.user_id === id);

    // This is for forums length
    const [forumsData, setForumsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/forum_posts")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0) {
                    setForumsData(data);
                }
            })
    }, [])

    const checkForums = forumsData.filter(forum => forum.user_id === id);

    return (
        <div className="user-div">
            <h2 className="username-color">{username}</h2>
            <h4>Total Posts: {checkForums.length}</h4>
            <h4>Total Comments: {checkComments.length}</h4>
        </div>
    );
}

export default User;