import React, { useState } from 'react';
import './Search.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue("")

    const [input, setInput] = useState("");
    const history = useHistory()

    const search = (e) =>{
        e.preventDefault();

        console.log("You hit", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search-input">
                <SearchIcon className="search-icon"/>
                <input value={input} onChange={e => setInput(e.target.value) } />
                <MicIcon/>
            </div>
            {!hideButtons ? (
                <div className="search-button">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ):(
                <div className="search-button">
                <Button className="search-hidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search-hidden" variant="outlined">I'm Feeling Lucky</Button>
            </div> 
            )}
        </form>
    )
}

export default Search
