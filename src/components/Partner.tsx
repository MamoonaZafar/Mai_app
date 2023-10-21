import React from 'react'

type Props = {}

const Partner = (props: Props) => {
  return (
    <section>
        
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
    <h2 className="flex justify-center pt-5 text-2xl items-center font-bold text-black sm:text-2xl lg:text-2xl lg:leading-tight">Our Partners coming soon</h2>
  </div>

  <div className="flex justify-center gap-x-4 sm:gap-x-10 lg:gap-x-20">
    <img src='/riaa.png' height={100} width={100}/>
    <img src='/small.jpg' height={100} width={150}/>
    <img src='/money.png' height={50} width={250}/>
    <img src='/ww.png' height={100} width={100}/>
    <img src='/west.png' height={150} width={150}/>
  </div>
</div>
      
</section>
  )
}

export default Partner