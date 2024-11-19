import React from 'react'
import Navbar from "@/pages/Landing/Navbar"

const DefaultLayout = ({ children }) => {
    return (
        <div className='max-w-3xl mx-auto overflow-hidden'>
            <Navbar />
            {children}
        </div>
    )
}

export default DefaultLayout