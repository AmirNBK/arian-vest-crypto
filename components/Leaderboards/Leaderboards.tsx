import React from 'react';
import localFont from 'next/font/local'
import LeaderboardComponent from '../LeaderboardComponent/LeaderboardComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const Leaderboards = () => {
    return (
        <div className='Leaderboards'>
            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                بیشترین سود
            </h2>
            <div className='mt-6 flex flex-col gap-6'>
                <LeaderboardComponent rank={1} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={2} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={3} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={4} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={5} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
            </div>
        </div>
    );
};

export default Leaderboards;