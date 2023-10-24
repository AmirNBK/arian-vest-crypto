import React, { useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import profile from '../../assets/icons/profile3.svg'
import Image from 'next/image';

const Profile = () => {
    const [products, setProducts] = useState([
        {
            id: '1000',
            status: <p className={`${myFontIran.className} rounded-md p-2 ml-auto w-fit text-[#21c21e] bg-green-200	`}>
                پرداخت شده
            </p>,
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: <p className='text-green-600	 text-xl font-bold'>
                $550,000,000
            </p>,
            account:
                <div className='flex flex-row-reverse items-center gap-4 justify-start text-gray-400'>
                    <div className='rounded-md text-lg bg-main-orange px-4 py-3 text-white font-bold w-fit'>
                        5k
                    </div>
                    <p className='rtl text-lg'>
                        5k classic challenge -  تعرفه classic challenge
                    </p>
                </div>,
            date: <p className='text-gray-400'>
                05/09/2023
            </p>,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            status: <p className={`${myFontIran.className} rounded-md p-2 ml-auto w-fit text-red-400 bg-red-200	`}>
                منقضی شده
            </p>,
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: <p className='text-green-600	 text-xl font-bold'>
                $830,000,000
            </p>,
            account:
                <div className='flex flex-row-reverse items-center gap-4 justify-start text-gray-400'>
                    <div className='rounded-md text-lg bg-main-orange px-4 py-3 text-white font-bold w-fit'>
                        100k
                    </div>
                    <p className='rtl text-lg'>
                        100k classic challenge -  تعرفه classic challenge
                    </p>
                </div>,
            date: <p className='text-gray-400'>
                05/09/2023
            </p>,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
    ]);

    return (
        <div className='Profile'>

            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                حساب کاربری
            </h2>

            <div className='Profile__info bg-[#272A2E] rounded-md p-6 mt-8 flex flex-row-reverse gap-4 justify-between items-end'>
                <div className='flex flex-row-reverse gap-4 items-center'>
                    <Image src={profile} alt='profile' width={100} height={100} />
                    <div className='flex flex-col items-end gap-2'>
                        <p className={`${myFont.className} text-white text-3xl`}> محمد باقری </p>
                        <p className='text-base text-white opacity-[0.7] text-sm'> test@gmail.com </p>
                        <p className='text-white text-sm opacity-[0.7]'>
                            17shahrivar street-marashi alley-no5
                            tehran, Tehran (تهران) 1718814754
                            Iran
                        </p>
                    </div>
                </div>

                <div>
                    <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-main-orange`}
                    >
                        ویرایش
                    </button>
                </div>
            </div>
            <p className={`${myFont.className} text-white text-2xl text-right mt-8 w-full`}> اکانت های خریداری شده </p>


            <div className={`accounts__info rounded-md p-6 mt-5 w-full`}>
                {/* <AccountsDetail /> */}
                <DataTable value={products} tableStyle={{ width: '100%', }} >
                    <Column field="status" header="وضعیت" align={'right'}></Column>
                    <Column field="price" header="قیمت" align={'right'}></Column>
                    <Column field="account" header="حساب خریداری شده" align={'right'}></Column>
                    <Column field="date" header="تاریخ" align={'right'}></Column>
                </DataTable>
            </div>


            <style>

                {`
                .gradient-text {
                    background: #F68D2E;
background: linear-gradient(to right, #fff 0%, #F68D2E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

                }

                .background-gradient {
                    background: rgb(0,0,0);
background: linear-gradient(180deg, #1D1F24 0%, #1D1F24 50%, transparent 100%);
                }


                .p-datatable>.p-datatable-wrapper {
                    border-radius : 8px;
                }

                .p-column-title {
                    font-family : __myFontIran_ca096e;
                }

                .p-datatable .p-datatable-thead > tr > th { 
                    background : transparent;
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-datatable .p-datatable-tbody > tr > td {
                    background : #0E1013;
                }

                .p-datatable .p-datatable-tbody > tr > td {
                    border : none;
                }

                .p-datatable .p-datatable-thead > tr > th {
                    border : none;
                }
                `}
            </style>
        </div>
    );
};

export default Profile;