import React, {useState, useEffect} from 'react'
import FinderCareBanner from './FindCareBanner'
import FindCareFilter from './FindCareFilter'
import FindCareContent from './FindCareContent'

export default function FindCarePage() {
    const [termListMap, setTermListMap] = useState(new Map());
    const [selectedLetters, setSelectedLetters] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data.json`)
        .then(respone => respone.json())
        .then(data => createTermListMap(data.termList))
        .catch(error => console.error('Error fetching data from local file: ', error))
    },[]);

    function createTermListMap(termList) {
        const map = new Map();
        termList.forEach(term => {
            // Check if term starts with a number
            const key = /^\d/.test(term.title) ? "#" : term.title[0].toUpperCase();
            
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(term);
        });
        setTermListMap(map); // Update the state with the new map
    }

    function handleClick(letter) {
        console.log('HANDLE CLICK!' , letter)
        setSelectedLetters(prev => {
            if(prev.includes(letter)) {
                return prev.filter(l => l !== letter)
            } else {
                return [...prev, letter]
            }
        })
    }

    return (
        <div className="page">
            <FinderCareBanner />
            <FindCareFilter 
                selectedLetters = {selectedLetters}
                handleClick = {handleClick}
                termListMap = {termListMap}
            />
            <FindCareContent 
                selectedLetters = {selectedLetters}
                termListMap = {termListMap}    
            />
        </div>
    )
}

