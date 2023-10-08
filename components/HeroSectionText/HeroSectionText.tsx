import React from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';
import RegisterButton from '../CommonComponents/RegisterButton/RegisterButton';
import button from '../../assets/icons/register.svg'
import Image from 'next/image';

const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const HeroSectionText = () => {

    const scrollToAboutUs = () => {
        window.scrollTo({
            top: 350,
            behavior: 'smooth',
        });
    };
    return (
        <div
            className={`HeroSectionText left-1/2 top-1/2 translate-x-150 translate-y-150
            lg:translate-x-180 lg:translate-y-180 -translate-x-[50%] -translate-y-[125%] lg:-translate-y-[135%]
            items-center w-fit gap-3 sm:gap-6 whitespace-nowrap text-white absolute flex flex-col ${myFont.className}`}
            style={{ top: '50%', left: '50%' }}
        >
            <div className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl lg:translate-x-[100px]'
            >
                مسیرتان را
            </div>
            <div className='flex flex-row-reverse items-center gap-24 lg:translate-x-[100px]'
            >
                <p className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl'> با ما </p>
                <Link href={'/register'} className='lg:block hidden cursor-pointer'>
                    <Image src={button} alt='register' />
                </Link>
            </div>
            <div className='text-2xl sm:text-5xl md:text-8xl lg:text-9xl'>
                ما شکوفا کنید
            </div>
            <Link href={'/register'} className='lg:hidden block cursor-pointer'>
                <Image src={button} alt='register' />
            </Link>
        </div>
    );
};

export default HeroSectionText;