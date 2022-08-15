import React, { useEffect, useState } from 'react';
import "./sort.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";

function Sort(props) {
    const { handleSortEvent } = props;
    const [choice, setChoice] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    async function handleChange(e) {
        const direction = e.target.value;
        handleSortEvent(direction);
        console.log(direction);
    }
    
    function handleClick() {
        setIsClicked(!isClicked);
        setChoice(!choice);
    }

    function SortOptions() {
        if (choice === true) {
            return (
                <div>
                    <form className='sort-form'>
                        <label className='sort-radio-label' htmlFor="ascending">
                            <input className='sort-radio' id='ascending' type="radio" name='sort' onChange={handleChange} value="ASC" />
                            Ascending Order
                        </label>

                        <label className='sort-radio-label' htmlFor="descending">
                            <input className='sort-radio' id='descending' type="radio" name='sort' onChange={handleChange} value="DESC" />
                            Descending Order
                        </label>
                    </form>
                </div>
            )
        }
        return;
    }


    return (
        <>
            <div className='sort-container'>
                <button className="sort-button" onClick={handleClick}>
                    Sort by
                    {isClicked ?
                        <img className="arrow-down" src={arrowDown} alt="" /> :
                        <img className="arrow-right" src={arrowRight} alt="" />
                    }
                </button>
                <SortOptions /> {/*consoante true or false, mostra form ou só botao */}
            </div>
        </>
    )
}

export default Sort;