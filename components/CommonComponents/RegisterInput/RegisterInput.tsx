import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/Fonts/iranyekanwebregular_0.ttf' })

const RegisterInput = (props: {
    placeholder: string
}) => {
    return (
        <>
            <input className={`${myFont.className} RegisterInput text-white bg-transparent border border-solid border-white rtl text-right w-full rounded-2xl px-6 py-7 placeholder:text-base`}
                style={{ direction: 'rtl' }}
                placeholder={props.placeholder} />

                <style>
                    {
                        `
                        .RegisterInput::placeholder {
                            color : #E6E6E6;
                        }
                        `
                    }
                </style>
        </>
    );
};

export default RegisterInput;