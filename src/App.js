import {useEffect, useState} from "react"

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292")
      .then(resp => resp.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="App">
      {data.message}
    </div>
  );
}

export default App;
