import { useEffect } from "react";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";

function App() {
  const searchMovies = async (title) => {
    const respone = await fetch(`${API_URL}&s=${title}`);
    const data = await respone.json();
    console.log(data.Search)
  };

  useEffect(() => {
    searchMovies("titanic");
  }, []);
  return <h1>app</h1>;
}

export default App;
