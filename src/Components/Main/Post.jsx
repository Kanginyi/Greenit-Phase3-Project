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
            .then(data => {
                if (data.upvotes) {
                    setUpvotes(data.upvotes)
                } else {
                    setUpvotes(0)
                }
            })
    }, [])

    const handleUpvotes = () => {
        setUpvotes(prevValue => prevValue + 1);
    }

    // Handle downvotes
    const [downvotes, setDownvotes] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:9292/forum_posts/${post.id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.downvotes) {
                    setDownvotes(data.downvotes)
                } else {
                    setDownvotes(0)
                }
            })
    }, [])

    const handleDownvotes = () => {
        setDownvotes(prevValue => prevValue + 1);

        // fetch(`http:localhost:9292/forum_posts/${post.id}`, {
        //     method: "PATCH",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({downvotes: downvotes})
        // })
        //     .then(resp => resp.json())
        //     .then(data => console.log(data))
    }


    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='user-info'>
                    <h5>Posted by <span className="username-color">u/{userObj[0]?.username}</span> on {dateFormat}</h5><button className="delete-X" onClick={() => handleDelete(post.id)}>X</button>
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
