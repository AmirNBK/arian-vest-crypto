import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })

const FooterInfo = (props: {
    title: string;
    info: string
}) => {
    return (
        <div className={`${myFontIran.className} FooterInfo flex flex-row items-baseline text-right`}>
            <span className='text-base sm:text-xl lg:text-2xl mr-2'>
                {props.info}
            </span>
            :
            <span className='text-base sm:text-xl lg:text-xl ml-2 font-semibold'>
                {props.title}
            </span>
        </div>
    );
};

export default FooterInfo;