import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between gap-y-10 border-t bg-black-100 border-black-400 px-20 py-12 max-md:flex-col body-text w-full'>
        <p>Copyright 2023 JS Mastery Pro | All Rights Reserved</p>

        <div className='flex gap-x-9'>
            <Link href='/terms-of-use'>
                Terms & Conditions
            </Link>
            <Link href='/privacy-policy'>
                Privacy Policy
            </Link>
        </div>
    </footer>
  )
}

export default Footer