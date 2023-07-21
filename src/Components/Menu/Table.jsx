import React, { useContext, useState } from 'react'
import { productsContext } from '../../App'

function Table() {
    const context = useContext(productsContext)
    return (
        <div className='mt-2 border bg-slate-500 h-[650px] border-red-600 p-2 '>
            <header className='flex  '>
                <div className='bg-gray-100 border border-gray-300 w-4/12 px-2 font-semibold mr-1'>Ürün Tanıtımı</div>
                <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>Miktar</div>
                <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>Birim</div>
                <div className='bg-gray-100 border border-gray-300 w-2/12 px-2 font-semibold mr-1'>Birim Fiyat</div>
                <div className='bg-gray-100 border border-gray-300 w-2/12 px-2 font-semibold mr-1'>Tutar</div>
                <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>Kdv</div>
                <button className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'> X </button>
            </header>



            {context.state.cart.map((item, index) => {
                return (
                    <div key={index} className="product flex mt-2">
                        <div className='bg-gray-100 border border-gray-300 w-4/12 px-2 font-semibold mr-1'>{item.name}</div>
                        <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>{item.count}</div>
                        <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>adet</div>
                        <div className='bg-gray-100 border border-gray-300 w-2/12 px-2 font-semibold mr-1'>{item.price}</div>
                        <div className='bg-gray-100 border border-gray-300 w-2/12 px-2 font-semibold mr-1'>{item.price * item.count}</div>
                        <div className='bg-gray-100 border border-gray-300 w-1/12 px-2 font-semibold mr-1'>{item.kdv}</div>
                        <button onClick={() => { context.removeProduct(item.id) }} className='bg-gray-100 border border-gray-300  text-red-800 w-1/12 px-2 font-semibold mr-1'>sil </button>
                    </div>
                )
            })}



            {
                context.state.cart.length > 0 ? <button className='bg-red-500 px-2 rounded-lg mt-2' onClick={() => { context.clearCart() }}>Sepeti temizle</button> : <div className=' font-bold m-3 text-white'>Sepetinizde Ürün Bulunamamaktadır</div>
            }
        </div>
    )
}

export default Table