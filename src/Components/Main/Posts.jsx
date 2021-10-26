import Post from "./Post"

const Posts = ({data}) => {


    const postData = data.map(post=> <Post post={post} key={post.id}/>)
    console.log(data)
    return (
        <div>
            {postData}
        </div>
    )
}

export default Posts
