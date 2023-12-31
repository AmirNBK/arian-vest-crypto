import Image, { StaticImageData } from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const PaymentResult = (props: {
    title: string
    image: StaticImageData
}) => {
    return (
        <div className='flex flex-col mx-auto gap-12 my-12 items-center'>
            <h1 className={`${myFont.className} text-3xl sm:text-5xl text-white text-center`}> {props.title} </h1>
            <Image src={props.image} alt='image' className='w-[250px] sm:w-[320px]' unoptimized />
        </div>
    );
};

export default PaymentResult;