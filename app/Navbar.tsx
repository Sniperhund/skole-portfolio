"use client"

import { useState } from "react";

export default function Navbar() {
    const [programName, setProgramName] = useState<String>('Finder');
    const [programMenus, setProgramMenus] = useState<Array<String>>(['File', 'Edit', 'View', 'Go', 'Window', 'Help']);

    return (
        <div className="absolute top-0 h-[1.5rem] flex items-center text-white">
            <div className="relative h-full w-screen flex z-50 items-center">
                <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-opacity-25" />
                <img src="./logo.svg" className="h-[1.25rem] pl-4 relative" />
                <h2 className="pl-4 font-bold z-10 relative">{programName}</h2>

                <div className="flex z-10 relative">
                    {programMenus.map((menu, index) => (
                        <h3 key={index} className="pl-4">{menu}</h3>
                    ))}
                </div>
            </div>
        </div>
    );
}
