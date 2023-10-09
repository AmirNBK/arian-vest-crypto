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


export default function Rules() {

    const [selectedTab, setSelectedTab] = useState<number>(0)
    const size = useWindowSize()

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={1} />

                <div className='flex flex-col lg:flex-row-reverse items-center'>
                    <div className='flex flex-col flex-1 lg:my-0 my-16'>
                        <div className={`${myFont.className} justify-right flex flex-row-reverse gap-4 items-center lg:mr-12 mt-8`}>
                            <Image src={tariff} alt='faq' />
                            <p className='text-white text-5xl'>
                                <span className='text-3xl text-main-orange'> {selectedTab === 0 ? '(classic)' : selectedTab === 1 ? '(one-step)' : '(rapid)'}

                                </span> تعرفه های <span style={{ color: '#F68D2E' }}> ارین وست </span>
                            </p>
                        </div>
                        <div>
                            <p className={`${myFontIran.className} text-right rtl text-white leading-loose text-white lg:w-10/12 mx-auto mt-6`}>
                                {selectedTab === 0 ? 'طرح کلاسیک به عنوان یکی از پرطرفدارترین گزینه‌ها در وب‌سایت فارکس ما شناخته می‌شود.' : selectedTab === 1 ? 'طرح یک مرحله‌ای مناسب برای تریدرهای حرفه‌ای با تجربه است.' : 'طرح رپید برای کسانی مناسب است که به دنبال معاملات سریع و اجازه استفاده از ربات می‌باشند.'}
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
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                        selectedTab === 1 ? 'چالش های یک مرحله ای ما مناسب برای تریدر های حرفه ای هست که تسلط کافی برروی استراتژِی خود دارند و دنبال یک راه برای رسیدن به حساب real برای ترید در فرصت کمتری هستند یعنی با حداقل روزهای معاملاتی میتوانند حساب real خود را تحویل بگیرند.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                        }`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '5k' },
                                { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                { title: 'حداکثر ضرر کلی:', info: '13%' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: selectedTab === 2 ? 'دارد' : 'ندارد' },
                                { title: 'news trading:', info: 'دارد' },
                            ]}
                                price={selectedTab === 0 ? 55 : selectedTab === 1 ? 59 : 74}
                            />
                        </TabPanel>
                        <TabPanel header="10k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={5}
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                        selectedTab === 1 ? 'چالش های یک مرحله ای ما مناسب برای تریدر های حرفه ای هست که تسلط کافی برروی استراتژِی خود دارند و دنبال یک راه برای رسیدن به حساب real برای ترید در فرصت کمتری هستند یعنی با حداقل روزهای معاملاتی میتوانند حساب real خود را تحویل بگیرند.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                        }`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '10k' },
                                { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                { title: 'حداکثر ضرر کلی:', info: '13%' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                            ]}
                                price={selectedTab === 0 ? 88 : selectedTab === 1 ? 92 : 118}
                            />
                        </TabPanel>
                        <TabPanel header="15k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={5}
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                        selectedTab === 1 ? 'چالش های یک مرحله ای ما مناسب برای تریدر های حرفه ای هست که تسلط کافی برروی استراتژِی خود دارند و دنبال یک راه برای رسیدن به حساب real برای ترید در فرصت کمتری هستند یعنی با حداقل روزهای معاملاتی میتوانند حساب real خود را تحویل بگیرند.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                        }`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '15k' },
                                { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                { title: 'حداکثر ضرر کلی:', info: '13%' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                            ]}
                                price={selectedTab === 0 ? 99 : selectedTab === 1 ? 105 : 133}
                            />
                        </TabPanel>
                        <TabPanel header="25k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={5}
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                        selectedTab === 1 ? 'چالش های یک مرحله ای ما مناسب برای تریدر های حرفه ای هست که تسلط کافی برروی استراتژِی خود دارند و دنبال یک راه برای رسیدن به حساب real برای ترید در فرصت کمتری هستند یعنی با حداقل روزهای معاملاتی میتوانند حساب real خود را تحویل بگیرند.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                        }`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '25k' },
                                { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                { title: 'حداکثر ضرر کلی:', info: '13%' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                            ]}
                                price={selectedTab === 0 ? 155 : selectedTab === 1 ? 170 : 209}
                            />
                        </TabPanel>
                        <TabPanel header="50k">
                            <div className='mt-12'>
                                <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : selectedTab === 1 ? 'One-Step' : 'Rapid'} challenge-`} price={5}
                                    description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                        selectedTab === 1 ? 'چالش های یک مرحله ای ما مناسب برای تریدر های حرفه ای هست که تسلط کافی برروی استراتژِی خود دارند و دنبال یک راه برای رسیدن به حساب real برای ترید در فرصت کمتری هستند یعنی با حداقل روزهای معاملاتی میتوانند حساب real خود را تحویل بگیرند.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                        }`} />
                            </div>

                            <TariffTable title='همیشه همراه شماییم' data={[
                                { title: 'مقدار سرمایه:', info: '50k' },
                                { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                { title: 'target فاز 1:', info: '8%' },
                                { title: 'target فاز 2:', info: '5%' },
                                { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                { title: 'حداکثر ضرر کلی:', info: '13%' },
                                { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                { title: 'news trading:', info: 'دارد' },
                            ]}
                                price={selectedTab === 0 ? 304 : selectedTab === 1 ? 355 : 410}
                            />
                        </TabPanel>
                        {(selectedTab === 0 || selectedTab === 2) &&
                            <TabPanel header="100k">
                                <div className='mt-12'>
                                    <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : 'Rapid'} challenge-`} price={5}
                                        description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                            }`} />
                                </div>

                                <TariffTable title='همیشه همراه شماییم' data={[
                                    { title: 'مقدار سرمایه:', info: '100k' },
                                    { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                    { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                    { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                    { title: 'target فاز 1:', info: '8%' },
                                    { title: 'target فاز 2:', info: '5%' },
                                    { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                    { title: 'حداکثر ضرر کلی:', info: '13%' },
                                    { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                    { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                    { title: 'news trading:', info: 'دارد' },
                                ]}
                                    price={selectedTab === 0 ? 512 : 691}
                                />
                            </TabPanel>
                        }
                        {(selectedTab === 0 || selectedTab === 2) &&
                            <TabPanel header="200k">
                                <div className='mt-12'>
                                    <TariffComponent title={`-${selectedTab === 0 ? 'Classic' : 'Rapid'} challenge-`} price={5}
                                        description={`${selectedTab === 0 ? ' چالش های کلاسیک جزو مرسوم ترین و پرطرفدارترین  چالش ها در بین پراپ فرم ها هستند که که زمان زیادی نمی برد تا یک تریدر بتواند آن ها را پاس کند و و سرمایه موردنظر را دریافت کند و با توجه به اینکه ریسک این چالش نسبت به بقیه چالش های کمتر است برای مخاطب گزینه مناسبی هست تا از آن استفاده کند و سرمایه موردنظر خود را دریافت نماید.' :
                                            'این سبک از plan ها برای کسانی تعریف شده است که دوست دارند بسیار سریع به حساب live معاملات برسند واستفاده از ربات در این تعرفه مجاز است. شرایط برداشت و قانونش در در حساب واقعی با بقیه حساب ها متفاوت است'
                                            }`} />
                                </div>

                                <TariffTable title='همیشه همراه شماییم' data={[
                                    { title: 'مقدار سرمایه:', info: '200k' },
                                    { title: 'leverage حساب :', info: selectedTab === 0 ? '1:100' : '1:60' },
                                    { title: 'حداقل روزهای معاملاتی:', info: '3' },
                                    { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                                    { title: 'target فاز 1:', info: '8%' },
                                    { title: 'target فاز 2:', info: '5%' },
                                    { title: 'حداکثر ضرر روزانه:', info: '6%' },
                                    { title: 'حداکثر ضرر کلی:', info: '13%' },
                                    { title: 'استفاده از ربات:', info: selectedTab === 2 ? 'مجاز' : 'مجاز نیست' },
                                    { title: 'refund:', info: selectedTab === 2 ? 'ندارد' : 'دارد' },
                                    { title: 'news trading:', info: 'دارد' },
                                ]}
                                    price={selectedTab === 0 ? 889 : 1200}
                                />
                            </TabPanel>
                        }

                    </TabView>
                </div>
                <Footer />


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
