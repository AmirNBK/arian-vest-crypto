import React from 'react';
import arrow from '../../assets/icons/miniArrow.svg'
import Image from 'next/image';

const DashboardPaginationComponent = () => {
    return (
        <div className='DashboardPaginationComponent flex flex-row justify-center  gap-5'>
            <div className='bg-[#5A5A5A] w-fit rounded-lg px-5 py-3 flex items-center'
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            >
                <Image src={arrow} alt='arrow' />
            </div>

            <div className='bg-main-orange text-white w-fit rounded-lg px-4 py-3'
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            >
                01
            </div>

            <div className='bg-[#5A5A5A] w-fit rounded-lg px-5 py-3 flex items-center'
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            >
                <Image src={arrow} alt='arrow' className='rotate-180' />
            </div>

        </div>
    );
};

export default DashboardPaginationComponent;