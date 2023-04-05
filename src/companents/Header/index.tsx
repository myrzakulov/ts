import React, {useState} from 'react';
import logo from '../../assets/img/Group.svg'
const Header = ({dark ,setDark} :any) => {

    return (
        <div className='container flex items-center justify-between text-[#f8fafc] py-5'>
            <div className='flex items-center'>
                <img src={logo} alt=""/>
                <h1 style={{
                    color:dark ? "black" : "white"
                }} className='mx-5 text-xl'>Zone.</h1>
            </div>
            <div className='flex items-center cursor-pointer'>
                <h2 style={{
                color:dark ? "black" : "white"
                }}
                    className={"mx-10"}>Home</h2>
                <h2 style={{
                    color:dark ? "black" : "white"
                }} className={"mx-10"}>About Us</h2>
                <h2 style={{
                    color:dark ? "black" : "white"
                }} className={"mx-10"}>Service</h2>
                <h2 style={{
                    color:dark ? "black" : "white"
                }} className={"mx-10"}>Pricing</h2>
                <h2 style={{
                    color:dark ? "black" : "white"
                }} className={"mx-10"}>Blog</h2>
                <button onClick={() => setDark(!dark)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                      font-medium rounded-lg text-sm px-5 py-2.5
                        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact Us
                </button>
            </div>
        </div>
    );
};

export default Header;