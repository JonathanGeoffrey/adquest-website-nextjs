"use client"
import Button from '@/components/common/button';
import DownloadRating from '@/components/common/download-rating';
import { ctaImage, illustDino, illustKoin } from '@/components/common/illustration';
import { mockupHome, mockupHomePH, mockupRewards, mockupRewardsPH, mockupTasks, mockupTasksPH } from '@/components/common/mockup';
import Steps from '@/components/common/step/steps';
import { AnimatePresence, motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import ControlButton from '../reviews/control-button';
import { useLang } from '@/utils/lang';

export interface Step {
  title: string;
  description: string;
  illustration: StaticImageData;
}

const StepSection = () => {
  const lang = useLang()
  const [currentStep, setCurrentStep] = useState(0)
  const stepMockupHome = lang === 'en' ? mockupHomePH : mockupHome
  const stepMockupTasks = lang === 'en' ? mockupTasksPH : mockupTasks
  const stepMockupRewards = lang === 'en' ? mockupRewardsPH : mockupRewards

  // Animation Variants
  const bobbingAnimation = {
    animate: {
      y: [0, -10, 0], // Move up and down
    },
    transition: {
      duration: 3, // Duration for one cycle
      stagger: 1, // Delay between each cycle
      repeat: Infinity, // Infinite loop
      ease: 'easeInOut', // Smooth easing
    },
  };

  const steps: Step[] = [
    {
      title: lang === 'en' ? "Find and download games you love" : "Temukan dan download games yang kamu suka",
      description: lang === 'en' ? "AdQuest offers many games that help you earn Egg points. Find games you enjoy, then download them directly through the AdQuest app." : "AdQuest menyediakan banyak games yang bisa bantu kamu mendapatkan poin Eggs. Cari game yang seru buat kamu, lalu download langsung lewat aplikasi AdQuest.",
      illustration: stepMockupHome,
    },
    {
      title: lang === 'en' ? "Complete missions and collect Eggs as rewards" : "Selesaikan misi dan kumpulkan eggs sebagai hadiahmu",
      description: lang === 'en' ? "After downloading, play the game to earn “Eggs” (points). The more and higher-level missions you complete, the more Eggs you collect." : "Setelah download, mainkan gamenya langsung untuk mendapatkan “Eggs” (poin). Makin banyak dan tinggi misi yang kamu selesaikan, makin banyak Eggs yang terkumpul.",
      illustration: stepMockupTasks,
    },
    {
      title: lang === 'en' ? "Redeem Eggs for cash" : "Tukarkan Eggs dengan uang tunai",
      description: lang === 'en' ? "When you have enough Eggs, open the Rewards page in AdQuest and redeem available rewards like GCash balance." : "Kalau Eggsmu sudah cukup, buka halaman Hadiah di AdQuest dan tukarkan dengan hadiah yang tersedia seperti saldo DANA dan OVO.",
      illustration: stepMockupRewards,
    },
  ]

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length)
  }

  // Change the current step, every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className='bg-white z-[1] relative pb-[150px] pt-[100px] section-rounded__top section-rounded__bottom'>
      <div className='section flex flex-col items-center'>
        <h2 className='h2 w-full md:w-1/2 text-balance !text-center' data-aos="fade-down">
          {lang === 'en' ? <>Play <span className='text-main-green'>and Win</span></> : <>Main <span className='text-main-green'>dan Menangkan</span></>}
        </h2>

        <div className='flex flex-col md:flex-row gap-[24px] md:gap-[50px] items-center justify-between w-full md:mt-12 mb-[120px] md:mb-[150px]'>
          <div className='flex-1 h-fit' data-aos="fade-right">
            <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps.map(x => x.title)} className='hidden md:block' />
          </div>

          <div className='flex items-center gap-[24px]'>
            <ControlButton type='prev' disabled={false} onClick={() => prevStep()} className='text-main-black md:hidden' />
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep}  // This ensures the animation triggers on state change
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="w-[280px] h-[450px] md:h-[600px]"
              >
                <Image
                  src={steps[currentStep].illustration}
                  alt="Illustration"
                  className="w-full h-full object-contain"
                  loading='eager'
                />
              </motion.div>
            </AnimatePresence>
            <ControlButton type='next' disabled={false} onClick={() => nextStep()} className='text-main-black md:hidden' />
          </div>

          <div className='flex-1' data-aos="fade-left">
            <h3 className='h5 !text-xl text-center mb-3'>{steps[currentStep].title}</h3>
            <p className='md:text-xl font-medium mb-8 text-center md:text-left'>
              {steps[currentStep].description}
            </p>
            <Button href={`https://play.google.com/store/apps/details?id=com.adquest.play&hl=${lang}`} className='w-full py-4 md:py-2 md:max-w-[250px] text-lg md:text-xl text-center leading-tight'>
              {lang === 'en' ? 'Collect Eggs Now!' : 'Kumpulkan Eggs Sekarang!'}
            </Button>
          </div>
        </div>

        <div className='relative' data-aos="fade-up">
          {/* Floating Images */}
          <motion.div
            className='absolute top-[-50px] md:top-[-75px] right-[50px] w-[100px] md:w-[150px] z-[3] hover:cursor-pointer'
            {...bobbingAnimation}
          >
            <Image src={illustKoin} alt='Image' />
          </motion.div>

          <motion.div
            className='absolute bottom-[20px] md:bottom-[-60px] left-[-30px] md:left-[50px] w-[80px] md:w-[120px] z-[3] hover:cursor-pointer'
            {...bobbingAnimation}
          >
            <Image src={illustKoin} alt='Image' />
          </motion.div>

          <motion.div
            className='absolute bottom-[-40px] right-[30px] md:right-[50px] z-[3] w-[200px] md:w-[350px] hover:cursor-pointer'
            {...bobbingAnimation}
          >
            <Image src={illustDino} alt='Image' />
          </motion.div>

          <div className='rounded-[30px] text-white relative overflow-clip'>
            <div className='w-full h-full absolute left-0 top-0 z-[-1]'>
              <Image
                src={ctaImage}
                alt='Image'
                fill
                objectFit='cover'
                className='w-full h-full'
                loading='eager'
              />
            </div>

            <div className='flex flex-col justify-center px-[40px] py-[100px] md:p-[80px] z-[2] bg-main-gray-2/50'>
              <h2 className='text-2xl md:text-3xl lg:text-6xl z-[1] mb-4'>
                {lang === 'en' ? (
                  <>Enjoy the excitement of earning rewards from playing games in <span className='text-main-green'>AdQuest</span> with <span className='text-main-green'>300,000+</span> other players!</>
                ) : (
                  <>Nikmati Serunya Mendapatkan Keuntungan dari Bermain Games di <span className='text-main-green'>AdQuest</span> Bersama <span className='text-main-green'>300,000+</span> Players Lainnya!</>
                )}
              </h2>

              <DownloadRating showRating={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
