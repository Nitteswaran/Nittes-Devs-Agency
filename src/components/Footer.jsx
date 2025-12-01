import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
      <div className='px-4 sm:px-12 lg:px-24 xl:px-40 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          
          {/* Logo and Description */}
          <div className='md:col-span-2'>
            <img 
              src={theme === 'dark' ? assets.logo_dark : assets.logo} 
              className='w-32 sm:w-40 mb-4' 
              alt='Nittes Devs Logo' 
            />
            <p className='text-gray-600 dark:text-gray-400 text-sm max-w-md mb-4'>
              Turning imaginations into digital impact. Creating captivating digital experiences that captivate and engage users.
            </p>
            <div className='flex gap-4'>
              <a href="#" className='bg-gray-100 dark:bg-gray-800 rounded-full p-2.5 hover:scale-110 transition-all'>
                <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5' />
              </a>
              <a href="#" className='bg-gray-100 dark:bg-gray-800 rounded-full p-2.5 hover:scale-110 transition-all'>
                <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5' />
              </a>
              <a href="#" className='bg-gray-100 dark:bg-gray-800 rounded-full p-2.5 hover:scale-110 transition-all'>
                <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5' />
              </a>
              <a href="#" className='bg-gray-100 dark:bg-gray-800 rounded-full p-2.5 hover:scale-110 transition-all'>
                <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold text-gray-700 dark:text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a href="#hero" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Services
                </a>
              </li>
              <li>
                <a href="#our-work" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact-us" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold text-gray-700 dark:text-white mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <a href="#services" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Advertising
                </a>
              </li>
              <li>
                <a href="#services" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="#services" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Content Writing
                </a>
              </li>
              <li>
                <a href="#services" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm'>
                  Social Media
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className='border-t border-gray-200 dark:border-gray-800 pt-8 mt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              © {currentYear} Nittes Devs. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'>
                Privacy Policy
              </a>
              <a href="#" className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

