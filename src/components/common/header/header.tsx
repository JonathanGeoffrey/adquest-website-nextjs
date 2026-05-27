"use client"
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { TbMenu2 } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import DownloadRating from '../download-rating'
import AppIcon from './app-icon'
import HeaderMenu, { HeaderMenuItem } from './menu/header-menu'
import { usePathname } from 'next/navigation'
import { useLang } from '@/utils/lang'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const pathname = usePathname()
  const lang = useLang()
  const t = lang === 'en'
    ? { products: 'Product', services: 'Service', downloadNow: 'Download Now!' }
    : { products: 'Produk', services: 'Jasa', downloadNow: 'Download Sekarang!' }

  const headerMenu: HeaderMenuItem[] = [
    { title: t.products, link: lang === 'en' ? '/?region=ph' : '/' },
    // ...(lang === 'en' ? [] : [{ title: t.services, link: '/service' }]),
    // { title: 'Tentang Kami', link: '/about-us' },
  ]

  return (
    <nav className='shadow-lg sticky top-0 z-50 bg-white'>
      <div className='flex justify-between items-center h-[64px] md:h-[72px] max-w-7xl m-auto px-[24px] md:px-[48px]'>
        <Link href={'/'}>
          <AppIcon />
        </Link>

        {/* Desktop */}
        <div className='hidden lg:flex right-menu gap-12 items-center font-semibold text-main-green'>
          <HeaderMenu items={headerMenu} />
        </div>

        {/* Mobile */}
        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='p-2 active:bg-gray-50 rounded-lg block md:hidden'>
          <TbMenu2 className='text-3xl text-main-green' />
        </button>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className='absolute bg-white w-full shadow-xl overflow-hidden flex flex-col md:hidden'
          >
            {headerMenu.map((item, index) => (
              <HeaderMobileMenuItem onClick={() => setShowMobileMenu(false)} key={index} {...item} isActive={pathname === item.link.split('?')[0]} />
            ))}

            <div className='px-[24px] flex justify-between items-center border-t py-2 gap-8 bg-gray-50'>
              <span className='font-bold text-main-green'>{t.downloadNow}</span>
              <DownloadRating showRating={false} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const HeaderMobileMenuItem = ({ title, link, isActive, onClick }: HeaderMenuItem) => {
  return (
    <Link href={link} onClick={onClick} className={twMerge(
      'px-[24px] py-3 font-semibold text-main-green active:bg-gray-100 hover:bg-gray-50',
      isActive && 'bg-gray-50'
    )}>
      {title}
    </Link>
  )
}

export default Header
