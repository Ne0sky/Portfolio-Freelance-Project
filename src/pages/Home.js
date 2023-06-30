import React from "react";
import "../Custombg.css";
// const bg_style='bg-purple-700 '

//import icons
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoBehance } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

//import images
import WomanImg from "../img/home/woman.png";
import Cv from "../img/CV/cv.jpg"

//import link
import { Link } from "react-router-dom";

import {motion} from 'framer-motion';
import {transition1} from '../transitions';



const Home = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}

    className="section main font-primary"
    >
      <span className='light-blue '></span>
      {/* <span className='light-pink '></span> */}

      {/* text and image wrapper */}
      <div
       
       className="z-20 relative flex flex-col w-screen md:flex-col lg:flex-row justify-around items-center  px-[40px]">
        {/* text */}
        
        <motion.div 
         initial={{ opacity: 0,y:'-50%' }} 
         animate={{ opacity: 1, y:0 }}
         exit={{ opacity: 0 , y:'-50%'}}
         transition={transition1}
        className=" text-white pt-32  md:pt-[8rem] lg:pt-[10rem] ">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem]">
            Hey 🖐️ I am, <br />
            <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
              Deyasini Sengupta.
            </h1>
          </h1>
          <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]  text-white">
            Graphic Designer <br />
            <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
              based in Kolkata.
            </p>
          </p>
          {/* buttons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
          className="pt-10 w-full flex gap-4 md:gap-8 lg:gap-10">
            <a href={Cv} download><button className="bg-gradient-to-r from-pink-800 to-indigo-800  px-4 py-3  lg:px-6 lg:text-[1.5rem] rounded-lg  hover:bg-gradient-to-r border  border-[#eeeeee7b]">
              Download CV
            </button></a>
            <button className="bg-gradient-to-r from-pink-800 to-indigo-800  px-4 py-3  lg:px-6 lg:text-[1.5rem] rounded-lg hover:bg-gradient-to-r border border-[#eeeeee7b]">
              <Link to="/projects">Projects</Link>
            </button>
          </motion.div>
          <div className="items-center gap-6 pt-8 mb-8 md:gap-12 hidden lg:flex">
            <a href='https://www.linkedin.com/in/deyasini-sengupta-573a5a270/ ' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer   rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoLinkedin/></button></a>
            <a href='https://www.behance.net/deyasinsengupt1?tracking_source=search_projects|Infographic+Movie' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer   rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoBehance/></button></a>
            <Link to="/contact"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer   rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoMailSharp/></button></Link>
            </div>
        </motion.div>

        {/* img */}
        <motion.div
         initial={{ scale:0 }} 
         animate={{ scale: 1 }}
         exit={{ scale: 0 , }}
         transition={transition1}>
          <img
            className="w-[400px] lg:w-[600px] h-auto md:pt-[0rem] lg:pt-[10rem]"
            src={WomanImg}
            alt=""
          />
          <div className="flex flex-col justify-center w-full items-center">
            <span className="line mb-4 hidden md:flex lg:flex"></span>
            <p className="text-white text-center lg:text-2xl">
              I create functional designs that <br />
              communicate and connect with people.{" "}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-6 pt-8 mb-8 md:flex lg:hidden">
            <a href='https://www.linkedin.com/in/deyasini-sengupta-573a5a270/ ' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer  rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoLinkedin/></button></a>
            <a href='https://www.behance.net/deyasinsengupt1?tracking_source=search_projects|Infographic+Movie' target="_blank"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer    rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoLogoBehance/></button></a>
            <Link to="/contact"><button className="bg-gradient-to-r from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer    rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}><IoMailSharp/></button></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
