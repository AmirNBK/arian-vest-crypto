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
            <input className={`${myFont.className} RegisterInput
            mx-auto
            text-white bg-transparent border ml-auto w-8/12 border-solid border-white placeholder:text-right  rounded-lg px-3 py-3 sm:py-3 placeholder:text-base`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleInputChange}
                required
                style={{ direction: 'ltr' }}
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