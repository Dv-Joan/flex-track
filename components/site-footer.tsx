import React from 'react'
import Image from 'next/image'
import logo from '../public/vercel.svg'

export function SiteFooter() {

    return (

        <footer className="bg-gray-800">
            <div className="container flex items-center justify-between px-6 py-3 mx-auto">
                <a href="#" className="text-xl font-bold text-white hover:text-gray-200">
                    <Image src={logo} width={80} height={80} className='text-white' alt='logo' />
                </a>
                <p className="py-2 text-sm text-white sm:py-0">All rights reserved</p>
            </div>
        </footer>

    )
}

