import React, { useState } from 'react'
import CarouselLayout from '@layouts/CarouselLayout'

import { useNavigate } from 'react-router-dom';

const ProjectCarousel = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex justify-between items-center my-4'>
                <p className='text-xl font-bold'>
                    Project Saya
                </p>
                <a
                    className='hover:text-blue-400 hover:cursor-pointer'
                    onClick={() => navigate("/project")}
                >
                    Lihat semua
                </a>
            </div>
            <CarouselLayout>

            </CarouselLayout>
        </>
    )
}

export default ProjectCarousel