import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local'
import DashboardInfoComponent from '../DashboardInfoComponent/DashboardInfoComponent';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { Chart } from 'primereact/chart';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import trade from '../../assets/icons/trade.svg'
import loss from '../../assets/icons/loss.svg'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
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
import { Link } from 'react-router-dom';

const Dashboard = (props: {
    isLocationIran: boolean
}) => {
    const isLocationInIran = props.isLocationIran

    interface Account {
        name: string;
        code: string;
    }

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
                    label: `${isLocationInIran ? 'موجودی' : 'balance'}`,
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
            <div className={`${myFontIran.className} text-white text-center flex flex-col gap-3`}>
                <p className={`${isLocationInIran && 'rtl'}`}>
                    {isLocationInIran ? 'اگر اطلاعات حساب كاربري خود را مشاهده نكرديد برروي لينك زير كليك كنيد.' : 'If you do not see your user account information, click on the link below.'}
                </p>
                <a href='https://dashboard.virafunding.com/auth/login' target='_blank' className='text-blue-500 underline' >
                dashboard.virafunding.com
                </a>
            </div>
            <div className={`flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} w-full justify-between items-baseline`}>
                <h2 className={`${myFont.className} Profile__title text-white text-2xl 3xl:text-5xl w-fit m${isLocationInIran ? 'l' : 'r'}-auto mb-6`}>
                    {isLocationInIran ? 'داشبورد' : 'Dashboard'}
                </h2>
            </div>

            {/* <div className='Profile__info bg-[#1D1D1D] rounded-md p-16 flex flex-col sm:flex-row-reverse gap-4
            justify-center items-center sm:items-end relative'
                style={{ zIndex: '20' }}
            >
                <Image src={range} alt='range' className='sm:block hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '1' }} />
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

            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full relative'>
                <Image src={range} alt='range' className='sm:block hidden  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '0' }} />

                <div className={`flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} justify-center lg:justify-center mt-8 flex-wrap gap-16`} style={{ zIndex: '20' }}>
                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            {isLocationInIran ? 'شروع' : 'Start'}
                        </h3>
                        <StatisticsComponents dollar={false} value={'0'} isReferral />
                    </div>

                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            {isLocationInIran ? 'پایان' : 'End'}
                        </h3>
                        <StatisticsComponents dollar={false} value={'0'} isReferral />
                    </div>

                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            {isLocationInIran ? 'سایز حساب' : 'Account Size'}
                        </h3>
                        <StatisticsComponents dollar={false} value={'0'} isReferral />
                    </div>

                    <div>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            {isLocationInIran ? 'مبلغ حساب' : 'Account Amount'}
                        </h3>
                        <StatisticsComponents dollar={false} value={'0'} isReferral />
                    </div>

                    <div style={{ zIndex: '25' }}>
                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                            {isLocationInIran ? 'وضعیت حساب' : 'Account Status'}
                        </h3>
                        <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-[#159400] mt-4 mb-8 sm:mt-8 sm:mb-0`}>
                            {isLocationInIran ? 'فعال' : 'Active'}
                        </button>
                    </div>
                </div>
            </div>


            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6'>
                <div className={`flex flex-col ${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-2`}>
                    <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                            {isLocationInIran ? 'اطلاعات حساب' : 'Account Information'}
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className={`flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} justify-center sm:justify-between flex-wrap`}>
                    <AccountInfoComponent
                        isLocationIran={isLocationInIran}
                        total={'0'}
                        title={isLocationInIran ? 'سود حساب' : 'Account Profit'}
                        value={0}
                        percentage={0}
                        icon={profit3}
                        dollar
                    />

                    <AccountInfoComponent
                        isLocationIran={isLocationInIran}
                        total={'0'}
                        title={isLocationInIran ? 'ضرر روزانه' : 'Daily Loss'}
                        value={0}
                        percentage={0}
                        icon={dailyLoss}
                        dollar
                    />

                    <AccountInfoComponent
                        total={'0'}
                        title={isLocationInIran ? 'ضرر کلی' : 'Total Loss'}
                        value={0}
                        percentage={0}
                        icon={totalLoss}
                        dollar
                        isLocationIran={isLocationInIran}
                    />

                    <AccountInfoComponent
                        total={'0'}
                        title={isLocationInIran ? 'روزهای ترید' : 'Trading Days'}
                        value={'0'}
                        percentage={0}
                        icon={tradeDays}
                        dollar={false}
                        isLocationIran={isLocationInIran}
                    />
                </div>
            </div>



            <div className='bg-[#1D1D1D] rounded-md px-8 py-4 w-full mt-6 relative'>
                <Image src={range} alt='range' className='sm:block hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '0' }} />

                <div className={`flex flex-col ${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-2`}>
                    <div className={`flex ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-center gap-4`}>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                            {isLocationInIran ? 'آمار حساب' : 'Account Statistics'}
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className={`mt-8 flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} justify-center gap-8 sm:justify-between flex-wrap`}>
                    <StatisticsComponents
                        dollar={false}
                        icon={trade}
                        title={isLocationInIran ? 'مقدار ترید' : 'Trade Amount'}
                        paddingY={6}
                        value={
                            <div className='flex flex-col items-center gap-4'>
                                <div>
                                    <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        {isLocationInIran ? 'مقدار ترید' : 'Trade Amount'}
                                    </h2>
                                </div>
                                <div>
                                    <p className={`${myFontIran.className} text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        0
                                    </p>
                                </div>
                            </div>
                        }
                    />

                    <StatisticsComponents
                        paddingY={6}
                        dollar={false}
                        icon={profit}
                        title={isLocationInIran ? 'مقدار سود' : 'Profit Amount'}
                        value={
                            <div className='flex flex-col items-center gap-4'>
                                <div>
                                    <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        {isLocationInIran ? 'مقدار سود' : 'Profit Amount'}
                                    </h2>
                                </div>
                                <div>
                                    <p className={`${myFontIran.className} text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        0
                                    </p>
                                </div>
                            </div>
                        }
                    />

                    <StatisticsComponents
                        dollar={false}
                        icon={loss}
                        title={isLocationInIran ? 'ضرر میانگین' : 'Average Loss'}
                        value={
                            <div className='flex flex-col items-center gap-4'>
                                <div>
                                    <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        {isLocationInIran ? 'ضرر میانگین' : 'Average Loss'}
                                    </h2>
                                </div>
                                <div>
                                    <p className={`${myFontIran.className} text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        0
                                    </p>
                                </div>
                            </div>
                        }
                    />

                    <StatisticsComponents
                        dollar={false}
                        icon={profit2}
                        title={isLocationInIran ? 'سود کلی' : 'Total Profit'}
                        value={
                            <div className='flex flex-col items-center gap-4'>
                                <div>
                                    <h2 className={`${myFontIran.className} text-main-orange text-lg w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        {isLocationInIran ? 'سود کلی' : 'Total Profit'}
                                    </h2>
                                </div>
                                <div>
                                    <p className={`${myFontIran.className} text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto'}`}>
                                        0
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>


            <div className='flex flex-col lg:flex-row-reverse gap-4 bg-[#1D1D1D] mt-6'>
                <div className='rounded-md px-2 py-4 w-full mt-6 flex-[0.3] flex flex-col gap-2 justify-between'>
                    <div className='flex flex-col gap-8 justify-center mb-4'>
                        <div className={`rounded-md flex ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-start px-4 py-4 justify-between bg-[#202020]`}>
                            <div>
                                <Image src={server} alt='server' className='' />
                            </div>
                            <div className={`flex flex-col  ${isLocationInIran ? 'items-end' : 'items-start'}`}>
                                <p className={`${myFont.className} text-white`}>{isLocationInIran ? 'سرور' : 'Server'}</p>
                                <p className='text-gray-500 text-center text-sm mt-1 text-main-orange'> Icmarkets </p>
                            </div>
                        </div>
                        <div className={`rounded-md flex ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-start px-4 py-4 justify-between bg-[#202020]`}>
                            <div>
                                <Image src={platform} alt='server' className='' />
                            </div>
                            <div className={`flex flex-col  ${isLocationInIran ? 'items-end' : 'items-start'}`}>
                                <p className={`${myFont.className} text-white`}>{isLocationInIran ? 'پلتفرم' : 'Platform'}</p>
                                <p className='text-gray-500 text-center text-sm mt-1 text-main-orange'> Icmarkets </p>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-[#202020] w-full rounded-md px-8 py-4 mt-'>
                        <div className={`flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} items-start justify-between pb-4 gap-16`} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.10)' }}>
                            <div>
                                <p className={`${myFont.className} font-normal text-base text-white`}>
                                    {isLocationInIran ? 'شروع' : 'Start'}
                                </p>
                            </div>
                            <div>
                                <p className='text-main-orange font-normal text-base'>
                                    0
                                </p>
                            </div>
                        </div>
                        <div className={`flex ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} items-start justify-between pb-4 gap-16 pt-4`}>
                            <div>
                                <p className={`${myFont.className} font-normal text-base text-white`}>
                                    {isLocationInIran ? 'پایان' : 'End'}
                                </p>
                            </div>
                            <div>
                                <p className='text-main-orange font-normal text-base'>
                                    0
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
                <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                        {isLocationInIran ? 'تاریخچه حساب معاملاتی' : 'Trading account history'}
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
                <div className='overflow-auto'>
                    <table className={`w-full mt-10 overflow-auto ${isLocationInIran ? '' : 'rtl'}`}>
                        <tr className=''>
                            <th className={`${myFont.className} text-base text-center text-main-orange `}>{isLocationInIran ? 'مدت‌زمان' : 'Duration'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'سود' : 'Profit'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'حد زیاد' : 'Stop Limit'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'قیمت بست' : 'Close Price'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'تاریخ بست' : 'Close Date'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'قیمت باز' : 'Open Price'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'تاریخ باز' : 'Open Date'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>{isLocationInIran ? 'نوع' : 'Type'}</th>
                            <th className={`${myFont.className} text-base text-center text-main-orange`}>
                                {isLocationInIran ? 'نماد' : 'Symbol'}
                            </th>
                        </tr>

                        <tr className={`text-white text-center `}>
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
                                buy
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>

                        <tr className={`text-white text-center`}>
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
                                sell
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-center`}>
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
                                sell
                            </td>
                            <td>
                                us30
                            </td>
                        </tr>
                        <tr className={`text-white text-center`}>
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
                                buy
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