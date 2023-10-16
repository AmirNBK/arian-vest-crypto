import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })

const RegisterButton = (props: {
    text: string
    isHeroSection?: boolean
    onClick?: () => void
}) => {
    return (
        <button className={`${myFontIran.className} w-full text-white rounded-2xl sm:h-16 h-14 text-3xl`}
            type='submit'
            onClick={props.onClick}
            style={{ background: `${props.isHeroSection ? '#F68D2E' : '#0A8100'} ` }}>
            {props.text}
        </button>
    );
};

export default RegisterButton;