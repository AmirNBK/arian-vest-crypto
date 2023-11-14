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
                        <StatisticsComponents width={36} paddingY={8} dollar={false} value={<Image src={plus} alt='plus' />} />
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

                <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto rtl`}>
                    <table className={`${myFontIran.className} w-full`}>
                        <tr>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}></th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>موضوع تیکت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>نوع پشتیبانی</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>تاریخ</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>وضعیت تیکت</th>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 01 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    ایراد در روند معامله
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'>
                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 02 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    برداشت سود
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'
                            >
                                <button
                                    className={`${myFontIran.className}
                                px-5 sm:px-5 py-3 sm:py-2 text-white rounded-lg text-xs sm:text-sm
                                bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>

                        </tr>

                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 03 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    ایراد در روند معامله
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'>
                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 04 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    برداشت سود
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'
                            >
                                <button
                                    className={`${myFontIran.className}
                                px-5 sm:px-5 py-3 sm:py-2 text-white rounded-lg text-xs sm:text-sm
                                bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 05 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    ایراد در روند معامله
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'>
                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 06 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    برداشت سود
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'
                            >
                                <button
                                    className={`${myFontIran.className}
                                px-5 sm:px-5 py-3 sm:py-2 text-white rounded-lg text-xs sm:text-sm
                                bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 07 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    ایراد در روند معامله
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'>
                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 08 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    برداشت سود
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'
                            >
                                <button
                                    className={`${myFontIran.className}
                                px-5 sm:px-5 py-3 sm:py-2 text-white rounded-lg text-xs sm:text-sm
                                bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 09 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    ایراد در روند معامله
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'>
                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm bg-[#159400]`}
                                >
                                    پاسخ داده شد
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center'>
                                <h2 className='text-main-orange text-4xl sm:text-2xl font-bold'> 10 </h2>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    برداشت سود
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    مالی
                                </p>
                            </td>
                            <td className='text-center'>
                                <p className='text-white'>
                                    02/09/2023
                                </p>
                            </td>
                            <td className='text-center wrap'
                            >
                                <button
                                    className={`${myFontIran.className}
                                px-5 sm:px-5 py-3 sm:py-2 text-white rounded-lg text-xs sm:text-sm
                                bg-[#740000]`}
                                >
                                    منقضی شده
                                </button>
                            </td>

                        </tr>
                        
                    </table>

                </div>
            </div>


            <style>
                {
                    `
                    .wrap {
                        text-wrap: nowrap;
                    }


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

export default Ticket;