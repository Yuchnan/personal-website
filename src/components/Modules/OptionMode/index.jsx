import React, { useState } from 'react'

import { LIST_MODE } from '@/constants/listMode'
import { useAtom } from "jotai";
import { modeAtom } from "@/jotai/atoms.js";

const OptionMode = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setMode] = useAtom(modeAtom)

    const handleImageClick = () => {
        const nextIndex = (currentIndex + 1) % LIST_MODE.length;
        setCurrentIndex(nextIndex);
        setMode(LIST_MODE[nextIndex].value);
    };

    return (
        <img
            src={LIST_MODE[currentIndex].img}
            alt={LIST_MODE[currentIndex].value}
            className='ml-2 w-7'
            onClick={handleImageClick}
        />
    );
}

export default OptionMode