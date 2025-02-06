import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
      <motion.nav  initial={{ opacity: 0.2, y: 70 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'><button className='text-white font-medium text-2xl'>Vikas Kumawat</button></a>

        </div>
        
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' ><FaLinkedin /></a>
            <a href="https://www.instagram.com/_.vikas_07._/?next=%2F" target='_blank' rel='noopener noreferrer' aria-label='Instagram' ><FaInstagram /></a>
            <a href="https://github.com/vikas1234kk" target='_blank' rel='noopener noreferrer' aria-label='Github' ><FaGithub /></a>
            <a href="" target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' ><FaWhatsapp /></a>

            
        </div>
        
      </motion.nav>
    
  )
}

export default Navbar
