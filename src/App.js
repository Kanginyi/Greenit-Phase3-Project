import {useState} from "react"
import Posts from './Components/Main/Posts'
import postData from './data'
import NavBar from './Components/Header/NavBar'
import Footer from "./Components/Footer/Footer"


function App() {
  const [data, setData] = useState(postData);

//   useEffect(() => {
//     fetch("http://localhost:9292")
//       .then(resp => resp.json())
//       .then(data => setData(data))
//   }, [])


  return (
    <div>
      {/* {data.message} */}
      <header>
        <NavBar /> 
      </header>
      <main> 
        <Posts data={data}/>
      </main>
      <footer> 
        <Footer />
      </footer>
    </div>
  );
}

export default App;
