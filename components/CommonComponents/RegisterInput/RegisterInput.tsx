import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })

const RegisterInput = (props: {
    placeholder: string
    value: string | number | undefined,
    onChange: (value: string) => void,
    type: string
    isLocationIran: boolean
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    return (
        <>
            <input className={`${myFont.className} RegisterInput
            mx-auto
            text-white bg-transparent border ml-auto sm:w-8/12 w-full border-solid border-white ${props.isLocationIran ? 'placeholder:text-right' : 'placeholder:text-left'}  rounded-lg px-3 py-3 sm:py-3 placeholder:text-base`}
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
                            color : #EEEEE;
                        }
                        `
                }
            </style>
        </>
    );
};

export default RegisterInput;