import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiRazorpay, SiReact, SiStripe, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';


const Projects = () => {

    const project = {
        title: "Forever / Full Stack E-commerce ",
        description: "Forever is a cutting-edge e-commerce platform. Designed for Develope My Skills And User Friendly, it promises seamless functionality and a captivating UI/UX for an exceptional shopping journey.",
        images: [
            "/generate (10).png",
            "/generate (4).png",
            
        ],
    };



    return (
        <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }}  className='pb-24 ml-10'>
            <h2 className='text-4xl my-20 '>Projects <hr className='my-2 w-full lg:w-[70%]' /></h2>
            <div  className='flex items-center flex-col md:flex-row sm:flex-reverse  border border-gray-700 outline-none rounded-lg shadow-lg max-w-4xl '>
                {/* Left Side: Content */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold ">Imagify / AI Image Generator Application</h2>
                    <p className="text-gray-400 mt-2">Develope a Web Application Are Generated Beatiful And HD Quality Images For Using AI And also use Clip Drope API Its Also Use Various technologies Like Frontend And Backend</p>
                    <h3 className='text-2xl mt-3 font-bold'>Tech Stack</h3>
                    <ul className='flex  items-center gap-4 my-3 '>
                        <li><SiMongodb className='text-3xl text-green-400' /></li>
                        <li><SiExpress className='text-3xl text-yellow-400' /></li>
                        <li><SiReact className='text-3xl text-cyan-400' /></li>
                        <li><SiNodedotjs className='text-3xl text-green-400' /></li>
                        <li><SiTailwindcss className='text-3xl text-cyan-400' /></li>
                        <li><SiRazorpay className='text-3xl text-cyan-400' /></li>
                    </ul>
                    <div className='flex items-center gap-2 items-start  '>
                        <button className='border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer'><SiGithub className='text-2xl' />Frontend</button>
                        <button className='border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer '><SiGithub className='text-2xl' />Backend</button>
                    </div>
                    <motion.a  initial={{opacity: 0}}  animate={{opacity: 1}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95}} transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1 }}} href="https://imagify-sandy-ten.vercel.app/"><div className='border w-full bg-black text-center py-3 text-white mt-6 text-xl cursor-pointer ' >AI Image Generator<span className='text-3xl'>&#8599;</span></div></motion.a>
                </div>
                
                {/* right side content */}
               <div className='border border-black   w-1/2 mx-4 rounded-xl shadow-md  '>
               <img src="\generate (11).png " className='w-full items-center md:h-[300px] sm:h-[300px] rounded-xl img ' alt="" />

               </div>


            </div>
            <div className='flex items-center flex-col md:flex-row sm:flex-reverse  border border-gray-700 outline-none rounded-lg shadow-lg max-w-4xl mt-6 '>
                {/* Left Side: Content */}
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold ">{project.title}</h2>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                    <h3 className='text-2xl mt-3 font-bold'>Tech Stack</h3>
                    <ul className='flex  items-center gap-4 my-3 '>
                        <li><SiMongodb className='text-3xl text-green-400' /></li>
                        <li><SiExpress className='text-3xl text-yellow-400' /></li>
                        <li><SiReact className='text-3xl text-cyan-400' /></li>
                        <li><SiNodedotjs className='text-3xl text-green-400' /></li>
                        <li><SiTailwindcss className='text-3xl text-cyan-400' /></li>
                        <li><SiStripe className='text-3xl bg-blue text-cyan-400' /></li>
                    </ul>
                    <div className='flex items-center gap-2 items-start  '>
                        <button className='border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer'><SiGithub className='text-2xl' />Frontend</button>
                        <button className='border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer '><SiGithub className='text-2xl' />Backend</button>
                    </div>
                   <motion.a initial={{opacity: 0}}  animate={{opacity: 1}} whileHover={{ scale: 0.40 }} whileTap={{ scale: 0.20}} transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1 }}} href="https://forever-full-stack-projects-uded.vercel.app/"><div className='border w-full bg-black text-center py-3 text-white mt-6 text-xl cursor-pointer ' >Forever<span className='text-3xl'>&#8599;</span></div></motion.a>
                </div>
                
                {/* right side content */}
               <div className='border border-black   w-1/2 mx-4 rounded-xl shadow-md  '>
               <img src="\Screenshot 2025-02-05 084731.png " className='w-full items-center md:h-[300px] sm:h-[300px] rounded-xl img ' alt="" />

               </div>


            </div>
            
            
        </motion.div>
    )
}

export default Projects
