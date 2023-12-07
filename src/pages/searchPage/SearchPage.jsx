import React from "react";
import useSearch from "../../context/SearchContext";
import useGoogleSearch from "../../customeHook/useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import { SearchIcon, DescriptionIcon } from "@mui/icons-material";

import "./searchPage.css";
const SearchPage = () => {
  const { searchTerm } = useSearch();
  const { data } = useGoogleSearch(searchTerm);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
            alt="google logo"
            className="searchPage-logo"
          />
        </Link>
        <div className="searchPage-header-body">
          <Search />
          <div className="searchPage-options">
            <div className="searchPage-options-right">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage-body"></div>
    </div>
  );
};

export default SearchPage;
