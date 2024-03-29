﻿import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {



  return (
    <nav className='flex-center fixed top-0 w-full z-50 border-b-2 py-7 border-black-200 text-white'>
        <div className='flex-between max-w-screen-2xl px-6 xs:px-8 sm:px-16 mx-auto w-full'>
            <Link href="/">
                <Image
                    src="/jsm-logo.svg"
                    width={55}
                    height={40}
                    alt='logo'
                />
            </Link>

            <Image
                src="/hamburger-menu.svg"
                width={30}
                height={30}
                alt='hamburger menu'
                className='block md:hidden'
            />

            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="http:/jsmastery.pro/next13" target='_blank'>
                        Next.js 13.4 course
                    </Link>
                </li>
                <li className='body-text !font-bold'>
                    <Link href="http:/jsmastery.pro/next13" target='_blank'>
                        Masterclass
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar