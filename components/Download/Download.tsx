import React from 'react';
import localFont from 'next/font/local'
import AppDownload from '../AppDownload/AppDownload';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const Download = () => {
    return (
        <div className='Download'>
            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                دانلود
            </h2>

            <h2 className={`${myFontIran.className} Profile__title text-center text-white text-lg mt-6 w-fit mx-auto`}>
                میتوانید 2 برنامه زیر را متناسب با پلتفرم خود انتخاب و دانلود نمایید </h2>

            <div className='flex flex-col items-center'>
                <h2 className={`${myFont.className} Profile__title text-white text-lg mt-6 w-fit mx-auto`}> برنامه اول </h2>
                <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                    <AppDownload platform='ios' text='دانلود برای iphone' />
                    <AppDownload platform='android' text='دانلود برای android' />
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h2 className={`${myFont.className} Profile__title text-white text-lg mt-6 w-fit mx-auto`}> برنامه دوم </h2>
                <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                    <AppDownload platform='ios' text='دانلود برای iphone' />
                    <AppDownload platform='android' text='دانلود برای android' />
                </div>
            </div>
        </div>
    );
};

export default Download;