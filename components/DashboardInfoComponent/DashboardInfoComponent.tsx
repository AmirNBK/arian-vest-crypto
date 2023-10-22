import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import cancel from '../../assets/icons/cancel.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import accept from '../../assets/icons/accept.svg'
import Image from 'next/image';


const DashboardInfoComponent = (props: {
    title: string
    loss: boolean
    percent: number
    mainPrice: number
    total: number
}) => {
    return (
        <div className={`${myFontIran.className} DashboardInfoComponent w-fit bg-[#1A1C1F] rounded-md px-8 py-4`}>
            <div className=' flex flex-row-reverse justify-between items-center'>
                <div className='flex flex-row-reverse gap-2 items-center'>
                    <div className={`rounded-full ${props.loss ? 'bg-red-500' : 'bg-green-500'} w-2 h-2`}>
                    </div>
                    <p className='text-[#9ca3af]'> {props.title} </p>
                </div>
                {props.loss ? <Image src={cancel} alt='accept' width={20} /> : <Image src={accept} alt='accept' width={20} />}
            </div>
            <div className='mt-4 flex flex-row-reverse gap-8 items-center'>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={props.percent} text={`${props.percent}%`}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#22C55E",
                        })}
                    />

                </div>
                <div className='flex flex-col items-end justify-between h-full gap-1'>
                    <p className='text-white text-xl'> ${props.mainPrice}
                    </p>
                    <p className='text-gray-500 '> از مقدار </p>
                    <p className='text-gray-500 '> ${props.total}  </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardInfoComponent;