// import Search from "../components/Search";
// import React from "react";
// import { Link } from "react-router-dom";
// import { useStateValue } from "../StateProvider/StateProvider";
// import "./SearchPage.css";
// import Response from '../response';
// import SearchIcon from "@material-ui/icons/Search";
// import DescriptionIcon from "@material-ui/icons/Description";
// import ImageIcon from "@material-ui/icons/Image";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import MorVertIcon from "@material-ui/icons/MoreVert";
// import RoomIcon from "@material-ui/icons/Room";

// function SearchPage() {
//   const [{ term }, dispatch] = useStateValue();

//   const data = Response;

//   console.log(data);
//   return (
//     <div className="searchPage">
//       <div className="searchPage_header">
//         <Link to="/">
//           <img
//             className="searchPage_logo"
//             src="https://www.google.cm/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
//             alt=""
//           />
//         </Link>

//         <div className="searchPage_headerBody">
//           <Search hideButtons />

//           <div className="searchPage_options">
//             <div className="searchPage_optionsLeft">
//               <div className="searchPage_option">
//                 <SearchIcon />
//                 <Link to="/all">ALL</Link>
//               </div>
//               <div className="searchPage_options">
//                 <DescriptionIcon />
//                 <Link to="/news">News</Link>
//               </div>
//               <div className="searchPage_options">
//                 <ImageIcon />
//                 <Link to="/images">Images</Link>
//               </div>
//               <div className="searchPage_options">
//                 <LocalOfferIcon />
//                 <Link to="/shopping">shopping</Link>
//               </div>
//               <div className="searchPage_options">
//                 <RoomIcon />
//                 <Link to="/maps">maps</Link>
//               </div>
//               <div className="searchPage_options">
//                 <MorVertIcon />
//                 <Link to="/more">more</Link>
//               </div>
//             </div>
//             <div className="searchPage_optionsRight">
//                 <div className="searchPage_option">
//                     <Link to="/settings">Settings</Link>
//                 </div>
//                 <div className="searchPage_option">
//                     <Link to="/toolls">Tools</Link>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {true && (
//           <div className="searchPage_results">
//               <p className="searchPage_resultCount">
//                   About 300000 results (0.3 seconds) for Audi
//               </p>
//           </div>  
//       )}
//     </div>
//   );
// }

// export default SearchPage;



import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "../StateProvider/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import {Link} from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {

    // eslint-disable-next-line no-unused-vars
    const [{term}, dispatch] = useStateValue();

    //LIVE API Call *****************************************
    const {data} = useGoogleSearch(term);

    // const data = Response;

    // https://cse.google.com/cse/create/new
    console.log(data);

    return (
        <div className="searchPage">
            {/*<h1>This is search page WoW!!!!!</h1>*/}
            <div className="searchPage_header">
                <Link to="/">
                    <img
                        className="searchPage_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                        alt=""/>
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons/>
                    <div className="searchPage_options">

                        {/*--------searchPage_optionsLeft--------------*/}
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon/>
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon/>
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon/>
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <RoomIcon/>
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon/>
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/*--------searchPage_optionsRight--------------*/}
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={item.link} target="_blank">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                                {item.displayLink} ✔
                            </a>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a className="searchPage_resultTitle" href={item.link} target="_blank">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                            <hr/>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

export default SearchPage;
