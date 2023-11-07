import Image from 'next/image';
import React from 'react';
import certificateMini from '../../assets/icons/certificateMini.svg';
import localFont from 'next/font/local';
import NewInput from '../NewInput/NewInput';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import person from '../../assets/icons/person.svg'
import SendButton from '../../assets/images/sendButton.png'
import idCardFront from '../../assets/icons/idCard.png'
import idCardBack from '../../assets/icons/idCard2.png'

const Authentication = () => {
    return (
        <div>
            <div className='Authentication bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            احراز هویت
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div>
                    <p
                        className={`${myFontIran.className} rtl text-sm mt-2`}
                        style={{
                            color: 'rgba(255, 255, 255, 0.40)'
                        }}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتر.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row-reverse items-center lg:items-end gap-6 mt-10'>
                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                تصویر کاربر با مدارک
                            </h2>
                        </div>
                        <div className=''>
                            <StatisticsComponents havePlusButton paddingY={0.5} value={
                                <Image src={person} alt='image' />
                            } dollar={false} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                روی کارت‌ ملی
                            </h2>
                        </div>
                        <div className=''>
                            <StatisticsComponents havePlusButton paddingY={3} value={
                                <Image src={idCardFront} alt='image' />
                            } dollar={false} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                پشت کارت‌ ملی
                            </h2>
                        </div>
                        <div className=''>
                            <StatisticsComponents havePlusButton paddingY={3} value={
                                <Image src={idCardBack} alt='image' />
                            } dollar={false} />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 mt-8'>
                        <NewInput placeholder='نام‌ خانوادگی' />
                        <NewInput placeholder='نام' />
                        <NewInput placeholder='شماره تماس' />
                        <NewInput placeholder='کد ملی' />
                    </div>

                </div>
            </div>

            <div className='flex justify-center cursor-pointer'>
                <Image src={SendButton} alt='button' unoptimized />
            </div>
        </div>
    );
};

export default Authentication;