import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const StatisticsComponents = (props: {
    title: string
    value: number
    icon: any
    dollar: boolean
}) => {
    return (
        <div className={`StatisticsComponents bg-[#1A1C1F] flex flex-row-reverse rounded-md py-5 w-64 px-5
         gap-4 items-center  ${myFontIran.className}`}>
            <div>
                <Image src={props.icon} alt='icon' width={35} />
            </div>

            <div className='flex flex-col items-end gap-2'>
                <p className='text-gray-500'> {props.title} </p>
                <p className='text-white'>  {props.dollar && '$'}{props.value} </p>
            </div>
        </div>
    );
};

export default StatisticsComponents;