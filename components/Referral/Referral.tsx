import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import gift from '../../assets/icons/gift.svg'
import share from '../../assets/icons/share.svg'
import profile from '../../assets/icons/profile2.svg'
import percent from '../../assets/icons/percent.svg'
import certificateMini from '../../assets/icons/certificateMini.svg'
import empty from '../../assets/icons/empty.png'
import Image from 'next/image';
import { getReferal } from '@/lib/apiConfig';



const Referral = (
    props: {
        isLocationIran: boolean
    }
) => {


    const formatCreatedAtDate = (createdAt: string): string => {
        const dateObject = new Date(createdAt);
        const formattedDate = `${(dateObject.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${dateObject
                .getDate()
                .toString()
                .padStart(2, '0')}/${dateObject.getFullYear()}`;
        return formattedDate;
    };
    const [data, setData] = useState<any>()

    useEffect(() => {
        getReferal().then((res) => {
            setData(res.data)
        })
    }, [])

    const isLocationIran = props.isLocationIran


    return (
        <div>
            <div className='Referral bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-10'>
                <div className={`flex flex-col  ${isLocationIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-2`}>
                    <div className={`flex ${isLocationIran ? 'flex-row' : 'flex-row-reverse'} items-center gap-2`}>
                        <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                            {isLocationIran ? 'معرفی به دوستان' : 'Refer to Friends'}
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                    <div>
                        <h2 className={`${myFontIran.className} Profile__title text-gray-500 mt-6 w-fit ml-auto text-center`}>
                            {isLocationIran
                                ? 'با رفر کردن ما به دوستان خود درصدی از خرید اشتراک آن‌ها به حساب شما افزوده خواهد شد'
                                : 'By referring us to your friends, a percentage of their subscription purchase will be added to your account'}
                        </h2>
                    </div>
                </div>

                {data ?
                    <div className='mt-8 flex flex-row-reverse justify-center lg:justify-between flex-wrap gap-12'>
                        <div>
                            <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                {isLocationIran ? 'کد رفرال' : 'Referral Code'}
                            </h3>
                            <StatisticsComponents dollar={false} isCenter title={isLocationIran ? 'کد رفرال' : 'Referral Code'} value={data[0].referral_code} icon={share} isReferral />
                        </div>
                        <div>
                            <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                {isLocationIran ? 'برداشت های در انتظار' : 'Pending Withdrawals'}
                            </h3>
                            <StatisticsComponents dollar={false} title={isLocationIran ? 'تعداد رفرها' : 'Number of Referrals'} value={data[0].Pending_withdrawals} icon={profile} isReferral />
                        </div>
                        <div>
                            <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                {isLocationIran ? 'تعداد برداشت ها' : 'Number of Withdrawals'}
                            </h3>
                            <StatisticsComponents dollar={false} title={isLocationIran ? 'درصد اضافه شده' : 'Percentage Added'} value={data[0].number_of_withdrawals} icon={percent} isReferral />
                        </div>
                        <div>
                            <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                {isLocationIran ? 'کل سود' : 'Total Profit'}
                            </h3>
                            <StatisticsComponents dollar={true} title={isLocationIran ? 'تعداد جوایز' : 'Number of Prizes'} value={data[0].total_profit} icon={gift} isReferral />
                        </div>
                    </div>
                    : ''
                }
            </div>


            <div className='bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
                <div className={`flex ${isLocationIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                        {isLocationIran ? 'ورودی های کد رفرال شما' : 'Your Referral Codes Entries'}

                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>

                {
                data &&
                data[0]?.your_referral_code_entries.length > 0 ?
                    <table className={`${myFontIran.className} w-full`}>
                        <tr>

                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                {isLocationIran ? 'تعداد جوایز' : 'Number of Prizes'}
                            </th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                {isLocationIran ? 'درصده افزوده' : 'Percentage Added'}
                            </th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                {isLocationIran ? 'تاریخ' : 'Date'}
                            </th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                {isLocationIran ? 'نام کاربر' : 'Username'}
                            </th>
                        </tr>

                        {
                            data &&
                            data[0]?.your_referral_code_entries.map((item: any, index: number) => {
                                return (
                                    <tr >
                                        <td className='text-center'>
                                            <p className='text-white'>
                                                {item.added_percentage}
                                            </p>
                                        </td>
                                        <td className='text-center'>
                                            <p className='text-white'>
                                                {item.added_percentage}
                                            </p>
                                        </td>
                                        <td className='text-center'>
                                            <p className='text-white'>
                                                {formatCreatedAtDate(item.created_at)}
                                            </p>
                                        </td>
                                        <td className='text-center'>
                                            <p className='text-white'>
                                                {item.username}
                                            </p>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                    :

                    <div className='flex flex-col justify-center gap-4 items-center text-white'>
                        <Image src={empty} alt='empty' />
                        <p className={`${myFontIran.className} ${props.isLocationIran ? 'rtl' : ''}`}>
                            {isLocationIran ? 'در حال حاظر هيچ تاريخچه معرفي نداريد.' : 'Currently, you do not have any referal history.'}

                        </p>
                    </div>
                }


                <style>
                    {
                        `
                    .p-toast-detail {
                        text-align : ${props.isLocationIran ? 'right' : 'left'} ;
                    }
                    .wrap {
                        text-wrap: nowrap;
                    }


                    table {
                        border - collapse: separate;
                    border-spacing: 0 10px;
      }

      th {
        padding-left: 5px;
        padding-right: 5px; 
        padding-bottom: 20px;
        padding-top: 20px;
      }
    
                     td {
                        padding-left: 5px;
                        padding-right: 5px; 
                        padding-bottom: 14px;
                        padding-top: 14px;
      }   
      tr:not(:last-child,:first-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      }
      
                    `
                    }
                </style>
            </div>


        </div>
    );
};

export default Referral;