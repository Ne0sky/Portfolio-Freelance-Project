import React from 'react';
import '../Custombg.css';

import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoBehance } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const Contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='main font-primary'>
      <span className='light-blue'></span>
      
      <div className='flex flex-col  items-center px-2 '>
        <h1 className="text-3xl text-white pt-30 lg:pt-40 lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 font-semibold">
          Contact Me
          <span className="line mb-4 flex"></span>
        </h1>

        <motion.div
        initial={{ opacity: 0,y:'-50%' }} 
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 , y:'-50%'}}
        transition={transition1}
        className=' w-[90%] mt-6 lg:mt-8  relative z-10 flex flex-col lg:flex-row justify-around items-center'>
          <div className='text-white  my-20'>
          <h2 className='text-3xl font-semibold py-2'>Lets chat.<br/> tell me about your<br/>  project.</h2>
            <p className='text-xl pb-4'>Lets create something together ✌️</p>
            <h2 className='text-xl'>deyasinisg7@gmail.com</h2>
            
            <p className='pb-8'>+91 7003515218</p>
            <a className='pr-8' href='https://www.linkedin.com/in/deyasini-sengupta-573a5a270/ ' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer  rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoLinkedin/></button></a>
            <a href='https://www.behance.net/deyasinsengupt1?tracking_source=search_projects|Infographic+Movie' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer    rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoBehance/></button></a>
          </div>

          <motion.div
          initial={{ opacity: 0,y:'-50%' }} 
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0 , y:'-50%'}}
          transition={transition1}
          className='text-center rounded-md p-4 w-[100%] lg:w-[50%] bg-gradient-to-r relative z-20 from-[#ff3c6958] to-indigo-800 mb-8'>
            <form action="https://formsubmit.co/ec222599b701674d9659e529b398d5b5" method="POST" className='text-white'>
              <p className='text-2xl  py-8'>Send us a message 🚀</p>
              <input type="text" name="name" placeholder='Full Name' required className='block my-4 px-4 py-2 rounded-lg w-[100%] bg-[#09091E]'/>
              <input type="email" name="email" placeholder='Email' required className='block my-4 px-4 py-2 rounded-lg w-[100%] bg-[#09091E]'/>
              <textarea name="message" placeholder='Message' size="lg" required className='block my-4 px-4 py-2 rounded-lg w-[100%] h-[200px] bg-[#09091E] '></textarea>
              <button type="submit" className='bg-pink-600 px-4 py-2 rounded-xl'>Send</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
