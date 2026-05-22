import DownloadRating from '@/components/common/download-rating'
import { circlePattern1, circlePattern2 } from '@/components/common/illustration'
import Image from 'next/image'
import { useRef } from 'react'
import ControlButton from './control-button'
import ReviewCard from './review-card'
import './review-section.css'
import { useLang } from '@/utils/lang'

export interface Review {
  name: string
  orgainzation: string
  review: string
  rating?: number
}

const ReviewSection = () => {
  const lang = useLang()
  const dummyReviews: Review[] = [
    {
      name: 'Darmasyi',
      orgainzation: 'Questies',
      review: lang === 'en' ? 'Great app... I can earn money by playing games, filling surveys, and completing missions. I have already withdrawn 20k. Hope AdQuest keeps growing!' : 'Apk nya mantap kali... bisa hasilkan cuan dg main game, isi survey juga dan selesaikan misi yg di syarat gamenya...alhamdulillah udah narik 20k Semoga sukses trs buat mimin apk AdQuest🥰🥰🥰',
      rating: 5
    },
    {
      name: '​​Anggrini Manullang',
      orgainzation: 'Questies',
      review: lang === 'en' ? 'Awesome app, helps me earn extra money for snacks, skincare, and more. I can get up to around 300k in a week.' : 'Aplikasinyaa kerennn, lumayannn nambah nambah cuan untuk jajan, beli skincare, dll. Seminggu bisa dapat sampai 300rb an lo😍😍😍',
      rating: 5
    },
    {
      name: 'Nayra Zaharah',
      orgainzation: 'Questies',
      review: lang === 'en' ? 'This app is really helpful for earning money. I have used it for a long time and it is the fastest cash-reward app for me.' : 'Aplikasi yang ngebantu lumayan cuannn!! main ini udah lama bgt tp menurut aku apk yg paling cpt dpt cuan & terbuktii ga pake lama',
      rating: 5
    },
    {
      name: 'Annisa Sofiyanti',
      orgainzation: 'Questies',
      review: lang === 'en' ? 'Playing games and earning money at the same time, why not?' : 'Kapan lagi main game dapet cuan wkwk',
      rating: 5
    },
    {
      name: 'Ardina Maulidia _11',
      orgainzation: 'Questies',
      review: lang === 'en' ? 'Yay, I successfully withdrew 5,000 DANA balance. You should try this app and watch ads regularly when available so your Eggs keep growing. Thank you AdQuest!' : 'yeay 🥰🥳 saya berhasil tarik tunai dana 5.000 , kalian harus coba aplikasi ini gusy terus jg harus rutin liat iklan ( kalo ada) pasti bakal kekumpul telur egg nya dan kalian bakal bs tukerin deh. TERIMAKASIH AdQuest',
      rating: 5
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollToCard = (direction: 'prev' | 'next') => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = window.innerWidth < 768 ? 300 : 500 // Width of one viewport
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='relative'>
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          src={circlePattern1}
          alt="pattern"
          className=' absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] z-0'
        />
      </div>

      <Image
        priority
        src={circlePattern2}
        alt="pattern"
        className=' absolute right-0 top-0 translate-x-[50%] translate-y-[-30%] z-0'
      />

      <div className='overflow-visible mx-auto py-[100px] flex flex-col items-center relative z-[2]'>
        <h2 className='h2 text-white' data-aos="fade-down">{lang === 'en' ? 'Questies Stories' : 'Cerita Questies'}</h2>

        {/* Reviews */}
        <div ref={containerRef} className='w-full mt-4 lg:mt-8 mb-8 scroll-container px-[200px]'>
          <div className='flex gap-6'>
            {dummyReviews.map((review, index) => (
              <div className="scroll-item" key={index}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className='flex gap-4 mb-8'>
          <ControlButton
            onClick={() => scrollToCard('prev')}
            type='prev' disabled={true} />
          <ControlButton
            onClick={() => scrollToCard('next')}
            type='next' disabled={false} />
        </div>

        {/* GPLAY */}
        <DownloadRating showRating={false} />
      </div>
    </div>
  )
}

export default ReviewSection
