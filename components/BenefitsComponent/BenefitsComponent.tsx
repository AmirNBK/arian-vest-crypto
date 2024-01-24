import React, { useEffect } from 'react';
import localFont from 'next/font/local'
import Image, { StaticImageData } from 'next/image';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import AOS from 'aos';
import 'aos/dist/aos.css';

const BenefitsComponent = (props: {
    title: string
    highlightTitle: string
    description: string
    image: StaticImageData
    position: string
    isLocationIran: boolean
}) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className={`cooroprate__Benefits__firstSection sm:flex hidden gap-10 flex ${props.position === 'normal' ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'} items-center`}>
                <div className='cooroprate__Benefits__firstSection__info flex-1 3xl:flex-[2] sm:text-right text-center'
                    data-aos-duration="2000" data-aos-once={true} data-aos={`${props.position === 'normal' ? 'fade-left' : 'fade-right'}`}
                >
                    <h2 className='cooroprate__Benefits__firstSection__info__title rtl'>
                        <p className={`${props.isLocationIran && myFont.className} ${!props.isLocationIran && 'text-left'} text-white text-2xl lg:text-3xl 3xl:text-5xl pb-4 lg:py-12`}>
                            <span className='text-3xl text-main-orange'> </span> {props.title} <span style={{ color: '#F68D2E' }}> {props.highlightTitle} </span>
                        </p>
                    </h2>
                    <p className={`${myFontIran.className} cooroprate__Benefits__firstSection__info__description ${props.isLocationIran ? 'rtl' : 'text-left'}
                text-sm lg:text-base 3xl:text-2xl
                text-white`}>
                        {props.description}
                    </p>
                </div>

                <div className='cooroprate__Benefits__firstSection__image flex-1'>
                    <Image src={props.image} alt='pic' unoptimized className={`${props.position != 'normal' && 'ml-auto'}`} />
                </div>
            </div>
            <div className={`cooroprate__Benefits__firstSection sm:hidden block gap-10 flex ${props.position === 'normal' ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'} items-center`}>
                <div className='cooroprate__Benefits__firstSection__info flex-1 3xl:flex-[2] sm:text-right text-center'
                >
                    <h2 className={`${props.isLocationIran && 'rtl'} cooroprate__Benefits__firstSection__info__title`}>
                        <p className={`${props.isLocationIran && myFont.className} text-white text-2xl lg:text-3xl 3xl:text-5xl pb-4 lg:py-12`}>
                            <span className='text-3xl text-main-orange'> </span> {props.title} <span style={{ color: '#F68D2E' }}> {props.highlightTitle} </span>
                        </p>
                    </h2>
                    <p className={`${props.isLocationIran && myFont.className} cooroprate__Benefits__firstSection__info__description rtl
                text-sm lg:text-base 3xl:text-2xl
                text-white`}>
                        {props.description}
                    </p>
                </div>

                <div className='cooroprate__Benefits__firstSection__image flex-1'>
                    <Image src={props.image} alt='pic' unoptimized className={`${props.position != 'normal' && 'ml-auto'}`} />
                </div>
            </div>
        </>
    );
};

export default BenefitsComponent;