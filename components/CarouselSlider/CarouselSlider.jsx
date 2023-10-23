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

const CarouselSlider = ({ type, data }) => {
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

        function debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }

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

            // set container 3d props
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

            // set mouse x and y props and looper ticker
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
            //   mouseY = -(-(window.innerHeight * 0.5) + event.pageY) * 0.01;
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

        // loops and sets the carousel 3d properties
        function looper() {
            TweenMax.to(carousel, 1, {
                rotationY: scrollY / 20 + mouseX,
                rotationX: mouseY,
                ease: Quint.easeOut,
            });
            TweenMax.set(carousel, { z: mouseZ + 1500 });
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
                header={type === 'classic' ? `${data.tariffs[0].title}` : type === 'one-step' ? `${data.tariffs[1].title}` : `${data.tariffs[2].title}`} visible={visible} style={{
                    width: '50vw', display: 'flex', flexDirection: 'column',
                    backgroundColor: '#252525'
                }}
                className={`${myFont.className} font-normal`}
                onHide={() => setVisible(false)}
            >
                <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />

                <TariffTable title='همیشه همراه شماییم' data={[
                    { title: 'مقدار سرمایه:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].price}k` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].price}k`}` },
                    { title: 'leverage حساب :', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].leverage}`}` },
                    { title: 'حداقل روزهای معاملاتی:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].minDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].minDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].minDays}`}` },
                    { title: 'حداکثر روزهای معاملاتی:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].maxDays}`}` },
                    { title: 'target فاز 1:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target1}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target1}`}` },
                    { title: 'target فاز 2:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].target2}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].target2}`}` },
                    { title: 'حداکثر ضرر روزانه:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dailyLoss}`}` },
                    { title: 'حداکثر ضرر کلی:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].totalLoss}`}` },
                    {
                        title: 'استفاده از ربات:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].robot ? 'دارد' : 'ندارد'}`}`
                    },
                    { title: 'refund:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].refund ? 'دارد' : 'ندارد'}`}` },
                    { title: 'news trading:', info: `${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].newsTrading ? 'دارد' : 'ندارد'}`}` },
                ]}
                    fullWidth
                    price={`${type === 'classic' ? `${data?.tariffs[0].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : type === 'one-step' ? `${data?.tariffs[1].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}` : `${data?.tariffs[2].pricesInfo[0].item[`${clickedTariff - 1}`].dollarPrice}`}`}
                />
            </Dialog>
            <div id="contentContainer" className="trans3d">
                <section id="carouselContainer" className="trans3d">
                    <figure id="item1" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(7)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3762/5f55/25836ab708fe28a431cba320d02b93fe?Expires=1698019200&Signature=ec7ODiZPTqznUnMV3LfCEZMReL9Dgt9TNsLhyZ9LU92STauQiJLTqcLO9rr4rO1TyJp5s4ZT10KYsTRNX1XGKymFyj3aHPhytz3NN1lgXEQXZ6ju3cnqYFIucNLfY4jwWjpKAe7Ndp2E8vwMHEAZIPX6UhzSdU82ZVoqokDh3A9MKZqgu0voTqMKC~8lCWH6wtty4~UamF925R1uOwt6QuYmGbqFtD3qeGRkYTzy4XhDb~Vs0uSEjunLtKzO4PtxdEeq0~irU2yMSnzIvMWqgSzBi~ewPKN1PV9TYoryJQDgPZsB-t0tTZydLyej1RQM996lPFI030KykMRL~iA5GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 7
                        </div>
                    </figure>
                    <figure id="item2" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(6)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1698019200&Signature=DKiPsm~zfsaV9TlqobYjt0Ww0cBxpfh2ZX~1MKeHyOu8XC5UG3JfW~omPpmdFdetdOAb9FoSCJDSXFLZzY64nusQ~hZXx4nSi0xcGLPTDdUFJJFcg8DcfT7q-NMcUs-9K0cP~MpBPDi5iGDucPcaHLO7mx4Kw8IHQ0m0oXPvCkKfXKqgMfQ~yWjicaUqEgu~9hs2XBlfBmAuuO5z3N8onUm88xjzs5xTDZjhwz9dxDYCPwc6gYrq8Ok9nO8jJs8J124NlOpEv5o14EJKIRgD10QtXC-ixf9DVZuFbU2RLgq7exnXYDsuCbkxU~tYEN5yOnC19nPA0-pWzR~Y-zYeFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 6
                        </div>
                    </figure>
                    <figure id="item3" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(5)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/f198/5937/0ed9d7e64e562978fc5c069751a2ce1b?Expires=1698019200&Signature=FvmuyZ2dSBSQStjAzC~ecdzIBQdAQcvq2EN1cW-Y5FKvll012d24Y~ArHrPxR729dgZgwb95-7h7crEg0mct5Fnc2NNLzDShSRVdm5RwBgBlo23cSn5fafJeZYx~covLqQ85xNimG5qKVhUh822yQi6lKLlxOYQnEJ1AYErfgzG031dt-HBEJKxVrvF2siXsPOahItDR-E3io4Gwryho0oA9MUA7NoUN7xSpHgHfl-05DbJdJD1yesl3LoYTUmKDbnTXMjKYtTKNppOxXcDKqNYlWM-56cKDhx~ynS4Bk6esqEFsO0qblcZM5EP0MfDN4iCyhyjxUbD~ffdH6D7BwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 5
                        </div>
                    </figure>
                    <figure id="item4" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(3)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1698019200&Signature=DKiPsm~zfsaV9TlqobYjt0Ww0cBxpfh2ZX~1MKeHyOu8XC5UG3JfW~omPpmdFdetdOAb9FoSCJDSXFLZzY64nusQ~hZXx4nSi0xcGLPTDdUFJJFcg8DcfT7q-NMcUs-9K0cP~MpBPDi5iGDucPcaHLO7mx4Kw8IHQ0m0oXPvCkKfXKqgMfQ~yWjicaUqEgu~9hs2XBlfBmAuuO5z3N8onUm88xjzs5xTDZjhwz9dxDYCPwc6gYrq8Ok9nO8jJs8J124NlOpEv5o14EJKIRgD10QtXC-ixf9DVZuFbU2RLgq7exnXYDsuCbkxU~tYEN5yOnC19nPA0-pWzR~Y-zYeFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 3
                        </div>
                    </figure>
                    <div id="item5" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(2)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3762/5f55/25836ab708fe28a431cba320d02b93fe?Expires=1698019200&Signature=ec7ODiZPTqznUnMV3LfCEZMReL9Dgt9TNsLhyZ9LU92STauQiJLTqcLO9rr4rO1TyJp5s4ZT10KYsTRNX1XGKymFyj3aHPhytz3NN1lgXEQXZ6ju3cnqYFIucNLfY4jwWjpKAe7Ndp2E8vwMHEAZIPX6UhzSdU82ZVoqokDh3A9MKZqgu0voTqMKC~8lCWH6wtty4~UamF925R1uOwt6QuYmGbqFtD3qeGRkYTzy4XhDb~Vs0uSEjunLtKzO4PtxdEeq0~irU2yMSnzIvMWqgSzBi~ewPKN1PV9TYoryJQDgPZsB-t0tTZydLyej1RQM996lPFI030KykMRL~iA5GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 2
                        </div>
                    </div>
                    <figure id="item6" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(1)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a0cc/c21f/0cc53cc8a38222f1d3eca8fd2ecfb197?Expires=1698019200&Signature=BM~l57AISMWCKoIJEzSa60Ys1hSpZudsopwQyWMETfSNcbOOKibH5HX8ZxYpNxuAd-6KTgGB2kykI6sT1nTJv05ORakB3HrOC-cJeD6pyLzXXJG2PZ9YUB-f1k5YALjX0BlBmzov9KhKA2twpG7XbiBHF1DXI7WTC0U2iaE9ng5KpVggf0iQ96AW7AEqvOsp7UG5agl8c4Lqv1qwGyBkhSB-BicR5gMjJshhI-QBCxCcNnhy1lu~4u8xF-3buGKnBBc1rwEjghzV5HwZpvLK9NLRPlVZgCPGtfGfXoPWwMcPScdOsBTL5wiVCcWhgAFAPsdfhD6Y~kUHL0gUwvTm7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover',
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 1
                        </div>
                    </figure>
                    <figure id="item7" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(4)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f198/5937/0ed9d7e64e562978fc5c069751a2ce1b?Expires=1698019200&Signature=FvmuyZ2dSBSQStjAzC~ecdzIBQdAQcvq2EN1cW-Y5FKvll012d24Y~ArHrPxR729dgZgwb95-7h7crEg0mct5Fnc2NNLzDShSRVdm5RwBgBlo23cSn5fafJeZYx~covLqQ85xNimG5qKVhUh822yQi6lKLlxOYQnEJ1AYErfgzG031dt-HBEJKxVrvF2siXsPOahItDR-E3io4Gwryho0oA9MUA7NoUN7xSpHgHfl-05DbJdJD1yesl3LoYTUmKDbnTXMjKYtTKNppOxXcDKqNYlWM-56cKDhx~ynS4Bk6esqEFsO0qblcZM5EP0MfDN4iCyhyjxUbD~ffdH6D7BwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 4
                        </div>
                    </figure>
                    <figure id="item8" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(5)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1698019200&Signature=DKiPsm~zfsaV9TlqobYjt0Ww0cBxpfh2ZX~1MKeHyOu8XC5UG3JfW~omPpmdFdetdOAb9FoSCJDSXFLZzY64nusQ~hZXx4nSi0xcGLPTDdUFJJFcg8DcfT7q-NMcUs-9K0cP~MpBPDi5iGDucPcaHLO7mx4Kw8IHQ0m0oXPvCkKfXKqgMfQ~yWjicaUqEgu~9hs2XBlfBmAuuO5z3N8onUm88xjzs5xTDZjhwz9dxDYCPwc6gYrq8Ok9nO8jJs8J124NlOpEv5o14EJKIRgD10QtXC-ixf9DVZuFbU2RLgq7exnXYDsuCbkxU~tYEN5yOnC19nPA0-pWzR~Y-zYeFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 5
                        </div>
                    </figure>
                    <figure id="item9" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(6)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a0cc/c21f/0cc53cc8a38222f1d3eca8fd2ecfb197?Expires=1698019200&Signature=BM~l57AISMWCKoIJEzSa60Ys1hSpZudsopwQyWMETfSNcbOOKibH5HX8ZxYpNxuAd-6KTgGB2kykI6sT1nTJv05ORakB3HrOC-cJeD6pyLzXXJG2PZ9YUB-f1k5YALjX0BlBmzov9KhKA2twpG7XbiBHF1DXI7WTC0U2iaE9ng5KpVggf0iQ96AW7AEqvOsp7UG5agl8c4Lqv1qwGyBkhSB-BicR5gMjJshhI-QBCxCcNnhy1lu~4u8xF-3buGKnBBc1rwEjghzV5HwZpvLK9NLRPlVZgCPGtfGfXoPWwMcPScdOsBTL5wiVCcWhgAFAPsdfhD6Y~kUHL0gUwvTm7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 6
                        </div>
                    </figure>
                    <figure id="item10" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(7)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1698019200&Signature=DKiPsm~zfsaV9TlqobYjt0Ww0cBxpfh2ZX~1MKeHyOu8XC5UG3JfW~omPpmdFdetdOAb9FoSCJDSXFLZzY64nusQ~hZXx4nSi0xcGLPTDdUFJJFcg8DcfT7q-NMcUs-9K0cP~MpBPDi5iGDucPcaHLO7mx4Kw8IHQ0m0oXPvCkKfXKqgMfQ~yWjicaUqEgu~9hs2XBlfBmAuuO5z3N8onUm88xjzs5xTDZjhwz9dxDYCPwc6gYrq8Ok9nO8jJs8J124NlOpEv5o14EJKIRgD10QtXC-ixf9DVZuFbU2RLgq7exnXYDsuCbkxU~tYEN5yOnC19nPA0-pWzR~Y-zYeFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 7
                        </div>
                    </figure>
                    <figure id="item11" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(1)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3762/5f55/25836ab708fe28a431cba320d02b93fe?Expires=1698019200&Signature=ec7ODiZPTqznUnMV3LfCEZMReL9Dgt9TNsLhyZ9LU92STauQiJLTqcLO9rr4rO1TyJp5s4ZT10KYsTRNX1XGKymFyj3aHPhytz3NN1lgXEQXZ6ju3cnqYFIucNLfY4jwWjpKAe7Ndp2E8vwMHEAZIPX6UhzSdU82ZVoqokDh3A9MKZqgu0voTqMKC~8lCWH6wtty4~UamF925R1uOwt6QuYmGbqFtD3qeGRkYTzy4XhDb~Vs0uSEjunLtKzO4PtxdEeq0~irU2yMSnzIvMWqgSzBi~ewPKN1PV9TYoryJQDgPZsB-t0tTZydLyej1RQM996lPFI030KykMRL~iA5GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 1
                        </div>
                    </figure>
                    <figure id="item12" className="carouselItem trans3d"
                        onClick={() => tariffClickHandler(2)}

                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1698019200&Signature=DKiPsm~zfsaV9TlqobYjt0Ww0cBxpfh2ZX~1MKeHyOu8XC5UG3JfW~omPpmdFdetdOAb9FoSCJDSXFLZzY64nusQ~hZXx4nSi0xcGLPTDdUFJJFcg8DcfT7q-NMcUs-9K0cP~MpBPDi5iGDucPcaHLO7mx4Kw8IHQ0m0oXPvCkKfXKqgMfQ~yWjicaUqEgu~9hs2XBlfBmAuuO5z3N8onUm88xjzs5xTDZjhwz9dxDYCPwc6gYrq8Ok9nO8jJs8J124NlOpEv5o14EJKIRgD10QtXC-ixf9DVZuFbU2RLgq7exnXYDsuCbkxU~tYEN5yOnC19nPA0-pWzR~Y-zYeFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-2xl sm:text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 2
                        </div>
                    </figure>
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
  filter: dropshadow(color=#000000, offx=1, offy=1);
  overflow: hidden;
}


/* hardware accelatator className */
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
    opacity : 0.5 !important;
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
  background-position : cover;


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
        </div>
    );
};

export default CarouselSlider;
