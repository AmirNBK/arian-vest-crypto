import React, { useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import localFont from 'next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const TradeChallengesSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='tradeChallenges'>
            <div className='tradeChallenges__title flex flex-row-reverse items-baseline text-center justify-center gap-3'
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
                <p className={`${myFont.className} text-white text-5xl text-center`}
                >
                    <span className='text-3xl text-main-orange'> </span>سوالات متداول <span style={{ color: '#F68D2E' }}> چالش های تریدینگ </span>
                </p>
                <Link href={'/faq'} className={`${myFontIran.className} text-main-orange text-center`}
                    style={{ textDecoration: 'underline' }}>
                    مشاهده تمام سوالات
                </Link>
            </div>

            <div>
                <Accordion multiple className='flex flex-col gap-y-4 mx-12 mb-24 mt-8'
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                >
                    <AccordionTab
                        style={{ marginLeft: 'auto', width: '80%' }}
                        className='text-white text-right' header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟"
                    >
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginRight: 'auto', width: '80%' }}
                        header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک؟">
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginLeft: 'auto', width: '80%' }}
                        header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginRight: 'auto', width: '80%' }}
                        header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                        </p>
                    </AccordionTab>

                </Accordion>
            </div>

        </div>

    );
};

export default TradeChallengesSection;