"use client"

import {useState} from 'react';

export default function Home() {
	const [word, setWord] = useState('');
	const [wordInfo, setWordInfo] = useState(null);
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				<span className="text-secondary">Dictionary</span> App
			</h2>
			<h3 className="text-lightGrey text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Check Meaning of any word
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form
					onSubmit={e => fetchInfo(e)}
					className="flex w-full justify-center md:flex-col md:w-5/6 "
				>
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Enter any word..."
						onChange={e => setWord(e.target.value)}
					/>
					<button className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}