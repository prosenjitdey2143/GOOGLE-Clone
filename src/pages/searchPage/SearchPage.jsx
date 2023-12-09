import React from "react";
import useSearch from "../../context/SearchContext";
import useGoogleSearch from "../../customeHook/useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
// import { SearchIcon, DescriptionIcon } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import "./searchPage.css";
const SearchPage = () => {
  const { searchTerm } = useSearch();
  const { data } = useGoogleSearch(searchTerm);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <div className="searchPage-header-left">
          <Link to="/">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
              alt="google logo"
              className="searchPage-logo"
            />
          </Link>
          <div className="searchPage-header-input">
            <Search crossBtn={true} />
            <div className="related-terms">
              <div className="related-term">Images</div>
              <div className="related-term">News</div>
              <div className="related-term">Shopping</div>
              <div className="related-term">price</div>
              <div className="related-term">Image</div>
              <div className="related-term">Image</div>
            </div>
          </div>
        </div>
        <div className="searchPage-header-right">
          <div className="icons">
            <SettingsIcon />
            <AppsIcon />
            <Avatar />
          </div>
        </div>
      </div>
      <div className="searchPage-body">
        <div className="searching-time">
        {searchTerm &&
          (`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime} second)`)}
        </div>
        {data?.items?.map((item)=>{
          return (
            <div className="searchPage-result">
              <div className="searchResult-header">
                <img src={item.pagemap?.cse_image[0]?.src} alt="" className="resultImg"/> 
                <a href={item.link}>
                  <p className="result-name">
                    {item.displayLink.slice(
                      item.displayLink.indexOf(".") + 1,
                      item.displayLink.lastIndexOf(".")
                    )}
                  </p>
                  <p>{item.displayLink}</p>
                </a>
              </div>
              <div className="searchResult-body">
                <a href={item.link}>
                  <h2 className="result-title">{item.title}</h2>
                
                </a>
                <p className="result-snippet">{item.snippet}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
