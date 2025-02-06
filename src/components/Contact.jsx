import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {


    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "651d2b37-c49d-45e9-af7f-f2d10a1ac214");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult(toast.success("Form Submitted SuccesFully !!!  "));
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };





    return (
        <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 4 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }}  className='pb-24 text-center'>
            <p className=' text-xl text-gray-400 mb-3  '>Contact With Me</p>
            <h2 className=' text-3xl mt-4'>Get In Touch</h2>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto' >
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-700 shadow-md rounded-md text-white bg-black-900' type="email" placeholder='Enter Your Email' required />
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-700 shadow-md rounded-md text-white bg-black-900' type="text" placeholder='Enter Your Name' required />
                </div>
                <textarea className='w-full outline-none border-[0.5px] border-gray-700 rounded-md text-white bg-black-900 flex-1 p-3' rows={8} placeholder='Enter Your Message For Help'></textarea>
                <motion.button  initial={{opacity: 0}}  animate={{opacity: 1}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95}} transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1 }}} className='w-full text-xl bg-zinc-900 mt-10  text-white py-3 border-gray-400 border rounded-md font-medium' type='submit'>Submit</motion.button>


                <p className='mt-4 '>{result}</p>
            </form>
        </motion.div>
    )
}

export default Contact
