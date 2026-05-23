"use client"
import FAQCard from '@/components/home-page/sections/faq-section/faq-card'
import { FAQ } from '@/components/home-page/sections/faq-section/faq-section'

export const HeroSection = () => {
  const accordionData: FAQ[] = [
    {
      question: "Vision",
      answer: "To lead the evolution of interactive entertainment in Indonesia, creating a dynamic hub where players enjoy exciting challenges while gaining real value from their engagement."
    },
    {
      question: "Mission",
      answer: "To inspire and connect players nationwide by delivering innovative gaming experiences that combine exploration, enjoyment, and tangible benefits."
    },
    {
      question: "Values",
      answer: "Our values are quality, integrity, and customer satisfaction."
    },
  ]

  return (
    <div className='bg-white' data-aos="fade-right">
      <div className='py-[80px] md:py-[150px] flex flex-col md:flex-row items-start max-w-7xl mx-auto px-[24px] md:px-[48px] gap-[48px] md:gap-[60px]'>
        <div className='md:w-[50%] flex flex-col gap-[24px]'>
          <h1 className='h1'>About <span>Us</span></h1>
          <p>Di AdQuest, kami merevolusi pengalaman gaming mobile dengan mengintegrasikan peluang &quot;main dan menangkan&quot;. Lebih dari 200.000 pemain secara aktif terlibat dengan platform kami, menemukan game baru, dan memperoleh hadiah sambil bermain.</p>
        </div>
        <div className='flex-1 flex flex-col gap-[24px]' data-aos="fade-right">
          {accordionData.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}
