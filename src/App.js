import {useState, useEffect} from "react"
import Posts from './Components/Main/Posts'
import NavBar from './Components/Header/NavBar'
import Footer from "./Components/Footer/Footer"
import CategoryBar from "./Components/Main/CategoryBar"


function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/forum_posts`)
      .then(resp => resp.json())
      .then(data => setPostData(data))
  }, [])


  return (
    <div>
      <header className='sticky'>
        <NavBar /> 
      </header>
      <main> 
        <CategoryBar />
          <Posts data={postData}/>
      </main>
      <footer> 
        <Footer />
      </footer>
    </div>
  );
}

export default App;
