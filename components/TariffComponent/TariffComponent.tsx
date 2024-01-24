import React, { useEffect } from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
const myFontIranlight = localFont({ src: '../../assets/fonts/iranyekanweblight_0.ttf' })
import bull from '../../assets/images/bullHead.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const TariffComponent = (props: {
    title: string
    price: number
    description: string
    isLocationIran?: boolean
}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`${myFontIran.className} relative TariffComponent bg-[#1D1D1D] rounded-xl w-full lg:w-8/12 mx-auto p-6 3xl:w-6/12`}
            data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            style={{
                boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)'
            }}
        >
            <div className='TariffComponent__info text-main-orange flex items-center flex-col sm:flex-row sm:text-4xl text-3xl sm:gap-0 gap-4 justify-between'>
                <p className='w-full text-left'> {props.title} </p>
                <p> {props.price}k </p>
            </div>
            <div className='mt-5 sm:mt-10'>
                <p className={`${myFontIranlight} ${props.isLocationIran && 'rtl'} text-center ${props.isLocationIran ? 'sm:text-right' : 'sm:text-left'} text-white w-full lg:w-8/12 ml-auto mt-6 leading-loose font-extralight`}>
                    {props.description}
                </p>
                <Image className='absolute lg:block hidden' src={bull} alt='bull'
                    style={{ bottom: '-100px', left: '-15px' }} unoptimized
                />
            </div>
        </div>
    );
};

export default TariffComponent;