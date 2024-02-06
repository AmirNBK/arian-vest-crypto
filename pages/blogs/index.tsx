import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {
    PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions,
} from 'primereact/paginator';
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import newspaper from '../../assets/icons/newspaper2.svg'
import NewsComponent from '@/components/NewsComponent/NewsComponent';
import Footer from '@/components/Footer/Footer';
import {
    Paginator, PaginatorPageChangeEvent
} from 'primereact/paginator';
import template1 from '@/functions/function';
import useWindowSize from '@/Hooks/innerSize';
import { getQueryBlogs, getQueryEngFooter, getQueryFooter } from '@/lib/service';
import useLocationData from '@/Hooks/location';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function SingleBlog({ footer, data, footerEng }: { footer: any, data: any, footerEng: any }) {

    const [first, setFirst] = useState<number[]>([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const size = useWindowSize();
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;



    const onPageChange = (e: PaginatorPageChangeEvent, index: number) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const getTranslationValue = (index: number, size: any) => {
        if ((index - 1) % 3 === 0) {
            return size.width && size.width < 1024 ? 0 : 30;
        }
        return 0;
    };

    type blogItem = {
        image: any,
        title: string
    }

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className={`${myFontIran.className} p-3 text-white`}>
                        {isLocationInIran ? 'قبلی' : 'Previous'}
                    </span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options: PaginatorNextPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className={`${myFontIran.className} p-3 text-main-orange`}>
                        {isLocationInIran ? 'بعدي' : 'Next'}

                    </span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options: PaginatorPageLinksOptions) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
    };

    return (
       <div className='flex justify-center w-full'>
         <main
            className={`flex min-h-screen flex-col w-full max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Blogs</title>
            </Head>
            {loading ? ''
                :
                <PrimeReactProvider>
                    <Header active={6} isLocationInIran={isLocationInIran} />

                    <div className={`${myFont.className} justify-center flex flex-col ${isLocationInIran ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4 items-center text-center sm:mr-12 mt-8`}>
                        <Image src={newspaper} alt='faq' />
                        <p className='text-white text-4xl'>
                            {isLocationInIran ? data.blogTitle[0].normalTitle : data.engBlogTitle[0].normalTitle}
                            <span style={{ color: '#F68D2E' }}>
                                {isLocationInIran ? data.blogTitle[0].coloredTitle : data.engBlogTitle[0].coloredTitle}
                            </span>
                        </p>
                    </div>


                    <div className='px-12 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mb-32 mx-auto'>
                        {
                            isLocationInIran ?
                                data.blogs.map((item: blogItem, index: number) => {
                                    return (
                                        <NewsComponent text={item.title} translate={getTranslationValue(index, size)}
                                            key={index} image={item.image?.mediaItemUrl} id={index} isLocationIran />
                                    )
                                })
                                :
                                data.engBlogs.map((item: blogItem, index: number) => {
                                    return (
                                        <NewsComponent text={item.title} translate={getTranslationValue(index, size)}
                                            key={index} image={item.image?.mediaItemUrl} id={index} isLocationIran={false} />
                                    )
                                })
                        }
                    </div>

                    <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={data.length} className='mb-16'
                        style={{ background: 'transparent' }} onPageChange={(e) => onPageChange(e, 0)} />

                    <Footer data={isLocationInIran ? footer?.footer : footerEng?.engFooter} isLocationInIran={isLocationInIran} />

                    <style>

                        {
                            `
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    color: #F68D2E;
                    border-bottom: 1px solid #F68D2E;
                    border-radius: 0px;
                    background : transparent;
                    border-color : none;
                }

                .p-link:focus {
                    box-shadow:none;
                }

                .p-paginator .p-paginator-pages .p-paginator-page {
                    color : white;
                }

                .p-paginator-pages {
                    display: flex;
                    flex-direction : row-reverse;
                }

                .p-paginator {
                    flex-direction: row-reverse;
                }

                .p-paginator .p-paginator-pages .p-paginator-page {
                    border: 0 none;
                    min-width: 0.7rem;
                    height: 1.5rem;
                    margin: 0.5rem;
                    transition: box-shadow 0.2s;
                }

                .p-paginator .p-paginator-current {
                    display:none;
                }

                .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
                    background : transparent;
                    color : white;
                }

                .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover, .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover, .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover, .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                    background : transparent;
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
    const data = await getQueryBlogs();


    return {
        props: {
            footer,
            data,
            footerEng
        },
        revalidate: 10,
    };
};