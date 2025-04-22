import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const FAQ = () => {
  const faqQuestions =[
  {
    question:'What is the purpose of the app?',
    answer:'PayBills allows you to pay bills, recharge accounts, buy data, and manage payments conveniently from your mobile device.'
  },  
  {
    question:'Which types of bills can I pay?',
    answer:'Users can pay utility bills (electricity, water, gas), internet, phone, insurance, and credit card bills'
  },  
  {
    question:'Is the app free to use?',
    answer:'Yes, PayBills is free to download and use, but transaction fees may apply depending on the service provider.'
  },  
  {
    question:'How do I register or sign up?',
    answer:'You can sign up using your email or phone number and create a password. Download the PayBills App on the .'
  },  
  {
    question:'About Payurbills Limited',
    answer:'Payurbills Limited is the owner of PayBills, the Bill Payment Solution provider for any utility payments based in Nigeria and Switzerland.'
  },  
  {
    question:'About PayBills',
    answer:'PayBills is the secure, simplified, smart  and safe platform provided by Payurbills for the purposes of utility bills payments on your Android Phone, iPhone and the web.'
  },  
  {
    question:'Why Should I Use PayBills?',
    answer:'PayBills is smart, simplified, secure and safe. It is versatile and comprehensive that is futuristic allowing to pay for bills, not only in Nigeria, but across the continent.'
  },  
  ]
  return (
    <>
    <div className="md:px-12 pt-4">
      <div className="bg-[url(/FAQ.png)] bg-cover text-white py-10  w-full rounded-none ">

      <h1 className="text-center text-xl font-semibold">FAQ</h1>
        <div className="md:w-[500px]  p-4 mx-auto">


          <Accordion.Root type="single" collapsible className="AccordionRoot h-[400px] overflow-auto">
            {faqQuestions.map((details,index)=>(
                     <Accordion.Item value={`item-${index+1}`} className="AccordionItem border-b border-white  p-3" key={index}>
                     <Accordion.Trigger className="AccordionTrigger flex items-center gap-8 justify-between group">
       
                       <p className='text-lg '>{details.question}</p>
                       <span className="transition-transform duration-300   group-data-[state=open]:rotate-180">
                       <ChevronDownIcon className='font-semibold'/></span>
                     </Accordion.Trigger>
                     <Accordion.Content className="AccordionContent my-6">
                      {details.answer}
                     </Accordion.Content>
                   </Accordion.Item>
            ))}
         

           
          </Accordion.Root>
        </div>
      </div>
      </div>
    </>
  );
}

export default FAQ;