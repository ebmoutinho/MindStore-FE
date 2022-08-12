import React from 'react'
import { useState } from "react";

function Filter() {
    const [isFilterClicked, setIsFilterClicked] = useState(false);

    function handleFilterClick() {
        setIsFilterClicked(!isFilterClicked);
    };

    function FilterButton() {
        function handleChange(event) {
            console.log(event.target.value);
        };


        if(isFilterClicked) {
            return( //form
                <form>
                    <label>
                        <input type="radio" name='filter' onChange={handleChange} value="category" />
                        Category
                    </label>

                    <label>
                        <input type="radio" name='filter' onChange={handleChange} value="rating" />
                        Rating
                    </label>

                    <label>
                        <input type="radio" name='filter' onChange={handleChange} value="price" /> {/*value é o que mandamos para o BE*/}
                        Price
                    </label>
                </form>
            ) 
        } else {
            return;
        }
    }

    

  return (
    <>
        <button onClick={handleFilterClick}>Filter by</button>
        <FilterButton />
    </>
  )
}

export default Filter