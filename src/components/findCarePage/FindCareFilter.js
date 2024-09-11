import React from 'react'
import './FindCarePage.css'

export default function FindCareFilter(props) {

    function getLetters() {
        const result = [];
        for(let i = 0; i < 26; i++) {
            const letter = String.fromCharCode('A'.charCodeAt(0) + i)
            result.push(letter)
        }
        result.push("#")
        return result;  
    }

    const letters = getLetters();

    function getClass(letter) {
        if (props.selectedLetters.includes(letter)) {
            return 'letter-button letter-button-selected'
        }
        else return 'letter-button'
    }

    const letterButtons = letters.map(letter => {
        return <button 
            key={letter} 
            onClick={() => props.handleClick(letter)}
            className = {getClass(letter)}
            disabled = {!props.termListMap.has(letter)}
            >
                {letter}
        </button>
    })

    return (
        <section className="filter">
            <div className="filter-content">
                <div className="filter-title-container">
                    <h4 className="filter-title"> Treatments, Services and Specialties </h4>
                </div>
                <div className="filter-buttons-container">
                    {letterButtons}
                </div>
            </div>
        </section>
    ) 
}
