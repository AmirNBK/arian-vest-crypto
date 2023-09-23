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

const CarouselSlider = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

    const size = useWindowSize()

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
                    let Intensity = (currentMouseX - prevMouseX) * 0.8;
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
                transform: 'rotate(4deg)', width: '105vw',
                marginTop: `${size.width && size.width < 768 && '-250px'}`
            }}
        >
            <Dialog
                maximizable
                header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟" visible={visible} style={{
                    width: '50vw', display: 'flex', flexDirection: 'column',
                    backgroundColor: '#252525'
                }}
                className={`${myFont.className} font-normal`}
                onHide={() => setVisible(false)}
            >
                <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />
                <TariffTable title='همیشه همراه شماییم' data={[
                    { title: 'قدرت نفوذ:', info: '1:60' },
                    { title: 'حداقل روزهای معاملاتی:', info: '3' },
                    { title: 'حداکثر روزهای معاملاتی:', info: 'بدون محدودیت' },
                    { title: 'هدف فاز 1:', info: '8%' },
                    { title: 'هدف فاز 2:', info: '5%' },
                    { title: 'حداکثر ضرر:', info: '10%' },
                ]}
                fullWidth
                    price={129}
                />
            </Dialog>
            <div id="contentContainer" className="trans3d">
                <section id="carouselContainer" className="trans3d">
                    <figure id="item1" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a0cc/c21f/0cc53cc8a38222f1d3eca8fd2ecfb197?Expires=1695600000&Signature=GtvH23VVd7vuDMr5NGNyiWik1vjvQ8BnnB9J-7KEwjMu2J4Uata4u2BAHNecl9uT7rhJJ6~CBEdnW9fybNWnLPxsraHrOZ9HDe~jado3iOLUONttw29svV9d3miQFzGaq1H4X8IEc~g1K2oQMEpv~frOPdp-XYcY5bodtp-bq4bEJJjyKJG4Wbhh2ZHt~if4yn9cOiibbai0Lrv9ZaL0lJmJW1eF1uoB5L~2RuO3w4wLJFarItZ~YGZjFXgPphqHaxLerRUhzCEqZvCddf6TzR5QgY9mTobEcf52VZG5vC4rpm7wv2wwPijcC6i5S-F2p84crfOpHeKgFuzqFVI46g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 7
                        </div>
                    </figure>
                    <figure id="item2" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1695600000&Signature=Cxo0in7mTz-nTCqf8DS3ShlRf-ij2VL1dDO0BAGt5S1JRTQcLgO~QoZLfbtCr815lxK9taiRCKKc9wGHciSlOZ2G3B5tLff51U56L3Pp~M0rVA7qlaX-Zo1L2tOxUFlM-2~v4u7yt2gicZaHkAF3DkTFWokGFQUH9wnstdeghUsTIVsHHPW82Pmp5a-VtbVQpwM2a7k3G8pKffLZ6t3pGsf0AsuU-bC4-kXSclQYgl2H32C1KiAg8QeD4Hypqrgmn2w2fdkWKSejiZAfOQjaXPqykRGXMgZ7aRtgQKOR3-gkR36cWMO9H7ON5Ib463BY~omCWZBLUILuSqkK5o4MGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 6
                        </div>
                    </figure>
                    <figure id="item3" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/f198/5937/0ed9d7e64e562978fc5c069751a2ce1b?Expires=1695600000&Signature=Ad7GmwytF3BBQ8EALvRNvtGSTVWQVNLt75pgijwjiCx9XfQVWbif1hLpBy7vbQ2SL8Wv0qNcjMYMnESGIGbu2CR9clSy6jjmmTzcbQF7kQzluPpNI3me5Tz8gYFrnF6jtzzsuVstGBEEtQJRMGznTWEKZ62pgalh9A6b41Ib1jfRsixlZJ28a3fUNLD6eipoiDjIFAGV3mC9j0YVINyTHgkwIBHB2C7dJpZVRQg~O17iB5CbiIauDNzSh37p-sSh0CrId5p~pjRoBNV2UqMcaDDmeMWCcHrZ5XJKwmFySstY79dLtbL13DCmkyHs1dzhnRLQ3sjis819TWaKOw9vtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 5
                        </div>
                    </figure>
                    <figure id="item4" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1695600000&Signature=Cxo0in7mTz-nTCqf8DS3ShlRf-ij2VL1dDO0BAGt5S1JRTQcLgO~QoZLfbtCr815lxK9taiRCKKc9wGHciSlOZ2G3B5tLff51U56L3Pp~M0rVA7qlaX-Zo1L2tOxUFlM-2~v4u7yt2gicZaHkAF3DkTFWokGFQUH9wnstdeghUsTIVsHHPW82Pmp5a-VtbVQpwM2a7k3G8pKffLZ6t3pGsf0AsuU-bC4-kXSclQYgl2H32C1KiAg8QeD4Hypqrgmn2w2fdkWKSejiZAfOQjaXPqykRGXMgZ7aRtgQKOR3-gkR36cWMO9H7ON5Ib463BY~omCWZBLUILuSqkK5o4MGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 3
                        </div>
                    </figure>
                    <div id="item5" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a0cc/c21f/0cc53cc8a38222f1d3eca8fd2ecfb197?Expires=1695600000&Signature=GtvH23VVd7vuDMr5NGNyiWik1vjvQ8BnnB9J-7KEwjMu2J4Uata4u2BAHNecl9uT7rhJJ6~CBEdnW9fybNWnLPxsraHrOZ9HDe~jado3iOLUONttw29svV9d3miQFzGaq1H4X8IEc~g1K2oQMEpv~frOPdp-XYcY5bodtp-bq4bEJJjyKJG4Wbhh2ZHt~if4yn9cOiibbai0Lrv9ZaL0lJmJW1eF1uoB5L~2RuO3w4wLJFarItZ~YGZjFXgPphqHaxLerRUhzCEqZvCddf6TzR5QgY9mTobEcf52VZG5vC4rpm7wv2wwPijcC6i5S-F2p84crfOpHeKgFuzqFVI46g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 2
                        </div>
                    </div>
                    <figure id="item6" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3762/5f55/25836ab708fe28a431cba320d02b93fe?Expires=1695600000&Signature=lDJw8qan~9ck3vRKOBKUMa~6gUWgFihTp5d4K1LJsHpcIVzoxTMYRTyWzAb5qqM~NIRV0N4xNFB5U-lI~1kqtKlXSfQES2v3fTA3UTX~npJyrTRQjIZuX~r3m54bonGS0G-SNeh6WHg1QvtbBGKmpQbwYyLZqoANYl9MJBvJ7658tZqO21CP7f4YHGS0B1rC~uDh33mtQ4KWhBsh7pVNjKnMTYCX8rcVmQskvBo8EHl5~7-2KRuVk60aosNt2jPCQgNAIgf--nMySG4SoHNFKbi5pe6VjKb6g158yHDNXWPHuia2gDFlTYJ2UoQ5P6bSSdaxm10h-GlySnUi8NU0cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover',
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 1
                        </div>
                    </figure>
                    <figure id="item7" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f198/5937/0ed9d7e64e562978fc5c069751a2ce1b?Expires=1695600000&Signature=Ad7GmwytF3BBQ8EALvRNvtGSTVWQVNLt75pgijwjiCx9XfQVWbif1hLpBy7vbQ2SL8Wv0qNcjMYMnESGIGbu2CR9clSy6jjmmTzcbQF7kQzluPpNI3me5Tz8gYFrnF6jtzzsuVstGBEEtQJRMGznTWEKZ62pgalh9A6b41Ib1jfRsixlZJ28a3fUNLD6eipoiDjIFAGV3mC9j0YVINyTHgkwIBHB2C7dJpZVRQg~O17iB5CbiIauDNzSh37p-sSh0CrId5p~pjRoBNV2UqMcaDDmeMWCcHrZ5XJKwmFySstY79dLtbL13DCmkyHs1dzhnRLQ3sjis819TWaKOw9vtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 4
                        </div>
                    </figure>
                    <figure id="item8" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1695600000&Signature=Cxo0in7mTz-nTCqf8DS3ShlRf-ij2VL1dDO0BAGt5S1JRTQcLgO~QoZLfbtCr815lxK9taiRCKKc9wGHciSlOZ2G3B5tLff51U56L3Pp~M0rVA7qlaX-Zo1L2tOxUFlM-2~v4u7yt2gicZaHkAF3DkTFWokGFQUH9wnstdeghUsTIVsHHPW82Pmp5a-VtbVQpwM2a7k3G8pKffLZ6t3pGsf0AsuU-bC4-kXSclQYgl2H32C1KiAg8QeD4Hypqrgmn2w2fdkWKSejiZAfOQjaXPqykRGXMgZ7aRtgQKOR3-gkR36cWMO9H7ON5Ib463BY~omCWZBLUILuSqkK5o4MGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 5
                        </div>
                    </figure>
                    <figure id="item9" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/3762/5f55/25836ab708fe28a431cba320d02b93fe?Expires=1695600000&Signature=lDJw8qan~9ck3vRKOBKUMa~6gUWgFihTp5d4K1LJsHpcIVzoxTMYRTyWzAb5qqM~NIRV0N4xNFB5U-lI~1kqtKlXSfQES2v3fTA3UTX~npJyrTRQjIZuX~r3m54bonGS0G-SNeh6WHg1QvtbBGKmpQbwYyLZqoANYl9MJBvJ7658tZqO21CP7f4YHGS0B1rC~uDh33mtQ4KWhBsh7pVNjKnMTYCX8rcVmQskvBo8EHl5~7-2KRuVk60aosNt2jPCQgNAIgf--nMySG4SoHNFKbi5pe6VjKb6g158yHDNXWPHuia2gDFlTYJ2UoQ5P6bSSdaxm10h-GlySnUi8NU0cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 6
                        </div>
                    </figure>
                    <figure id="item10" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1695600000&Signature=Cxo0in7mTz-nTCqf8DS3ShlRf-ij2VL1dDO0BAGt5S1JRTQcLgO~QoZLfbtCr815lxK9taiRCKKc9wGHciSlOZ2G3B5tLff51U56L3Pp~M0rVA7qlaX-Zo1L2tOxUFlM-2~v4u7yt2gicZaHkAF3DkTFWokGFQUH9wnstdeghUsTIVsHHPW82Pmp5a-VtbVQpwM2a7k3G8pKffLZ6t3pGsf0AsuU-bC4-kXSclQYgl2H32C1KiAg8QeD4Hypqrgmn2w2fdkWKSejiZAfOQjaXPqykRGXMgZ7aRtgQKOR3-gkR36cWMO9H7ON5Ib463BY~omCWZBLUILuSqkK5o4MGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 7
                        </div>
                    </figure>
                    <figure id="item11" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a0cc/c21f/0cc53cc8a38222f1d3eca8fd2ecfb197?Expires=1695600000&Signature=GtvH23VVd7vuDMr5NGNyiWik1vjvQ8BnnB9J-7KEwjMu2J4Uata4u2BAHNecl9uT7rhJJ6~CBEdnW9fybNWnLPxsraHrOZ9HDe~jado3iOLUONttw29svV9d3miQFzGaq1H4X8IEc~g1K2oQMEpv~frOPdp-XYcY5bodtp-bq4bEJJjyKJG4Wbhh2ZHt~if4yn9cOiibbai0Lrv9ZaL0lJmJW1eF1uoB5L~2RuO3w4wLJFarItZ~YGZjFXgPphqHaxLerRUhzCEqZvCddf6TzR5QgY9mTobEcf52VZG5vC4rpm7wv2wwPijcC6i5S-F2p84crfOpHeKgFuzqFVI46g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 8
                        </div>
                    </figure>
                    <figure id="item12" className="carouselItem trans3d"
                        onClick={() => setVisible(true)}
                    >
                        <div className="carouselItemInner trans3d"
                            style={{
                                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a556/4129/ad3f36e8b58485474a21b84fecea194b?Expires=1695600000&Signature=Cxo0in7mTz-nTCqf8DS3ShlRf-ij2VL1dDO0BAGt5S1JRTQcLgO~QoZLfbtCr815lxK9taiRCKKc9wGHciSlOZ2G3B5tLff51U56L3Pp~M0rVA7qlaX-Zo1L2tOxUFlM-2~v4u7yt2gicZaHkAF3DkTFWokGFQUH9wnstdeghUsTIVsHHPW82Pmp5a-VtbVQpwM2a7k3G8pKffLZ6t3pGsf0AsuU-bC4-kXSclQYgl2H32C1KiAg8QeD4Hypqrgmn2w2fdkWKSejiZAfOQjaXPqykRGXMgZ7aRtgQKOR3-gkR36cWMO9H7ON5Ib463BY~omCWZBLUILuSqkK5o4MGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className={`${myFontIran.className} absolute top-1/2 left-1/2 text-4xl w-full text-end`}
                            style={{ transform: 'translate(-50%,0%) rotateY(180deg)' }}
                        >
                            تعرفه شماره 9
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
