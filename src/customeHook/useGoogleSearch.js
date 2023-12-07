import React,{useState,useEffect} from 'react'
const API_KEY = import.meta.env.VITE_API_KEY;
const CONTEXT_KEY = import.meta.env.VITE_CONTEXT_KEY;
const useGoogleSearch = (searchTerm) => {
const [data, setData] = useState(null)
useEffect(()=>{
  const fetchData= async()=>{
    fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
    )
      .then((response) => response.json())
      .then((result => setData(result)));
  }

  fetchData()
},[searchTerm])
  return {data}
}

export default useGoogleSearch
