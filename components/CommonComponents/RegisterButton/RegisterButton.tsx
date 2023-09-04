import React from 'react';
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../../assets/Fonts/iranyekanwebregular_0.ttf' })

const RegisterButton = (props: {
    text: string
}) => {
    return (
        <button className={`${myFontIran.className} w-full text-white rounded-2xl h-16 text-3xl`}
        style={{background : '#0A8100'}}>
            {props.text}
        </button>
    );
};

export default RegisterButton;