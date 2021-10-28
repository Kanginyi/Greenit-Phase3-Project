import {useState, useEffect} from "react"
import Posts from './Components/Main/Posts'
import NavBar from './Components/Header/NavBar'
import Footer from "./Components/Footer/Footer"
import CategoryBar from "./Components/Main/CategoryBar"
import Users from "./Components/Main/Users"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/forum_posts`)
      .then(resp => resp.json())
      .then(data => setPostData(data))
  }, [])

  const [searchValue, setSearchValue] = useState("");

  function search(e) {
    setSearchValue(e.target.value);
  }

  //FORM SUBMITS
  const handleAddPost = post => {
    fetch(`http://localhost:9292/forum_posts`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => {
      setPostData([
       post, ...postData
      ])
    })
  }

  //post delete
  const handleDelete = id => {
    fetch(`http://localhost:9292/forum_posts/${id}`,{
      method : 'DELETE'
    })
    .then(() => {
      const deletePost = postData.filter(post => post.id !== id)
      setPostData(deletePost)
    })
  }
  

  return (
    <Router>
      <div>
        <header className='sticky'>
          <NavBar search={search}/> 
        </header>
        <main> 
          <CategoryBar handleAddPost={ handleAddPost}/>
            <Switch>
              <Route path="/users">
                <Users />
              </Route>  
              <Route path="/">
                <Posts data={postData} search={search} searchValue={searchValue}
                handleDelete={handleDelete}/>
              </Route>

            </Switch>
        </main>
        <footer> 
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

