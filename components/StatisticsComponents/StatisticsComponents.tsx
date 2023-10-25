import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const StatisticsComponents = (props: {
    title: string
    value: number | string
    icon?: any
    dollar: boolean
    isActive?: boolean
    isReferral?: boolean
}) => {
    return (
        <div className={`StatisticsComponents mx-auto
        ${props.isReferral ? 'bg-[#272A2E]' : 'bg-[#1A1C1F]'} flex flex-row-reverse sm:justify-start justify-center rounded-md py-5 w-64 px-5
         gap-4 items-center  ${myFontIran.className}`}>
            {props.icon &&
                <div>
                    <Image src={props.icon} alt='icon' width={35} />
                </div>
            }

            <div className='flex flex-col items-end gap-2'>
                <p className='text-gray-500 3xl:text-xl'> {props.title} </p>
                <p className={`${props.isActive ? 'rounded-md px-6 py-1 ml-auto w-fit  text-[#21c21e] bg-green-200' : 'text-white'} 3xl:text-lg `}>  {props.dollar && '$'}{props.value} </p>
            </div>
        </div>
    );
};

export default StatisticsComponents;