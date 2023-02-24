import { useState } from "react";

// components
import Header from "./components/Header";
import InputAdress from "./components/InputAdress";
import DetailsAdress from "./components/DetailsAdress";

// style
import "./App.css";

function App() {
  // Init
  const [location, setLocation] = useState();

  // Return
  return (
    <div className="App container">
      <Header />
      <InputAdress setLocation={setLocation} />
      <div className="results">
        <DetailsAdress location={location} />
      </div>
    </div>
  );
}

export default App;
