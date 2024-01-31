import Image from 'next/image';
import React, { ReactElement, useRef } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import plus from '../../assets/icons/download2.svg'

const StatisticsComponents = (props: {
    title?: string
    value: number | string | ReactElement | undefined
    icon?: any
    dollar: boolean
    isActive?: boolean
    isReferral?: boolean
    paddingY?: number
    havePlusButton?: boolean
    fontSize?: string
    width?: number
    removeBg?: boolean
    onClick?: () => void;
    isCenter?: boolean
}) => {

    return (
        <div
            style={{
                boxShadow: `${!props.removeBg ? '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' : ''}`,
                background: `${!props.removeBg ? '#202020' : ''}`
            }}
            className={`StatisticsComponents bg-shadow mx-auto justify-center
             flex flex-row-reverse rounded-md ${props.paddingY ? `py-${props.paddingY}` : 'py-10'}
        ${props.width ? `w-${props.width}` : 'w-44'} px-5
         gap-4 items-center  ${myFontIran.className}`}>
            {props.havePlusButton && <Image src={plus} className='absolute sm:block hidden left-0 bottom-0' alt='downloadIcon' />}
            <div className='flex flex-col items-end gap-2'>
                <p className={`${props.isCenter && 'text-center'} ${props.isActive ? 'rounded-md px-6 py-1 ml-auto w-fit  text-[#21c21e] bg-green-200' : 'text-white'} ${props.fontSize ? `text-${props.fontSize}` : 'text-xl'} font-bold 3xl:text-lg `}>
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