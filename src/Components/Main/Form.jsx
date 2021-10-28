import React from 'react'
import { useState } from 'react'

const Form = ({setShowForum, handleAddPost}) => {

    const [postForm, setPostForm] = useState({
        username: "",
        title: "",
        content_post: "",
        image_url: "",
    })

    const handleInputChange = (e) => {
        setPostForm({
            ...postForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddPost(postForm)
    }

    return (
        <>
            <div className='modal-background'>
                    <div>
                        <div className='x-btn-container'>
                            <button className='x-btn' onClick={() => setShowForum(false)}>X</button>
                        </div>
                        <form className='form-modal' onSubmit={handleSubmit}>                  
                            <h4>Name</h4>
                            <input onChange={handleInputChange} type="text"
                            name = "username"
                            value = {postForm.username}
                            />
                        
                            <h4>Title</h4>
                            <input onChange={handleInputChange} type="text" 
                            name = "title"
                            value = {postForm.title}
                            />
                            
                            <h4>Content</h4>
                            <textarea  onChange={handleInputChange}  type="text" name="content_post" rows="4" cols="50"
                            value = {postForm.content_post}
                            />
                        
                            <h4>Image</h4>
                            <input onChange={handleInputChange}  
                            type="text"
                            name="image_url"
                            value={postForm.image_url} />

                            <button id='submit-btn'>Submit</button>
                        </form>
                    </div>            
            </div>
            
        </>
    )
}

export default Form
