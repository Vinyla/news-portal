import React from 'react';

const SortOptions = () => {
  return (
    <div className="sort">
      <h3>Sort by:</h3>
      <div className="sort-options">
        <button>Popularity</button>
        <button>Relevance</button>
        <button>Published Date</button>
      </div>
    </div>
  );
};

export default SortOptions;
