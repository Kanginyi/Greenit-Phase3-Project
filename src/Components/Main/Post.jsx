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
                    <h5>Posted by u/{userObj[0].username} on {dateFormat}!</h5>
                </div>
                <div className='post-info'>
                    <h3>{post.title}</h3>
                </div>
                {post.image_url ? <img src={post.image_url} alt={post.title}/> : null }
                <div>        
                    <p>
                        {post.content_post}
                    </p>
                </div>
            </article>
            <div className='post-btn-section'>
                <button className='comment-btn'>View Comments</button>
            </div>
        </div>
       
    )
}

export default Post
