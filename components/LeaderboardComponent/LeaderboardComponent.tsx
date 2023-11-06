import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { Chart } from 'primereact/chart';
import line from '../../assets/images/LineWhite.svg'
import Image from 'next/image';

const LeaderboardComponent = (props: {
    rank: number | string
    name: string
    profit: number
    accountSize: number
    return: number
    back: number
    bgImage: any
}) => {
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
            maintainAspectRatio: true,
            aspectRatio: 1.5,
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
        <div className='LeaderboardComponent rounded-md py-12 px-8 flex flex-col gap-12 lg:gap-5 lg:flex-row-reverse 
        justify-between items-center'
            style={{borderBottom : '1px solid rgba(255, 255, 255, 0.10)'}}
        >
            <h2 className='text-main-orange text-6xl font-bold'> {props.rank} </h2>
            <div className='flex flex-col items-center gap-2'>
                <h2 className={`${myFont.className} text-main-orange text-xl`}>
                    سود و نام
                </h2>

                <div className='relative'>
                    <Image src={props.bgImage} alt='image' unoptimized className='rounded-md' />
                    <div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <h3 className='text-main-orange font-bold text-2xl'>  {props.name} </h3>
                        <p className='text-white text-lg font-bold'>
                            <span className='text-main-orange'>
                                $
                            </span>
                            {props.profit} </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h2 className={`${myFont.className} text-main-orange text-xl`}>
                    سایز حساب
                </h2>

                <div className='relative'>
                    <Image src={props.bgImage} alt='image' unoptimized className='rounded-md' />
                    <div className='flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-white text-2xl font-bold'>
                            <span className='text-main-orange'>
                                $
                            </span>
                            {props.accountSize} </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <h2 className={`${myFont.className} text-main-orange text-xl`}>
                    برگشتی و بازگشتی
                </h2>
                <div className='relative'>
                    <Image src={props.bgImage} alt='image' unoptimized className='rounded-md' />
                    <div className='flex flex-row gap-6 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <p className='text-white text-2xl font-bold'>
                            <span className='text-main-orange'>
                                $
                            </span>
                            {props.back}
                        </p>
                        <Image src={line} alt='line' />
                        <p className='text-white text-2xl font-bold'>
                            <span className='text-main-orange'>
                                $
                            </span>
                            {props.return}
                        </p>
                    </div>
                </div>
            </div>

            <div className='card translate-y-4'>
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>


            <style>
                {
                    `
                    .bg-shadow {
                        fill: #202020;
filter: drop-shadow(0px 4.018365383148193px 4.018365383148193px rgba(0, 0, 0, 0.25));
                    }
                    `
                }
            </style>
        </div>
    );
};

export default LeaderboardComponent;