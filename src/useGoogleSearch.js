// import { useState, useEffect } from "react";
// import API_KEY from "./keys";

// const CONTEXT_KEY = "b68de3061adb1cab7";
// const useGoogleSearch = (term) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       fetch()
//         .then((response) => response.json())
//         .then((result) => {
//           setData.apply(result);
//         });
//     };
//     fetchData();
//   }, [term]);
//   return { data };
// };

// export default useGoogleSearch;



import {useState, useEffect} from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY = "b68de3061adb1cab7";

const UseGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
};

export default UseGoogleSearch;