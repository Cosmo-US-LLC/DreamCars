
import React from 'react';
import Home from '../Page/Home';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const Layout = ({handelClick}) => {

    return (
       <>
          <div className=''>
        {/* check */}
            <div className='mb-[4rem] z-[99] w-[100%] fixed xs:mb-[3rem] sm:mb-[3rem] md:mb-[3rem]'>
            <Navbar handelClick={handelClick} className="" />
            </div>
            <div className=''>
            <Home className="" />   
            </div>       
            <div> 
            <Footer className="bg-[#111010]" />
            </div>
        </div>
       </>
    )
}
export default Layout;