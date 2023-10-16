import React from 'react';

const RegisterTextarea = (props: {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    return (
        <textarea rows={7} className='RegisterTextArea text-white bg-transparent placeholder:text-white
        border border-solid border-white rtl text-right w-full rounded-2xl px-6 py-7 placeholder:text-lg'
            value={props.value}
            onChange={handleInputChange}
            style={{ direction: 'rtl' }}
            placeholder={props.placeholder} />
    );
};

export default RegisterTextarea;
