import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const ProfitInfoComponent = (props: {
    title?: string
    value: string | number
    dollar?: boolean
}) => {
    return (
        <div className='ProfitInfoComponent flex flex-col items-center gap-3'>
            <h2 className={`${myFontIran.className} ProfitInfoComponent__title text-white text-lg`}>
                {props.title}
            </h2>

            <div className='ProfitInfoComponent__value btn-grad text-white rounded-md w-36 text-center text-2xl py-3'>
               {props.dollar && '$'}{props.value}
            </div>


            <style>
                {
                    `
                                 
         .btn-grad {
            background-image: linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;    
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
                    }
                    `
                }
            </style>
        </div>
    );
};

export default ProfitInfoComponent;