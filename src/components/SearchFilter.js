import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {

    let navigete = useNavigate();

    if(!props.houseinfo[0]){
        return <h1>loding...</h1>
    }else{
        //console.log("searchFilter::" + props.houseinfo[0]._id);
    }

     
    //array of counties
    //array.map and generate the options dynamically
    // if(!props.houseinfo){
    //     return <h1>Loding...</h1>
    // }else{
    //     console.log("searchFilter::" + props);
    // }



    let arr = props.houseinfo.map((e) => {
        return e.county
    });

    let dic = Array.from(new Set([...arr]));
    // console.log(typeof dic);



    const selectHouseHanler =(e)=>{ //synthetic event
        console.log('selected::' + e.target.value);
        //one SearchResults component that does - 
        //filter through the array of house objects and
        //get those house objects that belong to selected county 
        navigete(`/searchresults/${e.target.value}`);
        
        // props.houseinfo.key('county').filter(
        //     (data)=>{
        //         return  
        //     }
        // );
    }




    return ( 
        <React.Fragment>
            <div className='row my-2'>
                <div className="text-center">
                    <b>Select County : </b>
                    <select onChange={(e) => selectHouseHanler(e)}>
                        {/* <option value='select'>Select</option>
                        <option value='county1'>County1</option>
                        <option value='county2'>County2</option>
                        <option value='county3'>County3</option> */}
                        <option value='select'>Select</option>
                        {/* {props.houseinfo.map((e)=><option key={e._id} value={e._id} >{e.county}</option>)} */}
                        {dic.map((e)=><option key={e} value={e} >{e}</option>)}


                    </select>
                </div>
            </div>

            {/* <div className='row'>
                <div className="col-sm-2 offset-sm-5">
                    <h6>Select country</h6>
                </div>
                <div className='col-sm-5'>
                    <select>
                        <option value='county1'>County1</option>
                        <option value='county1'>County2</option>
                        <option value='county1'>County3</option>
                    </select>
                </div>
                
            </div> */}

        </React.Fragment>
     );
}
 
export default SearchFilter;