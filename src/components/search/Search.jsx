import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import './search.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useSearch from '../../context/SearchContext'
import CloseIcon from '@mui/icons-material/Close';
const Search = ({showbtn=false,crossBtn=false}) => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [input, setInput] = useState(searchTerm);
  const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input)

  //do some thing with input
  setSearchTerm(input);
  if (input) navigate("/search");

}
  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" onClick={handleSubmit} />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Google or type a URL"
        />
        {crossBtn && input ? (
          <CloseIcon
            className="search-input-icon crossBtn"
            onClick={()=>setInput('')}
          />
        ) : null}
        <MicIcon className="search-input-icon" />
      </div>
      {showbtn && (
        <div className="search-button">
          <Button type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Felling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
