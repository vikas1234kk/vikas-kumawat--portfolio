import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiIndeed } from 'react-icons/si';

const Contact = () => {


    const [result, setResult] = useState("");

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
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-700 shadow-md rounded-md text-white bg-black-900' type="email" name='email' placeholder='Enter Your Email' required />
                    <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-700 shadow-md rounded-md text-white bg-black-900' type="text" name='Name' placeholder='Enter Your Name' required />
                </div>
                <textarea name='message' className='w-full outline-none border-[0.5px] border-gray-700 rounded-md text-white bg-black-900 flex-1 p-3' rows={8} placeholder='Enter Your Message For Help'></textarea>
                <motion.button  initial={{opacity: 0}}  animate={{opacity: 1}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95}} transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1 }}} className='w-full text-xl bg-zinc-900 mt-10  text-white py-3 border-gray-400 border rounded-md font-medium' type='submit'>Submit</motion.button>


                <p className='mt-4 '>{result}</p>
            </form>

             <div className='flex gap-6 justify-center items-center text-2xl mt-10'>
                        <a href="https://www.linkedin.com/in/vikas-kumawat-a4bbb734b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' ><FaLinkedin /></a>
                        <a href="https://www.instagram.com/_.vikas_07._/?next=%2F" target='_blank' rel='noopener noreferrer' aria-label='Instagram' ><FaInstagram /></a>
                        <a href="https://github.com/vikas1234kk" target='_blank' rel='noopener noreferrer' aria-label='Github' ><FaGithub /></a>
                        <a href="https://chat.whatsapp.com/J7mbLjGrQlb7B8Cu61rgj9" target='_blank' rel='noopener noreferrer' aria-label='whatsapp' ><FaWhatsapp/></a>
                        
            
                        
                  
                    </div>
        </motion.div>
    )
}

export default Contact
