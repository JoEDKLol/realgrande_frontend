import { useNavigate } from "react-router-dom";

const SearchResultsRow = (props) => {

    const navigete = useNavigate();

    let clickHandler = (id) => {
        console.log('clicked::' + id);
        navigete('/searchedHouse/' + props.house._id);
    } 


    return ( 
        <>
            <tr key={props.house._id} onClick={()=>clickHandler(props.house._id)}>
            <td scope="row">{props.house.address}</td>
            <td>{props.house.price}</td>
            {/* <td>{props.house.description}</td> */}
            </tr>
        </>
     );
}
 
export default SearchResultsRow;