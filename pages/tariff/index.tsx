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


export default function Rules() {

    const [selectedTab, setSelectedTab] = useState<number>(0)

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={1} />

                <div className='flex flex-row-reverse items-center'>
                    <div className='flex flex-col flex-1'>
                        <div className={`${myFont.className} justify-right flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                            <Image src={tariff} alt='faq' />
                            <p className='text-white text-5xl'>
                                <span className='text-3xl text-main-orange'> (classic) </span> تعرفه های <span style={{ color: '#F68D2E' }}> ارین وست </span>
                            </p>
                        </div>
                        <div>
                            <p className={`${myFontIran.className} text-right rtl text-white leading-loose text-white w-10/12 mx-auto mt-6`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex-1'>
                        <TabView
                            style={{ width: '80%' }}
                            activeIndex={selectedTab}
                            onTabChange={(e) => {
                                setSelectedTab(e.index)
                            }}
                        >
                            <TabPanel header="Classic">
                            </TabPanel>
                            <TabPanel header="One-Step">
                            </TabPanel>
                            <TabPanel header="Rapid">
                            </TabPanel>
                        </TabView>
                    </div>

                </div>
                <div className="card"
                    style={{ margin: '0 auto', marginTop: '50px' }}
                >
                    <TabView>
                        <TabPanel header="5k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={5}
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' : ''}`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '5k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="10k">
                            <div className='mt-12'>
                                <TariffComponent
                                    title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={10}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '10k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="15k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={15}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '15k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="25k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={25}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '25k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="50k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={50}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '50k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="100k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={100}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '100k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>
                        <TabPanel header="200k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={200}
                                    description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با target بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '200k' },
                                { title: 'leverage حساب :', info: '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '10%' },
                                { title: 'حداکثر ضرر کلی:', info: '20%' },
                            ]}
                                price={129}
                            />
                        </TabPanel>

                    </TabView>
                </div>
                <Footer />


                <style>
                    {
                        `
                        .p-tabview-nav-content {
                            width: 50%;
                            margin: 0 auto;
                          }
                        `
                    }
                </style>
            </PrimeReactProvider>
        </main>
    )
}
