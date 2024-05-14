import React from 'react'

export function Avatar() {
    return (
        <button className='rounded-2xl w-[250] h-[250px] min-w-[250px] min-h-[250px] bg-white focus:ring-4 focus:ring-black focus:outline-none overflow-hidden'>
            <img src='https://fastly.picsum.photos/id/50/250/250.jpg?hmac=MUHtCUY1PE1xMFGe9EcAWXzFKn0nanX8TOJWtwxbBYU' className='rounded-2xl h-[250px] w-[250px]' />
        </button>
    )
}

export function AvatarDisabled() {
    return (
        <button className='cursor-not-allowed bg-opacity-60 flex justify-center items-center relative rounded-2xl w-[250] h-[250px] min-w-[250px] min-h-[250px] bg-slate-300 '>
            <img src='https://fastly.picsum.photos/id/50/250/250.jpg?hmac=MUHtCUY1PE1xMFGe9EcAWXzFKn0nanX8TOJWtwxbBYU' className='rounded-2xl bg-opacity-10 opacity-40' />
            <div className='absolute p-2 bg-opacity-80 bg-slate-300 rounded-full w-[50px] h-[50px] flex justify-center items-center'>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                </svg>
            </div>
        </button>
    )
}
