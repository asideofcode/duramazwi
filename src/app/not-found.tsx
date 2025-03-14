'use client'

export default function ErrorBoundary() {
    return (
        <h1 className='h-1/2 p-64 font-thin theme-text-h1'>
            <b className='text-2xl'>404</b>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
            This page does not exist!
        </h1>
    )
}