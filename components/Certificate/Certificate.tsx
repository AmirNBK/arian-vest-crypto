import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificate from '../../assets/icons/certificate2.svg'
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';

const Certificate = () => {
    return (
        <div className='Certificate'>
            <div className='flex flex-row items-center gap-4'>
                <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                    گواهی و مدارک
                </h2>
                <Image src={certificateMini} alt='icon' unoptimized/>
            </div>
            <div className='flex flex-col items-center my-20'>
                <Image src={certificate} alt='certificate' unoptimized width={200} height={200} />
                <p className={`${myFontIran.className} text-white text-2xl text-center`}> در حال حاظر هیچ مدرک و گواهی ندارید </p>
            </div>
        </div>
    );
};

export default Certificate;