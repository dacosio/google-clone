import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from "@material-ui/icons/Mic"
import {Button} from "@material-ui/core"
import {useStateValue} from '../contexts/StateProvider'
import {actionTypes} from '../contexts/reducer'

function Search({hideButtons = false}) {
    const [{searchTerm}, dispatch] = useStateValue()
    const [searchKeyWord, setSearchKeyWord] = useState('')
    const history = useHistory()

    const search = e => {
        e.preventDefault();
        console.log('you hit search button', searchKeyWord);
        //do something with input
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            searchTerm: searchKeyWord
        })
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={searchKeyWord} onChange={e => setSearchKeyWord(e.target.value)}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                 <div className="search__buttons">
                    <Button type='submit' variant="outlined" onClick={search}> Google Search </Button>
                    <Button variant="outlined"> I'm feeling Lucky </Button>
                </div>
            ) : (
                <div className="search__buttonsHidden">
                    <Button type='submit' variant="outlined" onClick={search}> Google Search </Button>
                    <Button variant="outlined"> I'm feeling Lucky </Button>
                </div>
            )}
           
        </form>
    )
}

export default Search
