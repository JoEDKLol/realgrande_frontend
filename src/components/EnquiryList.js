import axios from "axios";
import { useEffect, useState } from "react";

const EnquiryList = () => {


    const [enquiryList, setEnquiryList] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
        const resp = await axios(process.env.REACT_APP_BACKURL+'allenquiries');
        const data = await resp.data;
        console.log(data);
        setEnquiryList(data)
        };
        fetchData();
    },[]);

    if(!enquiryList){
        return <>Loading..</>
    }

    return ( 
        <>
            {/* EnquiryList */}
            <h3>Enquiries received so far:</h3>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enquiryList.map((elem) => {
                                return (
                                <tr key={elem._id} className="">
                                    <td scope="row">{elem.ename}</td>
                                    <td scope="row">{elem.email}</td>
                                    <td scope="row">{elem.date.substr(0,10) + " " + elem.date.substr(11,8)}</td>
                                    <td scope="row">{elem.remarks}</td>
                                </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            
        </>
     );
}
 
export default EnquiryList;