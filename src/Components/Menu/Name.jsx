import React from 'react'
import { MdBarcodeReader } from 'react-icons/md';

function Name() {
    return (
        <div className='flex '>
            <div className='w-4/12 flex justify-center items-center'>
                <MdBarcodeReader size={50} className='text-gray-400' />
                <input type="text" className=' h-10 ml-5 border outline-none bg-yellow-300 text-center' />
            </div>
            <div className='border w-full border-blue-500 rounded-lg mt-2 py-1 px-5 flex items-center justify-between'>
                <div className="text text-red-600 font-bold text-2xl ">
                    POLAT MARKET & BÜFE
                </div>
                <div className="work">
                    <h1 className='font-bold'>Satış Elemanı</h1>
                    <select name="human" className='border w-32 outline-none'  >
                        <option value="Ahmet">Ahmet</option>
                        <option value="Mehmet">Mehmet</option>
                        <option value="Ali">Ali</option>
                        <option value="Elif">Elif</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default Name