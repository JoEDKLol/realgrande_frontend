import React from "react";
import Enquiry from "./Enquiry";
const House = (props) => {

    //console.log(props);

    if(!props.houseinfo){
        return <h1>loding...</h1>
    }

    return ( 
        <React.Fragment>
        <div className="ms-3">   
            <div className="row">
                <div className="col-sm-6">
                    <b>{props.houseinfo.address}</b>
                </div>
                <div className="col-sm-6">
                    <b>Price: USD {props.houseinfo.price}</b>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <img className='img-fluid' src={'/imgs/'+props.houseinfo.photo} alt='house'/>
                </div>
                <div className='col-sm-6'>
                    <p>{props.houseinfo.description}</p>
                    
                </div>

            </div>
        </div>


        </React.Fragment>
     );
}
 
export default House;