import React from 'react';

const PaymentComponent = (props: {
    placeholder: string
    selectInput: boolean
    selectOptions?: string[]
    halfWidth?: boolean
    isLocationIran: boolean
}) => {
    return (
        <div>
            {
                !props.selectInput ?
                    <input placeholder={props.placeholder} className={`${props.isLocationIran && 'rtl'} p-3 w-full text-white bg-transparent rounded-md`}
                        style={{ border: '1px solid #6B7280' }}
                    />
                    :
                    <select placeholder={props.placeholder} className={`${props.halfWidth ? 'w-1/2' : 'w-full'} text-white ${props.isLocationIran && 'rtl'} p-3 bg-transparent
                    rounded-md`}
                        style={{ border: '1px solid #6B7280' }}
                    >
                        {props.selectOptions?.map((item, index) => {
                            return (
                                <option key={index} value={item} className='text-black'>
                                    {item}
                                </option>
                            )
                        })}
                    </select>
            }

        </div>
    );
};

export default PaymentComponent;