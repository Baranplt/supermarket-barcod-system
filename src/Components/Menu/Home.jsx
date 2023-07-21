import React, { useContext, useState } from 'react'
import Name from './Name'
import Table from './Table'
import SideBar from './SideBar'
import { BsCashCoin, BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { AiFillAccountBook, AiFillPrinter, AiOutlinePercentage } from 'react-icons/ai'

function Home() {

    return (
        <div className='flex bg-blue-100 border-r-8 border-cyan-500 h-auto  pb-4'>
            <div className='w-10/12 flex flex-col justify-between'>
                <div>
                    <Name />
                    <Table />
                </div>

                <div className='flex justify-evenly mt-10'>
                    <div className="cash border border-blue-950 flex p-3 cursor-pointer flex-col justify-center items-center rounded-md w-56">
                        <div className="icon text-green-800 ">
                            <BsCashCoin size={30} />
                        </div>
                        <div className="text font-bold">
                            Nakit Satış
                        </div>
                    </div>
                    <div className="credit border border-blue-950 flex p-3 cursor-pointer flex-col justify-center items-center rounded-md w-56">
                        <div className="icon text-blue-800 ">
                            <BsFillCreditCard2FrontFill size={30} />
                        </div>
                        <div className="text font-bold">
                            POS Satış
                        </div>
                    </div>
                    <div className="borc border border-blue-950 flex p-3 cursor-pointer flex-col justify-center items-center rounded-md w-56">
                        <div className="icon text-red-800 ">
                            <AiFillAccountBook size={30} />
                        </div>
                        <div className="text font-bold">
                            Veresiye Satış
                        </div>
                    </div>
                    <div className="discount border border-blue-950 flex p-3 cursor-pointer flex-col justify-center items-center rounded-md w-56">
                        <div className="icon text-red-800 ">
                            <  AiOutlinePercentage
                                size={30} />
                        </div>
                        <div className="text font-bold">
                            İskonto Satış
                        </div>
                    </div>
                    <div className="discount border border-blue-950 flex p-3 cursor-pointer flex-col justify-center items-center rounded-md w-56">
                        <div className="icon text-red-800 ">
                            <  AiFillPrinter
                                size={30} />
                        </div>
                        <div className="text font-bold">
                            Yazdır
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    )
}

export default Home