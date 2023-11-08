import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import House from './components/House';
import { useEffect, useState } from 'react';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import Login from './components/Login';
import axios from 'axios';
import EnquiryList from './components/EnquiryList';



function App() {
  
    const [housesData, setHousesData] = useState([]);
  
    useEffect(()=>{
        const fetchData = async () => {
            const resp = await axios(process.env.REACT_APP_BACKURL);
            const data = await resp.data;
            setHousesData(data);
        };
        fetchData();
    },[]);



  return (
    <div className='container-flud'>
      <Header />
      <SearchFilter houseinfo={housesData}/>

      <Routes>
        <Route path='/' element={<House houseinfo={housesData[Math.floor(Math.random() * 10)]}/>}/>
        <Route path='/searchresults/:county' element={<SearchResults houses={housesData}/>}/>
        <Route path='/searchedHouse/:id' element={<SearchedHouse houseinfo={housesData}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/enuqiries' element={<EnquiryList/>}/>
        
        
        {/* <Route path='/test' element={<Test/>}/> */}
      </Routes>

      {/* { housesData[0] && <House houseinfo={housesData[0]} /> } */}
      {/* {(housesData[0]) ? <House houseinfo={housesData[0]} /> : ''} */}
      {/* <House houseinfo={housesData[Math.floor(Math.random() * 10)]}/> */}
      <Footer />
    </div>
  );
}

export default App;
