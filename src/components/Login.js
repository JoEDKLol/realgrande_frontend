import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    let [formObj, setFormObj] = useState({email:'', password:''});
    let [invalideLoginMsg, setInvalideLoginMsg] = useState('');
    let navigate = useNavigate();

    let changeHandler = (e) => {
        setFormObj({...formObj, [e.target.name]:e.target.value});
    }

    let submitClickHandler = (e) =>{
        e.preventDefault();
        // console.log(formObj);
        let authCheck = async () => {
            try{
                let resp = await axios.post(process.env.REACT_APP_BACKURL+"login",{...formObj});
                let data = await resp.data;
                if(data == "Authentication Failed"){
                    setInvalideLoginMsg("Sorry. Invalid login credentials. Please try again.");
                }else{
                    setInvalideLoginMsg('');
                    sessionStorage.setItem('name', data.name)
                    sessionStorage.setItem('email', data.email)
                    if(data.role == 'realtor'){
                        navigate('/enuqiries');
                    }else{
                        navigate('/');
                    }
                }
            }catch(e){
                console.log(e);
            }
        }

        authCheck();
        
    }

    return ( 
        <>
            
            <div className='w-100 d-flex justify-content-center'>
                
                <div className="row col-4">    
                    
                    <form id='form'>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="email" id="email" aria-describedby="helpId" placeholder=""/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"
                            onChange={(e) => changeHandler(e)}
                            className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
                        </div>
                        <h6 className="text-danger">{invalideLoginMsg}</h6> 
                        <button
                        onClick={(e)=>submitClickHandler(e)} 
                        className='btn btn-primary' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Login;