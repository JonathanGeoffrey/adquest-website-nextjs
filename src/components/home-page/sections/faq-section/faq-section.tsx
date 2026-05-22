"use client"
import React from 'react'
import FAQCard from './faq-card'
import { useLang } from '@/utils/lang'

export interface FAQ {
  question: string
  answer: string
}

const FaqSection = () => {
  const lang = useLang()
  const faqs: FAQ[] = [
    {
      question: lang === 'en' ? 'How long does it take for Eggs to appear in my AdQuest account after completing game missions?' : 'Berapa lama Eggs akan diterima di akun AdQuest setelah menyelesaikan misi games?',
      answer: lang === 'en' ? 'In general, Eggs are received shortly after you complete a mission. However, rewards can be delayed for up to 30 days due to verification. Any delay information is shown before you install the related game.' : 'Pada umumnya, Eggs akan segera kamu terima setelah kamu menyelesaikan misi. Namun penerimaan Eggs dapat tertunda sampai maksimum 30 hari dikarenakan verifikasi. Tentunya informasi penundaan Eggs sudah diberitahukan sebelumnya sebelum kamu menginstall games yang bersangkutan.'
    },
    {
      question: lang === 'en' ? 'Do I need to download games from Google Play Store to play via AdQuest?' : 'Apakah main games dari AdQuest harus download lagi di Google Play Store?',
      answer: lang === 'en' ? 'Yes. To earn Eggs from games, you must start from AdQuest, choose a game there, and then you will be directed to Google Play Store automatically. Please do not download directly from Google Play Store without starting from AdQuest.' : 'Betul, untuk mendapatkan Eggs dari bermain games, kamu harus mendownload games dari Google Play Store. Namun, sebelumnya kamu harus mulai dulu dari AdQuest, lalu cari games yang ingin kamu mainkan, dan kamu akan diarahkan otomatis langsung ke Google Play Store oleh sistem AdQuest. Jadi tidak boleh langsung download dari Google Play Store ya.'
    },
    {
      question: lang === 'en' ? 'I completed a mission, but the game status color did not change to blue. Why?' : 'Saya sudah selesaikan misi games sesuai syarat, namun status games terkait tidak mengalami perubahan, dimana warna status tidak berubah menjadi warna biru?',
      answer: lang === 'en' ? 'Sometimes there is a system delay when updating reward status color from gray to blue. No worries, it will update automatically.' : 'Terkadang ada penundaan dari sistem untuk mengubah warna status rewards dari abu-abu ke warna biru. Namun tidak perlu khawatir, hal ini akan berubah secara otomatis.'
    },
  ]

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto pt-[100px] pb-[150px] flex flex-col items-center px-[24px] lg:px-[48px]'>
        <h2 data-aos="fade-down" className='h2 max-w-[800px] text-balance !text-center !mb-[100px]'><span>Frequently</span> Asked Questions</h2>

        <div className='flex flex-col gap-[20px] w-full'>
          {faqs.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
