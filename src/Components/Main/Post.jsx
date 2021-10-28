import React from 'react'

const Post = ({post, userData}) => {
    const userObj = userData.filter(user => user.id === post.user_id);

    const date = post.created_at.slice(0, 10);
    let slash = date.replaceAll("-", "/");
    let dateFormat = slash.slice(5) + "/" + slash.slice(0, 4);



    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='user-info'>
                    <h5>Posted by <span className="username-color">u/{userObj[0]?.username}</span> on {dateFormat}</h5><button className="delete-X" onClick={() => console.log("wtf")}>X</button>
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
                <button className="upvotes-button">👍 {post.upvotes} Upvotes</button> <button className="downvotes-button">👎 {post.downvotes} Downvotes</button>
            </div>
            <br />
            <div className='post-btn-section'>
                <button className='comment-btn'>View Comments</button>
            </div>
        </div>
       
    )
}

export default Post
