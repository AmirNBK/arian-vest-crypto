import React from 'react';
import DashboardInfoComponent from '../DashboardInfoComponent/DashboardInfoComponent';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                داشبورد
            </h2>
            <DashboardInfoComponent title='اطلاعات' />
        </div>
    );
};

export default Dashboard;