import { useState } from 'react'
import Form from './Form'

const CategoryBar = () => {

    const [showForum, setShowForum] = useState(null)

    return (
        <>
        <div className='category-bar'>
            <button>Hot</button>
            <button>Everywhere</button>          
            <button>New</button>
            <button>Top</button>
            <showforum className='show-forum'> 
                <button onClick={() => setShowForum(true)}>Make Post</button>
            </showforum>
           
        </div>
        <div>
            {showForum ? <Form setShowForum={setShowForum}/> : false}
        </div>
        </>
    )
}

export default CategoryBar
