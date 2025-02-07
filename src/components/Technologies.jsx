import React from 'react'
import { SiBootstrap, SiExpress, SiFigma, SiGit, SiGithub, SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRender, SiTailwindcss, SiVercel, SiVscodium, } from 'react-icons/si'
import { motion } from 'framer-motion'


const Technologies = () => {
    return (
        <motion.div initial={{ opacity: 0.4, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='pb-24 max-w-[1000px] ml-10'>
            <h2 className='text-4xl my-20 '>Tech Stack <hr className='my-2 bg-gradient-to-r from-stone-300 to-stone-600  ' /></h2>
            <h3 className='text-3xl my-10 '>Frontend</h3>
            <div className='items-start flex flex-wrap grid sm:grid-cols-3  gap-4'>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className=' p-4 px-6 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiNextdotjs className='text-2xl text-white bg-zinc-900 ' />Next.Js
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiJavascript className='text-2xl text-yellow-400  ' />JavaScript
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiReact className='text-2xl text-cyan-400  ' 
                        />ReactJs
                </motion.div>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiBootstrap className='text-2xl text-purple-400  ' />Bootstrap
                </motion.div>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiTailwindcss className='text-2xl text-cyan-400  ' />Tailwind Css
                </motion.div>


            </div>
            <h3 className='text-3xl my-10'>Backend</h3>
            <div className='items-start flex flex-wrap grid sm:grid-cols-3  gap-4'>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiMongodb className='text-2xl text-green-400' />MongoDb
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiExpress className='text-2xl text-yellow-400 ' />ExpressJs
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiReact className='text-2xl text-cyan-400 ' />ReactJs
                </motion.div>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiNodedotjs className='text-2xl text-green-400 ' />NodeJs
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}   className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiTailwindcss className='text-2xl text-cyan-400 ' />TailwindCss
                </motion.div>


            </div>
            <h3 className='text-3xl my-10'>Productivity</h3>
            <div className='items-start flex flex-wrap grid sm:grid-cols-2   gap-4'>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}   className='p-2 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiGit className='text-2xl text-orange-400' />Git
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}   className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiGithub className='text-2xl text-white bg-zinc-900 ' />Github
                </motion.div>
                <motion.div  animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}  className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiPostman className='text-2xl text-orange-400 ' />Postman
                </motion.div>

                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}   className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiVercel className='text-2xl  ' />Vercel
                </motion.div>






            </div>
            <div className='flex flex-wrap items-start gap-4 mt-8 grid sm:grid-cols-3'>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}    className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiRender className='text-2xl text- ' />Render
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}    className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <img src="/logo.png" width={20} alt="" />VsCode Editor
                </motion.div>
                <motion.div animate={{ y: [0, -20, 0] }} // Moves up and down
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}   className='p-4 px-7 py-3 items-center border border-gray-300 flex gap-2 items-center rounded-sm'>
                    <SiNetlify className='text-2xl text-cyan-400' />Netlify
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Technologies
