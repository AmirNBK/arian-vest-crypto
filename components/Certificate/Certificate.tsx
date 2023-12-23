import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificate from '../../assets/icons/certificate2.svg'
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';

const Certificate = (
    props: {
        isLocationIran: boolean
    }
) => {
    const isLocationIran = props.isLocationIran

    return (
        <div className='Certificate h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20 bg-[#1A1C1F]'>
            <div className={`flex ${isLocationIran ? 'flex-row' : 'flex-row-reverse'} items-center gap-2`}>
                <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                    {isLocationIran ? '  گواهی و مدارک' : 'Certificates and documents'}
                </h2>
                <Image src={certificateMini} alt='icon' unoptimized />
            </div>
            <div className='flex flex-col items-center my-20'>
                <Image src={certificate} alt='certificate' unoptimized width={200} height={200} />
                <p className={`${myFontIran.className} text-white text-2xl text-center`}>
                    {isLocationIran ? 'در حال حاظر هیچ مدرک و گواهی ندارید' : 'Currently, you do not have any documents or certificates.'}
                </p>
            </div>
        </div>
    );
};

export default Certificate;