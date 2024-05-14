import React from 'react'

export default function Card({ icon, time, text }: { icon: string, time: string, text: string }) {
    return (
        <div className='h-full flex flex-1 flex-col bg-slate-300  justify-center'>
            <div>{icon}{time}</div>
            <p className='overflow-x-hidden line-clamp-1'>
                {text}
            </p>
        </div>

    )
}
