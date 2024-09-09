import React, {useState} from 'react'
import TermListSection from './TermListSection'

export default function FindCareContent(props) {
    const elements = [];

    for (const [key, value] of props.termListMap) {
        if(props.selectedLetters.length === 0 || props.selectedLetters.includes(key)){
            elements.push(<h5 className="letter-title" key={key}>{key}</h5>)
            elements.push(<hr className="underline" key={key + 'hr'}></hr>)
            elements.push(<TermListSection key={key + 'termlist'} terms={value} />)
        }
    }
    

    return (
        <div className="border content">
            {elements}
        </div>
    ) 
}