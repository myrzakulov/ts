import React from 'react';
import logos3 from '../../../assets/img/Saly-19.png'
import {BsPlayCircle} from "react-icons/bs";
const Hero = ({dark, setDark} :any) => {
    return (
        <div className='container'>
            <div className='text-[#f8fafc] flex items-center justify-between'>
                <div>
                    <h1 className='text-[50px] w-[100] text-[#2563EB] font-weight: 900'>Virtual Reality <br/> Business Solutions</h1>
                    <p style={{
                        color:dark ? "black" : "white"
                    }} className=''>We have over 15 year exprience in business consultting arena. We have over <br/> 15 year exprience in business consultting arena and artficial intelligence.</p>
                    <div className='flex my-10'>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                      font-medium rounded-lg text-sm px-5 py-2.5
                        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact Us
                        </button>
                        <button style={{
                            color:dark ? "black" : "white"
                        }} className='flex items-center mx-7   '><BsPlayCircle style={{
                            color:dark ? "black" : "white"
                        }} className='mr-2 text-[20px]'/>Watch video</button>
                    </div>

                </div>
                <div>
                    <img src={logos3} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;