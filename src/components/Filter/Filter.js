import React from "react";
import { useState } from "react";
import "./filter.css";
import RangeBar from "../RangeBar/RangeBar";
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";

function Filter() {
	const [isFilterClicked, setIsFilterClicked] = useState(false);
	const [isCategoryClicked, setIsCategoryClicked] = useState(false);
	const [isRatingClicked, setIsRatingClicked] = useState(false);
	const [isPriceClicked, setIsPriceClicked] = useState(false);

	function FilterMainButton() {

		function handleCategoryClick() {
			setIsCategoryClicked(!isCategoryClicked);
			setIsRatingClicked(false);
			setIsPriceClicked(false);
			console.log("category");
		}
		function handleRatingClick() {
			setIsRatingClicked(!isRatingClicked);
			setIsCategoryClicked(false);
			setIsPriceClicked(false);
			console.log("rating");
		}
		function handlePriceClick() {
			setIsPriceClicked(!isPriceClicked);
			setIsCategoryClicked(false);
			setIsRatingClicked(false);
			console.log("price");
		}

		if (isFilterClicked) {
			return (
				//form
				<>
					<div className="inner-filter-container">
						<label>
							<button className="category-button" name="filter" onClick={handleCategoryClick} value="category">
								Category
								{isCategoryClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<CategoryButton />

						<label>
							<button className="rating-button" name="filter" onClick={handleRatingClick} value="rating">
								Rating
								{isRatingClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<RatingButton />

						<label>
							<button className="price-button" name="filter" onClick={handlePriceClick} value="price">
								Price
								{isPriceClicked ?
                        		<img className="arrow-down" src={arrowDown} alt="" /> :
                        		<img className="arrow-right" src={arrowRight} alt="" />
                    			}
							</button>
						</label>
						<PriceButton />
					</div>
				</>
			);
		} else {
			return;
		}
	} //FilterMainButton
	function handleFilterClick() {
		setIsFilterClicked(!isFilterClicked);
		setIsCategoryClicked(false); //para fechar as opcoes do botao quando abro e fecho o filter(principal)
		setIsRatingClicked(false);
		setIsPriceClicked(false);
		console.log("filter");
	}

	function CategoryButton() {
		function handleCategoryChange(event) {
			console.log(event.target.value);
		}

		if (isCategoryClicked) {
			return (
				<div>
					<form className="category-form">
						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="women's clothing" />
							Women’s Clothing
						</label>

						<label className='category-radio-label'>
							<input className='category-radio'  type="radio" name="category" onChange={handleCategoryChange} value="men's clothing" />
							Men’s Clothing
						</label>

						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="jewelery" />
							Jewellery
						</label>

						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="electronics" />
							Electronics
						</label>
					</form>
				</div>
			);
		} else {
			return;
		}
	}

	function RatingButton() {
		function handleRatingChange(event) {
			console.log(event.target.value);
		}

		if (isRatingClicked) {
			return (
				<div>
					<form className="rating-form">
						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="rating from 0 to 1" />0 - 1
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="rating from 1.1 to 2" />
							1.1 - 2
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="rating from 2.1 to 3" />
							2.1 - 3
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="rating from 3.1 to 4" />
							3.1 - 4
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="rating from 4.1 to 5" />
							4.1 - 5
						</label>
					</form>
				</div>
			);
		} else {
			return;
		}
	}

	function PriceButton() {
	
		if (isPriceClicked) {
			return (
				<>
					<RangeBar />
					{/* <input type="range" min="0" max="5" value={value} onChange={(e) => setValue(e.target.value)} />
                        {value}
						 */}

					{/* <form className="price-form">
						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 0 to 10" />
							0€ to 10€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 11 to 20" />
							11€ to 20€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 21 to 50" />
							21€ to 50€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 51 to 100" />
							51€ to 100€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 51 to 100" />
							51€ to 100€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="price from 101 to 500" />
							101 to 500€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange} value="more than 500" />
							more than 500€
						</label>
					</form> */}
				</>
			);
		} else {
			return;
		}
	}

	return (
		<>
			<div className="filter-container">
				<button className="filter-button" onClick={handleFilterClick}>
					Filter by
					{isFilterClicked ? <img className="arrow-down" src={arrowDown} alt="" /> : <img className="arrow-right" src={arrowRight} alt="" />}
				</button>
				<FilterMainButton />
				{/* <input type="range" min="0" max="5" value={value} onChange={(e) => setValue(e.target.value)} />
                        {value} */}
			</div>
		</>
	);
}

export default Filter;

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
