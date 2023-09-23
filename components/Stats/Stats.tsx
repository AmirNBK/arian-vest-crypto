import Image, { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import localFont from 'next/font/local'


const Stats = (props: {
    icon: StaticImageData
    text: string
    stat: string
    translate: number
    fadePosition: string
}) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={`${myFontIran.className} Stats text-white flex flex-col gap-3 items-center`}
            style={{ transform: `translateY(-${props.translate}px)` }}
        >
            <Image src={props.icon} alt='icon' unoptimized data-aos-duration="3000" data-aos-once={true} data-aos={`fade-${props.fadePosition}`} />
            <p className='text-2xl'
                data-aos-duration="3000" data-aos-once={true} data-aos={`fade-${props.fadePosition}`}
            > {props.text} </p>
            <p className='text-xl'
                data-aos-duration="3000" data-aos-once={true} data-aos={`fade-${props.fadePosition}`}
            > {props.stat} </p>
        </div>
    );
};

export default Stats;