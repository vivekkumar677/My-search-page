// import React from 'react';import { Avatar } from "@material-ui/core";
// import AppsIcon from "@material-ui/icons/Apps";
// import { Link } from 'react-router-dom';
// import './Home.css';
// import Search from '../components/Search';

// function Home(){
//     return (
//         <div className='home'>
//             <div className='home_header'>
//                 <div className='home_headerLeft'>
//                     <Link to="/about">About</Link>
//                     <Link to="/store">Store</Link>
//                 </div>
//                 <div className='home_headerRight'>
//                     <Link to="/gmail">Gmail</Link>
//                     <Link to="/images">Images</Link>
//                     <AppsIcon />
//                     <Avatar />
//                 </div>
//             </div>
//             <div className='home_body'>
//                 <img
//                     src="https://www.google.cm/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
//                     alt='logo'
//                 />
//                 <div className='home_inputContainer'>
//                     <Search hideButtons />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// // {/* <div className='home_body'>
// //                 <img
// //                     src="https://www.google.cm/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
// //                     alt='logo'
// //                 />
// //                 <div className='home_inputContainer'>
// //                     { /* <Search /> */ }
// //                     </div>
// //                 </div> */}


import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from "../components/Search";

function Home() {

    return (
        <div className='home'>
            {/*<h1>This is home page</h1>*/}
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVWFrqjo-yB5uVD6M4_B7HBXGWnADSwAkfA&usqp=CAU"
                        style={{border: "1px solid green"}}
                    />
                </div>
            </div>
            <div className="home_body">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt=""/>
                <div className="home_inputContainer">
                    {/*<Search/>*/}
                    <Search/>
                </div>
            </div>
        </div>
    );

}

export default Home;
