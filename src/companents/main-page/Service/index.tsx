import React, {useState} from 'react';
import './Service.scss'
import ser1 from '../../../assets/img/ser1.svg'
import {AiOutlineArrowRight} from "react-icons/ai";
const Service = () => {
    const [block, setBlock] = useState(false)
    const [block2, setBlock2] = useState(false)
    return (
        <div id='service'>
            <div className='container text-[#f8fafc] '>
                <h1 className='text-[50px] w-[100] font-weight: 900 text-center'>Our Service</h1>
                <p className='text-center'>We turn information into actionable insights We work to understand your issues <br/>
                    and are driven to ask better questions in the pursuit of making work.</p>
                <div className='service flex items-center justify-between pt-10 flex-wrap' style={{

                }}>
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <button onClick={() => setBlock(!block)
                        } className='flex items-center'>Learn more <AiOutlineArrowRight/></button>
                    </div>
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <button onClick={() => setBlock(!block)
                        } className='flex items-center'>Learn more <AiOutlineArrowRight/></button>
                    </div>
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <div>
                            <button className='flex items-center' onClick={() => setBlock(!block)
                            }>Learn more <AiOutlineArrowRight/></button>
                        </div>

                    </div>
                </div>
                <div className='service flex items-center justify-between pt-10 flex-wrap'style={{
                    display: block ? "flex" : 'none'
                }}
                >
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <button className='flex items-center'>Learn more <AiOutlineArrowRight/></button>
                    </div>
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <button className='flex items-center'>Learn more <AiOutlineArrowRight/></button>
                    </div>
                    <div className='service-block w-[360px] p-5'>
                        <img className='mx-[8rem] border-radius: 0.125rem' src={ser1} alt=""/>
                        <h1 className='text-center p-4'>Order Management</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                        <button className='flex items-center'>Learn more <AiOutlineArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;