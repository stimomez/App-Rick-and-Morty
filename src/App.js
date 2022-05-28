import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import ResidentsList from "./components/ResidentsList";
import LocationInfo from "./components/LocationInfo";
import NoResidents from "./components/NoResidents";
import Footer from "./components/Footer";
import CoverPage from "./components/CoverPage";
function App() {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocations(res.data));
  }, []);

  return (
    <div className="App">
      <CoverPage/>

      <SearchBox setLocations={setLocations} />
      <LocationInfo
        name={locations.name}
        type={locations.type}
        dimension={locations.dimension}
        numberResidents={locations.residents?.length}
      />
      {locations.residents?.length === 0 ? (
        <NoResidents />
      ) : (
        <ResidentsList residents={locations.residents} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
