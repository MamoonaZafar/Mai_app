import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <section>
        <h1 className='flex justify-center pt-40 text-2xl items-center font-bold text-black sm:text-2xl lg:text-2xl lg:leading-tight'>Why Choose Us</h1>  
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
    
           <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
             <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
               <svg className="w-6 h-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Family Centre Services</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">We recognise the struggles that families face in getting the right support to their loved ones at the right time. Our service will be family base, transparent and efficient.</p>
    </div>
    
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Low Cost</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">We have the lowest fees and the unbeatable rate with no hidden charges.  We regularly offer special rewards our loyal customers with zero charges.
</p>
    </div>
    
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Simple</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">In 3 easy steps, transfer money worldwide, send NDUGA, top up electricity and/or mobile credit in The Gambia 24/7 online available via your computer, laptop, tablet, or smartphone.
</p>
    </div>
  
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Instant</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Transfer worldwide where you and your recipient receive updated notifications by email and SMS for your peace of mind.
</p>
    </div>
    
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Secure</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">We have industry leading technology trusted for your payment security.</p>
    </div>
   
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-green-50 bg-green-100 dark:border-green-900 dark:bg-green-800">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Convenience</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">We offer a range of instant and convenient remittance collection.
     </p>
    </div>
    
  </div>
</div>

    </section>
  )
}

export default Features