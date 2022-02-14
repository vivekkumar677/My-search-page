// import React, { useState } from 'react';
// import './Search.css';
// import SearchIcon from "@material-ui/icons/Search";
// import MicIcon from "@material-ui/icons/Mic";
// import { Button } from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
// import { actionTypes } from "../reducer";
// import {useStateValue} from "../StateProvider";

// function Search({hideButtons = false}) {

//     const [{}, dispatch] = useStateValue();

//     const [input, setInput] = useState("");
//     const navigate = useNavigate();
//     const search = (e) => {
//         e.preventDefault();

//         console.log('You hit the search button >>> ', input)

//         dispatch({
//             type: actionTypes.SET_SEARCH_TERM,
//             term: input
//         })

//         navigate("/search")
//     };

//     return (
//         <form className='search'>
//             <div className='search_input'>
//                 <SearchIcon className='search_inputIcon' />
//                 <input 
//                     placeholder='Search Google or type a URL' 
//                     value={input} 
//                     onChange={(e) => setInput(
//                     e.target.value)} />
//                 <MicIcon />
//             </div>

//             {!hideButtons ? (
//                 <div className='search_button'>
//                     {/* <Button type='submit' onClick={search} 
//                     variant="outlined">
//                         Google Search
//                     </Button>
//                     <Button variant="outlined">I`m Feeling Lucky</Button> */}
//                 </div>
//             ):  (
//               <div className='search_button'>
//                     {/* <Button className='search_buttonsHidden' type='submit' onClick={search} 
//                     variant='outlined'>
//                         Google Search
//                     </Button> */}
//                     {/* <Button variant="outlined">I`m Feeling Lucky</Button> */}
//                 </div>
//             )}
//         </form>
//     );
// }

// export default Search;



import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useStateValue} from "../StateProvider/StateProvider";
import {actionTypes} from "../StateProvider/reducer";
import {useNavigate} from "react-router-dom";

function Search({hideButtons = false}) {

    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = sou => {
        sou.preventDefault();

        console.log('Click google search button>>>', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate("/search")
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input
                    value={input}
                    onChange={sou => setInput(sou.target.value)}
                />
                <MicIcon/>
            </div>
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search_buttons">
                    <Button
                        className="search_buttonsHidden"
                        onClick={search}
                        type="submit"
                        variant="outlined"
                    >Google Search</Button>
                    <Button
                        className="search_buttonsHidden"
                        variant="outlined"
                    >I'm Feeling Lucky</Button>
                </div>
            )}

        </form>
    );
}

export default Search;
