import React, { useEffect, useState } from 'react';

const StepsComponent = () => {
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        const stepsNode = document.querySelector("#steps");
        const contentsNode = document.querySelector("#contents");

        if (!stepsNode || !contentsNode) {
            console.error("Steps or contents not found");
            return;
        }

        const totalSteps = stepsNode.children.length;

        stepsNode.querySelectorAll("button").forEach((step) => {
            step.addEventListener("click", (e) => {
                const targetStep = parseInt((e.target as HTMLElement)?.dataset.step || '1');

                contentsNode
                    .querySelectorAll(".content")
                    .forEach((content) => content.classList.remove("active"));
                stepsNode
                    .querySelectorAll("button")
                    .forEach((content) => content.classList.remove("active"));

                contentsNode.querySelector(`.content[data-step="${targetStep}"]`)?.classList.add("active");
                stepsNode.querySelector(`button[data-step="${targetStep}"]`)?.classList.add("active");

                stepsNode
                    .querySelectorAll("div")
                    .forEach((content) => content.classList.remove("active"));
                if (targetStep - 1 > 0) {
                    const num = targetStep - 1;
                    for (let i = 1; i <= num; i++) {
                        stepsNode.querySelector(`div:nth-of-type(${i})`)?.classList.add('active');
                    }
                }

                // Update the current step state
                setCurrent(targetStep);
            });
        });
    }, []);


    return (
        <>
            <div className="steps" id="steps">
                <button data-step="1" className="active">1</button>
                <div></div>
                <button data-step="2">2</button>
                <div></div>
                <button data-step="3">3</button>
            </div>

            <div id="contents" >
                <div className="content active" data-step="1">
                    <div className="content__box">
                        1
                    </div>
                </div>
                <div className="content" data-step="2">
                    <div className="content__box">
                        2
                    </div>
                </div>
                <div className="content" data-step="3">
                    <div className="content__box">
                        3
                    </div>
                </div>
            </div>



            <style>
                {
                    `
                      .steps {
                        display: flex;
                        flex-direction: row-reverse;
                        width: 90%;
                        justify-content: space-around;
                        align-items: center;
                        margin: 50px auto;
                      }
                      .steps div {
                        width: 100%;
                        height: 2px;
                        background: rgba(49, 140, 252, 0.25);
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
                        transform-origin: right;
                        transform: scaleX(0);
                        transition: transform 0.5s ease-in-out;
                      }
                      .steps div.active::after {
                        transform: scaleX(1);
                      }
                      .steps button {
                        cursor: pointer;
                        background: transparent;
                        border: 2px solid #F68D2E;
                        color: #F68D2E;
                        font-weight: 900;
                        border-radius: 100%;
                        min-width: 50px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 25px;
                        box-shadow: 0.9px 2.8px 2.2px rgba(49, 140, 252, 0.02), 2.1px 6.7px 5.3px rgba(49, 140, 252, 0.028), 4px 12.5px 10px rgba(49, 140, 252, 0.035), 7.1px 22.3px 17.9px rgba(49, 140, 252, 0.042), 13.4px 41.8px 33.4px rgba(49, 140, 252, 0.05), 32px 100px 80px rgba(49, 140, 252, 0.07);
                        background: white;
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
                        background: white;
                        box-shadow: 0.9px 2.8px 2.2px rgba(49, 140, 252, 0.02), 2.1px 6.7px 5.3px rgba(49, 140, 252, 0.028), 4px 12.5px 10px rgba(49, 140, 252, 0.035), 7.1px 22.3px 17.9px rgba(49, 140, 252, 0.042), 13.4px 41.8px 33.4px rgba(49, 140, 252, 0.05), 32px 100px 80px rgba(49, 140, 252, 0.07);
                        border-radius: 20px;
                        padding: 50px;
                        max-width: 800px;
                        margin: 0 auto;
                      }
                    `
                }
            </style>
        </>
    );
};

export default StepsComponent;