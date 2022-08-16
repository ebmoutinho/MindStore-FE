import React from "react";
import { useState } from "react";
import "./filter.css";
import RangeBar from "../RangeBar/RangeBar";
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";
import starBlack from "../../assets/star-grey-darker.png";

function Filter(props) {
	const { handleCategoryFetch, handlePriceFetch, handleRatingFetch } = props;
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
			const field = event.target.value;
			const link =`/category?category=${field}&page=1&pagesize=9&direction=`;
			handleCategoryFetch(link);
			console.log(event.target.value);
		}

		if (isCategoryClicked) {
			return (
				<div>
					<form className="category-form">
						<label className='category-radio-label'>
							<input className='category-radio' type="radio" name="category" onChange={handleCategoryChange} value="women's+clothing" />
							Women’s Clothing
						</label>

						<label className='category-radio-label'>
							<input className='category-radio'  type="radio" name="category" onChange={handleCategoryChange} value="men's+clothing" />
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
		// const rating01 = "0.0";//{min: 0, max: 1.0};
		// const rating02 = {min: 1.1, max: 2.0};
		// const rating03 = {min: 2.1, max: 3.0};
		// const rating04 = {min: 3.1, max: 4.0};
		// const rating05 = {min: 4.1, max: 5.0};

		function handleRatingChange(event) {
			console.log(event.target.value);
			// const ratingId = event.target.value;
			// handleRatingFetch(rating01);
		}

		if (isRatingClicked) {
			return (
				<div>
					<form className="rating-form">
						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 1.1, max: 2.0}" />
							<img src={starBlack} alt="" /> 
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 1.1, max: 2.0}" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 2.1, max: 3.0}" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 3.1, max: 4.0}" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>

						<label className='rating-radio-label'>
							<input className='rating-radio' type="radio" name="rating" onChange={handleRatingChange} value="{min: 4.1, max: 5.0}" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
							<img src={starBlack} alt="" />
						</label>
					</form>
				</div>
			);
		} else {
			return;
		}
	}

	function PriceButton() {
		const priceObject01 = {min: 0, max: 50};
		const priceObject02 = {min: 51, max: 100};
		const priceObject03 = {min: 101, max: 300};
		const priceObject04 = {min: 301, max: 800};
		const priceObject05 = {min: 801, max: 1200};
		const priceObject06 = {min: 1201, max: 3000};
		const priceObject07 = {min: 3001, max: 5000};

		function handlePriceChange01() {
			handlePriceFetch(priceObject01);
		}
		function handlePriceChange02() {
			handlePriceFetch(priceObject02);
		}
		function handlePriceChange03() {
			handlePriceFetch(priceObject03);
		}
		function handlePriceChange04() {
			handlePriceFetch(priceObject04);
		}
		function handlePriceChange05() {
			handlePriceFetch(priceObject05);
		}
		function handlePriceChange06() {
			handlePriceFetch(priceObject06);
		}
		function handlePriceChange07() {
			handlePriceFetch(priceObject07);
		}
	
		/**
		 * 	if (event.target.value === priceObject01) {
				console.log("priceObject01");
				handlePriceFetch(priceObject01);
			} else if (event.target.value === priceObject02) {
				console.log("priceObject02");
				handlePriceFetch(priceObject02);
			} else if (event.target.value === priceObject03) {
				console.log("priceObject03");
				handlePriceFetch(priceObject03);
			} else if (event.target.value === priceObject04) {
				console.log("priceObject04");
				handlePriceFetch(priceObject04);	
			} else if (event.target.value === priceObject05) { 
				console.log("priceObject05");
				handlePriceFetch(priceObject05);
			} else if (event.target.value === priceObject06) {
				console.log("priceObject06");
				handleCategoryFetch(priceObject06);
			} else if (event.target.value === priceObject07) {
				console.log("priceObject07");
				handlePriceFetch(priceObject07);
			}
		 */
		if (isPriceClicked) {
			return (
				<>
					{/* <RangeBar handlePriceFetch={handlePriceFetch} /> */}
					<form className="price-form">
						<label>
							<input type="radio" name="price" onChange={handlePriceChange01} value={priceObject01} />
							0€ to 50€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange02} value={priceObject02} />
							51€ to 100€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange03} value={priceObject03} />
							101€ to 300€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange04} value={priceObject04} />
							301€ to 800€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange05} value={priceObject05} />
							801€ to 1200€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange06} value={priceObject06} />
							1201 to 3000€
						</label>

						<label>
							<input type="radio" name="price" onChange={handlePriceChange07} value={priceObject07} />
							3001 to 5000€
						</label>
					</form>
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
