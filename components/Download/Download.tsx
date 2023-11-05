import React from 'react';
import localFont from 'next/font/local'
import AppDownload from '../AppDownload/AppDownload';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';


const Download = () => {
    return (
        <div className='Download'>

            <div className='flex flex-col md:flex-row-reverse gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                        دانلود
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
                <div>
                    <h2 className={`${myFontIran.className} Profile__title text-center text-white text-sm mt-6 w-fit mx-auto opacity-[40%]`}>
                        میتوانید 2 برنامه زیر را متناسب با پلتفرم خود انتخاب و دانلود نمایید </h2>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-6'>
                <div className='flex flex-col items-center'>
                    <h2 className={`${myFont.className} Profile__title text-lg mt-6 w-fit mx-auto text-main-orange`}> اپلیکیشن اول </h2>
                    <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                        <AppDownload platform='ios' text='IOS' />
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className={`${myFont.className} Profile__title text-lg mt-6 w-fit mx-auto text-main-orange`}> اپلیکیشن دوم </h2>
                    <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                        <AppDownload platform='ios' text='IOS' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;