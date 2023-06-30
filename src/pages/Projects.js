import React, { useState } from 'react';

import "../Custombg.css";

import { BsChevronCompactLeft } from 'react-icons/bs'
import { BsChevronCompactRight } from 'react-icons/bs'
import { MdFiberManualRecord } from "react-icons/md";

import {motion} from 'framer-motion';
import {transition1} from '../transitions';

import { Link } from "react-router-dom";


import img1 from '../img/portfolio/img1.jpg';
import img2 from '../img/portfolio/img2.jpg';
import img3 from '../img/portfolio/img3.jpg';
import img4 from '../img/portfolio/img4.jpg';
import img5 from '../img/portfolio/img5.jpg';
import img6 from '../img/portfolio/img6.jpg';
import img7 from '../img/portfolio/img7.jpg';
import img8 from '../img/portfolio/img8.jpg';


const slides = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
  {
    src: img6,
  },
  {
    src: img7,
  },
  {
    src: img8,
  },

];



const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <motion.section
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className="main  flex  flex-col  items-center  ">
      <span className="light-blue"></span>
      <span className="light-pink"></span>
      

      <h1 className='text-3xl text-white  pt-32 lg:pt-40 lg:text-5xl text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-600 to-indigo-600 font-semibold text-center'>Projects <span className="line mb-4 flex "></span></h1>


      <motion.div 
      initial={{ scale:0 }} 
      animate={{ scale: 1 }}
      exit={{ scale: 0 , }}
      transition={transition1}
      className="  w-[80%]  min-h-[600px] lg:min-h-[750px] pt-8  relative slider">


        <div style={{ backgroundImage: `url(${slides[currentIndex].src})` }} className='w-full h-full rounded-xl bg-center bg-cover duration-500'></div>



        {/* Left Arrow */}
        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded full p-2 bg-black/50 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}

        <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded full p-2 bg-black/50 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2 text-white text-md'>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='cursor-pointer '><MdFiberManualRecord /></div>
          ))}
        </div>

      </motion.div>
        {/* SERVICES */}
      <motion.div 
      initial={{ opacity: 0,y:'-50%' }} 
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0 , y:'-50%'}}
      transition={transition1}
      className='flex flex-col w-full items-center pb-8'>
      <h1 className='text-3xl text-white  pt-20 lg:pt-30 lg:text-5xl text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-600 to-indigo-600 font-semibold text-center'>Services <span className="line mb-4 flex "></span></h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-white w-[80%] py-16'>
          <div className=' border-l-4 border-indigo-500 px-4'>
            <h2 className='font-bold text-[2rem]'>Brand Identity Design</h2>
            <p>Developing a brand's visual identity, including logos, color palettes, typography,
              and brand guidelines, to create a cohesive and recognizable brand image.</p></div>

              <div className=' border-l-4 border-indigo-500 px-4'>
            <h2 className='font-bold text-[2rem]'>Packaging Design</h2>
            <p>Designing attractive and functional packaging for products, considering branding, product information, 
              and visual appeal to capture the attention of consumers.</p></div>

              <div className=' border-l-4 border-indigo-500 px-4'>
            <h2 className='font-bold text-[2rem]'>Infographic Design</h2>
            <p> Creating visually appealing and informative infographics that present 
              complex data or information in a clear and engaging manner.</p></div>

              <div className=' border-l-4 border-indigo-500 px-4 '>
            <h2 className='font-bold text-[2rem]'>Social Media Graphics</h2>
            <p>Designing eye-catching graphics for social media platforms, including posts, banners, cover
               images, and advertisements, to enhance brand visibility and engagement.</p></div>

        </div>
        
      </motion.div>

      
              <Link to="/contact"><button className="text-white mb-16 bg-gradient-to-r from-pink-800 to-indigo-800  px-4 py-3  lg:px-6 lg:text-[1.5rem] rounded-lg hover:bg-gradient-to-r border border-[#eeeeee7b]">Hire Me </button></Link>
           


    </motion.section>
  );
};

export default Projects;
