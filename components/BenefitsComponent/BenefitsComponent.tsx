import React, { useEffect } from 'react';
import benefitPic1 from '../../assets/images/benefitsPic1.png'
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
}) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={`cooroprate__Benefits__firstSection flex ${props.position === 'normal' ? 'flex-row-reverse' : 'flex-row'} items-center`}>
            <div className='cooroprate__Benefits__firstSection__info flex-1'
                data-aos-duration="2000" data-aos-once={true} data-aos={`${props.position === 'normal' ? 'fade-left' : 'fade-right'}`}
            >
                <h2 className='cooroprate__Benefits__firstSection__info__title rtl'>
                    <p className={`${myFont.className} text-white text-3xl py-12`}>
                        <span className='text-3xl text-main-orange'> </span> {props.title} <span style={{ color: '#F68D2E' }}> {props.highlightTitle} </span>
                    </p>
                </h2>
                <p className={`${myFontIran.className} cooroprate__Benefits__firstSection__info__description rtl text-white`}>
                    {props.description}
                </p>
            </div>

            <div className='cooroprate__Benefits__firstSection__image flex-1'>
                <Image src={props.image} alt='pic' unoptimized className={`${props.position != 'normal' && 'ml-auto'}`} />
            </div>
        </div>
    );
};

export default BenefitsComponent;