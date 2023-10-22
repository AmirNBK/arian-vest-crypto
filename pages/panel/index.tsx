import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import team from '../../assets/icons/team.svg'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import Footer from '@/components/Footer/Footer';
import { Sidebar } from 'primereact/sidebar';
import { GetStaticProps } from 'next';
import { getQueryAboutUs, getQueryFooter } from '@/lib/service';
import { useState } from 'react';
import menu from '../../assets/icons/menu.svg'
import logo from '../../assets/icons/logo.png'
import dashboard from '../../assets/icons/dashboard.svg'
import profit from '../../assets/icons/money.svg'
import profile from '../../assets/icons/profile2.svg'
import leaderboards from '../../assets/icons/leaderboard.svg'
import download from '../../assets/icons/download.svg'
import certificate from '../../assets/icons/certificate.svg'
import refer from '../../assets/icons/refer.svg'
import ProfitWithdrawal from '@/components/ProfitWithdrawal/ProfitWithdrawal';
import Leaderboards from '@/components/Leaderboards/Leaderboards';
import Certificate from '@/components/Certificate/Certificate';
import Profile from '@/components/Profile/Profile';
import Dashboard from '@/components/Dashboard/Dashboard';

export default function SingleBlog({ footer, data }: { footer: any, data: any }) {
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<any>('dashboard')
    const panelItems = [
        { title: 'داشبورد', icon: dashboard, link: 'dashboard' },
        { title: 'برداشت سود', icon: profit, link: 'profitWithdrawal' },
        { title: 'پروفایل', icon: profile, link: 'profile' },
        { title: 'تابلو امتیازات', icon: leaderboards, link: 'leaderboards' },
        { title: 'معرفی به دوستان', icon: refer },
        { title: 'دانلود', icon: download },
        { title: 'مدرک', icon: certificate, link: 'certificates' },
    ]

    return (
        <main
            className={`flex min-h-screen w-full flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}
                    style={{ backgroundColor: 'black' }}
                >
                    <Image src={logo} alt='logo' className='mx-auto w-7/12' />

                    <div className='flex flex-col gap-8'>
                        {panelItems.map((item) => {
                            return (
                                <div className='panelItem flex flex-row items-center justify-end gap-4'>
                                    <p className='cursor-pointer text-base text-white'
                                        onClick={() => {
                                            setActivePanel(item.link)
                                        }}
                                    > {item.title} </p>
                                    <Image width={35} src={item.icon} alt='icon' />
                                </div>
                            )
                        })}
                    </div>
                </Sidebar>
                <Header active={''} />

                <div className='panelContainer px-12'>
                    <Image src={menu} alt='menu' className='ml-auto cursor-pointer' width={35} onClick={() => setVisibleRight(true)} />
                </div>

                <div className='h-full bg-[#1A1C1F] mx-12 py-8 px-6 rounded-md mt-6 mb-20'>
                    {activePanel === 'leaderboards' ? <Leaderboards /> : activePanel === 'certificates' ? <Certificate /> :
                        activePanel === 'profitWithdrawal' ? <ProfitWithdrawal /> : activePanel === 'profile' ? <Profile /> :
                            activePanel === 'dashboard' ? <Dashboard /> : ''
                    }

                </div>

                <Footer data={footer?.footer} />

            </PrimeReactProvider>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const data = await getQueryAboutUs();

    return {
        props: {
            footer,
            data
        },
        revalidate: 3600,
    };
};