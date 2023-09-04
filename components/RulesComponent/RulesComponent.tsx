import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/Mj Dinar Two Medium.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'
import Image from 'next/image';

const RulesComponent = (props: {
    text: string
    translate : number
}) => {
    return (
        <div className={`${myFont.className} flex items-center px-6 relative leading-relaxed text-lg RulesComponent rounded-xl text-center text-white w-fit`}
            style={{ background: '#1D1D1D', maxWidth: '400px', height: '170px' , transform : `translateY(${props.translate}px)` }}
        >
            <Image src={logo} alt='logo' className='absolute right-1/2 translate-x-1/2'
            style={{top : '-15%'}}
            />
            <p style={{marginBottom : '-40px'}}>
                {props.text}
            </p>
        </div>
    );
};

export default RulesComponent;