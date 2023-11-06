import Image from 'next/image';
import React from 'react';
import certificateMini from '../../assets/icons/certificateMini.svg';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const Authentication = () => {
    return (
        <div className='Authentication bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
            <div className='flex flex-col lg:flex-row-reverse gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                        احراز هویت
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
            </div>

            <div>
                <p
                className={`${myFontIran.className} rtl text-sm mt-2`}
                style={{
                    color: 'rgba(255, 255, 255, 0.40)'
                }}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتر.
                </p>
            </div>
        </div>
    );
};

export default Authentication;