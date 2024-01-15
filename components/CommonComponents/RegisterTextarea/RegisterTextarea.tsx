import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })

const RegisterTextarea = (props: {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    isLocationIran: boolean
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    return (
        <textarea rows={7} required className={`${myFont.className} RegisterTextArea text-white bg-transparent placeholder:text-[#EEEEE] w-full sm:w-8/12
        border border-solid border-white mx-auto ${props.isLocationIran ? 'text-right' : 'text-left'} rounded-2xl px-6 py-7 placeholder:text-base`}
            value={props.value}
            onChange={handleInputChange}
            placeholder={props.placeholder} />
    );
};

export default RegisterTextarea;
