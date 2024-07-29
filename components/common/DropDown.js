
"use client"
import { useState } from "react";
export const DropDown_1 = ({ name, opt1, opt2, opt3, opt4 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-[98%] z-50'>
            <div
                className='h-14 rounded-xl glassmorphism flex items-center p-2 cursor-pointer'
                onClick={handleToggle}
            >
                <div className='font-light text-xl'>{name}</div>
                <div className='flex flex-grow justify-end'>
                    <img
                        src="/icons/add-svgrepo-com.svg"
                        alt="add"
                        className={`w-8 h-8 object-cover transform transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    />
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} mt-1 mb-1 p-3 bg-white bg-opacity-80 rounded-xl text-black`}
            >
                <div className='text-lg font-medium'>{opt1}</div>
                <div className='text-lg font-medium'>{opt2}</div>
                <div className='text-lg font-medium'>{opt3}</div>
                <div className='text-lg font-medium'>{opt4}</div>
            </div>
        </div>
    );
};
