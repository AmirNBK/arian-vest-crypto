import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { TabView, TabPanel } from 'primereact/tabview';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import tariff from '../../assets/icons/tariff.svg'
import TariffComponent from '@/components/TariffComponent/TariffComponent';
import TariffTable from '@/components/TariffTable/TariffTable';
import Footer from '@/components/Footer/Footer';
import useWindowSize from '@/Hooks/innerSize';
import { getQueryEngFooter, getQueryFooter, getQueryTariffTitles, getQueryTariffs } from '@/lib/service';
import { GetStaticProps } from 'next';
import useLocationData from '@/Hooks/location';
import Head from 'next/head';


export default function Rules({ footer, data, titles, footerEng }: { footer: any, data: any, titles: any, footerEng: any }) {

    const [selectedTab, setSelectedTab] = useState<number>(0)
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const size = useWindowSize()

    type tariffType = {
        type: string,
        description: string,
        pricesInfo: {}[],
        title: string
    }

    return (
        <div className='flex w-full justify-center'>
            <main
            className={`min-h-screen flex-col text-center w-full max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Challenges</title>
            </Head>
            {loading ?
                ''
                :
                <PrimeReactProvider>
                    <Header active={2} isLocationInIran={isLocationInIran} />
                    <div className={`${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col items-center`}>
                        <div className='flex flex-col flex-1 lg:my-0 my-16'>
                            <div className={`${myFont.className} justify-center sm:justify-right flex flex-col ${isLocationInIran ? 'sm:flex-row-reverse lg:mr-12' : 'sm:flex-row lg:ml-12'} gap-4 items-center  mt-8`}>
                                <Image src={tariff} alt='faq' />
                                {isLocationInIran ?
                                    <p className='text-white text-5xl sm:text-end text-center'>
                                        <span className='text-3xl text-main-orange'>
                                            ({data.tariffs[selectedTab].type})
                                        </span> {titles.allTitles[0].normalTitle}
                                        <span style={{ color: '#F68D2E' }}>
                                            {titles.allTitles[0].coloredTitle}
                                        </span>
                                    </p>
                                    :
                                    <p className='text-white text-5xl sm:text-start text-center'>
                                        {titles.engAllTitles[0].normalTitle}
                                        <span style={{ color: '#F68D2E' }}>
                                            {titles.engAllTitles[0].coloredTitle}
                                        </span>
                                        <span className='text-3xl text-main-orange'>
                                            ({data.engTariffs[selectedTab].type})
                                        </span>
                                    </p>
                                }
                            </div>
                            <div>
                                <p className={`${myFontIran.className} ${isLocationInIran ? 'rtl sm:text-right' : 'ltr sm:text-left'} text-white text-center leading-loose lg:w-10/12 mx-auto mt-6`}>
                                    {isLocationInIran ? data.tariffs[selectedTab].title : data.engTariffs[selectedTab].title}
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex-1'>
                            <TabView
                                style={{ width: `${size.width && size.width < 1024 ? '100%' : '80%'}`, padding: '0px 10px' }}
                                activeIndex={selectedTab}
                                onTabChange={(e) => {
                                    setSelectedTab(e.index)
                                }}
                            >
                                {
                                    isLocationInIran ?
                                        data.tariffs.map((item: tariffType, index: number) => {
                                            return (
                                                <TabPanel header={item.type}>
                                                </TabPanel>
                                            )
                                        })
                                        :
                                        data.engTariffs.map((item: tariffType, index: number) => {
                                            return (
                                                <TabPanel header={item.type}>
                                                </TabPanel>
                                            )
                                        })
                                }
                            </TabView>
                        </div>

                    </div>
                    <div className="card w-full"
                        style={{ margin: '0 auto', marginTop: '50px' }}
                    >
                        <TabView>
                            {
                                isLocationInIran ?
                                    data.tariffs[selectedTab].pricesInfo[0].item.map((item: any, index: number) => {
                                        if (data.tariffs[selectedTab].type === 'Classic') {
                                            return (
                                                <TabPanel header={item.price + 'k'}>
                                                    <div className='mt-12'>
                                                        <TariffComponent
                                                            isLocationIran
                                                            title={data.tariffs[selectedTab].type + ' challenge'} price={item.price}
                                                            description={data.tariffs[selectedTab].desccription} />
                                                    </div>
                                                    <TariffTable
                                                        isLocationIran
                                                        challenge={data.tariffs[selectedTab].type}
                                                        title={titles.tableTitle} data={[
                                                            { title: 'مقدار سرمایه:', info: item.price + 'k' },
                                                            { title: 'حساب بازرگانی:', info: item.leverage },
                                                            { title: 'حداقل روزهای معاملاتی:', info: item?.minDays },
                                                            { title: 'حداکثر روزهای معاملاتی:', info: item.maxDays },
                                                            { title: 'هدف فاز 1:', info: item.target1 },
                                                            { title: 'هدف فاز 2:', info: item.target2 },
                                                            { title: 'حداکثر ضرر روزانه:', info: item.dailyLoss },
                                                            { title: 'حداکثر ضرر کلی:', info: item.totalLoss },
                                                            { title: 'استفاده از ربات:', info: item.robot ? 'مجاز' : 'غیرمجاز' },
                                                            { title: 'بازپرداخت:', info: item.refund ? 'دارد' : 'ندارد' },
                                                            { title: 'معاملات اخباری:', info: item.newsTrading ? 'دارد' : 'ندارد' },
                                                            { title: 'تقسیم سود:', info: item.profitShare },
                                                        ]}
                                                        price={item.dollarPrice}
                                                    />
                                                </TabPanel>
                                            )
                                        }
                                        else {
                                            return (
                                                <TabPanel header={item.price + 'k'}>
                                                    <div className='mt-12'>
                                                        <TariffComponent
                                                            isLocationIran
                                                            title={data.tariffs[selectedTab].type + ' challenge'} price={item.price}
                                                            description={data.tariffs[selectedTab].desccription} />
                                                    </div>
                                                    <TariffTable
                                                        isLocationIran
                                                        challenge={data.tariffs[selectedTab].type}
                                                        title={titles.tableTitle} data={[
                                                            { title: 'مقدار سرمایه:', info: item.price + 'k' },
                                                            { title: 'حساب بازرگانی:', info: item.leverage },
                                                            { title: 'حداقل روزهای معاملاتی:', info: item?.minDays },
                                                            { title: 'حداکثر روزهای معاملاتی:', info: item.maxDays },
                                                            { title: 'هدف فاز 1:', info: item.target1 },
                                                            { title: 'حداکثر ضرر روزانه:', info: item.dailyLoss },
                                                            { title: 'حداکثر ضرر کلی:', info: item.totalLoss },
                                                            { title: 'استفاده از ربات:', info: item.robot ? 'مجاز' : 'غیرمجاز' },
                                                            { title: 'بازپرداخت:', info: item.refund ? 'دارد' : 'ندارد' },
                                                            { title: 'معاملات اخباری:', info: item.newsTrading ? 'دارد' : 'ندارد' },
                                                            { title: 'تقسیم سود:', info: item.profitShare },
                                                        ]}
                                                        price={item.dollarPrice}
                                                    />
                                                </TabPanel>
                                            )
                                        }

                                    })
                                    :
                                    data.engTariffs[selectedTab].pricesInfo[0].item.map((item: any, index: number) => {
                                        if (data.engTariffs[selectedTab].type === 'Classic') {
                                            return (
                                                <TabPanel header={item.price + 'k'}>
                                                    <div className='mt-12'>
                                                        <TariffComponent
                                                            isLocationIran={false}
                                                            title={data.tariffs[selectedTab].type + ' challenge'} price={item.price}
                                                            description={isLocationInIran ? data.tariffs[selectedTab].desccription : data.engTariffs[selectedTab].desccription} />
                                                    </div>
                                                    <TariffTable
                                                        isLocationIran={false}
                                                        title={titles.tableTitle}
                                                        challenge={data.tariffs[selectedTab].type}
                                                        data={[
                                                            { title: 'Capital amount:', info: item.price + 'k' },
                                                            { title: 'Leverage account:', info: item.leverage },
                                                            { title: 'Minimum trading days:', info: item?.minDays },
                                                            { title: 'Maximum trading days:', info: item.maxDays },
                                                            { title: 'Target Phase 1:', info: item.target1 },
                                                            { title: 'Target Phase 2:', info: item.target2 },
                                                            { title: 'Maximum daily loss:', info: item.dailyLoss },
                                                            { title: 'Total maximum loss:', info: item.totalLoss },
                                                            { title: 'Robot usage:', info: item.robot ? 'Allowed' : 'Not allowed' },
                                                            { title: 'Refund:', info: item.refund ? 'Available' : 'Not available' },
                                                            { title: 'News trading:', info: item.newsTrading ? 'Available' : 'Not available' },
                                                            { title: 'Profit share:', info: item.profitShare },

                                                        ]}
                                                        price={item.dollarPrice}
                                                    />

                                                </TabPanel>
                                            )
                                        }
                                        else {
                                            return (
                                                <TabPanel header={item.price + 'k'}>
                                                    <div className='mt-12'>
                                                        <TariffComponent
                                                            isLocationIran={false}
                                                            title={data.tariffs[selectedTab].type + ' challenge'} price={item.price}
                                                            description={isLocationInIran ? data.tariffs[selectedTab].desccription : data.engTariffs[selectedTab].desccription} />
                                                    </div>
                                                    <TariffTable
                                                        isLocationIran={false}
                                                        title={titles.tableTitle}
                                                        challenge={data.tariffs[selectedTab].type}
                                                        data={[
                                                            { title: 'Capital amount:', info: item.price + 'k' },
                                                            { title: 'Leverage account:', info: item.leverage },
                                                            { title: 'Minimum trading days:', info: item?.minDays },
                                                            { title: 'Maximum trading days:', info: item.maxDays },
                                                            { title: 'Profit target:', info: item.target1 },
                                                            { title: 'Maximum daily loss:', info: item.dailyLoss },
                                                            { title: 'Total maximum loss:', info: item.totalLoss },
                                                            { title: 'Robot usage:', info: item.robot ? 'Allowed' : 'Not allowed' },
                                                            { title: 'Refund:', info: item.refund ? 'Available' : 'Not available' },
                                                            { title: 'News trading:', info: item.newsTrading ? 'Available' : 'Not available' },
                                                            { title: 'Profit share:', info: item.profitShare },

                                                        ]}
                                                        price={item.dollarPrice}
                                                    />

                                                </TabPanel>
                                            )
                                        }
                                    })
                            }
                        </TabView>
                    </div>
                    <Footer data={locationData === 'Iran (Islamic Republic of)' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />

                    <style>
                        {
                            `
                            .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
                                box-shadow: 0 0 0 0.2rem #F68D2E;
                              }
                            
                              .p-toast-bottom-right {
                                z-index: 120000000000000000000 !important;
                              }
                            
                              .p-tabview .p-tabview-nav {
                                background: transparent;
                              }
                            
                              .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                                background: transparent;
                                color: #F68D2E;
                              }
                            
                              .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                                background: transparent;
                              }
                            
                              .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                                font-size: 22px;
                              }
                            
                              .p-tabview-title {
                                font-size: 22px;
                              }
                            
                              .p-tabview .p-tabview-nav li:hover {
                                background: transparent
                              }
                            
                              .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                                color: white
                              }
                            
                              .p-tabview .p-tabview-panels {
                                background: transparent
                              }
                            
                              .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
                                box-shadow: none;
                              }
                            
                              .p-tabview .p-tabview-nav {
                                border-bottom: 1px solid #F68D2E;
                              }
                            
                              .p-tabview .p-tabview-nav .p-tabview-ink-bar {
                                background-color: #F68D2E
                              }
                            
                              .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                                border: none
                              }
                            
                              .p-tabview-nav {
                                justify-content: space-between;
                              }
                            
                              .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
                                background: #1D1D1D;
                              }
                .p-tabview-nav-content {
                    margin: 0 auto;
                    width : 90%;

                    @media (min-width: 1024px) { 
                        width: 50%;
                       }
                  }
                `
                        }
                    </style>
                </PrimeReactProvider>
            }
        </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const footerEng = await getQueryEngFooter();
    const data = await getQueryTariffs();
    const titles = await getQueryTariffTitles();

    return {
        props: {
            footer,
            data,
            titles,
            footerEng
        },
        revalidate: 10,
    };
};