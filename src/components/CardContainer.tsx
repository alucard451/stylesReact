import React from 'react'
import Card from './Card'

interface CardProps {
    icon: string;
    text: string;
    time: string;
}

export default function CardContainer({ items }: { items: CardProps[] }) {
    return (
        <div className='h-[170] min-h-[170px] max-h-[170px] w-[150px] bg-slate-400 border rounded-lg p-1 overflow-y-hidden grid gap-[3px] '>
            {
                items.map((card, index) => (
                    <Card key={index} icon='♥' time='11:13' text='Aprende Forex con '></Card>
                ))
            }
        </div>
    )
}
