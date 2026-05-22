"use client"
import { serviceHeroIllustration } from '@/components/common/illustration'
import HeroContactForm from '@/components/contact/contact-form'
import Image from 'next/image'
import { useLang } from '@/utils/lang'

export const HeroSection = () => {
  const lang = useLang()
  return (
    <div className='bg-white relative z-[1] section-rounded__bottom'>
      <div className='max-w-7xl mx-auto px-[24px] lg:px-[48px] pt-[100px] pb-[100px] flex flex-col'>
        <div className='w-full md:max-w-[80%] mb-8' data-aos="fade-down">
          <h1 className='h1 md:!text-6xl text-center md:text-left'>
            {lang === 'en' ? <>Ready to <span>Maximize</span> Your Mobile Game Ad Revenue?</> : <>Siap untuk <span>Memaksimalkan Potensi</span> Pendapatan Iklan dari Game Mobile Anda?</>}
          </h1>
        </div>

        <div className='flex flex-col md:flex-row gap-[48px]'>
          <div className='flex-1 flex flex-col gap-4 text-sm md:text-base' data-aos="fade-right">
            <p>{lang === 'en' ? 'Our team is ready to help you generate up to thousands of dollars per day through ad monetization. Join successful game studios that have optimized ads as a revenue stream and turn your game into a profitable business starting today.' : 'Tim kami siap membantu Anda untuk menghasilkan pendapatan hingga ribuan dolar setiap hari melalui monetisasi iklan. Bergabunglah dengan studio games sukses lainnya yang telah memaksimumkan iklan sebagai sumber pendapatan dan ubah game Anda menjadi bisnis yang menguntungkan mulai hari ini!'}</p>
            <p>{lang === 'en' ? 'You can stay focused on building your games, and AdQuest will help you execute an effective ad monetization strategy.' : 'Anda dapat fokus mengembangkan games, dan AdQuest akan membantu Anda melakukan strategi monetisasi iklan yang efektif.'}</p>
            {/* <Button>Let&apos;s Talk</Button> */}

            <HeroContactForm />
          </div>

          <div className='flex-1' data-aos="fade-right" data-aos-delay={300}>
            <Image src={serviceHeroIllustration} alt='Hero Image' />
          </div>
        </div>
      </div>
    </div>
  )
}
