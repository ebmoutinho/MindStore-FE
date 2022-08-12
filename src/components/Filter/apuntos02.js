import React from 'react'
import { useState } from "react";
import "./filter.css";

function Filter() {
    const [isFilterClicked, setIsFilterClicked] = useState(false);
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);
    const [isRatingClicked, setIsRatingClicked] = useState(false);
    const [isPriceClicked, setIsPriceClicked] = useState(false);

    function FilterMainButton() {
        // function handleFilterChange(event) {
        //     console.log(event.target.value);
        // };
        function handleCategoryClick() {
            setIsCategoryClicked(!isCategoryClicked);
            console.log("category");
        }
        function handleRatingClick() {
            setIsRatingClicked(!isRatingClicked);
            console.log("rating");
        }
        function handlePriceClick() {
            setIsPriceClicked(!isPriceClicked);
            console.log("price");
        }

        if(isFilterClicked) {
            return( //form
                <form className='filter-form'>
                    <label>
                        <button name="filter" onClick={handleCategoryClick} value="category">Category</button>
                    </label>

                    <label>
                       <button name="filter" onClick={handleRatingClick} value="rating">Rating</button>
                    </label>

                    <label>
                      <button name="filter" onClick={handlePriceClick} value="price">Price</button>
                    </label>
                </form>
            ) 
        } else {
            return;
        }
    }; //FilterMainButton
    function handleFilterClick() {
        setIsFilterClicked(!isFilterClicked);
        console.log("filter");
    };

    function CategoryButton() {
        function handleCategoryChange(event) {
            console.log(event.target.value);
        };
        
        if(isCategoryClicked) {
            return (
                <div>
                    <form className='category-form'> 
                        <label>
                            <input type="radio" name='category' onChange={handleCategoryChange} value="women's clothing" />
                            Women’s Clothing
                        </label>

                        <label>
                            <input type="radio" name='category' onChange={handleCategoryChange} value="men's clothing" />
                            Men’s Clothing
                        </label>
                        
                        <label>
                            <input type="radio" name='category' onChange={handleCategoryChange} value="jewelery" />
                            Jewellery
                        </label>
                                                
                        <label>
                            <input type="radio" name='category' onChange={handleCategoryChange} value="electronics" />
                            Electronics
                        </label>
                    </form>
                </div>
            );
        } else {
            return;
        }
        
    };

    function RatingButton() {
        
    };

    function PriceButton() {
        
    };
    

  return (
    <>
        <button onClick={handleFilterClick}>Filter by</button>
        <FilterMainButton />
        <CategoryButton />
        <RatingButton />
        <PriceButton />
    </>
  )
}

export default Filter



/*
    <>
        <button onClick={handleFilterClick}>Filter by</button>
        <FilterMainButton>
            <CategoryButton />
            <RatingButton />
            <PriceButton />
        </FilterMainButton>
    </>
*/