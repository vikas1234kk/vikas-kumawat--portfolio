import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
      <motion.nav  initial={{ opacity: 0.2, y: 70 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} className='flex items-center justify-between py-6'>
        <div className=''>
            <a href="/" aria-label='Home'><button className='text-white font-medium text-2xl button-1'>Vikas Kumawat</button></a>
            </div>

      
        
        <div className='flex gap-6 text-2xl active'>
            <a href="https://www.linkedin.com/in/vikas-kumawat-a4bbb734b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' ><FaLinkedin /></a>
            <a href="https://www.instagram.com/_.vikas_07._/?next=%2F" target='_blank' rel='noopener noreferrer' aria-label='Instagram' ><FaInstagram /></a>
            <a href="https://github.com/vikas1234kk" target='_blank' rel='noopener noreferrer' aria-label='Github' ><FaGithub /></a>
            <a href="https://chat.whatsapp.com/J7mbLjGrQlb7B8Cu61rgj9" target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' ><FaWhatsapp /></a>

            
      
        </div>
        
      </motion.nav>
    
  )
}

export default Navbar
