import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })
const myFont = localFont({ src: '../../../assets/fonts/SquadaOne Regular.ttf' })



const FooterInfo = (props: {
    title: string;
    info: string
    isLocationIran: boolean | undefined
}) => {
    return (
        <div className={`FooterInfo flex ${props.isLocationIran ? 'flex-row' : 'flex-row-reverse'} items-baseline text-right`}>
            <span className={` ${(props.title === 'ایمیل' || props.title === 'email') && `${myFont.className}`} text-base sm:text-xl lg:text-2xl mr-2`}>
                {props.info}
            </span>
            :
            <span className={`text-base sm:text-xl lg:text-xl ${props.isLocationIran && 'ml-2'} font-semibold`}>
                {props.title}
            </span>
        </div>
    );
};

export default FooterInfo;