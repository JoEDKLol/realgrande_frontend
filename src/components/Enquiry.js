import axios from "axios";
import { useState } from "react";
import emailjs from '@emailjs/browser';


const Enquiry = () => {


    let [enquiryObj, setEnquiryObj] = useState({'ename':"",'email':'','remarks':'', 'houseId':''});
    let [successMsg, setSuccessMsg] = useState("");

    let changeHandler = (e) => {
        setEnquiryObj({...enquiryObj,[e.target.name]:e.target.value});
    }


    let clickHandler = async (e) => {
        e.preventDefault();
        try{
            // let resp = await axios.post('http://localhost:3002/register',{...enquiryObj});
            let resp = await axios.post(process.env.REACT_APP_BACKURL+'register',{...enquiryObj});
            let data = await resp.data;
            if(data){
                setSuccessMsg('Thanks for reaching out! You will~');
                sendEmail();
            }
        }
        catch(error){
            setSuccessMsg("");
            console.log(" Could not store enquiry.");
            console.log(error);
        }
    }

    let sendEmail = () => {
        var templateParams = {
            name: enquiryObj.ename,
            notes: enquiryObj.remarks
        };
        
        emailjs.send('service_lrjqxuy','template_4ucywe6', templateParams, "8jpab6TZ9cNujQLXW")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
            console.log('FAILED...', err);
        });

    }

    if(successMsg){
        return (
            
            <>
            <h6> {successMsg} </h6>
            </>

        )
    }

    return (
        <div>

        <h6> Contact Us About this house :</h6>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Name</label>
          <input type="text" onChange={changeHandler} name="ename" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
           </div>


            <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="text" onChange={changeHandler} name="email" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
            </div>


            <div className="mb-3">
            <label htmlFor="" className="form-label">Message</label>
            <input type="text" onChange={changeHandler} name="remarks" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
            </div>


            <input name="" id="" onClick = {clickHandler} className="btn btn-primary" type="button" value="Submit"
            disabled = {!(enquiryObj.ename)||!(enquiryObj.email)||!(enquiryObj.remarks)?true:false}
            />
        </div>
     );
}
 
export default Enquiry;
