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
import Footer from '@/components/Footer/Footer';
import { Sidebar } from 'primereact/sidebar';
import { GetStaticProps } from 'next';
import { getQueryAboutUs, getQueryFooter } from '@/lib/service';
import { useState } from 'react';
import menu from '../../assets/icons/menu.svg'
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
import logo from '../../assets/icons/baseLogo.png'
import Download from '@/components/Download/Download';
import Referral from '@/components/Referral/Referral';
import logout from '../../assets/icons/logout.svg'

export default function SingleBlog({ footer, data }: { footer: any, data: any }) {
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<any>('dashboard');
    const router = useRouter();
    const [visible, setVisible] = useState<boolean>(false);
    const [fullSidebar, setFullSidebar] = useState(true)
    const panelItems = [
        { title: 'داشبورد', icon: dashboard, link: 'dashboard' },
        { title: 'برداشت سود', icon: profit, link: 'profitWithdrawal' },
        { title: 'پروفایل', icon: profile, link: 'profile' },
        { title: 'تابلو امتیازات', icon: leaderboards, link: 'leaderboards' },
        { title: 'معرفی به دوستان', icon: refer, link: 'referral' },
        { title: 'دانلود', icon: download, link: 'download' },
        { title: 'مدرک', icon: certificate, link: 'certificates' },
        { title: 'خروج از حساب کاربری', icon: logout, link: 'logout' },
    ]

    return (
        <main
            className={`flex min-h-screen w-full flex-col justify-between`}
        >
            <PrimeReactProvider>
                <Dialog header="خروج از حساب کاربری" visible={visible} style={{ width: '25vw' }}
                    className={`${myFontIran.className} rtl`} onHide={() => setVisible(false)}>
                    <div>
                        <p className="m-0">
                            آیا از خروج از حساب کاربری خود اطمینان دارید؟
                        </p>
                        <div className='flex flex-row justify-center mt-6 gap-6'>
                            <button className='btn-grad-red  text-white rounded-md text-center text-lg'
                                onClick={() => {
                                    sessionStorage.removeItem("authToken")
                                    localStorage.removeItem("authToken")
                                    router.push('/')
                                }}
                            >
                                بله
                            </button>
                            <button className='btn-grad-black text-white rounded-md text-center text-lg'
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                خیر
                            </button>
                        </div>
                    </div>
                </Dialog>


                <div className='flex flex-row-reverse'>
                    <div className={`Sidebar p-10 bg-[#1D1D1D]`}
                    >
                        <Image src={logo} alt='logo' unoptimized className='mb-16 mx-auto'/>
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

                    <div className='h-full w-full bg-[#1A1C1F] mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-md mt-6 mb-20'>
                        {activePanel === 'leaderboards' ? <Leaderboards /> : activePanel === 'certificates' ? <Certificate /> :
                            activePanel === 'profitWithdrawal' ? <ProfitWithdrawal /> : activePanel === 'profile' ? <Profile /> :
                                activePanel === 'dashboard' ? <Dashboard /> : activePanel === 'download' ? <Download /> :
                                    activePanel === 'referral' ? <Referral /> : ''
                        }

                    </div>
                </div>


            </PrimeReactProvider>



            <style>
                {`

.Sidebar {
    width: 120px;
    transition: width 1s ease-in-out;
  }
  
  .Sidebar:hover {
    width: 320px;
  }
  

.Sidebar p {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
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
        revalidate: 3600,
    };
};