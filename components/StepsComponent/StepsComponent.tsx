import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/icons/logoWhite.png'
import bull from '../../assets/images/yellowBull.png'
import leopard from '../../assets/images/yellowLeopard.png'
import localFont from 'next/font/local'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import AOS from 'aos';
import 'aos/dist/aos.css';

const StepsComponent = (props: {
    data: any
    isLocationIran: boolean
}) => {
    const [current, setCurrent] = useState(1);
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        const stepsNode = document.querySelector("#steps");
        const contentsNode = document.querySelector("#contents");

        if (!stepsNode || !contentsNode) {
            console.error("Steps or contents not found");
            return;
        }

        const totalSteps = stepsNode.children.length;

        stepsNode.querySelectorAll("button").forEach((step) => {
            const targetStep = parseInt(step.dataset.step || '1');

            step.addEventListener("click", (e) => {
                contentsNode
                    .querySelectorAll(".content")
                    .forEach((content) => content.classList.remove("active"));
                stepsNode
                    .querySelectorAll("button")
                    .forEach((content) => content.classList.remove("active"));

                contentsNode.querySelector(`.content[data-step="${targetStep}"]`)?.classList.add("active");
                step.classList.add("active");

                stepsNode
                    .querySelectorAll("div")
                    .forEach((content) => content.classList.remove("active"));
                if (targetStep - 1 > 0) {
                    const num = targetStep - 1;
                    for (let i = 1; i <= num; i++) {
                        stepsNode.querySelector(`div:nth-of-type(${i})`)?.classList.add('active');
                    }
                }
                setCurrent(targetStep);
                setActiveStep(targetStep);
            });
        });
    }, []);

    return (
        <>
            <div className={`${myFontIran.className} steps relative`} id="steps">
                <button data-step="1"
                    className={(activeStep === 1 || activeStep === 2 || activeStep === 3) ? "active" : ""}
                    style={{
                        background: `${(activeStep === 1 || activeStep === 2 || activeStep === 3) && '#F68D2E'}`,
                        color: `${(activeStep === 1 || activeStep === 2 || activeStep === 3) && 'white'}`
                    }}
                >
                    <p className={`absolute  font-light sm:top-[-30px] ml-5 text-sm sm:text-base text-white ${props.isLocationIran ? 'text-wrap top-[-30px]' : 'top-[-50px] sm:text-wrap sm:w-max w-1/3'}`}
                    > {
                            props.isLocationIran ?
                                props.data.successSteps[0].item[0].title
                                : props.data.engSuccessSteps[0].item[0].title
                        } </p>
                    <p>
                        1
                    </p>
                </button>
                <div></div>
                <button data-step="2" className={(activeStep === 2 || activeStep === 3) ? "active" : ""}
                    style={{
                        background: `${(activeStep === 2 || activeStep === 3) ? '#F68D2E' : '#A2A2A2'}`,
                        color: `${(activeStep === 2 || activeStep === 3) && 'white'}`
                    }}
                >
                    <span>{(activeStep === 2 || activeStep === 3) ? 2 : <Image src={logo} alt='logo' />}
                        <p className={`absolute font-light top-[-30px] ${props.isLocationIran ? 'sm:-translate-x-[40px] -translate-x-[25px]' : 'sm:-translate-x-[65px] -translate-x-[50px]'}
                         text-sm sm:text-base text-white`}> {
                                props.isLocationIran ?
                                    props.data.successSteps[0].item[1].title
                                    :
                                    props.data.engSuccessSteps[0].item[1].title
                            }</p>
                    </span>
                </button>
                <div></div>
                <button data-step="3" className={activeStep === 3 ? "active" : ""}
                    style={{
                        background: `${(activeStep === 3) ? '#F68D2E' : '#A2A2A2'}`,
                        color: `${(activeStep === 3) && 'white'}`
                    }}
                >
                    <span>{activeStep === 3 ? activeStep : <Image src={logo} alt='logo' />}</span>
                    <p className={`absolute sm:-translate-x-[0px] ${props.isLocationIran && 'translate-x-[10px]'}
                    font-light sm:top-[-30px] mr-5 top-[-50px] sm:w-max w-1/3 text-sm text-white sm:text-base`}> {
                            props.isLocationIran ?
                                props.data.successSteps[0].item[2].title : props.data.engSuccessSteps[0].item[2].title} </p>
                </button>
            </div>
            <div id="contents" className={`${myFontIran.className}`} >
                <div className="content active" data-step="1"

                >
                    <div className={`content__box ${props.isLocationIran && 'rtl'}`}>
                        {
                            props.isLocationIran ?
                                props.data.successSteps[0].item[0].description
                                :
                                props.data.engSuccessSteps[0].item[0].description
                        }
                    </div>
                </div>
                <div className="content" data-step="2"

                >
                    <div className={`content__box ${props.isLocationIran && 'rtl'}`}>
                        {
                            props.isLocationIran ?
                                props.data.successSteps[0].item[1].description
                                :
                                props.data.engSuccessSteps[0].item[1].description
                        }
                    </div>
                </div>
                <div className="content" data-step="3"

                >
                    <div className={`content__box ${props.isLocationIran && 'rtl'}`}>
                        {
                            props.isLocationIran ?
                                props.data.successSteps[0].item[2].description
                                :
                                props.data.engSuccessSteps[0].item[2].description
                        }
                    </div>
                </div>
                <div className='flex flex-row w-full justify-between'>
                    <Image src={bull} alt='bull' unoptimized data-aos-duration="2000" data-aos-once={true} data-aos="fade-right" className='lg:w-fit w-44 sm:block hidden' />
                    <Image src={leopard} alt='leopard' unoptimized data-aos-duration="2000" data-aos-once={true} data-aos="fade-left" className='lg:w-fit w-36 sm:block hidden' />
                </div>

            </div>

            <style>
                {
                    `
                    .text-wrap {
                        white-space: nowrap;
                    }
                      .steps {
                        display: flex;
                        flex-direction:  ${props.isLocationIran && 'row-reverse'};
                        width: 90%;
                        justify-content: space-around;
                        align-items: center;
                        margin: 50px auto;


                        @media (max-width: 640px) { 
                            width : 100%;
                               }
                      }
                      .steps div {
                        width: 100%;
                        height: 2px;
                        background: #A2A2A2;
                        position: relative;
                      }
                      .steps div::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background: #F68D2E;
                        transform-origin: ${props.isLocationIran ? 'right' : 'left'};
                        transform: scaleX(0);
                        transition: transform 0.5s ease-in-out;
                      }
                      .steps div.active::after {
                        transform: scaleX(1);
                      }
                      .steps button {
                        cursor: pointer;
                        font-weight: 900;
                        border-radius: 100%;
                        min-width: 50px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 25px;
                        box-shadow: 0.9px 2.8px 2.2px rgba(49, 140, 252, 0.02), 2.1px 6.7px 5.3px rgba(49, 140, 252, 0.028), 4px 12.5px 10px rgba(49, 140, 252, 0.035), 7.1px 22.3px 17.9px rgba(49, 140, 252, 0.042), 13.4px 41.8px 33.4px rgba(49, 140, 252, 0.05), 32px 100px 80px rgba(49, 140, 252, 0.07);
                        transition: all 0.3s ease;
                      }
                      .steps button.active {
                        background: #F68D2E;
                        color: white;
                      }
                      
                      #contents {
                        position: relative !important;
                        width: 100%;
                        height: 100%;
                        min-height: 200px;
                        box-sizing: border-box;
                      }
                      
                      .content {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        opacity: 0;
                        z-index: 0;
                        box-sizing: border-box;
                        transition: all 0.3s ease-out;
                      }
                      .content.active {
                        opacity: 1;
                        z-index: 10;
                      }
                      .content__box {
                        color : white;
                        text-align:center;
                        padding: 50px;
                        width: 60%;
                        margin: 0 auto;

                        @media (min-width: 2000px) { 
                        font-size : 32px;
                           }

                           @media (max-width: 640px) { 
                            width : 100% !important;
                        padding: 0px !important;
                               }
                      }
                    `
                }
            </style>
        </>
    );
};

export default StepsComponent;