import React, { useContext } from 'react'
import { SlDocs } from 'react-icons/sl';
import { BsSafeFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { BsBoxFill, BsCircleFill, BsFillStarFill } from 'react-icons/bs';
import { FcStatistics } from 'react-icons/fc';
import { AiFillCloseCircle, AiFillSetting } from 'react-icons/ai';
import { productsContext } from '../../App'

const HeaderData = [
    {
        text: 'Fatura İşlemleri',
        img: <SlDocs size={20} style={{ color: 'white' }} />
    },
    {
        text: 'Kasa',
        img: <BsSafeFill size={20} style={{ color: 'white' }} />
    },
    {
        text: 'Veresiye Defteri',
        img: <FaBook size={20} style={{ color: 'white' }} />
    }, {
        text: 'Stok Durumu',
        img: <BsBoxFill size={20} style={{ color: 'white' }} />
    }, {
        text: 'Taksitli Satış ',
        img: <BsSafeFill size={20} style={{ color: 'white' }} />
    }, {
        text: 'Raporlar',
        img: <FcStatistics size={20} />
    }, {
        text: 'Seri Satış',
        img: <BsCircleFill size={20} style={{ color: 'red' }} />
    }, {
        text: 'Ayarlar',
        img: <AiFillSetting size={20} style={{ color: 'gray' }} />
    }, {
        text: 'Hızlı Satış',
        img: <BsFillStarFill size={20} style={{ color: 'yellow' }} />
    }, {
        text: 'Kapat',
        img: <AiFillCloseCircle size={20} style={{ color: 'red' }} />
    }
]
function Header() {
    const context = useContext(productsContext)

    return (
        <div className='bg-cyan-500 flex justify-between p-3'>
            {
                HeaderData.map((item, index) => {
                    return (
                        <div key={index} className='flex cursor-pointer group flex-col justify-center items-center  '>
                            <div className=' my-2  '>
                                {item.img}
                            </div>
                            <h4 className=' font-bold text-white group-hover:text-black'>
                                {item.text}

                            </h4>

                        </div>
                    )
                })
            }

            <div className='flex justify-center items-center ' >
                <div className='font-bold text-white mr-2'>
                    Kasa <br /> Toplam
                </div>
                <div className="bg-black text-2xl text-green-500 w-36 py-3 pr-2 text-end flex justify-end items-end ">
                    {context.totalCArtAmount}

                </div>
            </div>
        </div>
    )
}

export default Header