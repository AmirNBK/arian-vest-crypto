import React from 'react';
import localFont from 'next/font/local'
import LeaderboardComponent from '../LeaderboardComponent/LeaderboardComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import pic from '../../assets/images/leaderboard1.png'
import pic2 from '../../assets/images/leaderboard2.png'
import pic3 from '../../assets/images/leaderboard3.png'


const Leaderboards = (
    props: {
        isLocationIran: boolean
    }
) => {
    const isLocationInIran = props.isLocationIran

    return (
        <div className='Leaderboards bg-[#1A1C1F] h-full lg:w-full mx-2 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
            <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                    {isLocationInIran ? '   بیشترین سود' : 'Leaderboards'}
                </h2>
                <Image src={certificateMini} alt='icon' unoptimized />
            </div>
            <div className='mt-6 flex flex-col gap-2'>
                <LeaderboardComponent isLocationIran={isLocationInIran} rank={'01'} name='Alex205197' profit={2899000} bgImage={pic}
                    accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent isLocationIran={isLocationInIran} rank={'02'} name='Alex205197' profit={2899000} bgImage={pic2}
                    accountSize={1000000} return={28.99} back={5.42} />
                <LeaderboardComponent rank={'03'} name='Alex205197' isLocationIran={isLocationInIran} profit={2899000} bgImage={pic3}
                    accountSize={1000000} return={28.99} back={5.42} />
            </div>


        </div>
    );
};

export default Leaderboards;