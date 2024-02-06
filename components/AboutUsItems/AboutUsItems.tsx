import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'
const AboutUsItems = (props: {
    text: string
    translate: number
    delay: number
    isLocationIran: boolean | undefined
}) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={`${props.isLocationIran ? 'flex-row-reverse' : 'flex-row'} AboutUsItems flex gap-4 items-center`}
            data-aos-duration="3000" data-aos-once={true} data-aos="zoom-in-right"
            data-aos-delay={props.delay}
            style={{ transform: `translateX(${props.translate}px)` }}
        >
            <Image src={logo} alt='logo' className='w-8 3xl:w-12' unoptimized />
            <p className={`${myFontIran.className} text-white text-lg sm:text-xl 3xl:text-2xl ${props.isLocationIran ? 'text-right' : 'text-left'}`}> {props.text} </p>
        </div>
    );
};

export default AboutUsItems;