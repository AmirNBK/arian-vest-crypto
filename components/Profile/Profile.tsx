import React, { useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import profile from '../../assets/images/profilePic.png'
import range from '../../assets/images/whiteRange.svg'
import Image from 'next/image';
import edit from '../../assets/icons/edit.svg'
import icon from '../../assets/icons/certificateMini.svg'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';


const Profile = () => {

    return (
        <div className='Profile' style={{ zIndex: '-50' }}>
            <div className='Profile__info bg-[#1D1D1D] rounded-md p-16 flex flex-col sm:flex-row-reverse gap-4
            justify-between items-center sm:items-end relative'
                style={{ zIndex: '20' }}
            >
                <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '1' }} />
                <div className='flex flex-col sm:flex-row-reverse gap-4 items-center'>
                    <Image src={profile} alt='profile' unoptimized style={{ zIndex: '20' }} />
                    <div className='flex flex-col items-center sm:items-end gap-2'>
                        <div className='flex flex-row gap-3'>
                            <Image src={edit} alt='edit' />
                            <p className={`${myFont.className} text-white text-3xl`}> محمد باقری </p>
                        </div>
                        <p className='text-base text-white opacity-[0.7] text-sm'> test@gmail.com </p>
                        <p className='text-white text-sm opacity-[0.7] sm:text-right text-center'>
                            17shahrivar street-marashi alley-no5
                            tehran, Tehran (تهران) 1718814754
                            Iran
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                        اکانت های خریداری شده
                    </h2>
                    <Image src={icon} alt='icon' unoptimized />
                </div>

                <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto`}>
                    <table className='w-full'>
                        <tr>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>وضعیت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>قیمت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>حساب خریداری شده</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>تاریخ</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}></th>
                        </tr>
                        <tr>
                            <td className='text-center'>

                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پرداخت شده
                                </button>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 01 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <button className={`${myFontIran.className} px-5 py-2 text-white rounded-lg text-base bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                                </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 02 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>

                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پرداخت شده
                                </button>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 03 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <button className={`${myFontIran.className} px-5 py-2 text-white rounded-lg text-base bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                                </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 04 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>

                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پرداخت شده
                                </button>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 05 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <button className={`${myFontIran.className} px-5 py-2 text-white rounded-lg text-base bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                                </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    55.000.000
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    Classic 5K
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    05/03/2023
                                </p>
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-2xl font-bold'> 06 </h2>
                            </td>
                        </tr>
                    </table>

                </div>
            </div>


            <style>
                {
                    `
                    table {
                        border - collapse: separate;
                    border-spacing: 0 10px;
      }
    
      th {
        padding-left: 5px;
        padding-right: 5px; 
        padding-bottom: 20px;
        padding-top: 20px;
      }
    
                     td {
                        padding-left: 5px;
                        padding-right: 5px; 
                        padding-bottom: 14px;
                        padding-top: 14px;
      }   
      tr:not(:last-child,:first-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      }
      
                    `
                }
            </style>
        </div>
    );
};

export default Profile;