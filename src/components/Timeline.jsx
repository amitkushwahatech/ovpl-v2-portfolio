

import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "./timeline.css";


const Exper = ({ experience }) => {
  return (
    <div className="timeline">
      <span className="icon fa fa-globe">
      <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain'
          />
      </span>
      <a href="#" className="timeline-content">
        <h3 className="title">{experience.title}</h3>
        <p className="description">{experience.company_name}</p>
      </a>
      <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-hover-threed text-hover-threed`}>
          Work Experience.
        </h2>
      </motion.div>

 
      <div className="mt-20 flex flex-col">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline2">
              {experiences.map((experience, index) => (
                <Exper key={`experience-${index}`} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");





















// import React from 'react'
// import "./timeline.css"
// const Timeline = () => {
//   return (
//     <>

//         <div className="container">
//             <h4>Timeline Style :</h4>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="main-timeline2">
//                         <div className="timeline">
//                             <span className="icon fa fa-globe"></span>
//                             <a href="#" className="timeline-content">
//                                 <h3 className="title">Web Designer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div className="timeline">
//                             <span className="icon fa fa-rocket"></span>
//                             <a href="#" className="timeline-content">
//                                 <h3 className="title">Web Developer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div className="timeline">
//                             <span className="icon fa fa-briefcase"></span>
//                             <a href="#" className="timeline-content">
//                                 <h3 className="title">Web Designer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                         <div className="timeline">
//                             <span className="icon fa fa-mobile"></span>
//                             <a href="#" className="timeline-content">
//                                 <h3 className="title">Web Developer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
//                                 </p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr/>

//         <div className="container">
//             <h4>Timeline Style : Demo-2</h4>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="main-timeline5">
//                         <div className="timeline">
//                             <div className="timeline-icon"><span className="year">2018</span></div>
//                             <div className="timeline-content">
//                                 <h3 className="title">Web Desginer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="timeline">
//                             <div className="timeline-icon"><span className="year">2017</span></div>
//                             <div className="timeline-content">
//                                 <h3 className="title">Web Developer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="timeline">
//                             <div className="timeline-icon"><span className="year">2016</span></div>
//                             <div className="timeline-content">
//                                 <h3 className="title">Web Desginer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="timeline">
//                             <div className="timeline-icon"><span className="year">2015</span></div>
//                             <div className="timeline-content">
//                                 <h3 className="title">Web Developer</h3>
//                                 <p className="description">
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr/>

//         <div className="demo">
//             <div className="container">
//                 <h4>Timeline Style : Demo-4</h4>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="main-timeline6">
//                             <div className="timeline">
//                                 <div className="timeline-content">
//                                     <span className="year">2018</span>
//                                     <div className="content-inner">
//                                         <span className="icon"><i className="fa fa-globe"></i></span>
//                                         <h3 className="title">Web Designer</h3>
//                                         <p className="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="timeline">
//                                 <div className="timeline-content">
//                                     <span className="year">2017</span>
//                                     <div className="content-inner">
//                                         <span className="icon"><i className="fa fa-rocket"></i></span>
//                                         <h3 className="title">Web Developer</h3>
//                                         <p className="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="timeline">
//                                 <div className="timeline-content">
//                                     <span className="year">2016</span>
//                                     <div className="content-inner">
//                                         <span className="icon"><i className="fa fa-briefcase"></i></span>
//                                         <h3 className="title">Web Designer</h3>
//                                         <p className="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="timeline">
//                                 <div className="timeline-content">
//                                     <span className="year">2015</span>
//                                     <div className="content-inner">
//                                         <span className="icon"><i className="fa fa-mobile"></i></span>
//                                         <h3 className="title">Web Developer</h3>
//                                         <p className="description">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis. Quisque eu ornare risus, vitae fermentum eros. Etiam venenatis ac.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <hr/>

//     </>
//   )
// }

// export default Timeline
