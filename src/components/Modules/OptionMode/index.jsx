import React, { useState } from 'react'
import { LIST_MODE } from '@/constants/listMode'

const OptionMode = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleImageClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % LIST_MODE.length)
        console.log(LIST_MODE[currentIndex].value)
    };

    return (
        <img
            src={LIST_MODE[currentIndex].img}
            alt={LIST_MODE[currentIndex].value}
            className='ml-2 w-8'
            onClick={handleImageClick}
        />
    );
}

export default OptionMode