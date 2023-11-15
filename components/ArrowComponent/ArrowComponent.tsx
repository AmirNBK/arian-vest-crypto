import Image from 'next/image';
import React, { useState } from 'react';
import arrow from '../../assets/icons/arrow-down.svg';
import styles from './ArrowComponent.module.css';
import Link from 'next/link';

const ArrowComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`ArrowComponent rounded-full w-fit w-64 h-64 absolute bottom-0 3xl:bottom-56 lg:block hidden`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={'#AboutUs'}>
                <div
                    className={`absolute w-40 h-40 xl:w-64 xl:h-64 left-1/2 3xl:left-[85%] top-1/2 3xl:top-[20%]`}
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div
                        className={`rounded-full absolute bg-transparent w-full h-full ${isHovered ? styles.ArrowContainer : styles.ArrowContainer__notHover}`}
                        style={{
                            border: '1px solid #fff',
                        }}
                    ></div>
                </div>
                <Image
                    unoptimized
                    alt='arrow'
                    src={arrow}
                    className='relative left-1/2 3xl:left-[85%] top-1/2 3xl:top-[20%]'
                    style={{ transform: 'translate(-50%, -50%)' }}
                />
            </Link>
        </div>
    );
};

export default ArrowComponent;
