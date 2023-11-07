import Image from 'next/image';
import React, { ReactElement } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import plus from '../../assets/icons/download2.svg'

const StatisticsComponents = (props: {
    title?: string
    value: number | string | ReactElement
    icon?: any
    dollar: boolean
    isActive?: boolean
    isReferral?: boolean
    paddingY?: number
    havePlusButton?: boolean
}) => {
    return (
        <div className={`StatisticsComponents bg-shadow mx-auto justify-center
        ${props.isReferral ? 'bg-[#202020]' : 'bg-[#202020]'} flex flex-row-reverse rounded-md ${props.paddingY ? `py-${props.paddingY}` : 'py-12'} w-64 px-5
         gap-4 items-center  ${myFontIran.className}`}>
            {props.havePlusButton && <Image src={plus} className='absolute left-0 bottom-0' alt='downloadIcon' />}
            <div className='flex flex-col items-end gap-2'>
                <p className={`${props.isActive ? 'rounded-md px-6 py-1 ml-auto w-fit  text-[#21c21e] bg-green-200' : 'text-white'} text-2xl font-bold 3xl:text-lg `}>
                    <span className='text-main-orange'>
                        {props.dollar && '$'}
                    </span>
                    {props.value} </p>
            </div>
            <style>
                {`
                .bg-shadow {
                    fill: #202020;
filter: drop-shadow(0px 4.018365383148193px 4.018365383148193px rgba(0, 0, 0, 0.25));
                }
                
                `}
            </style>
        </div>
    );
};

export default StatisticsComponents;