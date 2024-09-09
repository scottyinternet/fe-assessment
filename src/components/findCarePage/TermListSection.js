import React from 'react'

export default function TermListSection(props) {
    let elements = []
    props.terms.forEach(term => {
        elements.push(<a href={term.link} key={term.title} className="term-link">{term.title}</a>)
    })
    const midpoint = Math.ceil(elements.length / 2);

    const leftColumnElements = elements.slice(0, midpoint);
    const rightColumnElements = elements.slice(midpoint);

    return (
        <div className="term-list">
            <div className="left-col">
                {leftColumnElements}
            </div>
            <div className="right-col">
                {rightColumnElements}
            </div>
        </div>
    ) 
}