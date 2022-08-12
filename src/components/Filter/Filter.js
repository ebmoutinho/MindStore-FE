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
            <>
                <form className='filter-form'>
                    <label>
                        <button name="filter" onClick={handleCategoryClick} value="category">Category</button>
                    </label>
                    <CategoryButton />

                    <label>
                       <button name="filter" onClick={handleRatingClick} value="rating">Rating</button>
                    </label>
                    <RatingButton />

                    <label>
                      <button name="filter" onClick={handlePriceClick} value="price">Price</button>
                    </label>
                    <PriceButton />
                </form>
            </>
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
        function handleRatingChange(event) {
            console.log(event.target.value);
        };

        if(isRatingClicked) {
            return(
                <div>
                    <form className='rating-form'>
                        <label>
                            <input type="radio" name="rating" onChange={handleRatingChange} value="rating from 0 to 1"/>
                            0 - 1
                        </label>

                        <label>
                            <input type="radio" name="rating" onChange={handleRatingChange} value="rating from 1.1 to 2"/>
                            1.1 - 2
                        </label>

                        <label>
                            <input type="radio" name="rating" onChange={handleRatingChange} value="rating from 2.1 to 3"/>
                            2.1 - 3
                        </label>

                        <label>
                            <input type="radio" name="rating" onChange={handleRatingChange} value="rating from 3.1 to 4"/>
                            3.1 - 4
                        </label>

                        <label>
                            <input type="radio" name="rating" onChange={handleRatingChange} value="rating from 4.1 to 5"/>
                            4.1 - 5
                        </label>
                    </form>
                </div>
            );
        } else {
            return;
        }
        
    };

    function PriceButton() {
        function handlePriceChange(event) {
            console.log(event.target.value);
        };

        if(isPriceClicked) {
            return (
                <div>
                    <form className='price-form'>
                        <label>
                            <input type="radio" name="price" onChange={handlePriceChange} value="price from 0 to "/>
                        </label>
                    </form>
                </div>
            );
        } else {
            return;
        }
        
    };
    

  return (
    <>
        <button onClick={handleFilterClick}>Filter by</button>
        <FilterMainButton />

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