import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
const myFontIranlight = localFont({ src: '../../assets/Fonts/iranyekanweblight_0.ttf' })
import bull from '../../assets/images/bullHead.png'
import Image from 'next/image';
import TariffTable from '../TariffTable/TariffTable';

const TariffComponent = (props: {
    title: string
    price: number
    description: string
}) => {
    return (
        <div className={`${myFontIran.className} relative TariffComponent bg-[#1D1D1D] rounded-xl w-8/12 mx-auto p-6`}>
            <div className='TariffComponent__info text-main-orange flex flex-row text-4xl justify-between'>
                <p> {props.title} </p>
                <p> {props.price}k </p>
            </div>
            <div className='mt-10'>
                <p className={`${myFontIranlight} rtl text-right text-white w-8/12 ml-auto mt-6 leading-loose font-extralight`}>
                    {props.description}
                </p>
                <Image className='absolute' src={bull} alt='bull'
                    style={{ bottom: '-100px', left: '-15px' }} unoptimized
                />
            </div>
        </div>
    );
};

export default TariffComponent;