import React from 'react';
import localFont from 'next/font/local'
import AppDownload from '../AppDownload/AppDownload';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';


const Download = (
    props: {
        isLocationIran: boolean
    }
) => {
    const isLocationIran = props.isLocationIran

    return (
        <div className='Download bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
            <div className={`flex flex-col  ${isLocationIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-2`}>
                <div className={`flex ${isLocationIran ? 'flex-row' : 'flex-row-reverse'} items-center gap-2`}>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                        {isLocationIran ? ' دانلود' : 'Download'}
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
                <div>
                    <h2 className={`${myFontIran.className} Profile__title text-gray-500 mt-6 w-fit ml-auto text-center`}>
                        {isLocationIran
                            ? 'میتوانید 2 برنامه زیر را متناسب با پلتفرم خود انتخاب و دانلود نمایید'
                            : ' You can choose and download the following 2 programs according to your platform'}
                    </h2>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-6'>
                <div className='flex flex-col items-center'>
                    <h2 className={`${isLocationIran && myFont.className} Profile__title text-lg mt-6 w-fit mx-auto text-main-orange`}>
                        Meta trader 4
                    </h2>
                    <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                        <AppDownload platform='ios' text='IOS' />
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className={`${isLocationIran && myFont.className} Profile__title text-lg mt-6 w-fit mx-auto text-main-orange`}>
                        Meta trader 5
                    </h2>
                    <div className='flex flex-col sm:flex-row gap-6 mt-6'>
                        <AppDownload platform='ios' text='IOS' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;