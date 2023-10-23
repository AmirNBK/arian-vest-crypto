import React from 'react';
import localFont from 'next/font/local'
import ProfitInfoComponent from '../ProfitInfoComponent/ProfitInfoComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const ProfitWithdrawal = () => {
    return (
        <div className='ProfitWithdrawal'>
            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                برداشت سود
            </h2>

            <div className='flex flex-row  justify-between mt-12'>
                <ProfitInfoComponent title='کل سود' dollar value={650} />
                <ProfitInfoComponent title='تعداد برداشت ها' value={6} />
                <ProfitInfoComponent title='برداشت های در انتظار' value={2} />
                <ProfitInfoComponent title='مبلغ برداشت شده' dollar value={360} />
            </div>

            <div className='mt-12 bg-[#272A2E] rounded-md px-8 py-4 w-1/2 text-center mx-auto'>
                <h2 className={`${myFontIran.className} ProfitInfoComponent__title text-white text-xl`}>
                    مبلغ قابل برداشت
                </h2>

                <p className={`${myFontIran.className} text-gray-400 mt-2 text-sm`}>
                    در این قسمت میتوانید مبلغ قابل برداشت خود را مشاهده و در صورت تمایل اقدام به برداشت نمایید تا به حساب شما در بازه زمانی 24 الی 48 ساعت اضافه شود
                </p>

                <div className='my-4'>
                    <ProfitInfoComponent dollar value={83} />
                </div>
                <button className={`${myFontIran.className}
                ProfitInfoComponent__value btn-grad-2 text-white rounded-md w-96 text-center text-lg`}>
                    برداشت سود
                </button>
            </div>


            <style>
                {`
                         
         .btn-grad-2 {
            background-image: linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%);
            margin: 20px auto;
            padding: 13px 0px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            display: block;
          }

          .btn-grad-2:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
                `}
            </style>
        </div>
    );
};

export default ProfitWithdrawal;