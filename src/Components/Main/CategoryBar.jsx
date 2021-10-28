import { useState } from 'react'
import Form from './Form'

import { Link } from 'react-router-dom'

const CategoryBar = ({handleAddPost}) => {
    const [showForum, setShowForum] = useState(null)


    return (
        <>
        <div className='category-bar'>
            <button>Hot</button>
            <button>Everywhere</button>          
            <button>New</button>
            <Link to="/users">Users</Link>
            <showforum className='show-forum'> 
                <button onClick={() => setShowForum(true)}>Make Post</button>
            </showforum>
           
        </div>
        <div>
            {showForum ? <Form setShowForum={setShowForum} handleAddPost={handleAddPost}/> : false}
        </div>
        </>
    )
}

export default CategoryBar
