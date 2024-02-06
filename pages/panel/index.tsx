import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { useRouter } from 'next/router';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import ReactLoading from 'react-loading';
import { Dialog } from 'primereact/dialog';
import { Sidebar } from 'primereact/sidebar';
import support from '../../assets/icons/support.svg'
import { useEffect, useState } from 'react';
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
import { getPurchasedAccounts } from '@/lib/apiConfig';


export default function Panel() {
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<any>('dashboard');
    const router = useRouter();
    const size = useWindowSize();
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const [visible, setVisible] = useState<boolean>(false);
    const panelItems = [
        { title: 'داشبورد', icon: dashboard, link: 'dashboard' },
        { title: 'پروفایل', icon: profile, link: 'profile' },
        { title: 'برداشت سود', icon: profit, link: 'profitWithdrawal' },
        { title: 'تابلو امتیازات', icon: leaderboards, link: 'leaderboards' },
        { title: 'احراز هویت', icon: authentication, link: 'authentication' },
        { title: 'معرفی به دوستان', icon: refer, link: 'referral' },
        { title: 'پشتیبانی', icon: support, link: 'ticket' },
        { title: 'دانلود', icon: download, link: 'download' },
        { title: 'مدرک', icon: certificate, link: 'certificates' },
        { title: 'خروج از حساب کاربری', icon: logout, link: 'logout' },
    ]
    interface Account {
        name: string;
        code: string;
    }
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
    const [purchasedAccounts, setPurchasedAccounts] = useState<any>();
    const panelItemsEng = [
        { title: 'Dashboard', icon: dashboard, link: 'dashboard' },
        { title: 'Profile', icon: profile, link: 'profile' },
        { title: 'Support', icon: support, link: 'ticket' },
        { title: 'Profit Withdrawal', icon: profit, link: 'profitWithdrawal' },
        { title: 'Identity Verification', icon: authentication, link: 'authentication' },
        { title: 'Leaderboards', icon: leaderboards, link: 'leaderboards' },
        { title: 'Refer a Friend', icon: refer, link: 'referral' },
        { title: 'Download', icon: download, link: 'download' },
        { title: 'Certificates', icon: certificate, link: 'certificates' },
        { title: 'Logout', icon: logout, link: 'logout' },
    ];


    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            setIsLogin(true)
        }
        else setIsLogin(false)
        getPurchasedAccounts().then((res) => {
            const formattedAccounts = res.data.map((account: { accounts: any; pk: { toString: () => any; }; name: string }) => ({
                name: (account.name),
                code: account.pk.toString(),
            }));

            setPurchasedAccounts(formattedAccounts);
        });

    }, [])

    useEffect(() => {
        if (purchasedAccounts) {
            setSelectedAccount(purchasedAccounts[0]?.code)
        }
    }, [purchasedAccounts])


    return (
        <div className='w-full flex justify-center'>
            <main
            className={`flex min-h-screen w-full flex-col justify-between max-w-[1700px] min-w-full 2xl:min-w-0`}
        >
            <Head>
                <title>Panel</title>
            </Head>
            {loading ?
                ''
                :
                <PrimeReactProvider>
                    <Dialog
                        className={`${myFontIran.className} rtl`}
                        header="ورود به حساب کاربری" visible={!isLogin} modal closable={false} style={{ width: `${size.width && size.width < 640 ? '90vw' : '35vw'}` }} onHide={() => setVisible(false)}>
                        <div>
                            <p className="mt-6 text-center">
                                برای مشاهده پنل کاربری ابتدا وارد حساب کاربری خود شوید
                            </p>

                            <div className='flex flex-row justify-center mt-6 gap-6'>
                                <button className='bg-main-orange px-12 py-2 text-white rounded-lg text-center text-lg'
                                    onClick={() => {
                                        router.push('/register')
                                    }}
                                >
                                    ثبت نام / عضویت
                                </button>
                            </div>
                        </div>
                    </Dialog>
                    <Dialog header={isLocationInIran ? "خروج از حساب کاربری" : 'Log out of your account'} visible={visible} style={{ width: `${size.width && size.width < 640 ? '90vw' : '25vw'}` }}
                        className={`${myFontIran.className} ${isLocationInIran ? 'rtl' : 'ltr'}`} onHide={() => setVisible(false)}>
                        <div>
                            <p className="m-0">
                                {isLocationInIran ? "آیا از خروج از حساب کاربری خود اطمینان دارید؟" : "Are you sure you want to log out of your account?"}
                            </p>
                            {logoutLoading ?
                                <ReactLoading type={'spinningBubbles'} className='mx-auto' color={'#F68D2E'} height={50} width={50} />
                                :
                                <div className={`flex ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} justify-center mt-6 gap-6`}>
                                    <button className='btn-grad-red text-white rounded-lg text-center text-lg'
                                        onClick={() => {
                                            setLogoutLoading(true)
                                            sessionStorage.removeItem("authToken")
                                            localStorage.removeItem("authToken")
                                            router.push('/')
                                        }}
                                    >
                                        {isLocationInIran ? "بله" : "Yes"}
                                    </button>
                                    <button className='btn-grad-black text-white rounded-lg text-center text-lg'
                                        onClick={() => {
                                            setVisible(false)
                                        }}
                                    >
                                        {isLocationInIran ? "خیر" : "No"}
                                    </button>
                                </div>
                            }

                        </div>
                    </Dialog>


                    <Sidebar visible={visibleRight} position={isLocationInIran ? "right" : 'left'} onHide={() => setVisibleRight(false)}
                        style={{ backgroundColor: 'black' }}
                    >
                        <Link href={'/'}>
                            <Image src={mobileLogo} alt='logo' className='mx-auto w-7/12' />
                        </Link>

                        <div className='flex flex-col gap-8'>
                            {isLocationInIran ?
                                panelItems.map((item) => {
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
                                })

                                :
                                panelItemsEng.map((item) => {
                                    return (
                                        <div className='panelItem flex flex-row-reverse items-center justify-end gap-4'>
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
                                })
                            }

                        </div>
                    </Sidebar>

                    <div className={`flex flex-col  ${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className={`Sidebar lg:block hidden p-10 bg-[#1D1D1D]`}
                        >
                            <Link href={'/'}>
                                <Image src={logo} alt='logo' unoptimized className='mb-16 mx-auto' />
                            </Link>
                            <div className='flex flex-col gap-8'>
                                {isLocationInIran ?

                                    panelItems.map((item) => {
                                        return (
                                            <div className={`panelItem flex  ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-center justify-end gap-4 relative`}>
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
                                    })

                                    :
                                    panelItemsEng.map((item) => {
                                        return (
                                            <div className={`panelItem flex  ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-center justify-end relative`}>
                                                <p className={`cursor-pointer text-right whitespace-nowrap text-sm text-white ml-4
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
                                    })


                                }

                            </div>
                        </div>
                        <div className='panelContainer mx-6 my-6 lg:hidden block'>
                            <Image src={menu} alt='menu'
                                className={`${isLocationInIran ? 'ml-auto' : 'mr-auto rotate-180'} cursor-pointer`} width={35} onClick={() => setVisibleRight(true)} />
                        </div>
                        <div className='h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-4 sm:py-8 px-3 sm:px-6 rounded-lg mt-0 sm:mt-6 mb-20'>
                            <Dropdown value={selectedAccount} onChange={(e: DropdownChangeEvent) => setSelectedAccount(e.value)}
                                options={purchasedAccounts} optionLabel="name" style={{ fontFamily: '__myFontIran_ca096e' }}
                                placeholder={isLocationInIran ? 'انتخاب حساب' : 'Select Account'} className={`w-fit ${isLocationInIran && 'rtl'} mb-6`} />
                            {activePanel === 'leaderboards' ? <Leaderboards isLocationIran={isLocationInIran} /> : activePanel === 'certificates' ? <Certificate isLocationIran={isLocationInIran} /> :
                                activePanel === 'profitWithdrawal' ? <ProfitWithdrawal selectedAccount={selectedAccount?.code} isLocationIran={isLocationInIran} /> : activePanel === 'profile' ? <Profile isLocationIran={isLocationInIran} /> :
                                    activePanel === 'dashboard' ? <Dashboard isLocationIran={isLocationInIran} /> : activePanel === 'download' ? <Download isLocationIran={isLocationInIran} /> :
                                        activePanel === 'referral' ?
                                            <Referral isLocationIran={isLocationInIran} />
                                            : activePanel === 'authentication' ?
                                                <Authentication isLocationIran={isLocationInIran} /> : activePanel === 'ticket' ? <Ticket selectedAccount={selectedAccount?.code} isLocationIran={isLocationInIran} /> : ''
                            }

                        </div>
                    </div>
                    <div className={`${myFontIran.className} footer__panel text-main-orange flex flex-row-reverse gap-6 mx-auto mb-4 lg:mb-6`}>
                        <Link href={'/'} className='flex flex-col text-center items-center '>
                            <p className=''>{isLocationInIran ? 'ويرا فاندينگ' : 'Vira Funding'}</p>
                        </Link>
                        <Link href={'/rules'} className='flex flex-col text-center items-center '>
                            <p className=''>{isLocationInIran ? 'قوانین انتشار' : 'Publication Rules'}</p>
                        </Link>
                        <Link href={'/blogs'} className='flex flex-col text-center items-center '>
                            <p className=''>{isLocationInIran ? 'بلاگ' : 'Blog'}</p>
                        </Link>
                    </div>
                </PrimeReactProvider>
            }




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
        </div>
    )
}
