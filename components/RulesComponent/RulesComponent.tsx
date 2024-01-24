import React, { useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'
import whiteLogo from '../../assets/icons/logo-white.png'
import Image from 'next/image';


const RulesComponent = (props: {
    text: string
    translate: number
    feature: string
    onClick: () => void
    isLocationIran: boolean
}) => {
    const [hovered, setHovered] = useState(false);


    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`${props.isLocationIran && myFont.className} flex items-center px-6 2xl:px-24 py-[100px] relative leading-relaxed cursor-pointer mx-auto
          text-lg 3xl:text-2xl RulesComponent rounded-xl text-center text-white w-fit bg-new-black hover:bg-orange-400 transition duration-700`}
            style={{
                maxWidth: '400px',
                height: '170px',
                transform: `translateY(${props.translate}px)`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={props.onClick}
        >
            <Image
                src={logo}
                unoptimized
                width={50}
                height={50}
                alt="logo"
                className={`${hovered && 'opacity-0'} transition duration-500 absolute right-1/2 translate-x-1/2`}
                style={{ top: '-15%' }}
            />
            <Image
                src={whiteLogo}
                unoptimized
                width={50}
                height={50}
                alt="logo"
                className={`opacity-0 ${hovered && 'opacity-100'} transition duration-500 absolute right-1/2 translate-x-1/2`}
                style={{ top: '-15%' }}
            />
            <p style={{ marginBottom: '-40px' }} className={`${hovered && 'text-black'}
            -translate-y-[15px]
            duration-700 flex flex-col gap-4`}
            >
                <p className='rtl'>
                    {props.text}
                </p>
                <p>
                    {props.feature}
                </p>
                <p className='font-bold text-2xl'>
                    {props.isLocationIran ? 'مشاهده قوانین' : 'view rules'}

                </p>
            </p>
        </div>
    );
};
export default RulesComponent;