import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local'
import DashboardInfoComponent from '../DashboardInfoComponent/DashboardInfoComponent';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { Chart } from 'primereact/chart';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import trade from '../../assets/icons/trade.svg'
import loss from '../../assets/icons/loss.svg'
import profit from '../../assets/icons/profit2.svg'
import profit2 from '../../assets/icons/profit3.svg'
import profit3 from '../../assets/icons/profit4.svg';
import dailyLoss from '../../assets/icons/dailyLoss4.svg';
import totalLoss from '../../assets/icons/totalLoss4.svg';
import tradeDays from '../../assets/icons/tradeDays4.svg';
import profile from '../../assets/images/profilePic.png'
import edit from '../../assets/icons/edit.svg'
import range from '../../assets/images/whiteRange.svg'
import server from '../../assets/icons/server.svg'
import certificateMini from '../../assets/icons/certificateMini.svg';
import platform from '../../assets/icons/layers.svg'
import useWindowSize from '@/Hooks/innerSize';
import Image from 'next/image';
import AccountInfoComponent from '../AccountInfoComponent/AccountInfoComponent';
import DashboardPaginationComponent from '../DashboardPaginationComponent/DashboardPaginationComponent';

const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const size = useWindowSize();


    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'موجودی',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(246, 141, 46, 0.5)'
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: (size.width && size.width < 640) ? 1.5 : (size.width && size.width > 2000) ? 1 : 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className='Dashboard'>
            <h2 className={`${myFont.className} Profile__title text-white text-2xl 3xl:text-5xl w-fit ml-auto mb-6`}>
                داشبورد
            </h2>

            {/* <div className='Profile__info bg-[#1D1D1D] rounded-md p-16 flex flex-col sm:flex-row-reverse gap-4
            justify-center items-center sm:items-end relative'
                style={{ zIndex: '20' }}
            >
                <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '1' }} />
                <div className='flex flex-col sm:flex-row-reverse gap-4 items-center'>
                    <Image src={profile} alt='profile' unoptimized style={{ zIndex: '20' }} />
                    <div className='flex flex-col items-center sm:items-end gap-2'>
                        <div className='flex flex-row gap-3'>
                            <Image src={edit} alt='edit' />
                            <p className={`${myFont.className} text-white text-3xl`}> محمد باقری </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6 relative'>
                <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                ' style={{ zIndex: '0' }} />
                <div className='flex flex-row-reverse justify-center lg:justify-center mt-8 flex-wrap gap-16'
                    style={{ zIndex: '20' }}
                >
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            شروع
                        </h3>
                        <StatisticsComponents dollar={false} value={'09/11/2023'} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            پایان
                        </h3>
                        <StatisticsComponents dollar={false} value={'25/11/2025'} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            سایز حساب
                        </h3>
                        <StatisticsComponents dollar={false} value={'300K'} isReferral />
                    </div>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            مبلغ حساب
                        </h3>
                        <StatisticsComponents dollar={false} value={'150k'} isReferral />
                    </div>
                    <div
                        style={{ zIndex: '25' }}
                    >
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            وضعیت حساب
                        </h3>
                        <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-[#159400]
                        mt-8
                        `}
                        >
                            فعال
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            اطلاعات حساب
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='flex flex-row-reverse justify-center sm:justify-between flex-wrap'>
                    <AccountInfoComponent
                        total={'$8000'}
                        title='سود حساب' value={1.650} percentage={20} icon={profit3} dollar
                    />

                    <AccountInfoComponent
                        total={'$5000'}
                        title='ضرر روزانه' value={0} percentage={0} icon={dailyLoss} dollar
                    />
                    <AccountInfoComponent

                        total={'$10000'}
                        title='ضرر کلی' value={0} percentage={0} icon={totalLoss} dollar
                    />
                    <AccountInfoComponent
                        total={'D100'}
                        title='روزهای ترید' value={'20D'} percentage={20} icon={tradeDays} dollar={false}
                    />
                </div>
            </div>


            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6 relative'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '0' }} />
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            آمار حساب
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='mt-8 flex flex-row-reverse justify-center gap-8 sm:justify-between flex-wrap'>
                    <StatisticsComponents dollar={false} icon={trade} title='مقدار ترید' paddingY={6} value={
                        <div className='flex flex-col items-center gap-4'>
                            <div>
                                <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ml-auto`}>
                                    مقدار ترید
                                </h2>
                            </div>
                            <div>
                                <p className={`${myFontIran.className} text-white text-2xl w-fit ml-auto`}>
                                    65
                                </p>
                            </div>
                        </div>
                    } />
                    <StatisticsComponents paddingY={6} dollar={false} icon={profit} title='مقدار سود' value={
                        <div className='flex flex-col items-center gap-4'>
                            <div>
                                <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ml-auto`}>
                                    مقدار سود
                                </h2>
                            </div>
                            <div>
                                <p className={`${myFontIran.className} text-white text-2xl w-fit ml-auto`}>
                                    $150
                                </p>
                            </div>
                        </div>
                    } />
                    <StatisticsComponents dollar={false} icon={loss} title='ضرر میانگین' value={
                        <div className='flex flex-col items-center gap-4'>
                            <div>
                                <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ml-auto`}>
                                    ضرر میانگین
                                </h2>
                            </div>
                            <div>
                                <p className={`${myFontIran.className} text-white text-2xl w-fit ml-auto`}>
                                    $50.24
                                </p>
                            </div>
                        </div>
                    } />
                    <StatisticsComponents dollar={false} icon={profit2} title='سود کلی' value={
                        <div className='flex flex-col items-center gap-4'>
                            <div>
                                <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ml-auto`}>
                                    سود کلی
                                </h2>
                            </div>
                            <div>
                                <p className={`${myFontIran.className} text-white text-2xl w-fit ml-auto`}>
                                    $1650
                                </p>
                            </div>
                        </div>
                    } />

                </div>
            </div>

            <div className='flex flex-col lg:flex-row-reverse gap-4  bg-[#1D1D1D] mt-6'>
                <div className='rounded-md px-2 py-4 w-full mt-6 flex-[0.3] flex flex-col gap-2 justify-between'>
                    <div className='flex flex-col gap-8 justify-center mb-4'>
                        <div className='rounded-md flex flex-row items-start px-4 py-4 justify-between
                        bg-[#202020]
                        '>
                            <div>
                                <Image src={server} alt='server' className='' />
                            </div>
                            <div className='flex flex-col items-end'>
                                <p className={`${myFont.className} text-white`}> سرور </p>
                                <p className='text-gray-500 text-center text-sm mt-1 text-main-orange'> ThinkMarkets-Demo </p>
                            </div>
                        </div>
                        <div className='rounded-md flex flex-row items-start px-4 py-4 justify-between  bg-[#202020]'>
                            <div>
                                <Image src={platform} alt='server' className='' />
                            </div>
                            <div className='flex flex-col items-end'>
                                <p className={`${myFont.className} text-white`}> پلتفرم </p>
                                <p className='text-gray-500 text-center text-sm mt-1 text-main-orange'> ThinkMarkets-Demo </p>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-[#202020] w-full rounded-md px-8 py-4 mt-'>
                        <div className='flex flex-row-reverse items-start justify-between pb-4 gap-16'
                            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.10)' }}
                        >
                            <div>
                                <p className={`${myFont.className} font-normal text-base text-white`}>
                                    شروع
                                </p>
                            </div>
                            <div>
                                <p className='text-main-orange font-normal text-base'>
                                    09/11/2023
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse items-start justify-between pb-4 gap-16 pt-4'
                        >
                            <div>
                                <p className={`${myFont.className} font-normal text-base text-white`}>
                                    پایان
                                </p>
                            </div>
                            <div>
                                <p className='text-main-orange font-normal text-base'>
                                    09/11/2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rounded-md px-8 py-4 w-full mt-6 flex-1'>
                    <div className='card'>
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>

            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            تاریخچه حساب معاملاتی
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>
                <div className='overflow-auto'>
                    <table className={`w-full mt-10 overflow-auto`}>
                        <tr
                        >
                            <th className={`${myFont.className} text-base text-right text-main-orange`}> مدت‌زمان</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}> سود</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}> حد زیاد</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}>قیمت بست</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}> تاریخ بست</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}>قیمت باز</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}>تاریخ باز</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}>نوع</th>
                            <th className={`${myFont.className} text-base text-right text-main-orange`}>
                                نماد
                            </th>
                        </tr>
                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#BF0000]'>
                                -$415.28
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#159400] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(21, 148, 0, 0.25)' }}
                            >
                                خرید
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>

                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#BF0000]'>
                                -$415.28
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#BF0000] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(191, 0, 0, 0.25)' }}
                            >
                                فروش
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#159400]'>
                                +$415
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#BF0000] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(191, 0, 0, 0.25)' }}
                            >
                                فروش
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#159400]'>
                                +$256.12
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#159400] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(21, 148, 0, 0.25)' }}
                            >
                                خرید
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#BF0000]'>
                                -$415.28
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#159400] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(21, 148, 0, 0.25)' }}
                            >
                                خرید
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-right`}>
                            <td>
                                24m 13s
                            </td>
                            <td className='text-[#159400]'>
                                +$415.28
                            </td>
                            <td>
                                8
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td>
                                35674.56
                            </td>
                            <td>
                                09/11/2023
                            </td>
                            <td className='text-[#159400] inline-block w-fit p-1 px-6 rounded-lg mt-4'
                                style={{ background: 'rgba(21, 148, 0, 0.25)' }}
                            >
                                خرید
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>

                    </table>
                </div>

                <div className='mt-10'>
                    <DashboardPaginationComponent />
                </div>
            </div>

            <style>
                {
                    `
                    table {
                        border - collapse: separate;
                    border-spacing: 0 10px;
      }

      tr:nth-child(odd) {
        background: rgba(255, 255, 255, 0.03);
      }

      th {
        padding-left: 10px;
        padding-right: 10px; 
        padding-bottom: 25px;
        padding-top : 30px;
      }
      
                     td {
                        padding-left: 10px;
                        padding-right: 10px; 
                        padding-bottom: 15px;
                        padding-top : 20px;
      }
                    `
                }
            </style>

        </div>
    );
};

export default Dashboard;