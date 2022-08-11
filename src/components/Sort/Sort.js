import React from 'react'

function Sort() {
    function handleClick() {
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="asc">
                            <input type="radio" name='asc' />
                            Ascending Order
                        </label>
                    </li>

                    <li>
                        <label htmlFor="asc">
                            <input type="radio" name='asc' />
                            Descending Order
                        </label>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <button onClick={handleClick}>Sort By</button>
        </>
    )
}

export default Sort;