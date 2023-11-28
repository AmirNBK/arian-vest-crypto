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
import range from '../../assets/images/rangeTrading.png'
import shape from '../../assets/images/shape.png'
import AboutUsItems from '@/components/AboutUsItems/AboutUsItems';
import Footer from '@/components/Footer/Footer';
import Stats from '@/components/Stats/Stats';
import users from '../../assets/icons/users.svg'
import payment from '../../assets/icons/payment.svg'
import profit from '../../assets/icons/profit6.svg'
import useWindowSize from '@/Hooks/innerSize';
import { GetStaticProps } from 'next';
import { getQueryAboutUs, getQueryAboutUsTitles, getQueryFooter } from '@/lib/service';


export default function SingleBlog({ footer, data, titles }: { footer: any, data: any, titles: any }) {

    const size = useWindowSize();

    type ItemType = {
        item: string;
    };

    type StatsType = {
        stat: string
        title: string
    };


    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={5} />

                <div className={`${myFont.className} justify-center flex flex-col sm:flex-row-reverse gap-4 items-center sm:mr-12 mt-8`}>
                    <Image src={team} alt='faq' />
                    <p className='text-white text-5xl text-center sm:text-end'>
                        {titles.normalTitle} <span style={{ color: '#F68D2E' }}> {titles.coloredTitle} <span className='text-3xl'> {titles.miniTitle} </span> </span>
                    </p>
                </div>

                <p className={`${myFontIran.className} 3xl:text-xl text-center leading-loose text-white w-10/12 mx-auto mt-12 rtl`}>
                    {titles.description}
                </p>
                <div className='mt-24 img-wrap' style={{ opacity: '0.3' }}>
                    <Image src={range} alt='rangeTrading' className='3xl:w-full sm:block hidden' />
                </div>

                <div className='flex flex-col sm:flex-row-reverse justify-center mb-8 mt-4 mx-8 items-center sm:m-24'>
                    <Image src={shape} className='w-56 lg:w-fit 3xl:w-96' alt='shape' unoptimized />
                    <div className='flex flex-col justify-around sm:mr-20 gap-8 mt-8'>
                        {data.features.map((item: ItemType, index: number) => {
                            return (
                                <AboutUsItems delay={index * 500} key={index} translate={((index === 0 || index === 2) && size.width) && size.width > 640 ? 60 : 0} text={item.item} />
                            )
                        })}
                    </div>
                </div>

                <div className={`${myFont.className} flex flex-col justify-center flex flex-row-reverse gap-4 items-center sm:mr-12 mt-8 sm:mb-44 mb-24`}>
                    <p className='text-white text-5xl sm:text-end text-center'>
                        {data.statsTitle[0].normalTitle} <span style={{ color: '#F68D2E' }}> {data.statsTitle[0].coloredTitle} <span className='text-3xl'> {data.statsTitle[0].miniTitle} </span> </span>
                    </p>
                    <div className='mt-12 sm:mt-36 flex flex-col sm:flex-row gap-20 sm:gap-24'>
                        {data.stats[0].item.map((item: StatsType, index: number) => {
                            return (
                                <Stats fadePosition={index === 0 ? 'right' : index === 1 ? 'up' : index === 2 ? 'left' : ''}
                                    icon={index === 0 ? profit : index === 1 ? users : index === 2 ? payment : ''}
                                    text={item.title} stat={item.stat} translate={index === 1 && size.width && size.width > 640 ? 40 : 0} />
                            )
                        })}
                    </div>
                </div>
                <Footer data={footer?.footer} />

            </PrimeReactProvider>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const data = await getQueryAboutUs();
    const titles = await getQueryAboutUsTitles();


    return {
        props: {
            footer,
            data,
            titles
        },
        revalidate: 3600,
    };
};