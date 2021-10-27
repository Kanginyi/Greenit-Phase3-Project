import React from 'react'

const Form = ({setShowForum}) => {
    return (
        <>
            <div className='modal-background'>
                    <div>
                        <div className='x-btn-container'>
                            <button className='x-btn' onClick={() => setShowForum(false)}>X</button>
                        </div>
                        <form className='form-modal'>
                            
                            <label for="username">Name</label>
                            <input type="text" id='username'></input>
                        
                            <label for="title">Post Title</label>
                            <input type="text" id='title'></input>
                            
                            <label for="content">Post Content</label>
                            <textarea type="text" id='content' name="content" rows="4" cols="50"></textarea>
                        
                            <label for="image">Image </label>
                            <input type="text" id='image'></input>

                            <input type="submit" id='submit-btn' />
                        </form>
                    </div>            
            </div>
            
        </>
    )
}

export default Form
