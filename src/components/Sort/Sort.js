import React, { useState } from 'react';
import "./sort.css";
import arrowDown from "../../assets/arrow-down.png";
import arrowRight from "../../assets/arrow-right.png";

function Sort() {
    const [choice, setChoice] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    

    async function handleChange(e) {
        console.log(e.target.value)

        const direction = e.target.value;

        const response = await fetch(`/api/v1/users/products?direction=${direction}&field=title&page=1&pagesize=9`)
        const json = await response.json();
        console.log(json);
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