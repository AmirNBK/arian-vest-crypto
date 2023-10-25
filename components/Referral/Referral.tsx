import React from 'react';
import localFont from 'next/font/local'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import gift from '../../assets/icons/gift.svg'
import share from '../../assets/icons/share.svg'
import profile from '../../assets/icons/profile2.svg'
import percent from '../../assets/icons/percent.svg'


const Referral = () => {
    return (
        <div className='Referral'>
            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                معرفی به دوستان
            </h2>

            <h2 className={`${myFontIran.className} Profile__title text-gray-500 mt-6 w-fit ml-auto`}>
                با رفر کردن ما به دوستان خود درصدی از خرید اشتراک آن ها به حساب شما افزوده خواهد شد </h2>

            <div className='mt-8 flex flex-row-reverse justify-between flex-wrap gap-12'>
                <StatisticsComponents dollar={false} title='کد رفرال ' value={'sfs143123'} icon={share} isReferral />
                <StatisticsComponents dollar={false} title='تعداد رفرها' value={12} icon={profile} isReferral />
                <StatisticsComponents dollar={false} title='درصد اضافه شده ' value={32} icon={percent} isReferral />
                <StatisticsComponents dollar={false} title='تعداد جوایز' value={8} icon={gift} isReferral />
            </div>

        </div>
    );
};

export default Referral;