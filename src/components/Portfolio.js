import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react.png'
import bigdata from '../assets/skills/bigdata.jpg'
import next from '../assets/skills/next.png'
import pyspark from '../assets/skills/pyspark.png'
import aws from '../assets/skills/aws.png'
import django from '../assets/skills/django.png'
import agile from '../assets/skills/agile.png'
import python from '../assets/skills/python.png'
import docker from '../assets/skills/docker.png'
import git from '../assets/skills/github.png'
import mysql from '../assets/skills/mysql.png'
import datawarehouse from '../assets/skills/datawarehouse.png'
import snowflake from '../assets/skills/snowflake.png'
const Portfolio = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/");
    }
    return (
        <div className="text-white animate-fade" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
                <button onClick={backHome} className='after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1'><CloseIcon sx={{ fontSize: '38px',color:'#009e66' }} /></button>
            </div>
            <div className='flex flex-col align-middle justify-center'>
                <div className='m-auto p-20'>
                    <h1 className='text-5xl pt-3'>Portfolio</h1>
                </div>
                <div className="flex align-middle justify-center max-md:flex-col m-auto">
                    {/* Education */}
                    <div className=" lg:pr-20">
                        <h1 className='text-2xl mb-5 text-[#009e66]'>Experience</h1>
                        <div className="card w-[500px] max-lg:w-[335px] box-border  bg-[#161616] relative lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8  border-b border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66]'></span>
                            <h1 className=' inline text-xl'>Cognizant </h1>
                            <p className='text-[rgb(159,159,159)] text-base pb-2 pt-2 '>2.5 years  <span className='text-[13px]'>(Dec'2021 - Apr'2024)</span></p>
                            <p className='text-[rgb(159,159,159)] text-base pb-2 pt-2 '>Data Engineer</p>
                            
                        </div>
                        <div className="max-lg:w-[335px] w-[500px] bg-[#161616] relative border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66]'></span>
                            <h1 className='inline text-xl'>Freelancer</h1>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'> Web Developer <span className='text-[13px]'>(Mar'2020 - Dec-'2021)</span></p>
                            
                        </div>
                        
                    </div>
                    {/* Experience */}
                    <div className="max-sm:mt-4 pl-20 max-lg:pl-5 max-sm:pl-0">
                        <h1 className='text-2xl mb-5 text-[#009e66]'>Education</h1>
                        <div className="max-lg:w-[335px] w-[500px] relative bg-[#161616] border-b lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                            <span className='before:absolute before:left-0 before:mt-1 before:h-4 before:w-4 before:bg-[#009e66] '></span>
                            <h1 className='inline text-xl'>Pune University</h1>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Bachelor of Engineering (Aug'2015 - Aug'2021)</p>
                            <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Computer Science</p>

                        </div>
                        
                    </div>
                </div>
                <div className='text-left mb-4'>
                    <div className='max-md:text-center lg:pl-52 pt-16 max-md:m-auto'>
                        <h1 className='text-4xl pt-3'>My Skills</h1>
                    </div>
                    <div className='text-[#c9c8c8] w-10/12 grid grid-cols-2 sm:grid-cols-4 gap-7 text-center lg:p-16 m-auto mt-8'>
                        <div className='rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300 flex justify-center align-middle'>
                            <img src={python} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Python</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={mysql} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Mysql</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={js} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>JavaScript</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={git} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Github</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={react} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>React</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={snowflake} alt="html" className='my-4 w-6 h-5'/>
                            <p className='my-4 mx-2'>snowflake</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={aws} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>AWS</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={pyspark} alt="html" className='my-4 w-9 h-6'/>
                            <p className='my-4'>pyspark</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={datawarehouse} alt="html" className='my-4 w-9 h-6'/>
                            <p className='my-4 mx-2'>Datawarehouse</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={bigdata} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Bigdata</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={docker} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Docker</p>
                        </div>
                        <div className=' rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle'>
                            <img src={agile} alt="html" className='my-4 w-6 h-6'/>
                            <p className='my-4 mx-2'>Agile</p>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;