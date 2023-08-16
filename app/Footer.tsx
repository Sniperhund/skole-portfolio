"use client"

import { useState } from "react";

export interface Program {
    name: string,
    menus: Array<string>,
    appImage: string,
}

export default function Footer() {
    const [programs, setPrograms] = useState<Array<Program>>([
        {
            name: "Notes",
            menus: ["File", "Edit", "View", "Help"],
            appImage: "./notes.svg"
        },
        {
            name: "Settings",
            menus: ["File", "Edit", "View", "Help"],
            appImage: "./settings.png"
        }
    ])

    return (
        <div className="absolute bottom-0 w-screen flex justify-center mb-1">
            <div className="relative max-w-[80%] min-w-[20%] h-[5rem] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 backdrop-blur-lg backdrop-filter bg-opacity-25" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-20 text-white text-lg font-semibold flex">
                        {programs.map((program, index) => {
                            return (
                                <button key={index} className="flex items-center m-2">
                                    <img src={program.appImage} className="h-[4rem] pb-0.5" />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}