import React from 'react';
import localFont from 'next/font/local'
import ProfitInfoComponent from '../ProfitInfoComponent/ProfitInfoComponent';
import Image from 'next/image';
import certificateMini from '../../assets/icons/certificateMini.svg'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import buttonImage from '../../assets/images/profitButton.png'

const ProfitWithdrawal = () => {
    return (
        <div className='ProfitWithdrawal'>

            <div className='bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-10'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            برداشت سود
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='flex flex-row-reverse justify-between mt-8'>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            مبلغ برداشت شده
                        </h3>
                        <StatisticsComponents dollar={true} value={350} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            برداشت های در انتظار
                        </h3>
                        <StatisticsComponents dollar={false} value={'05'} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            تعداد برداشت ها
                        </h3>
                        <StatisticsComponents dollar={false} value={'09'} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            کل سود
                        </h3>
                        <StatisticsComponents dollar={true} value={950} isReferral />
                    </div>
                </div>
            </div>

            <div className='flex flex-row-reverse mt-8 gap-12 bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-16 rounded-lg mt-6 mb-20'>
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            مبلغ قابل برداشت
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                    <p className={`${myFontIran.className} rtl mt-2 text-base`}
                        style={{ color: 'rgba(255, 255, 255, 0.40)' }}
                    >
                        در این قسمت میتوانید مبلغ قابل برداشت خود را مشاهده و در صورت تمایل اقدام به برداشت نمایید تا به حساب شما در بازه زمانی 24 الی 48 ساعت اضافه شود.
                    </p>
                </div>

                <div className='flex-1'>
                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                        مبلغ فعلی
                    </h3>
                    <StatisticsComponents dollar={true} value={65} isReferral />
                </div>

                <div className='flex-[2] flex flex-col items-center'>
                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                        توضیحات مربوطه خود را بنویسید
                    </h3>
                    <textarea cols={65} rows={5} className='bg-transparent border border-white rounded-md' />
                </div>
            </div>

            <div className='flex justify-center'>
                <Image src={buttonImage} unoptimized alt='button' />
            </div>
        </div>
    );
};

export default ProfitWithdrawal;