import React from 'react'
import { SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiRazorpay, SiReact, SiStripe, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { div } from 'framer-motion/m';


const Projects = () => {

    const projectImage1 = [
        "/generate (10).png",
        "/generate (9).png",
        "/generate (8).png",
        "/generate (7).png",
        "/generate (6).png",
    ];
    console.log(projectImage1)

    const projectImage2 = [
        "/generate (11).png",
        "/generate (12).png",
        "/generate (13).png",
        "/generate (14).png",
        "/generate (15).png"
    ];


    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop slides
        speed: 1000, // Transition speed (1 second)
        slidesToShow: 1, // Show 1 image at a time
        slidesToScroll: 1,
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 3000, // Delay (3 seconds)
        cssEase: "ease-in-out", // Smooth transition
        fade: true,
        arrows: false
    };


    return (

        <div className='ml-6 '>
            <h2 className='text-4xl mb-4'>Projects</h2>
            <hr className='w-[70%]' />

            <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 2 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }} className=' flex flex-col-reverse md:flex-row max-w-[900px] items-center md:items-start bg-black-700 border border-cyan-900 text-white p-6 rounded-2xl shadow-lg mt-10 mb-10'>

                {/* left side content */}

                <div className='md:w-1/2 w-full text-center md:text-left space-y-4'>
                    <h3 className='text-center text-lg md:text-2xl '>Forever / Full Stack E-Commerce</h3>
                    <p className="text-gray-400 mt-2 paragraph-2  ">Develope a Full stack e-commerce Web Application For Inhance my skills And I also Interigate Api  Its Also Use Various technologies Like Frontend And Backend and alos make a admin panel</p>
                    <h3 className='text-2xl mt-3 font-bold tech-stack'>Tech Stack</h3>
                    <ul className='flex  items-center gap-4 my-3 tech-stack '>
                        <li><SiMongodb className='text-3xl text-green-400' /></li>
                        <li><SiExpress className='text-3xl text-yellow-400' /></li>
                        <li><SiReact className='text-3xl text-cyan-400' /></li>
                        <li><SiNodedotjs className='text-3xl text-green-400' /></li>
                        <li><SiTailwindcss className='text-3xl text-cyan-400' /></li>
                        <li><SiRazorpay className='text-3xl text-cyan-400' /></li>
                    </ul> 
                    <div className='flex flex-wrap gap-2 justify-center md:justify-start '>
                        <a href="https://github.com/vikas1234kk/FOREVER-FULL-STACK-PROJECTS/tree/main/frontend"><button className='md:px-4 md:py-2 inline-flex w-auto border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer rounded-xl'><SiGithub className='text-2xl sm:text-xl' />Frontend</button></a>
                        <a href="https://github.com/vikas1234kk/FOREVER-FULL-STACK-PROJECTS/tree/main/backend"><button className='md:px-4 md:py-2 inline-flex w-auto border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer rounded-xl'><SiGithub className='text-2xl sm:text-xl' />Backend</button></a>

                    </div>
                    <a href="https://clothes-e-commerce-77vf.vercel.app/"><button className='  flex items-center justify-center mt-6 w-full py-3 text-center border border-gray-400 rounded-xl  '>FOREVER / FULL-STACK E-COMMERCE<span className='text-3xl'>&#8599;</span></button></a>

                </div>
                <div className='md:w-1/2 w-full mt-6 md:mt-0 flex justify-center'>

                    <Slider {...settings} className='min-64 w-full'>

                        {
                            projectImage1.map((src, index) => (
                                <div key={src} className='flex justify-center items-center'>
                                    <img src={src} className=' mt-12 ml-6 w-full max-w-[300px] md:max-w-[400px] rounded-xl shadow-md object-cover ' alt={`Slide ${index + 1}`} />

                                </div>
                            ))
                        }

                    </Slider>

                </div>

            </motion.div>





            <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 4 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }}  className=' flex flex-col-reverse md:flex-row max-w-[900px] items-center md:items-start bg-black-700 border border-cyan-900 text-white p-6 rounded-2xl shadow-lg mt-10 mb-10'>

                {/* left side content */}

                <div className='md:w-1/2 w-full text-center md:text-left space-y-4'>
                    <h3 className='text-center text-lg md:text-2xl '>Imagify / AI Image Generator</h3>
                    <p className="text-gray-400 mt-2 paragraph-2  ">Develope a Web Application Are Generated Beatiful And HD Quality Images For Using AI And also use Clip Drope API Its Also Use Various technologies Like Frontend And Backend</p>
                    <h3 className='text-2xl mt-3 font-bold tech-stack'>Tech Stack</h3>
                    <ul className='flex  items-center gap-4 my-3 tech-stack '>
                        <li><SiMongodb className='text-3xl text-green-400' /></li>
                        <li><SiExpress className='text-3xl text-yellow-400' /></li>
                        <li><SiReact className='text-3xl text-cyan-400' /></li>
                        <li><SiNodedotjs className='text-3xl text-green-400' /></li>
                        <li><SiTailwindcss className='text-3xl text-cyan-400' /></li>
                        <li><SiRazorpay className='text-3xl text-cyan-400' /></li>
                    </ul>
                    <div className='flex flex-wrap gap-2 justify-center md:justify-start '>
                        <a href="https://github.com/vikas1234kk/imagify/tree/main/client"><button className='md:px-4 md:py-2 inline-flex w-auto border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer rounded-xl'><SiGithub className='text-2xl sm:text-xl' />Frontend</button></a>

                        <a href="https://github.com/vikas1234kk/imagify/tree/main/backend"><button className='md:px-4 md:py-2 inline-flex w-auto border border-gray-400 px-5 py-2 items-center flex gap-3 hover:px-10 transition ease-in-out duration-0.6 cursor-pointer rounded-xl'><SiGithub className='text-2xl sm:text-xl' />Backend</button></a>

                    </div>
                    <a href="https://imagify-sandy-ten.vercel.app/"><button className='  flex items-center justify-center mt-6 w-full py-3 text-center border border-gray-400 rounded-xl  '>AI IMAGE GENERATOR<span className='text-3xl'>&#8599;</span></button></a>


                </div>
                <div className='md:w-1/2 w-full mt-6 md:mt-0 flex justify-center'>

                    <Slider {...settings} className='min-64 w-full'>

                        {
                            projectImage2.map((src, index) => (
                                <div key={src} className='flex justify-center items-center'>
                                    <img src={src} className=' mt-12 ml-6 w-full max-w-[300px] md:max-w-[400px] rounded-xl shadow-md object-cover ' alt={`Slide ${index + 1}`} />

                                </div>
                            ))
                        }

                    </Slider>

                </div>

            </motion.div>




        </div>
    )
}

export default Projects






