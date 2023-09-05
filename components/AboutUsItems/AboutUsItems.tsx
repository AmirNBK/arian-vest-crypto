import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'

const AboutUsItems = (props: {
    text: string
    translate : number
}) => {
    return (
        <div className='AboutUsItems flex flex-row-reverse gap-4 items-center'
        style={{transform : `translateX(${props.translate}px)`}}
        >
            <Image src={logo} alt='logo' className='w-8' unoptimized />
            <p className={`${myFontIran.className} text-white text-xl`}> {props.text} </p>
        </div>
    );
};

export default AboutUsItems;