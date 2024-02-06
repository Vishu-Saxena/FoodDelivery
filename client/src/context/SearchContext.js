import { createContext, useContext, useState } from "react";
import { useFoodContext } from "./FoodData";

const searchContext = createContext();

const SearchVal =(props)=>{
    const [search , setSearch] = useState("");
    const [searchRes , setSRes] = useState([]);
    const {allFood} = useFoodContext();
    console.log(allFood);
    // fucntion to change search text
    const SearchTxt = (txt)=>{
        setSearch(txt);
    }

    // fucntion to fetch the searched itm
    const searchResult = (txt)=>{
        console.log(txt);
        let res1 = allFood.filter((ele)=> ele.CategoryName.toLowerCase().includes(txt));
        let res2 = allFood.filter((ele)=> ele.name.toLowerCase().includes(txt));
        let res3 = allFood.filter((ele)=> ele.description.toLowerCase().includes(txt));
        console.log(res1 , res2 , res3);
        setSRes([...res1 , ...res2 , ...res3]);
    }

    return <searchContext.Provider value={{search , SearchTxt , searchRes ,searchResult}}> {props.children} </searchContext.Provider>
}

// custom context
const useSearchContext = ()=> useContext(searchContext);

export default SearchVal
export {useSearchContext , searchContext}