import axios from "axios";
import React, { useState } from "react";
const SignUp = () => {

    let [signObj,setSignObj] = useState({name:'',email:'',password:''});
    let [signUpStatus, setSignUpStatus] = useState(false);
    let [duplicateUserMsg, setDuplicateUserMsg] = useState("");

    let changeHandler = (e) => {
        setSignObj({...signObj, [e.target.name]:e.target.value});
    }

    let submitClickHandler = async (e) =>{
        e.preventDefault();
        try{
            let resp = await axios.post(process.env.REACT_APP_BACKURL+'signup',signObj);
            let data = await resp.data;
            if(!data.code){
                setSignUpStatus(true);
            }else{
                setDuplicateUserMsg("Sorry, duplicateUser");
            }
            
        }catch(e){
            console.log(e);
        }
    }

    if(!signUpStatus){
    return ( 
        <React.Fragment> 
            {/* justify-content-center */}
            <div className='w-100 d-flex justify-content-center'>
                <div className="row col-4">    
                    <h2>{duplicateUserMsg}</h2>
                    <form>
                        <div className="mb-3">
                        <label htmlFor="name"  className="form-label">Name</label>
                        <input type="text"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="email" id='label2' className="form-label">email</label>
                        <input type="email"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="email" id="email" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" id='label3' className="form-label">password</label>
                        <input type="password"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
                        </div>
                        <button 
                            onClick={(e)=>submitClickHandler(e)} 
                        id='btnSignUp' type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </React.Fragment>
     )}else{
        return (
            <div className='w-100 d-flex justify-content-center'>
                <div className="row col-4">    
                    <div>
                        <h4>Congratulation {signObj.name}</h4>  
                    </div>
                </div>
            </div>
        )
     }
}
 
export default SignUp;