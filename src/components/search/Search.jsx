import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import './search.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useSearch from '../../context/SearchContext'
const Search = ({showbtn=false}) => {
  const [input, setinput] = useState("")
  const navigate=useNavigate()
  const {setSearchTerm} = useSearch()
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input)

  //do some thing with input
  setSearchTerm(input)
  console.log(input)
  navigate('/search')

}
  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input type="text"  value={input} onChange={e=>setinput(e.target.value)}/>
        <MicIcon className="search-input-icon" />
      </div>
      {showbtn && (
      <div className="search-button">
        <Button type="submit" variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Felling Lucky</Button>
      </div>
      )}
    </form>
  );
};

export default Search;
