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
    const [products, setProducts] = useState([
        {
            id: '1000',
            status: <p className={`${myFontIran.className} rounded-md p-2 ml-auto w-fit text-[#21c21e] bg-green-200	`}>
                پرداخت شده
            </p>,
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: <p className='text-green-600	 text-xl font-bold'>
                $550,000,000
            </p>,
            account:
                <div className='flex flex-row-reverse items-center gap-4 justify-start text-gray-400'>
                    <div className='rounded-md text-lg bg-main-orange px-4 py-3 text-white font-bold w-fit'>
                        5k
                    </div>
                    <p className='rtl text-lg'>
                        5k classic challenge -  تعرفه classic challenge
                    </p>
                </div>,
            date: <p className='text-gray-400'>
                05/09/2023
            </p>,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            status: <p className={`${myFontIran.className} rounded-md p-2 ml-auto w-fit text-red-400 bg-red-200	`}>
                منقضی شده
            </p>,
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: <p className='text-green-600	 text-xl font-bold'>
                $830,000,000
            </p>,
            account:
                <div className='flex flex-row-reverse items-center gap-4 justify-start text-gray-400'>
                    <div className='rounded-md text-lg bg-main-orange px-4 py-3 text-white font-bold w-fit'>
                        100k
                    </div>
                    <p className='rtl text-lg'>
                        100k classic challenge -  تعرفه classic challenge
                    </p>
                </div>,
            date: <p className='text-gray-400'>
                05/09/2023
            </p>,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
    ]);

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
                                <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-[#159400]`}
                                >
                                    پرداخت شده
                                </button>
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'55.000.000'} dollar={true} />
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'Classic 5K'} dollar={false} />

                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'05/03/2023'} dollar={false} />
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-5xl font-bold'> 01 </h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'55.000.000'} dollar={true} />
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'Classic 5K'} dollar={false} />

                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='lg' value={'05/03/2023'} dollar={false} />
                            </td>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-5xl font-bold'> 02 </h2>
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
    
                    th, td {
                        padding-left: 10px;
                        padding-right: 10px; 
                        padding-bottom: 25px;
                        padding-top: 25px;
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