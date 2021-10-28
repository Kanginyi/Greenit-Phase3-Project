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


  return (
    <Router>
      <div>
        <header className='sticky'>
          <NavBar /> 
        </header>
        <main> 
          <CategoryBar />
            <Switch>
              <Route path="/users">
                <Users />
              </Route>  
              <Route path="/">
                <Posts data={postData}/>
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

