import React from 'react'
import { RiGlobalFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from '../assets/banking-logo.jpg'


function Header() {
    return (
        <>
            <section className='bg-[#1A1A2E] text-white py-2 text-sm'>
                <div className="container mx-auto flex justify-between">
                    <p>वि सं २०८३ बैशाख २० आइतवार</p>
                    <ul className='flex gap-3 items-center'>
                        <li className='flex items-center'> <RiGlobalFill /> English</li>
                        <li> | </li>
                        <li><FaFacebookF /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
            </section>
            <header className='py-6'>
                <div className="container mx-auto">
                    <img className='w-[300px]' src={logo} alt="" />
                </div>
            </header>
        </>
    )
}

export default Header