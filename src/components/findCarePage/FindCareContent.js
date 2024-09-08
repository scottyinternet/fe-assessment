import React from 'react'

export default function FindCareContent() {
    let elements = []
    for(let i = 0; i < 50; i++) {
        elements.push(<p> Hello Scott {i} </p>)
    }
    return (


        <div class="border content">
            <h1> FindCareMain Works </h1>
            {elements}
        </div>
    ) 
}