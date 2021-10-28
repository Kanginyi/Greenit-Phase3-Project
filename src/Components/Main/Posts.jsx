import Post from "./Post"
import React, {useState, useEffect} from "react";

const Posts = ({data}) => {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > 0 ) {
                    setUserData(data)
                }
            })
    }, [])


    const postData = data.map(post => <Post post={post} key={post.id} userData={userData}/>)
    
    return (
        <div>
            {postData}  
        </div>
    )
}

export default Posts
