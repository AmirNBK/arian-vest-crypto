import Image, { StaticImageData } from 'next/image';
import React from 'react';
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
import localFont from 'next/font/local'


const Stats = (props: {
    icon: StaticImageData
    text: string
    stat: string
    translate: number
}) => {
    return (
        <div className={`${myFontIran.className} Stats text-white flex flex-col gap-3 items-center`}
            style={{ transform: `translateY(-${props.translate}px)` }}
        >
            <Image src={props.icon} alt='icon' unoptimized />
            <p className='text-2xl'> {props.text} </p>
            <p className='text-xl'> {props.stat} </p>
        </div>
    );
};

export default Stats;