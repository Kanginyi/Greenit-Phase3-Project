import {useState} from "react"
import Posts from './Components/Main/Posts'
import postData from './data'

function App() {
  const [data, setData] = useState(postData);

//   useEffect(() => {
//     fetch("http://localhost:9292")
//       .then(resp => resp.json())
//       .then(data => setData(data))
//   }, [])


  return (
    <div className="App">
      {/* {data.message} */}
      <header />
      <main> 
        <Posts data={data}/>
      </main>
      <footer />
    </div>
  );
}

export default App;
