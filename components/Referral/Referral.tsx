import React from 'react';
import localFont from 'next/font/local'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import gift from '../../assets/icons/gift.svg'
import share from '../../assets/icons/share.svg'
import profile from '../../assets/icons/profile2.svg'
import percent from '../../assets/icons/percent.svg'
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';



const Referral = () => {
    return (
        <div>
            <div className='Referral bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                            معرفی به دوستان
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                    <div>
                        <h2 className={`${myFontIran.className} Profile__title text-gray-500 mt-6 w-fit ml-auto text-center`}>
                            با رفر کردن ما به دوستان خود درصدی از خرید اشتراک آن ها به حساب شما افزوده خواهد شد </h2>
                    </div>
                </div>

                <div className='mt-8 flex flex-row-reverse justify-center lg:justify-between flex-wrap gap-12'>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            کد رفرال
                        </h3>
                        <StatisticsComponents dollar={false} title='کد رفرال ' value={'sfs143123'} icon={share} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            برداشت های در انتظار
                        </h3>

                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={12} icon={profile} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            تعداد برداشت ها
                        </h3>
                        <StatisticsComponents dollar={false} title='درصد اضافه شده ' value={32} icon={percent} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            کل سود
                        </h3>
                        <StatisticsComponents dollar={true} title='تعداد جوایز' value={950} icon={gift} isReferral />
                    </div>
                </div>

            </div>

            <div className=' bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
                <div className='flex flex-col md:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Profile__title text-white text-xl sm:text-2xl w-fit ml-auto`}>
                            ورودی های کد رفرال شما
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='flex flex-row-reverse w-full justify-between my-12 pb-12 overflow-auto gap-6'
                style={{borderBottom : '1px solid rgba(255, 255, 255, 0.10)'}}
                >
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            نام کاربر
                        </h3>

                        <StatisticsComponents dollar={false} title=' ' value={'Hutan0021'} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            درصده افزوده
                        </h3>

                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={0.1} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            تاریخ
                        </h3>

                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={'02/09/2023'} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            تعداد جوایز
                        </h3>

                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={12} icon={profile} isReferral paddingY={4} />
                    </div>
                </div>

                <div className='flex flex-row-reverse justify-between mt-4 overflow-auto gap-6'>
                    <div>
                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={'Mahi6583'} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={0.7} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={'02/09/2023'} icon={profile} isReferral paddingY={4} />
                    </div>
                    <div>
                        <StatisticsComponents dollar={false} title='تعداد رفرها' value={3} icon={profile} isReferral paddingY={4} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Referral;