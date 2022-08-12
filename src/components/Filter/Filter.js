import React from 'react'
import { useState } from "react";

function Filter() {
    const [isFilterClicked, setIsFilterClicked] = useState(false);

    function handleFilterClick() {
        setIsFilterClicked(!isFilterClicked);
    };



  return (
    <>
        <button onClick={handleFilterClick}>Filter by</button>
    </>
  )
}

export default Filter