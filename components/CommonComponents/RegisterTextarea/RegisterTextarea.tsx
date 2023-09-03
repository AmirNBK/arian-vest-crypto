import React from 'react';

const RegisterTextarea = (props: {
    placeholder: string
}) => {
    return (
        <textarea rows={7} className='RegisterTextArea text-white bg-transparent placeholder:text-white
        border border-solid border-white rtl text-right w-full rounded-2xl px-6 py-7 placeholder:text-lg'
            style={{ direction: 'rtl' }}
            placeholder={props.placeholder} />
    );
};

export default RegisterTextarea;