import React, { useState } from 'react'

function Sort() {
    const [choice, setChoice] = useState(false);

    function handleChange(e) {
        console.log(e.target.value)
    }

    function handleClick() {
        setChoice(!choice);
    }

    function SortOptions() {
        if (choice === true) {
            return (
                <div>
                     <form> 
                        <label htmlFor="ascending">
                            <input type="radio" name='sort' onChange={handleChange} value="asc" />
                            Ascending Order
                        </label>

                        <label htmlFor="descending">
                            <input type="radio" name='sort' onChange={handleChange} value="desc"/>
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
            <button onClick={handleClick}>Sort By</button>
            <SortOptions />
        </>
    )
}

export default Sort;