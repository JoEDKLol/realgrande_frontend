import React from "react";
import { useParams } from "react-router-dom";
import House from "./House";
import Enquiry from "./Enquiry";
const SearchedHouse = (props) => {

    let parmsObj = useParams();
    console.log(parmsObj.id);

    let house = props.houseinfo.filter((elem)=>{
        return elem._id == parmsObj.id
    })

    let searchedHousedObj = props.houseinfo.find((elem)=>{
        return elem._id == parmsObj.id
    })

    if(!searchedHousedObj){
        return <h1>loding...</h1>
    }else{
        //console.log(searchedHousedObj._id);
    }

    

    return ( 
        <React.Fragment>
            <div>
                <House houseinfo={house[0]}/>
                <hr/>
                <div className="row">
                <div className="col-8 ms-4 mt-2">
                {
                (sessionStorage.getItem('name')) && <Enquiry />
                }
                </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SearchedHouse;