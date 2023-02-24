import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { debounce } from "lodash";

// style
import "../style/input-adress.css";

const InputAdress = ({ setLocation }) => {
  // Init
  const [input, setInput] = useState("");
  const [inputToSearch, setInputToSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // functions
  const debounceInput = useRef(
    debounce((text) => {
      setInputToSearch(text);
    }, 500)
  ).current;

  const handleInput = (value) => {
    setInput(value);
    debounceInput(value);
  };

  // UseState
  useEffect(() => {
    const getSuggestions = async (input) => {
      try {
        let url = "https://api-adresse.data.gouv.fr/search/";
        url += "?q=" + input;
        const response = await axios.get(url);
        // console.log(response.data);
        const data = [];
        for (let i = 0; i < response.data?.features.length; i++) {
          if (i === 0) {
            setLocation(response.data.features[0]);
          }
          data.push(response.data.features[i].properties.label);
        }
        setSuggestions(data);
      } catch (error) {
        console.log(error.message);
        alert("Un problème est survenu avec l'API de la BAN");
      }
    };
    if (inputToSearch && inputToSearch.length > 3) {
      getSuggestions(inputToSearch);
    }
  }, [inputToSearch, setLocation]);

  //Return
  return (
    <div className="input">
      <Autocomplete
        freeSolo
        value={input}
        onInputChange={(event, newValue) => {
          handleInput(newValue);
        }}
        options={suggestions}
        renderInput={(params) => {
          return <TextField {...params} label="Entrez une adresse" />;
        }}
      />
    </div>
  );
};

export default InputAdress;
