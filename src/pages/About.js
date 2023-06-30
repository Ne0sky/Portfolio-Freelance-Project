import React from "react";
import "../Custombg.css";
//import images
import WomanImg from "../img/about/woman.png";
import Photoshop from "../img/about/photoshop.png"
import Animate from "../img/about/animate.png"
import Illustrator from "../img/about/illustrator.png"
import Indesign from "../img/about/indesign.png"
import CorelDraw from "../img/about/coreldraw.png"
import Canva from "../img/about/canva.png"

//import progress bar component
import ProgressBar from "@ramonak/react-progress-bar";

//import vertical timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//import icons
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";

//import link
import { Link } from "react-router-dom";


import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const percentage = 66;

const About = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
     className="section main font-primary">
      <span className="light-blue"></span>
      <span className="light-pink "></span>
      <div className="container mx-auto h-full flex flex-col  items-center px-8">
        <h1 className="text-3xl text-white  pt-32 lg:pt-48 lg:text-5xl text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-600 to-indigo-600 font-semibold">About Me
        <span className="line mb-4 flex "></span></h1>
        
        <motion.div 
        initial={{ opacity: 0,y:'-50%' }} 
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 , y:'-50%'}}
        transition={transition1}
        className="flex flex-col lg:flex-row justify-between items-center w-full">
          <img className=" w-[400px] lg:w-[800px] h-auto" src={WomanImg} alt="" />
          <div className="flex flex-col items-center">
          <p className="text-white py-8 lg:py-16">
            <p className="text-2xl font-semibold">Hey there! I'm Deyasini Sengupta, a passionate graphic designer
            based in Kolkata, India.</p> <br/> <br/> I'm thrilled to welcome you to my portfolio
            website, where I bring my artistic vision to life. With a love for
            both dance and painting, I strive to infuse creativity and movement
            into every design project I undertake. Join me on this visual
            journey as I showcase my unique blend of artistic expressions
            through graphic design.{" "}
          </p>
          <Link to="/contact"><button className="bg-gradient-to-r relative z-20 from-[#ff3c6958] to-indigo-800  px-5 py-3 cursor-pointer   rounded-lg border border-[#eeeeee7b]" style={{ color: '#eeee', fontSize: '30px' }}>Contact Me</button></Link>
            </div>
        </motion.div>

        
        {/* Skills container */}
        <motion.div
         initial={{ scale:0 }} 
         animate={{ scale: 1 }}
         exit={{ scale: 0 , }}
         transition={transition1}
        className="mt-16 container text-center flex flex-col items-center rounded-3xl bg-gradient-to-r from-[#1c12576e] to-[#df81a92a] p-12 border border-[#eeeeee46]">
          <h2 className="text-white text-3xl font-semibold lg:text-4xl ">Skills</h2>
          <span className="line mb-4 flex"></span>
          
          <p className="text-white w-[100%] my-4 pb-8">Proficient in graphic design software such as Adobe Photoshop, Illustrator & more.</p>
          <div className="skills w-full  flex flex-col lg:flex-row items-center justify-around">
            <div className="left column w-[100%] lg:w-[40%]">
            <div className="photoshop text-left pt-4 ">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={Photoshop} alt=''/>Adobe Photoshop </p>
              <ProgressBar
                completed={80}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>

            <div className="Adobe Indesign text-left pt-4">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={Indesign} alt=''/>Adobe Indesign</p>
              <ProgressBar
                completed={90}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>

            <div className="Adobe Illustrator text-left pt-4">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={Illustrator} alt=''/>Adobe Illustrator</p>
              <ProgressBar
                completed={70}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>
            </div>


            <div className="right-column w-[100%] lg:w-[40%]">
            <div className="CorelDraw text-left pt-4">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={CorelDraw} alt=''/>CorelDraw</p>
              <ProgressBar
                completed={70}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>

            <div className="Canva text-left pt-4">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={Canva} alt=''/>Canva</p>
              <ProgressBar
                completed={60}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>

            <div className="Adobe Animate text-left pt-4">
              <p className="text-white py-2 font-semibold text-[1rem]"><img className="w-[30px] mr-2 inline-block " src={Animate} alt=''/>Adobe Animate</p>
              <ProgressBar
                completed={40}
                bgColor="#fb248c"
                labelAlignment="outside"
                labelColor="#ffffff"
                animateOnRender
                maxCompleted={100}
                baseBgColor='#080612af'
                height='13px'
                transitionDuration='3s'
              />
            </div>
            </div>
            
          </div>
        </motion.div>

        

        {/* Timeline */}

        <div className="Timeline flex w-full flex-col items-center mt-16 lg:mt-24 pb-12">
          <h2 className="text-white text-3xl font-semibold   lg:text-4xl">Experience </h2>
          <span className="line mb-16 flex"></span>
          <VerticalTimeline className="" lineColor={ 'white' }>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b1dff20", color: "#fff" ,borderBottom: "none" }}
              contentArrowStyle={{
                borderRight: "7px solid  #3C1dff20",
                
              }}
              
              date="2020"
              iconStyle={{ background: "rgb(255, 60, 106)", color: "#fff" }}
              icon={<HiAcademicCap />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Indian School, Al Seeb 🇴🇲</h4>
              <p>
              Successfully completed the 12th standard examination with commendable distinction under the Central Board of Secondary Examination.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#ff1d7b20", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #ff1d7b20",
              }}
              date="2020 - 2024"
              iconStyle={{ background: "rgb(255, 60, 106)", color: "#fff" }}
              icon={<HiBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">Undergraduate 🇮🇳</h3>
              <h4 className="vertical-timeline-element-subtitle">
                BFA, Applied Arts
              </h4>
              <p>
                Currently doing BFA in Applied Arts from Amity University, Kolkata.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3b1dff20", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #3C1dff20",
              }}
              date="July 2023 - present"
              iconStyle={{ background: "rgb(255, 60, 106)", color: "#fff" }}
              icon={<HiAcademicCap />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                Internship 🇮🇳
              </h3>
              <h4 className="vertical-timeline-element-subtitle ">Graphic Designer, at CRY </h4>
              <p>
              I proudly serve as a graphic designer at CRY, utilizing my artistic expertise to create impactful visuals that amplify their mission. 
              </p>
            </VerticalTimelineElement>
            

            
          </VerticalTimeline>
          
        </div>
      </div>
    </motion.section>
  );
};

export default About;
