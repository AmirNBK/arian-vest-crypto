import React from 'react';
import localFont from 'next/font/local'
import LeaderboardComponent from '../LeaderboardComponent/LeaderboardComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import pic from '../../assets/images/leaderboard1.png'

const Leaderboards = () => {
    return (
        <div className='Leaderboards bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
            <div className='flex flex-col md:flex-row-reverse gap-2'>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                        بیشترین سود
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>
            </div>
            <div className='mt-6 flex flex-col gap-6'>
                <LeaderboardComponent rank={'01'} name='Alex205197' profit={2899000} bgImage={pic}
                    accountSize={1000000} return={28.99} back={5.42} />
                {/* <LeaderboardComponent rank={2} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={3} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={4} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={5} name='Alex205197' profit={2899000} accountSize={1000000} return={28.99} back={5.42} /> */}
            </div>


        </div>
    );
};

export default Leaderboards;