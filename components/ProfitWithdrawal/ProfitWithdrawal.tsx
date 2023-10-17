import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const ProfitWithdrawal = () => {
    return (
        <div className='ProfitWithdrawal'>
            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                برداشت سود
            </h2>
        </div>
    );
};

export default ProfitWithdrawal;