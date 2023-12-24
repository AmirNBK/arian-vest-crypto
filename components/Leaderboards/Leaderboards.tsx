import React from 'react';
import localFont from 'next/font/local'
import LeaderboardComponent from '../LeaderboardComponent/LeaderboardComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg'
import Image from 'next/image';
import ReactLoading from 'react-loading';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { useQuery, gql } from '@apollo/client';

const Leaderboards = (
    props: {
        isLocationIran: boolean
    }
) => {
    const GET_LEADERBOARDS = gql`
    query leaderboards {
        pages {
          nodes {
            homepage {
              fieldGroupName
            }
            leaderboards {
              leaderboards {
                accountSize
                maxReturn
                minReturn
                name
                profit
                months {
                  month
                }
                amounts {
                  amount
                }
              }
            }
          }
        }
      }
`;
    const isLocationInIran = props.isLocationIran
    const { data: leaderboards } = useQuery(GET_LEADERBOARDS);


    return (
        <div className='Leaderboards bg-[#1A1C1F] h-full lg:w-full mx-2 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg mt-6 mb-20'>
            <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                    {isLocationInIran ? '   بیشترین سود' : 'Leaderboards'}
                </h2>
                <Image src={certificateMini} alt='icon' unoptimized />
            </div>
            <div className='mt-6 flex flex-col gap-2'>
                {leaderboards ?
                    leaderboards?.pages.nodes[2].leaderboards.leaderboards.map((item: any, index: number) => {
                        return (
                            <LeaderboardComponent isLocationIran={isLocationInIran} rank={index + 1} name={item.name} profit={item.profit}
                                accountSize={item.accountSize} return={item.maxReturn} back={item.minReturn} months={item.months} amounts={item.amounts} />
                        )
                    })
                    :
                    <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />

                }
            </div>


        </div>
    );
};

export default Leaderboards;