import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { Chart } from 'primereact/chart';

const LeaderboardComponent = (props: {
    rank: number
    name: string
    profit: number
    accountSize: number
    return: number
    back: number
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
                    label: 'First Dataset',
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
            aspectRatio: 2,
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
        <div className='LeaderboardComponent bg-[#272A2E] rounded-md py-4 px-8 flex flex-row-reverse justify-between items-center'>
            <div className='LeaderboardComponent__rightSide flex flex-row-reverse'>
                <p className={` bg-[#1D1F24] w-fit rounded-md px-8 py-6 text-white text-5xl`}>
                    {props.rank}
                </p>
                <div className={`${myFontIran.className} flex flex-col items-end mr-6`}>
                    <h2 className='text-white text-2xl'> {props.name} </h2>
                    <p className={`${myFont.className} text-white text-xl mb-1`}> سود </p>
                    <p className='text-main-orange text-3xl font-bold gradient-text'> ${props.profit} </p>
                </div>
            </div>

            <div className='LeaderboardComponent__leftSide flex flex-row-reverse gap-32'>
                <div className='rounded-md flex flex-row-reverse items-end gap-24 background-gradient px-4 py-6'>
                    <div className={`${myFontIran.className} text-white flex flex-col items-end gap-2 opacity-[0.6]`}>
                        <p> سایز حساب </p>
                        <p> برگشتی </p>
                        <p> بازگشت </p>
                    </div>

                    <div className='flex flex-col items-end gap-2'>
                        <p className='text-white'>  ${props.accountSize} </p>
                        <p className='text-white'> {props.return}%  </p>
                        <p className='text-white'> {props.back} </p>
                    </div>
                </div>


                <div className='card'>
                    <Chart type="line" data={chartData} options={chartOptions} />
                </div>
            </div>


            <style>

                {`
                .gradient-text {
                    background: #F68D2E;
background: linear-gradient(to right, #F68D2E 0%, #fff 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

                }

                .background-gradient {
                    background: rgb(0,0,0);
background: linear-gradient(180deg, #1D1F24 0%, #1D1F24 50%, transparent 100%);
                }
                `}
            </style>
        </div>
    );
};

export default LeaderboardComponent;