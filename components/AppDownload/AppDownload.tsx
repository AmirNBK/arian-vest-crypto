import Image from 'next/image';
import React from 'react';
import apple from '../../assets/icons/apple.svg'
import windows from '../../assets/icons/windows.svg'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import line from '../../assets/icons/Line2.svg'

const AppDownload = (props: {
    platform: string
    text: string
}) => {
    return (
        <div className={`${myFontIran.className}
        AppDownload cursor-pointer flex flex-row-reverse justify-between items-center gap-12 bg-[#202020] py-3 px-8 rounded-md bg-shadow`}>
            <div className='flex flex-col items-center gap-3'
            >
                <Image src={apple} alt='apple' />
                <p className='text-white'> IOS </p>
            </div>

            <Image src={line} alt='line'/>

            <div className='flex flex-col items-center gap-3 px-2'
            >
                <Image src={windows} alt='apple' className='w-14' />
                <p className='text-white'> Windows </p>
            </div>

            <style>
                {`
                .bg-shadow {
                    fill: #202020;
filter: drop-shadow(0px 4.018365383148193px 4.018365383148193px rgba(0, 0, 0, 0.25));
                }
                
                `}
            </style>
        </div>
    );
};

export default AppDownload;