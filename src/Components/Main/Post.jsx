import React from 'react'

const Post = ({post}) => {



    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='user-info'>
                    <h5>Posted by u/{post.author} at   {post.published_at}</h5>
                </div>
                <div className='post-info'>
                    <h3>{post.title}</h3>
                </div>
                <img src={post.image} alt={post.title}/> 
                <div>        
                    <p>
                        {post.description}
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
