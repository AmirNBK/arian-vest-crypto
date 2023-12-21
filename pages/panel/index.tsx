import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local';
import { Dialog } from 'primereact/dialog';
import team from '../../assets/icons/team.svg'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { useRouter } from 'next/router';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { Sidebar } from 'primereact/sidebar';
import support from '../../assets/icons/support.svg'
import { getQueryAboutUs, getQueryFooter } from '@/lib/service';
import { useState } from 'react';
import menu from '../../assets/icons/menu.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import profit from '../../assets/icons/money.svg'
import profile from '../../assets/icons/profile2.svg'
import useWindowSize from '@/Hooks/innerSize';
import leaderboards from '../../assets/icons/leaderboard.svg'
import download from '../../assets/icons/download.svg'
import certificate from '../../assets/icons/certificate.svg'
import refer from '../../assets/icons/refer.svg'
import ProfitWithdrawal from '@/components/ProfitWithdrawal/ProfitWithdrawal';
import Leaderboards from '@/components/Leaderboards/Leaderboards';
import Certificate from '@/components/Certificate/Certificate';
import Profile from '@/components/Profile/Profile';
import Dashboard from '@/components/Dashboard/Dashboard';
import logo from '../../assets/icons/baseLogo.png'
import mobileLogo from '../../assets/icons/logo.png'
import Download from '@/components/Download/Download';
import Referral from '@/components/Referral/Referral';
import logout from '../../assets/icons/logout.svg'
import authentication from '../../assets/icons/authentication.svg'
import Authentication from '@/components/Authentication/Authentication';
import Ticket from '@/components/Ticket/Ticket';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import useLocationData from '@/Hooks/location';


