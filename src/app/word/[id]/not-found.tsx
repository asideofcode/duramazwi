'use client'
import { redirect } from 'next/navigation'

function ErrorBoundary() {
    setTimeout(redirect,10000, '/')
    return <h1 className='text-red-600 font-thin'><b className='font-semibold'>Sorry</b>, this word doesn't exist in the dictionary at this point!</h1>
}
export default ErrorBoundary