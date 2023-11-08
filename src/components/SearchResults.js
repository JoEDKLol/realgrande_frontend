import { useState } from "react";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {

    //let [house, setHouse] = useState([]);

    
    console.log("SearchResults::" + props);
    const paramObj = useParams();
    console.log('paramObj:'+paramObj.county);

    let filterHouseArray = props.houses.filter((elem) => elem.county == paramObj.county );

    console.log(filterHouseArray);



    return ( 
        <div className='row'>
        <h3>Search result for houses in : {paramObj.county}</h3>    
        <div className="table-responsive">
            <table className="table table-primary table-hover">
                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        {/* <th scope="col">Descritpion</th> */}
                    </tr>
                </thead>
                <tbody>

                    {filterHouseArray.map((elem)=>{
                        return (
                            
                            <SearchResultsRow key={elem._id} house={elem} />
                            
                            )
                    })}
                </tbody>
            </table>
        </div>
        
        </div>
     );
}
 
export default SearchResults;