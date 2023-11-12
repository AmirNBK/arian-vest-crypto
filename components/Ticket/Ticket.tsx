import React from 'react';
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg';
import Image from 'next/image';
import NewInput from '../NewInput/NewInput';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import plus from '../../assets/icons/download2.svg'
import ticketPic from '../../assets/images/ticketPic.png'
import SendButton from '../../assets/images/sendButton.png'

const Ticket = () => {
    return (
        <div>
            <div className='Ticket bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Ticket__title text-white text-2xl w-fit ml-auto`}>
                            ارسال تیکت
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col items-center gap-5 flex-1'>
                        <div>
                            <h2 className={`${myFont.className} Ticket__title text-main-orange text-base w-fit ml-auto text-center`}>
                                اگر احتیاج به آپلود فایل هستش در این بخش وارد کنید
                            </h2>
                        </div>
                        <StatisticsComponents dollar={false} paddingY={2} value={<Image src={plus} alt='plus' />} />
                        <Image src={ticketPic} alt='ticketPic' unoptimized />
                    </div>

                    <div className='flex flex-col flex-[1.5]'>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1'>
                            <NewInput placeholder='موضوع' isTextArea={false} />
                            <NewInput placeholder='نوع پشتیبانی' isTextArea={false} selectable />
                            <NewInput placeholder='فوریت' isTextArea={false} />
                            <NewInput placeholder='شماره سفارش' isTextArea={false} />
                            <NewInput placeholder='اکانت متاتریدر' isTextArea={false} />
                            <NewInput placeholder='پلتفرم' isTextArea={false} />
                        </div>
                        <div>
                            <NewInput placeholder='توضیحات مربوطه خود را بنویسید' isTextArea />
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center cursor-pointer'>
                <Image src={SendButton} alt='button' unoptimized />
            </div>
            <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                        آمار تیکتینگ
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>

                <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto`}>
                    <table className='w-full'>
                        <tr>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>وضعیت تیکت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>تاریخ</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>نوع پشتیبانی</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>موضوع تیکت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}></th>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='base' value={'02/09/2023'} dollar={true} />
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='base' value={'مالی'} dollar={false} />

                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='base' value={'ایراد در روند معامله'} dollar={false} />
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
                                <StatisticsComponents fontSize='base' value={'02/09/2023'} dollar={true} />
                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='base' value={'مالی'} dollar={false} />

                            </td>
                            <td className='text-center'>
                                <StatisticsComponents fontSize='base' value={'برداشت سود'} dollar={false} />
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

export default Ticket;