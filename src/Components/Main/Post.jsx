import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

const Post = ({post, userData, handleDelete}) => {
    const userObj = userData.filter(user => user.id === post.user_id);

    // Changing date format
    const date = post.created_at.slice(0, 10);
    let slash = date.replaceAll("-", "/");
    let dateFormat = slash.slice(5) + "/" + slash.slice(0, 4);


    // Getting the initial upvotes data
    const [upvotes, setUpvotes] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:9292/forum_posts/${post.id}`)
            .then(resp => resp.json())
            .then(data => setUpvotes(data.upvotes))
    }, [])

    const handleUpvotes = () => {
        fetch(`http://localhost:9292/forum_posts/${post.id}/edit/upvotes`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({upvotes: upvotes + 1})
        })
            .then(resp => resp.json())
            .then(data => setUpvotes(data.upvotes))
    }

    // Handle downvotes
    const [downvotes, setDownvotes] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:9292/forum_posts/${post.id}`)
            .then(resp => resp.json())
            .then(data => setDownvotes(data.downvotes))
    }, [])

    const handleDownvotes = () => {
        fetch(`http://localhost:9292/forum_posts/${post.id}/edit/downvotes`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({downvotes: downvotes + 1})
        })
            .then(resp => resp.json())
            .then(data => setDownvotes(data.downvotes))
    }

    // Getting the newly created usernames
    const [newUsernames, setNewUsernames] = useState("");

    useEffect(() => {
        fetch(`http://localhost:9292/users/${post.user_id}`)
            .then(resp => resp.json())
            .then(data => setNewUsernames(data?.username))
    }, [])


    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='user-info'>
                    <h5>Posted by <span className="username-color">u/{newUsernames}</span> on {dateFormat}</h5><button className="delete-X" onClick={() => handleDelete(post.id)}>X</button>
                </div>
                <div className='post-info'>
                    <h3 className="forum-post-title">{post.title}</h3>
                </div>
                {post.image_url ? <img src={post.image_url} alt={post.title}/> : null }
                <div>
                    <p>
                        {post.content_post}
                    </p>
                </div>
            </article>
            <div>
                <button
                    onClick={handleUpvotes}
                    className="upvotes-button">
                        👍 {upvotes} Upvotes
                </button> <button
                    onClick={handleDownvotes}
                    className="downvotes-button">
                        👎 {downvotes} Downvotes
                </button>
            </div>
            <br />
            <div className='post-btn-section'>
                <Link to={`/users/${post.id}`}>
                <button className='comment-btn'>View Comments</button>
                </Link>
            </div>
        </div>
       
    )
}

export default Post
