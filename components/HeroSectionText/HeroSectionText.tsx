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
            lg:translate-x-180 lg:translate-y-180
            items-center w-fit gap-6 whitespace-nowrap text-white absolute flex flex-col ${myFont.className}`}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        >
            <div className='text-5xl md:text-8xl lg:text-9xl'
                style={{ transform: 'translateX(100px)' }}
            >
                مسیرتان را
            </div>
            <div className='flex flex-row-reverse items-center gap-24'
                style={{ transform: 'translateX(100px)' }}
            >
                <p className='text-5xl md:text-8xl lg:text-9xl'> با ما </p>
                <div onClick={scrollToAboutUs} className='lg:block hidden cursor-pointer'>
                    <Image src={button} alt='register' />
                </div>
            </div>
            <div className='text-5xl md:text-8xl lg:text-9xl'>
                ما شکوفا کنید
            </div>
            <div onClick={scrollToAboutUs} className='lg:hidden block cursor-pointer'>
                <Image src={button} alt='register' />
            </div>
        </div>
    );
};

export default HeroSectionText;