import React, { useState } from 'react'
import CarouselLayout from '@layouts/CarouselLayout'
import EachUtils from '@/utils/EachUtils';

import { LIST_PROJECT } from '@/constants/listProject';
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
            <div className='carousel relative overflow-hiden scroll-smooth space-x-2'>
                <EachUtils
                    of={LIST_PROJECT}
                    render={(item, index) => (
                        <div
                            className="card bg-base-100 w-88 h-80 shadow-xl"
                            key={index}
                        >
                            <figure>
                                <img
                                    src={item.img}
                                    className='object-cover'
                                />
                            </figure>
                            <div className="card-body bg-gray-500">
                                <h2 className="card-title text-lg">
                                    {item.name}
                                </h2>
                                <p className='text-md'>{item.desc}</p>
                                <div className="card-actions justify-end text-md">
                                    {item.badge.map((badge, index) => (
                                        <div key={index} className="badge badge-outline">{badge}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        </>
    )
}

export default ProjectCarousel