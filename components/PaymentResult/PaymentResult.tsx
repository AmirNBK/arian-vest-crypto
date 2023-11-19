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
        <div className='flex flex-col bg-[#1D1D1D] w-7/12 mx-auto gap-12 py-6 my-12 items-center rounded-md'>
            <h1 className={`${myFont.className} text-5xl text-white`}> {props.title} </h1>
            <Image src={props.image} alt='image' className='w-[550px]' unoptimized />
            <div className='cursor-pointer'>
                <p className={`${myFontIran.className} text-main-orange text-xl`}> بازگشت </p>
                <hr style={{ borderColor: '#F68D2E' }} />
            </div>
        </div>
    );
};

export default PaymentResult;