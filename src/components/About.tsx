import React from 'react'
import { Button } from './ui/button'

type Props = {}

const About = (props: Props) => {
  return (
    <section>
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-40">
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div className="relative ml-4">
      <img className="w-full rounded-md" src="/fam.jpg" alt="Image Description"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

      
      
    </div>
    <div>
      <h1 className="block text-2xl font-bold text-black sm:text-2xl lg:text-2xl lg:leading-tight ">About Us</h1>
      <p className="mt-3 text-lg text-gray-800 ">We are the fastest most reliable money transfer business aiming to bring financial services to your family and friends without any hassle. 
        Our objective is to provide fast, reliable safe and convenient financial services to all our valued customers. We give you a competitive rate and low fee for every transaction which can be collected in the most accessible location for customers. We aim to stay closer to our customers and provide them with the most reliable, efficient, and convenient financial services to suit their everyday needs.
     </p>
    </div>
  </div> 
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pt-40">
  
    <div>
      <h1 className="block text-2xl font-bold text-black sm:text-2xl lg:text-2xl lg:leading-tight ">Our values</h1>
      <p className="mt-3 text-lg text-gray-800 ">Our core values remain the focus of helping families support each other.  We are a client driven endeavouring to providing the best and most reliable financial services to you and your families. We are regulated by Financial Conduct Authority (FCA) UK and absolutely commitment to ethics, honesty, credibility, and transparency in our everyday business.</p>
    </div>
    <div className="relative ml-4 ">
      <img className="w-full rounded-md" src="/vision.jpg" alt="Image Description"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

      
      
    </div>
  </div> 
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center pt-40">
  <div className="relative ml-4"> 
      <img className="w-full rounded-md" src="/passion.jpg" alt="Image Description"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

      
      
      
    </div>
    <div>
      <h3 className="block text-2xl font-bold text-black sm:text-2xl lg:text-2xl lg:leading-tight ">Passion</h3>
      <p className="mt-3 text-lg text-gray-800 ">We are passionate about our business and giving our valued you the best service 24/7.
We are delighted to offer our you a affordable and effortless solution to your everyday financial worries and serve you in the best possible way.
We are proud to giving back the communities that we serve our utmost help and partnership with them to create a coherent, vibrant, and socially connected society. 

     </p>
    </div>
  </div> 
</div>

</section>
  )
}

export default About