import React from 'react'

const Jumbotron = () => {
    return (
        <div className='my-4'>
            <div className='flex items-center mb-4'>
                <h1 className='text-xl font-semibold mr-3'>
                    Hai, saya Danu!
                </h1>
                <img
                    className='w-10'
                    src="./goodbye.png"
                />
            </div>
            <p className='text-justify text-lg text-gray-500'>
                Saya adalah seorang pengembang web yang berdedikasi dan bersemangat untuk menciptakan pengalaman digital yang menarik dan responsif. Dalam pengembangan web saya mempunyai pengalaman menggunakan beberapa framework dan library seperti ReactJS, Flask, CodeIgniter dan Laravel. Dalam sisi pengembangan, saya berusaha untuk selalu mengimplementasikan clean code dan reusable code agar project dapat lebih mudah dikembangkan di masa yang akan datang. Saya juga menyukai tantangan dan berkeinginan besar untuk mempelajari hal-hal baru seiring tren yang ada.
            </p>
        </div>
    )
}

export default Jumbotron