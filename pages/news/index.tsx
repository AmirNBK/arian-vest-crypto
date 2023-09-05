import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
import newspaper from '../../assets/icons/newspaper2.svg'
import NewsComponent from '@/components/NewsComponent/NewsComponent';
import pic from '../../assets/images/newsPic.png'
import { classNames } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import Footer from '@/components/Footer/Footer';
import {
    Paginator, PaginatorPageChangeEvent, PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions,
} from 'primereact/paginator';
import template1 from '@/functions/function';

export default function SingleBlog() {

    const [first, setFirst] = useState<number[]>([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);
    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']



    const onPageChange = (e: PaginatorPageChangeEvent, index: number) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };



    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />

                <div className={`${myFont.className} justify-center flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                    <Image src={newspaper} alt='faq' />
                    <p className='text-white text-4xl'>
                        آرشیو <span style={{ color: '#F68D2E' }}>  اخبار و مقالات </span>
                    </p>
                </div>


                <div className='px-12 mt-20 grid grid-cols-3 gap-24 mb-32 mx-auto'>
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={30} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={30} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                </div>

                <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120}
                    style={{ background: 'transparent' }} onPageChange={(e) => onPageChange(e, 0)} />

                <Footer />


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
        </main>
    )
}
