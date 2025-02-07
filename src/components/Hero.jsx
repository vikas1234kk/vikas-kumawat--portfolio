import React from 'react'
import profilePic from '../assets/vikas2.jpg';
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";


const words = ["Full Stack Developer", "Designer", "Freelancer"];
const delay = 2000;



const Hero = () => {


    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, delay);
        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div className='pb-4 lg:mb-36 ml-8 mt-6 ' initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} >
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className='flex justify-center lg:p-8 '>
                        <img src={profilePic} className='lg:w-1/2 rounded-3xl image-1  ' alt="" />
                    </motion.div>

                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10 '>
                        <h2 className='pb-2 text-4xl tracking-tighter lg:text-6xl skills-dev '>Vikas Kumawat</h2>
                        <motion.span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent skills-dev  ' key={words[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >{words[index]}</motion.span>
                        <motion.p
                            className='my-2 max-w-lg py-6 text-xl loading-relaxed tracking-tighter paragraph'>👋 Hi there, I'm Vikas! I'm a results-driven MERN stack developer with a passion for building cutting-edge web applications that make an impact.
                            I've honed my skills in MongoDB, Express.js, <br /> React.js, and Node.js to deliver high-quality solutions tailored to meet specific user needs. <br /> With a strong foundation in full-stack development, I thrive in environments that challenge me to continuously learn and innovate.</motion.p>

                        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }} className='px-7 py-2 bg-gray-300 text-zinc-900  text-xl rounded-lg resume' href="/vikas1 resume.pdf" download>Resume <span className=''>&#8595;</span></motion.a>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Hero
