import React, { useEffect } from 'react'
import { useState } from "react";
import "./rangebar.css";

function RangeBar() {
    const [valueMin, setValueMin] = useState(0);
    const [valueMax, setValueMax] = useState(0);
    const [finalPrice, setFinalPrice] = useState([0,0]);

    function handleMinPriceChange(event) {
        // setTimeout( () => {
            setValueMin(event.target.value);
            setFinalPrice([valueMin, valueMax]);
        // }, 1500);
    };

    function handleMaxPriceChange(event) {
        // setTimeout( () => {
            setValueMax(event.target.value);
            setFinalPrice([valueMin, valueMax]);
        // }, 1500);
    };

    useEffect( () => {
        setTimeout(() => {
            // setFinalPrice([valueMinRef, valueMaxRef]);
            // console.log("finalPrice", valueMinRef.current.value, valueMaxRef.current.value);
            console.log("finalPrice", finalPrice);
        }, 2000);

    }, [finalPrice]); //imprime cada x que esta variável [] é alterada -> de 5 em 5 em cada lado

    
    

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