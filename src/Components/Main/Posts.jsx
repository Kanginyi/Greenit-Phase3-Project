import Post from "./Post"
import React, {useState, useEffect} from "react";

const Posts = ({data, search, searchValue}) => {
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

    // console.log(postData[0]);
    // console.log(postData[0].props);
    // console.log(postData[0].props.post);
    // console.log(postData[0].props.post.title);
    // console.log(searchValue);

    // const asdf = searchValue === "" ? postData : postData.filter(forum => forum.props.post.title.toLowerCase() === searchValue.toLowerCase());

    // const filterPosts = postData.filter(forum => {
    //     console.log(forum.props);

    //     forum.props === searchValue
    // });
    

    // console.log(filterPosts);
    
    return (
        <div>
            {postData}  
            {/* {asdf} */}
        </div>
    )
}

export default Posts
