import React, { useState } from "react";
import "../styles/landing.css";
import { Draggable } from "react-drag-reorder";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = ({ Images, userSignOut, authUser, Landing, Drag }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState(Images);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearchInput(newSearch);

    // Filter the images based on the search query
    const filteredImages = Images.filter((item) =>
      item.tag.toLowerCase().includes(newSearch.toLowerCase())
    );

    setFilter(filteredImages);
  };

  return (
    <>
      <div className="bckg">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 p-3 p-md-5">
          <div className="d-flex">
            {authUser ? (
              <Button
                className="ms-3 button"
                onClick={userSignOut}
                variant="secondary"
                type="Submit"
              >
                <Link to="/">Log Out</Link>
              </Button>
            ) : 
            (
              <Button
                className="ms-3 button"
                variant="secondary"
                type="Submit"
              >
                 <Link to="/">Log out</Link> 
              </Button>
            )}
          </div>
          <div className="d-flex align-items-center">
            <input
              className="w-50 w-md-25 search-button"
              type="search"
              placeholder="Search here"
              onChange={handleChange}
              value={searchInput}
            />
          </div>
        </div>
        <div className="drag-container">
          <Drag Images={filter}></Drag>
        </div>
      </div>
    </>
  );
};

export default HomePage;
