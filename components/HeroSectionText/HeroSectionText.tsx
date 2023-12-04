import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import Link from 'next/link';
import button from '../../assets/images/tariffButton.svg'
import Image from 'next/image';

const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const HeroSectionText = () => {

    return (
        <div
            className={`HeroSectionText left-1/2 top-1/2 translate-x-150 translate-y-150 
            lg:translate-x-180 lg:translate-y-180 -translate-x-[50%] -translate-y-[125%] lg:-translate-y-[135%]
            3xl:-translate-y-[145%]
            items-center w-fit gap-3 sm:gap-6 whitespace-nowrap text-white absolute hidden sm:flex flex-col ${myFont.className}`}
            style={{ top: '50%', left: '50%' }}
        >
            <div className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl lg:translate-x-[30px] -mb-5'
            >
                <span className={`${myFontIran.className} text-main-orange text-2xl sm:text-5xl md:text-8xl lg:text-9xl`}> 95% </span> تا 
            </div>
            <div className='flex flex-row-reverse items-center gap-6 lg:translate-x-[30px]'
            >
                <p className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl'>  از سود </p>
                <Link href={'#Tariffs'} className='lg:block hidden cursor-pointer'>
                    <Image src={button} alt='register' />
                </Link>
            </div>
            <div className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl lg:translate-x-[30px]'>
                براي شما
            </div>
            <Link href={'#Tariffs'} className='lg:hidden block cursor-pointer'>
                <Image src={button} alt='register' />
            </Link>
        </div>
    );
};

export default HeroSectionText;