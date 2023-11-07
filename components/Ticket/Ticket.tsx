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

const Ticket = () => {
    return (
        <div className='Ticket bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
            <div className='flex flex-col lg:flex-row-reverse gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Ticket__title text-white text-2xl w-fit ml-auto`}>
                        ارسال تیکت
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col items-center gap-5 flex-1'>
                    <div>
                        <h2 className={`${myFont.className} Ticket__title text-main-orange text-base w-fit ml-auto`}>
                            اگر احتیاج به آپلود فایل هستش در این بخش وارد کنید
                        </h2>
                    </div>
                    <StatisticsComponents dollar={false} paddingY={2} value={<Image src={plus} alt='plus' />} />
                    <Image src={ticketPic} alt='ticketPic' unoptimized />
                </div>

                <div className='flex flex-col flex-[1.5]'>
                    <div className='grid grid-cols-3 gap-4 flex-1'>
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
    );
};

export default Ticket;