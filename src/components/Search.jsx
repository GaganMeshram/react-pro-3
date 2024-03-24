import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="form-control me-2"
        placeholder="Search..."
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default Search;
