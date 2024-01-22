import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const AccountsDetail = () => {
    return (
        <div className='AccountsDetail bg-[#272A2E] rounded-md p-8 w-full flex flex-row-reverse gap-12 items-center'>

            <div className='flex flex-row-reverse'>
                <div className='rounded-md text-lg bg-main-orange px-4 py-3 text-white font-bold'>
                    5k
                </div>

                <div className={`${myFontIran.className} text-lg text-white rtl text-right mr-4 flex flex-col gap-2`}>
                    <p>
                        5k classic challenge -  تعرفه classic challenge
                    </p>
                    <p className='text-xs text-gray-400'>
                        در تاریخ Aug 22 2023
                    </p>
                </div>
            </div>

            <div className={`${myFontIran.className} flex flex-col gap-2 text-center`}>
                <p className='text-lg text-gray-400'>
                    قیمت پرداخت
                </p>
                <p className='text-lime-500 text-lg font-bold'>
                    $550,000,000
                </p>
            </div>

        </div>
    );
};

export default AccountsDetail;