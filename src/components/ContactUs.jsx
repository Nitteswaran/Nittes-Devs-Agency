import React, { useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div id='contact-us' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'>
      
      <Title 
        title='Get in Touch' 
        desc="Have a project in mind? Let's discuss how we can help bring your vision to life." 
      />

      <div className='w-full max-w-4xl grid md:grid-cols-2 gap-8 mt-8'>
        
        {/* Contact Information */}
        <div className='flex flex-col gap-6'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold mb-4'>Contact Information</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className='flex flex-col gap-4 mt-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-gray-100 dark:bg-gray-800 rounded-full p-3'>
                <img src={assets.email_icon} alt="Email" className='w-6 h-6' />
              </div>
              <div>
                <p className='font-medium'>Email</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>spnittes@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='flex gap-4 mt-4'>
            <a href="https://www.instagram.com/nitttees_/" className='bg-gray-100 dark:bg-gray-800 rounded-full p-3 hover:scale-110 transition-all'>
              <img src={assets.instagram_icon} alt="Instagram" className='w-6 h-6' />
            </a>
            <a href="https://www.linkedin.com/in/nittes/" className='bg-gray-100 dark:bg-gray-800 rounded-full p-3 hover:scale-110 transition-all'>
              <img src={assets.linkedin_icon} alt="LinkedIn" className='w-6 h-6' />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 p-8'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
                placeholder='Your name'
              />
            </div>

            <div>
              <label htmlFor="email" className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
                placeholder='your.email@example.com'
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-sm font-medium mb-2'>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none'
                placeholder='Tell us about your project...'
              />
            </div>

            <button
              type="submit"
              className='mt-2 flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full cursor-pointer hover:scale-105 transition-all font-medium'
            >
              Send Message <img src={assets.arrow_icon} width={14} alt="" />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactUs

