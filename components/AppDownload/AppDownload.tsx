import Image from 'next/image';
import React from 'react';
import apple from '../../assets/icons/apple.svg'
import android from '../../assets/icons/android.svg'
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const AppDownload = (props: {
    platform: string
    text: string
}) => {
    return (
        <div className={`${myFontIran.className}
        AppDownload cursor-pointer flex flex-row-reverse items-center gap-2 bg-gray-400 p-3 rounded-md`}>
            <p className='rtl translate-y-[2px]'> {props.text} </p>
            <Image src={props.platform === 'ios' ? apple : android} alt='icon' />
        </div>
    );
};

export default AppDownload;