import React, { useState } from 'react';
import Listing from '../views/ListItems';

const ListController = ({ data, onItemClick }) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  return <Listing data={sortedData} onSort={handleSort} onItemClick={onItemClick} />;
};

export default ListController;