export default function SingleBlog({ footer, data }: { footer: any, data: any }) {
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<any>('dashboard');
    const router = useRouter();
    const size = useWindowSize();
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const [visible, setVisible] = useState<boolean>(false);
    const panelItems = [
        { title: 'داشبورد', icon: dashboard, link: 'dashboard' },
        { title: 'برداشت سود', icon: profit, link: 'profitWithdrawal' },
        { title: 'پروفایل', icon: profile, link: 'profile' },
        { title: 'تابلو امتیازات', icon: leaderboards, link: 'leaderboards' },
        { title: 'احراز هویت', icon: authentication, link: 'authentication' },
        { title: 'معرفی به دوستان', icon: refer, link: 'referral' },
        { title: 'پشتیبانی', icon: support, link: 'ticket' },
        { title: 'دانلود', icon: download, link: 'download' },
        { title: 'مدرک', icon: certificate, link: 'certificates' },
        { title: 'خروج از حساب کاربری', icon: logout, link: 'logout' },
    ]

    return (
        <main
            className={`flex min-h-screen w-full flex-col justify-between`}
        >
            <Head>
                <title>Panel</title>
            </Head>
            <PrimeReactProvider>
                <Dialog header="خروج از حساب کاربری" visible={visible} style={{ width: `${size.width && size.width < 640 ? '90vw' : '25vw'}` }}
                    className={`${myFontIran.className} rtl`} onHide={() => setVisible(false)}>
                    <div>
                        <p className="m-0">
                            آیا از خروج از حساب کاربری خود اطمینان دارید؟
                        </p>
                        <div className='flex flex-row justify-center mt-6 gap-6'>
                            <button className='btn-grad-red  text-white rounded-lg text-center text-lg'
                                onClick={() => {
                                    sessionStorage.removeItem("authToken")
                                    localStorage.removeItem("authToken")
                                    router.push('/')
                                }}
                            >
                                بله
                            </button>
                            <button className='btn-grad-black text-white rounded-lg text-center text-lg'
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                خیر
                            </button>
                        </div>
                    </div>
                </Dialog>

                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}
                    style={{ backgroundColor: 'black' }}
                >
                    <Image src={mobileLogo} alt='logo' className='mx-auto w-7/12' />

                    <div className='flex flex-col gap-8'>
                        {panelItems.map((item) => {
                            return (
                                <div className='panelItem flex flex-row items-center justify-end gap-4'>
                                    <p className='cursor-pointer text-base text-white'
                                        onClick={() => {
                                            if (item.link === 'logout') {
                                                setVisible(true)
                                            }
                                            else {
                                                setActivePanel(item.link)
                                                setVisibleRight(false)
                                            }
                                        }}
                                    > {item.title} </p>
                                    <Image width={35} src={item.icon} alt='icon' />
                                </div>
                            )
                        })}
                    </div>
                </Sidebar>

                <div className='flex flex-col lg:flex-row-reverse'>
                    <div className={`Sidebar lg:block hidden p-10 bg-[#1D1D1D]`}
                    >
                        <Link href={'/'}>
                            <Image src={logo} alt='logo' unoptimized className='mb-16 mx-auto' />
                        </Link>
                        <div className='flex flex-col gap-8'>
                            {panelItems.map((item) => {
                                return (
                                    <div className='panelItem flex flex-row items-center justify-end gap-4 relative'>
                                        <p className={`cursor-pointer text-right whitespace-nowrap text-sm text-white ml-6
                                        ${myFontIran.className}`}
                                            onClick={() => {
                                                if (item.link === 'logout') {
                                                    setVisible(true);
                                                } else {
                                                    setActivePanel(item.link);
                                                }
                                            }}
                                        >
                                            {item.title}
                                        </p>
                                        <Image width={35} src={item.icon} alt='icon' />
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    <div className='panelContainer mx-6 my-6 lg:hidden block'>
                        <Image src={menu} alt='menu'
                            className='ml-auto cursor-pointer' width={35} onClick={() => setVisibleRight(true)} />
                    </div>

                    <div className='h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-4 sm:py-8 px-3 sm:px-6 rounded-lg mt-0 sm:mt-6 mb-20'>
                        {activePanel === 'leaderboards' ? <Leaderboards /> : activePanel === 'certificates' ? <Certificate /> :
                            activePanel === 'profitWithdrawal' ? <ProfitWithdrawal isLocationIran={isLocationInIran} /> : activePanel === 'profile' ? <Profile isLocationIran={isLocationInIran} /> :
                                activePanel === 'dashboard' ? <Dashboard /> : activePanel === 'download' ? <Download /> :
                                    activePanel === 'referral' ?
                                        <Referral />
                                        : activePanel === 'authentication' ?
                                            <Authentication isLocationIran={isLocationInIran} /> : activePanel === 'ticket' ? <Ticket isLocationIran={isLocationInIran} /> : ''
                        }

                    </div>
                </div>
                <div className={`${myFontIran.className} footer__panel text-main-orange flex flex-row-reverse gap-6 mx-auto mb-4 lg:mb-6`}>
                    <div className='flex flex-col text-center items-center '>
                        <p className=''>  ويرا فاندينگ </p>
                        <hr className='w-[82px] h-[0.5px]' style={{ background: '#F68D2E', border: 'none' }} />
                    </div>
                    <div className='flex flex-col text-center items-center '>
                        <p className=''> قوانین انتشار  </p>
                        <hr className='w-[88px] h-[0.5px]' style={{ background: '#F68D2E', border: 'none' }} />
                    </div>
                    <div className='flex flex-col text-center items-center '>
                        <p className=''> بلاگ  </p>
                        <hr className='w-8 h-[0.5px]' style={{ background: '#F68D2E', border: 'none' }} />
                    </div>
                </div>


            </PrimeReactProvider>



            <style>
                {`

.Sidebar {
    width: 120px;
    transition: all 1s ease-in-out;
  }
  
  .Sidebar:hover {
    width: 320px;
  }
  

.Sidebar p {
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }
  .Sidebar:hover p {
    opacity: 1;
  }
    
                         .btn-grad-red {
                            background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
                            margin: 10px;
                            padding: 10px 30px;
                            text-align: center;
                            text-transform: uppercase;
                            transition: 0.5s;
                            background-size: 200% auto;
                            color: white;            
                            box-shadow: 0 0 20px #eee;
                            border-radius: 5px;
                            display: block;
                          }
                
                          .btn-grad:hover {
                            background-position: right center; /* change the direction of the change here */
                            color: #fff;
                            text-decoration: none;
                          }

                                   
         .btn-grad-black {
            background-image: linear-gradient(to right, #283048 0%, #859398  51%, #283048  100%);
            margin: 10px;
            padding: 10px 30px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 5px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
                         
         
                `}
            </style>
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
        revalidate: 10,
    };
};