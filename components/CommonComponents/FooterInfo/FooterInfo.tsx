import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/SquadaOne Regular.ttf' })



const FooterInfo = (props: {
    title: string;
    info: string
    isLocationIran: boolean | undefined
}) => {
    return (
        <div className={`FooterInfo flex ${props.isLocationIran ? 'flex-row' : 'flex-row-reverse'} items-baseline ${myFont.className} text-right`}>
            <span className={` text-base sm:text-xl lg:text-2xl mr-2`}>
                {props.info}
            </span>
            :
            <span className={`text-base sm:text-xl lg:text-xl ${props.isLocationIran && 'ml-2'} `}>
                {props.title}
            </span>
        </div>
    );
};

export default FooterInfo;