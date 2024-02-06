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
import { getQueryAboutUs, getQueryAboutUsTitles, getQueryAboutUsTitlesEng, getQueryEngAboutUs, getQueryEngFooter, getQueryFooter } from '@/lib/service';
import useLocationData from '../../Hooks/location'
import { GetStaticProps } from 'next';
import Head from 'next/head';


export default function SingleBlog({ footer, data, titles, titlesEng, dataEng, footerEng }: { footer: any, data: any, titles: any, titlesEng: any, dataEng: any, footerEng: any }) {

    const size = useWindowSize();
    const { locationData, error, loading } = useLocationData();

    let country = locationData


    type ItemType = {
        item: string;
    };

    type StatsType = {
        stat: string
        title: string
    };

    return (
        <div className='flex justify-center w-full'>
            <main
            className={`flex min-h-screen flex-col max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>About us</title>
            </Head>
            {loading ? ''
                :
                <PrimeReactProvider>
                    <Header active={5} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />
                    <div className={`${myFont.className} justify-center flex flex-col
                ${(country === 'Iran (Islamic Republic of)' || !country) ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4 items-center sm:mr-12 mt-8`}>
                        <Image src={team} alt='faq' />
                        <p className='text-white text-5xl text-center sm:text-end'>
                            {(country === 'Iran (Islamic Republic of)' || !country) ? titles.normalTitle : titlesEng.normalTitle}

                            <span style={{ color: '#F68D2E' }}>
                                {(country === 'Iran (Islamic Republic of)' || !country) ? titles.coloredTitle : titlesEng.coloredTitle}
                                <span className='text-3xl'>
                                    {(country === 'Iran (Islamic Republic of)' || !country) ? titles.miniTitle : titlesEng.miniTitle}
                                </span> </span>
                        </p>
                    </div>

                    <p className={`${myFontIran.className} 3xl:text-xl text-center leading-loose text-white w-10/12 mx-auto mt-12 rtl`}>
                        {(country === 'Iran (Islamic Republic of)' || !country) ? titles.description : titlesEng.description}
                    </p>
                    <div className='mt-24 img-wrap' style={{ opacity: '0.3' }}>
                        <Image src={range} alt='rangeTrading' className='3xl:w-full sm:block hidden' />
                    </div>

                    <div className={`${(country === 'Iran (Islamic Republic of)' || !country) ? 'sm:flex-row-reverse' : 'sm:flex-row'}
                flex flex-col justify-center mb-8 mt-4 mx-8 items-center sm:m-24`}>
                        <Image src={shape} className='w-56 lg:w-fit 3xl:w-96' alt='shape' unoptimized />
                        <div className={`flex flex-col justify-around ${(country === 'Iran (Islamic Republic of)' || !country) ? 'sm:mr-20' : 'sm:ml-20'}
                    gap-8 mt-8`}>
                            {(country === 'Iran (Islamic Republic of)' || !country) ?
                                data.features.map((item: ItemType, index: number) => {
                                    return (
                                        <AboutUsItems isLocationIran={locationData === 'Iran (Islamic Republic of)' || !locationData} delay={index * 500} key={index} translate={((index === 0 || index === 2) && size.width) && size.width > 640 ? 60 : 0} text={item.item} />
                                    )
                                })
                                :
                                dataEng.engFeatures.map((item: ItemType, index: number) => {
                                    return (
                                        <AboutUsItems delay={index * 500} isLocationIran={locationData === 'Iran (Islamic Republic of)' || !locationData} key={index} translate={((index === 0 || index === 2) && size.width) && size.width > 640 ? 60 : 0} text={item.item} />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={`${myFont.className} flex flex-col justify-center  gap-12 items-center sm:mr-12 mt-8 sm:mb-44 mb-24`}>
                        <p className='text-white text-5xl sm:text-end text-center'>
                            {
                                (country === 'Iran (Islamic Republic of)' || !country) ? (
                                    <span>
                                        {data.statsTitle[0].normalTitle}{' '}
                                        <span style={{ color: '#F68D2E' }}>
                                            {data.statsTitle[0].coloredTitle}{' '}
                                            <span className='text-3xl'>{data.statsTitle[0].miniTitle}</span>
                                        </span>
                                    </span>
                                ) : (
                                    <span>
                                        {dataEng.engStatsTitle[0].normalTitle}{' '}
                                        <span style={{ color: '#F68D2E' }}>
                                            {dataEng.engStatsTitle[0].coloredTitle}{' '}
                                            <span className='text-3xl'>{dataEng.engStatsTitle[0].miniTitle}</span>
                                        </span>
                                    </span>
                                )
                            }

                        </p>
                        <div className='mt-12 sm:mt-36 flex flex-col sm:flex-row gap-20 sm:gap-24'>
                            {
                                (country === 'Iran (Islamic Republic of)' || !country) ?
                                    data.stats[0].item.map((item: StatsType, index: number) => {
                                        return (
                                            <Stats fadePosition={index === 0 ? 'right' : index === 1 ? 'up' : index === 2 ? 'left' : ''}
                                                icon={index === 0 ? profit : index === 1 ? users : index === 2 ? payment : ''}
                                                text={item.title} stat={item.stat} translate={index === 1 && size.width && size.width > 640 ? 40 : 0} />
                                        )
                                    })
                                    :
                                    dataEng.engStats[0].item.map((item: StatsType, index: number) => {
                                        return (
                                            <Stats fadePosition={index === 0 ? 'right' : index === 1 ? 'up' : index === 2 ? 'left' : ''}
                                                icon={index === 0 ? profit : index === 1 ? users : index === 2 ? payment : ''}
                                                text={item.title} stat={item.stat} translate={index === 1 && size.width && size.width > 640 ? 40 : 0} />
                                        )
                                    })
                            }
                        </div>
                    </div>
                    <Footer data={locationData === 'Iran (Islamic Republic of)' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />

                </PrimeReactProvider>
            }

        </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const footerEng = await getQueryEngFooter();
    const data = await getQueryAboutUs();
    const dataEng = await getQueryEngAboutUs();
    const titles = await getQueryAboutUsTitles();
    const titlesEng = await getQueryAboutUsTitlesEng();


    return {
        props: {
            footer,
            data,
            titles,
            titlesEng,
            footerEng,
            dataEng
        },
        revalidate: 10,
    };
};