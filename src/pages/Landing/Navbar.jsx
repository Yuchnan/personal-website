import React from 'react'
import OptionMode from '@/components/Modules/OptionMode';

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center px-2 py-4">
                <div className="flex justify-center items-center ml-5">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="ml-2 font-semibold text-slate-600">
                        <span>Ramandhanu Yuchnan Utomo</span>
                    </div>
                </div>
                <div className="flex gap-5 text-sm justify-center items-center p-2">
                    <a href='#about'>
                        About
                    </a>
                    <a href='#work'>
                        Work
                    </a>
                    <a href='#contact'>
                        Contact
                    </a>
                    <OptionMode />
                </div>
            </nav>
        </header>
    )
}

export default Navbar