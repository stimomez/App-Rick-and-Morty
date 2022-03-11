import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';

function App() {

  const [ locations, setLocations ] = useState({})

  useEffect(() =>{
    const random = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocations(res.data))
},[])


  console.log(locations)
  return (
    <div className="App">
      <SearchBox setLocations={setLocations}/>
     <h2>{locations.name}</h2>
     <ResidentsList residents={ locations.residents }/>
    </div>
  );
}

export default App;
