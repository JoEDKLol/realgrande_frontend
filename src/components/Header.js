import React from "react";
import styles from './Header.module.css';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

      const logoutHandler = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        navigate('/')
    }

    return ( 
        <React.Fragment>
        <div className="row bg-warning d-flex align-items-center p-2">
            <div className='col-sm-3 ps-3'>
                <Link to='/'>
                <img src="/imgs/logo.png" className={styles.logImg}  alt=""/>
                </Link>
            </div>
            <div className="col-sm-5 ">
                <p className={'m-0 ' + styles.tagline}>Your real estate destination!</p>
            </div>
            <div className="col-sm-4 text-end pe-5" >
                {
                    // (localStorage.getItem('name'))?
                    (sessionStorage.getItem('name'))
                    ?
                    <>
                    {"Welcome " + 
                    // localStorage.getItem('name')
                    sessionStorage.getItem('name')
                     + " ! " }
                    <Link to='/logout'><button onClick={e => logoutHandler(e)} className="btn bg-danger me-2 text-white btn-sm" >Logout</button></Link>
                    </>
                    :
                    <>
                    <Link to='/login'><button className="btn bg-primary me-2 text-white btn-sm" >Login</button></Link>
                    <Link to='/signup'><button className="btn bg-success me-2 text-white btn-sm" >SignUp</button></Link>
                    </>
                }
                
                
                
                {/* <button className="btn bg-info me-2 text-white btn-sm" onClick={loginPage}>Login</button>
                <button className="btn bg-success text-white btn-sm" onClick={signUpPage}>Sigin</button> */}
            </div>
            {/* <h1 className='bg-warning'>Header!</h1> */}
        </div>
        </React.Fragment>
     );
}
 
export default Header;