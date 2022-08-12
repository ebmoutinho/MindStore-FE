import React from 'react'
import { useState } from "react";
import "./rangebar.css";

function RangeBar() {
    const [valueMin, setValueMin] = useState(0);
    const [valueMax, setValueMax] = useState(0);
    const [finalPrice, setFinalPrice] = useState({});



    function handleMinPriceChange(event) {
        setValueMin(event.target.value)

        setTimeout(() => {
            console.log("min", event.target.value)
        }, 1500);
    };

    function handleMaxPriceChange(event) {
        setValueMax(event.target.value)

        setTimeout(() => {
            console.log("max", event.target.value)
        }, 1500);
    };
    
    
    

  return (
    <>
        <input className="range-bar" type="range" min="0" max="500" step="5" value={valueMin} onChange={handleMinPriceChange} />
        <input className="range-bar" type="range" min="0" max="500" step="5" value={valueMax} onChange={handleMaxPriceChange} />
        {/* <InputRange maxValue={500} minValue={0} value={value} onChange={handlePriceChange} /> */}
        {valueMin}€ to {valueMax}€
    </>
  )
}

export default RangeBar