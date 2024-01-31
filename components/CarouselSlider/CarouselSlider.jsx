import React, { useEffect, useState } from 'react';
import { TweenMax, Expo, Quint } from 'gsap';
import Image from 'next/image';
import $ from 'jquery';
import useWindowSize from '@/Hooks/innerSize';
import localFont from 'next/font/local';
import AOS from 'aos';
import { Dialog } from 'primereact/dialog';
import 'aos/dist/aos.css';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanweblight_0.ttf' })
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'
import TariffTable from '../TariffTable/TariffTable';

const CarouselSlider = ({ type, data, isLocationIran }) => {
    const [visible, setVisible] = useState(false);
    const [clickedTariff, setClickedTariff] = useState(1);

    useEffect(() => {
        AOS.init();
    }, [])

    const size = useWindowSize();

    const tariffClickHandler = (index) => {
        setClickedTariff(index)
        setVisible(true)
    }

    const jqueryCode = () => {
        var w, container, carousel, item, radius, itemLength, rY, ticker, wrapper;
        var mouseX = -(-(window.innerWidth * 0.5)) * 0.0025;
        var mouseY = 0;
        var mouseZ = 0;
        var addX = 0;
        let currentMouseX = 0;
        let prevMouseX = 0;
        let dragged = false;

        $(document).ready(init);

        function init() {
            w = $(window);
            container = $("#contentContainer");
            wrapper = $(".wrapper");
            carousel = $("#carouselContainer");
            item = $(".carouselItem");
            itemLength = $(".carouselItem").length;
            rY = 360 / itemLength;
            radius = Math.round(250 / Math.tan(Math.PI / itemLength)) * 0.6;

            TweenMax.set(container, { perspective: 600 });
            TweenMax.set(carousel, { z: -radius });

            for (var i = 0; i < itemLength; i++) {
                var $item = item.eq(i);
                var $block = $item.find(".carouselItemInner");

                wrapper.on("mousedown", (event) => {
                    event.preventDefault();
                    dragged = true;
                });

                wrapper.on("touchstart", (event) => {
                    dragged = true;
                });

                wrapper.on("mouseup", (event) => {
                    event.preventDefault();
                    dragged = false;
                });

                wrapper.on("touchend", (event) => {
                    dragged = false;
                });

                TweenMax.set($item, {
                    rotationY: rY * i,
                    z: radius,
                    transformOrigin: "50% 50% " + -radius + "px",
                });

                animateIn($item, $block);
            }

            onMouseMove();
            window.addEventListener("touchmove", onTouchMove, false);
            window.addEventListener("mousemove", onMouseMove, false);
            ticker = setInterval(looper, 1000 / 60);
        }

        function animateIn($item, $block) {
            var $nrX = 360 * getRandomInt(2);
            var $nrY = 360 * getRandomInt(2);

            var $nx = -2000 + getRandomInt(4000);
            var $ny = -2000 + getRandomInt(4000);
            var $nz = -4000 + getRandomInt(4000);

            var $s = 1.5 + getRandomInt(10) * 0.1;
            var $d = 1 - getRandomInt(8) * 0.1;

            TweenMax.set($item, { autoAlpha: 1, delay: $d });
            TweenMax.set($block, {
                z: $nz,
                rotationY: $nrY,
                rotationX: $nrX,
                x: $nx,
                y: $ny,
                autoAlpha: 0,
            });
            TweenMax.to($block, $s, {
                delay: $d,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: Expo.easeInOut,
            });
            TweenMax.to($block, $s - 0.5, {
                delay: $d,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut,
            });
        }

        function onTouchMove(event) {
            if (dragged) {
                if (event.touches && event.touches[0]) {
                    currentMouseX = event.touches[0].clientX;
                } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
                    currentMouseX = event.originalEvent.changedTouches[0].clientX;
                } else if (event.clientX && event.clientY) {
                    currentMouseX = event.clientX;
                }
                if (currentMouseX - prevMouseX < 50 && currentMouseX - prevMouseX > -50) {
                    let Intensity = (currentMouseX - prevMouseX) * 0.2;
                    mouseX =
                        currentMouseX - prevMouseX > 0
                            ? mouseX - Intensity
                            : mouseX - Intensity;
                }

                prevMouseX = currentMouseX;
            }

            mouseZ = -radius - (Math.abs(-(window.innerHeight * 0.5)) - 200);
        }

        function onMouseMove(event) {
            if (dragged) {
                currentMouseX = event.clientX;
                if (currentMouseX - prevMouseX < 50 && currentMouseX - prevMouseX > -50) {
                    let Intensity = (currentMouseX - prevMouseX) * 0.3;
                    mouseX =
                        currentMouseX - prevMouseX > 0
                            ? mouseX - Intensity
                            : mouseX - Intensity;
                }

                prevMouseX = currentMouseX;
            }
            mouseZ = -radius - (Math.abs(-(window.innerHeight * 0.5)) - 200);
        }

        function looper() {
            TweenMax.to(carousel, 1, {
                rotationY: scrollY / 20 + mouseX,
                rotationX: mouseY,
                ease: Quint.easeOut,
            });
            TweenMax.set(carousel, { z: 600 });
        }

        function getRandomInt($n) {
            return Math.floor(Math.random() * $n + 1);
        }

        $(document).mouseleave(function () {
            dragged = false;
        });
    }

    useEffect(() => {
        jqueryCode()
    }, [])

    return (
        <div className="wrapper"
            data-aos-duration="2000" data-aos-once={true} data-aos="fade-down"
            style={{
                transform: 'rotate(4deg)', width: `${size.width && size.width < 1024 ? '90vw' : '105vw'}`,

            }}
        >
            <Dialog
                maximizable
                visible={visible} style={{
                    width: `${size.width < 640 ? '120vw' : '50vw'}`, display: 'flex', flexDirection: 'column',
                    backgroundColor: '#252525'
                }}
                className={`${myFont.className} font-normal`}
                onHide={() => setVisible(false)}
            >
                <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />
                {
                    isLocationIran ?
                        type === 'classic' ?
                            <TariffTable
                                removeTitle={true}
                                title={isLocationIran ? 'همیشه همراه شماییم' : 'Always with you'}
                                data={[
                                    { title: isLocationIran ? 'مقدار سرمایه:' : 'Capital Amount:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].price}k`}` },
                                    { title: isLocationIran ? 'leverage حساب :' : 'Account Leverage:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}`}` },
                                    { title: isLocationIran ? 'حداقل روزهای معاملاتی:' : 'Minimum Trading Days:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}`}` },
                                    { title: isLocationIran ? 'حداکثر روزهای معاملاتی:' : 'Maximum Trading Days:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}`}` },
                                    { title: isLocationIran ? 'target فاز 1:' : 'Target Phase 1:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target1}`}` },
                                    { title: isLocationIran ? 'target فاز 2:' : 'Target Phase 2:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target2}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر روزانه:' : 'Maximum Daily Loss:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر کلی:' : 'Maximum Total Loss:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}`}` },
                                    { title: isLocationIran ? 'استفاده از ربات:' : 'Use of Robot:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}`}` },
                                    { title: isLocationIran ? 'refund:' : 'Refund:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}`}` },
                                    { title: isLocationIran ? 'news trading:' : 'News Trading:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}`}` },
                                ]}
                                fullWidth
                                price={`${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}`}`}
                            />
                            :
                            <TariffTable
                                removeTitle={true}
                                title={isLocationIran ? 'همیشه همراه شماییم' : 'Always with you'}
                                data={[
                                    { title: isLocationIran ? 'مقدار سرمایه:' : 'Capital Amount:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].price}k`}` },
                                    { title: isLocationIran ? 'leverage حساب :' : 'Account Leverage:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}`}` },
                                    { title: isLocationIran ? 'حداقل روزهای معاملاتی:' : 'Minimum Trading Days:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}`}` },
                                    { title: isLocationIran ? 'حداکثر روزهای معاملاتی:' : 'Maximum Trading Days:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}`}` },
                                    { title: isLocationIran ? 'سود هدف :' : 'Profit target:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target1}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر روزانه:' : 'Maximum Daily Loss:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر کلی:' : 'Maximum Total Loss:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}`}` },
                                    { title: isLocationIran ? 'استفاده از ربات:' : 'Use of Robot:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}`}` },
                                    { title: isLocationIran ? 'refund:' : 'Refund:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}`}` },
                                    { title: isLocationIran ? 'news trading:' : 'News Trading:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}`}` },
                                ]}
                                fullWidth
                                price={`${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}`}`}
                            />
                        :
                        type === 'classic' ?
                            <TariffTable
                                removeTitle={true}
                                title={isLocationIran ? 'همیشه همراه شماییم' : 'Always with you'}
                                data={[
                                    { title: isLocationIran ? 'مقدار سرمایه:' : 'Capital Amount:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].price}k`}` },
                                    { title: isLocationIran ? 'leverage حساب :' : 'Account Leverage:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}`}` },
                                    { title: isLocationIran ? 'حداقل روزهای معاملاتی:' : 'Minimum Trading Days:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1} || '0'`]?.minDays}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}`}` },
                                    { title: isLocationIran ? 'حداکثر روزهای معاملاتی:' : 'Maximum Trading Days:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}`}` },
                                    { title: isLocationIran ? 'target فاز 1:' : 'Target Phase 1:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target1}`}` },
                                    { title: isLocationIran ? 'target فاز 2:' : 'Target Phase 2:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target2}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر روزانه:' : 'Maximum Daily Loss:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر کلی:' : 'Maximum Total Loss:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}`}` },
                                    { title: isLocationIran ? 'استفاده از ربات:' : 'Use of Robot:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}`}` },
                                    { title: isLocationIran ? 'refund:' : 'Refund:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}`}` },
                                    { title: isLocationIran ? 'news trading:' : 'News Trading:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}`}` },
                                ]}
                                fullWidth
                                price={`${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}`}`}
                            />
                            :
                            <TariffTable
                                removeTitle={true}
                                title={isLocationIran ? 'همیشه همراه شماییم' : 'Always with you'}
                                data={[
                                    { title: isLocationIran ? 'مقدار سرمایه:' : 'Capital Amount:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].price}k`}` },
                                    { title: isLocationIran ? 'leverage حساب :' : 'Account Leverage:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}`}` },
                                    { title: isLocationIran ? 'حداقل روزهای معاملاتی:' : 'Minimum Trading Days:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1} || '0'`]?.minDays}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`]?.minDays}`}` },
                                    { title: isLocationIran ? 'حداکثر روزهای معاملاتی:' : 'Maximum Trading Days:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}`}` },
                                    { title: isLocationIran ? 'سود هدف :' : 'Profit target:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target1}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر روزانه:' : 'Maximum Daily Loss:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}`}` },
                                    { title: isLocationIran ? 'حداکثر ضرر کلی:' : 'Maximum Total Loss:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}`}` },
                                    { title: isLocationIran ? 'استفاده از ربات:' : 'Use of Robot:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'Allowed' : 'Not allowed'}`}` },
                                    { title: isLocationIran ? 'refund:' : 'Refund:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'Available' : 'Not available'}`}` },
                                    { title: isLocationIran ? 'news trading:' : 'News Trading:', info: `${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'Available' : 'Not available'}`}` },
                                ]}
                                fullWidth
                                price={`${type === 'classic' ? `${data?.engTariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : type === 'one-step' ? `${data?.engTariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : `${data?.engTariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}`}`}
                            />
                }

            </Dialog>
            <div id="contentContainer" className="trans3d">
                <section id="carouselContainer" className="trans3d">
                    {
                        type === 'classic' ?
                            <>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(6)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(6)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/100-fotor-202312052022-e1701794394177.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(6)}

                                    >

                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(5)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(5)}
                                        style={{
                                            backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/50-scaled.jpg)',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(5)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(4)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(4)}
                                        style={{
                                            backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/25-scaled.jpg)',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(4)}
                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(3)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(3)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(3)}

                                    >


                                    </div>
                                </div>
                                <div className="carouselItem trans3d"
                                    onClick={() => tariffClickHandler(2)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(2)}

                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(2)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(1)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(1)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(1)}
                                    >

                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(3)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(3)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(3)}

                                    >


                                    </div>
                                </div>
                                <div className="carouselItem trans3d"
                                    onClick={() => tariffClickHandler(2)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(2)}

                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(2)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(1)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(1)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(1)}
                                    >

                                    </div>
                                </div>

                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(7)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(7)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/200-scaled-fotor-20231205201240-e1701794985905.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(7)}
                                    >

                                    </div>
                                </div>

                            </>
                            :
                            type === 'one-step' ?
                                <>
                                    <div id="item1" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(6)}
                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(6)}

                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(6)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item2" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(5)}
                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(5)}
                                            style={{
                                                backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/50-scaled.jpg)',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(5)}
                                        >
                                        </div>
                                    </div>
                                    <div id="item3" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(4)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(4)}
                                            style={{
                                                backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/25-scaled.jpg)',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(4)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item4" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(3)}
                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(3)}
                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(3)}
                                        >
                                        </div>
                                    </div>
                                    <div id="item5" className="carouselItem trans3d"
                                        onClick={() => tariffClickHandler(2)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(2)}
                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(2)}
                                        >


                                        </div>
                                    </div>
                                    <div id="item6" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(1)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(1)}

                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                                backgroundSize: 'cover',
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(1)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item7" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(7)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(7)}

                                            style={{
                                                backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/50-scaled.jpg)',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(7)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item8" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(7)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(7)}
                                            style={{
                                                backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/25-scaled.jpg)',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(7)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item9" className=" cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(7)}

                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(7)}

                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(7)}
                                        >

                                        </div>
                                    </div>
                                    <div id="item10" className="cursor-pointer carouselItem trans3d"
                                        onClick={() => tariffClickHandler(7)}
                                    >
                                        <div className="carouselItemInner trans3d"
                                            onClick={() => tariffClickHandler(7)}
                                            style={{
                                                backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                                backgroundSize: 'cover'
                                            }}
                                        ></div>
                                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                            style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                            onClick={() => tariffClickHandler(7)}
                                        >

                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(6)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(6)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/100-fotor-202312052022-e1701794394177.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(6)}

                                    >

                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(5)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(5)}
                                        style={{
                                            backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/50-scaled.jpg)',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(5)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(4)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(4)}
                                        style={{
                                            backgroundImage: 'url(https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/25-scaled.jpg)',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(4)}
                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(3)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(3)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(3)}

                                    >


                                    </div>
                                </div>
                                <div className="carouselItem trans3d"
                                    onClick={() => tariffClickHandler(2)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(2)}

                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(2)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(1)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(1)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(1)}
                                    >

                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(3)}
                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(3)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/15-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(3)}

                                    >


                                    </div>
                                </div>
                                <div className="carouselItem trans3d"
                                    onClick={() => tariffClickHandler(2)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(2)}

                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/10-scaled.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(2)}

                                    >


                                    </div>
                                </div>
                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(1)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(1)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/5-scaled.jpg")',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(1)}
                                    >

                                    </div>
                                </div>

                                <div className=" cursor-pointer carouselItem trans3d"
                                    onClick={() => tariffClickHandler(7)}

                                >
                                    <div className="carouselItemInner trans3d"
                                        onClick={() => tariffClickHandler(7)}
                                        style={{
                                            backgroundImage: 'url("https://zafremedia.ir/aryanVest/wp-content/uploads/2023/12/200-scaled-fotor-20231205201240-e1701794985905.jpg")',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                                        style={{ transform: 'translate(-50%,0%) rotateY(180deg) scaleX(-1)' }}
                                        onClick={() => tariffClickHandler(7)}
                                    >

                                    </div>
                                </div>

                            </>
                    }

                </section>
            </div>
            <style>

                {
                    `    
                    
                    .p-dialog-draggable .p-dialog-header {
                        background: #252525;

                    }

                    .p-dialog .p-dialog-content:last-of-type {
                        background: #252525;
                    }

                    .p-dialog .p-dialog-header .p-dialog-title {
                        text-align: right;
                        transform: translateY(40px);
                        color : white
                    }

                    .p-dialog-draggable .p-dialog-header {
                        flex-direction: row-reverse;
                    }
.wrapper {
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  background-size: cover;
  height: 100%;
  min-height: 1000px;
  font-family: "quicksandlight", Helvetica, Arial;
  color: #ffffff;
  text-shadow: -1px -1px 4px rgba(0, 0, 0, 0.35);
  overflow: hidden;

}

.trans3d {
  -webkit-transform-style: preserve-3d;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform-style: preserve-3d;
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform-style: preserve-3d;
  -ms-transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);

  /*-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility:hidden;
		backface-visibility:hidden;*/
}

#contentContainer {
  position: absolute;
  margin-left: -500px;
  margin-top: -500px;
  left: 50%;
  top: 50%;
  width: 1000px;
  height: 1000px;
}

#carouselContainer {
  position: absolute;
  margin-left: -500px;
  margin-top: -500px;
  left: 50%;
  top: 50%;
  width: 1000px;
  height: 1000px;
}

.carouselItem {
  width: 260px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -90px;
  visibility: hidden;
  -webkit-user-drag: element;
}

.carouselItemInner {
    opacity : 1 !important;
  width: 280px;
  height: 250px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.75);
  color: aqua;
  font-size: 72px;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -90px;
  text-align: center;
  padding-top: 50px;
  border-radius : 15px;
  background-position : center;
  transform :scaleX(-1);


  @media (max-width: 640px) { 
    width: 200px;
    height: 200px;
   }
}

.wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
  transform: rotateZ(6deg);
}

                    `
                }
            </style>
        </div >
    );
};

export default CarouselSlider;
