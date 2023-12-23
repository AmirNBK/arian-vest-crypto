import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import localFont from 'next/font/local';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const AccountInfoComponent = (props: {
    title: string;
    value: number | string
    percentage: number
    icon: StaticImport
    dollar: boolean
    total: number | string
    isLocationIran: boolean
}) => {
    return (
        <div className={`${myFontIran.className} AccountInfoComponent relative bg-[#202020] w-fit rounded-md px-8 py-4 mt-6`}>
            <div>
                <h3 className={`text-main-orange ${props.isLocationIran ? 'text-right' : 'text-left'} text-2xl mb-4`}> {props.title} </h3>
            </div>
            <div className='flex flex-row-reverse items-center gap-5'>
                <div className='text-3xl'>
                    <p className='text-white m-0 font-bold'> {props.dollar && <span className='text-main-orange -mr-2'> $ </span>}
                        {props.value} </p>
                </div>
                <div className='w-24 h-24 relative'>
                    <CircularProgressbar value={props.percentage} text={`${props.percentage}%`}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#F68D2E",
                        })}
                    />
                    <p className='absolute left-1/2 bottom-[18%] -translate-x-1/2 text-xs'
                        style={{ color: 'rgba(255, 255, 255, 0.25)' }}
                    > {props.total} </p>
                </div>
                <Image src={props.icon} alt='icon' className='absolute right-0 bottom-0' />
            </div>
        </div>
    );
};

export default AccountInfoComponent;