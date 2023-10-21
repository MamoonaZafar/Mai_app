import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

type Props = {}

const Faq = (props: Props) => {
  return (
    <section>
{/* <!-- FAQ --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="mt-20 max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
      Frequently Asked Questions
    </h2>
  </div>
  {/* <!-- End Title --> */}

  <div className="max-w-5xl mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
      
      <div>
      <Accordion type="single" collapsible className='w-full'>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW DO I TOP UP ELECTRICITY OR MOBILE CREDIT IN THE GAMBIA?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>WHEN WILL THE MONEY BE AVAILABLE FOR PICK UP?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>WHAT INFORMATION DO I NEED IN ORDER TO RECEIVE MY MONEY TRANSFER?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW DO I FIND THE NEAREST APS INTERNATIONAL LTD PAYOUT AGENT?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW DO I RECEIVE A MONEY TRANSFER?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-6">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW DO I PROTECT MYSELF WHEN SENDING MONEY ABROAD?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  </Accordion>
  </div>

      <div>
        <Accordion type="single" collapsible className='w-full'>
      <AccordionItem value="item-7">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>WHAT SHOULD I DO IF MY RECEIVER IS HAVING TROUBLE PICKING UP THE TRANSACTION?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-8">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>WHEN WILL THE MONEY BE AVAILABLE TO MY RECEIVER?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-9">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW CAN I PAY FOR A MONEY TRANSFER/NDUGA/NAWEC CASH POWER/MOBILE CREDIT TOP UP?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-10">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW MUCH DOES IT COST TO TRANSFER MONEY?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-11">
    <AccordionTrigger className='text-2xl gap-x-3 w-full md:text-lg font-semibold text-left '>HOW DO I SEND MONEY FROM APS INTERNATIONAL LTD IN PERSON?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  </Accordion>





      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
</div>
</div>
{/* <!-- End FAQ --> */}
</section>
  )
}

export default Faq