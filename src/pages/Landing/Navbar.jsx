import React from 'react'
import OptionMode from '@/components/Modules/LandingPage/OptionMode';

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav className="flex justify-between items-center py-4">
                <div className="flex justify-center items-center    ">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="ml-2 font-semibold">
                        <span>Ramandhanu Yuchnan Utomo</span>
                    </div>
                </div>
                <div className="flex gap-5 text-sm justify-center items-center p-2">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => navigate("/tentang")}
                        className='hover:font-semibold'
                    >
                        Tentang Saya
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => navigate("/project")}
                        className='hover:font-semibold'
                    >
                        Project
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => navigate("/contact")}
                        className='hover:font-semibold'
                    >
                        Kontak
                    </motion.a>
                    <OptionMode />
                </div>
            </nav>
        </header>
    )
}

export default Navbar