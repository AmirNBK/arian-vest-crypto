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
import { getQueryFooter, getQueryTariffTitles, getQueryTariffs } from '@/lib/service';
import { GetStaticProps } from 'next';


export default function Rules({ footer, data, titles }: { footer: any, data: any, titles: any }) {

    const [selectedTab, setSelectedTab] = useState<number>(0)
    const size = useWindowSize()

    type tariffType = {
        type: string,
        description: string,
        pricesInfo: {}[],
        title: string
    }

    console.log(titles);


    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={2} />
                <div className='flex flex-col lg:flex-row-reverse items-center'>
                    <div className='flex flex-col flex-1 lg:my-0 my-16'>
                        <div className={`${myFont.className} justify-right flex flex-col sm:flex-row-reverse gap-4 items-center lg:mr-12 mt-8`}>
                            <Image src={tariff} alt='faq' />
                            <p className='text-white text-5xl sm:text-end text-center'>
                                <span className='text-3xl text-main-orange'>
                                    ({data.tariffs[selectedTab].type})

                                </span> {titles.normalTitle}  <span style={{ color: '#F68D2E' }}> {titles.coloredTitle} </span>
                            </p>
                        </div>
                        <div>
                            <p className={`${myFontIran.className} sm:text-right rtl text-white text-center leading-loose text-white lg:w-10/12 mx-auto mt-6`}>
                                {data.tariffs[selectedTab].title}
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
                            {data.tariffs.map((item: tariffType, index: number) => {
                                return (
                                    <TabPanel header={item.type}>
                                    </TabPanel>
                                )
                            })}
                        </TabView>
                    </div>

                </div>
                <div className="card w-full"
                    style={{ margin: '0 auto', marginTop: '50px' }}
                >
                    <TabView>
                        {data.tariffs[selectedTab].pricesInfo[0].item.map((item: any, index: number) => {
                            return (
                                <TabPanel header={item.price + 'k'}>
                                    <div className='mt-12'>
                                        <TariffComponent title={'-' + data.tariffs[selectedTab].type + ' challenge-'} price={item.price}
                                            description={data.tariffs[selectedTab].desccription} />
                                    </div>
                                    <TariffTable title={titles.tableTitle} data={[
                                        { title: 'مقدار سرمایه:', info: item.price + 'k' },
                                        { title: 'leverage حساب :', info: item.leverage },
                                        { title: 'حداقل روزهای معاملاتی:', info: item.minDays },
                                        { title: 'حداکثر روزهای معاملاتی:', info: item.maxDays },
                                        { title: 'target فاز 1:', info: item.target1 },
                                        { title: 'target فاز 2:', info: item.target2 },
                                        { title: 'حداکثر ضرر روزانه:', info: item.dailyLoss },
                                        { title: 'حداکثر ضرر کلی:', info: item.totalLoss },
                                        { title: 'استفاده از ربات:', info: item.robot ? 'مجاز' : 'مجاز نیست' },
                                        { title: 'refund:', info: item.refund ? 'دارد' : 'ندارد' },
                                        { title: 'news trading:', info: item.newsTrading ? 'دارد' : 'ندارد' },
                                    ]}
                                        price={item.dollarPrice}
                                    />
                                </TabPanel>
                            )
                        })}
                    </TabView>
                </div>
                <Footer data={footer?.footer} />
                <style>
                    {
                        `
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
        </main>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const data = await getQueryTariffs();
    const titles = await getQueryTariffTitles();



    return {
        props: {
            footer,
            data,
            titles
        },
        revalidate: 3600,
    };
};