import React from 'react';
import localFont from 'next/font/local'
import DashboardInfoComponent from '../DashboardInfoComponent/DashboardInfoComponent';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import trade from '../../assets/icons/trade.svg'
import loss from '../../assets/icons/loss.svg'
import profit from '../../assets/icons/profit2.svg'
import profit2 from '../../assets/icons/profit3.svg'



const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                داشبورد
            </h2>

            <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6'>
                <h2 className={`${myFont.className} Profile__title text-white text-xl w-fit ml-auto`}>
                    اطلاعات حساب
                </h2>

                <div className='mt-8 flex flex-row-reverse justify-between flex-wrap'>
                    <DashboardInfoComponent title='سود حساب' loss={true} percent={23} mainPrice={1.832} total={8000} />
                    <DashboardInfoComponent title='ضرر روزانه' loss={false} percent={0} mainPrice={0} total={5000} />
                    <DashboardInfoComponent title='ضرر کلی' loss={false} percent={0} mainPrice={0} total={10000} />
                    <DashboardInfoComponent title='روزهای ترید' loss={false} percent={100} mainPrice={17} total={3} />
                </div>
            </div>


            <div className='bg-[#272A2E] rounded-md px-8 py-4 w-full mt-6'>
                <h2 className={`${myFont.className} Profile__title text-white text-xl w-fit ml-auto`}>
                    آمار حساب
                </h2>

                <div className='mt-8 flex flex-row-reverse justify-between flex-wrap'>
                    <StatisticsComponents dollar={false} icon={trade} title='مقدار ترید' value={57} />
                    <StatisticsComponents dollar icon={profit} title='مقدار سود' value={257} />
                    <StatisticsComponents dollar icon={loss} title='ضرر میانگین' value={702.91} />
                    <StatisticsComponents dollar icon={profit2} title='سود کلی' value={18860} />

                </div>
            </div>

        </div>
    );
};

export default Dashboard;