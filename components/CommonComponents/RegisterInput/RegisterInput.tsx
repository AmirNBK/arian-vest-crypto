import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })

const RegisterInput = (props: {
    placeholder: string
    value: string,
    onChange: (value: string) => void,
    type: string
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    return (
        <>
            <input className={`${myFont.className} RegisterInput text-white bg-transparent border border-solid border-white rtl text-right w-full rounded-2xl px-6 py-4 sm:py-7 placeholder:text-base`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleInputChange}
                required
                type={props.type}
            />
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