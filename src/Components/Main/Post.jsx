import React from 'react'

const Post = ({post}) => {



    return (
        <article className='single-post'>
            <div className='user-info'>
                <h5>Posted by u/{post.author} at   {post.published_at}</h5>
            </div>
            <div className='post-info'>
                <h3>{post.title}</h3>
            </div>
            <img src={post.image} alt={post.title}/> 
            <content>
                
                <p>
                    {post.description}
                </p>
            </content>
        </article>
    )
}

export default Post
