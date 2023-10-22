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
import server from '../../assets/icons/server.svg'
import platform from '../../assets/icons/layers.svg'
import Image from 'next/image';



const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

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
            aspectRatio: 0.65,
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
            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                داشبورد
            </h2>

            <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6'>
                <h2 className={`${myFont.className} Profile__title text-white text-xl w-fit ml-auto`}>
                    اطلاعات کلی حساب
                </h2>
                <div className='mt-8 flex flex-row-reverse justify-between flex-wrap'>
                    <StatisticsComponents dollar={false} title='تاریخ شروع ' value={'09/06/2023'} />
                    <StatisticsComponents dollar={false} title='تاریخ پایان ' value={'09/06/2024'} />
                    <StatisticsComponents dollar title='سایز حساب' value={150000} />
                    <StatisticsComponents dollar title='مبلغ حساب' value={100000} />
                    <StatisticsComponents dollar={false} isActive title='وضعیت حساب ' value={'فعال'} />
                </div>

            </div>

            <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6'>
                <h2 className={`${myFont.className} Profile__title text-white text-xl w-fit ml-auto`}>
                    اطلاعات حساب
                </h2>

                <div className='mt-8 flex flex-row-reverse justify-between flex-wrap'>
                    <DashboardInfoComponent title='سود حساب' loss={true} percent={23} mainPrice={1.832} total={8000} />
                    <DashboardInfoComponent title='ضرر روزانه' loss={false} percent={0} mainPrice={0} total={5000} />
                    <DashboardInfoComponent title='ضرر کلی' loss={false} percent={0} mainPrice={0} total={10000} />
                    <DashboardInfoComponent title='روزهای ترید' loss={false} percent={100} mainPrice={17} total={3} />
                </div>
            </div>


            <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6'>
                <h2 className={`${myFont.className} Profile__title text-white text-xl w-fit ml-auto`}>
                    آمار حساب
                </h2>

                <div className='mt-8 flex flex-row-reverse justify-between flex-wrap'>
                    <StatisticsComponents dollar={false} icon={trade} title='مقدار ترید' value={57} />
                    <StatisticsComponents dollar icon={profit} title='مقدار سود' value={257} />
                    <StatisticsComponents dollar icon={loss} title='ضرر میانگین' value={702.91} />
                    <StatisticsComponents dollar icon={profit2} title='سود کلی' value={18860} />

                </div>
            </div>

            <div className='flex flex-row-reverse gap-4'>
                <div className='bg-[#272A2E] rounded-md px-2 py-4 w-full mt-6 flex-[0.3] flex flex-col gap-2'>
                    <div className='flex flex-row gap-8 justify-center mb-4'>
                        <div className='rounded-md flex flex-col items-center py-8' style={{ background: 'rgba(26, 28, 31, 0.5)' }}>
                            <Image src={server} alt='server' className='mb-8' />
                            <p className={`${myFontIran.className} text-white`}> سرور </p>
                            <p className='text-gray-500 text-center text-sm mt-1'> ThinkMarkets-Demo </p>
                        </div>
                        <div className='rounded-md flex flex-col items-center py-8' style={{ background: 'rgba(26, 28, 31, 0.5)' }}>
                            <Image src={platform} alt='server' className='mb-8' />
                            <p className={`${myFontIran.className} text-white`}> پلتفرم </p>
                            <p className='text-gray-500 text-center text-sm mt-1'> ThinkMarkets-Demo </p>
                        </div>
                    </div>
                    <StatisticsComponents dollar={false} title='تاریخ شروع ' value={'09/06/2023'} />
                    <StatisticsComponents dollar={false} title='تاریخ پایان ' value={'09/06/2024'} />
                </div>
                <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6 flex-1'>
                    <div className='card'>
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;