'use client';

import { useState } from 'react';

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);
	const [showStartButton, setShowStartButton] = useState(false);

	const skipIntro = () => {
		setShowIntro(false);
		setShowStartButton(true);
	};

	return (
		<main className='w-5/6 mx-auto'>
			{showIntro && (
				<button
					className='absolute top-4 right-4 z-10 px-4 py-2 bg-yellow-500 text-black rounded'
					onClick={skipIntro}
				>
					Skip Intro
				</button>
			)}

			{showIntro && (
				<>
					<div className='fade'></div>

					<section className='star-wars'>
						<div className='crawl'>
							<div className='title'>
								<p>A long time ago in a galaxy far, far away...</p>
								<p>DATKAYEV ADIAR proudly presents</p>
								<p>A journey through the vast universe of STAR WARS...</p>
								<h1>THE SWAPI PROJECT</h1>
							</div>

							<p>It is a period of innovation.</p>
							<p>An aspiring developer from the NFACTORIAL Incubator has embarked on a quest to harness the power of the STAR WARS API (SWAPI).</p>
							<p>This project, crafted as a homework assignment, showcases the skills and creativity of its creator.</p>
							<p>Join us as we explore the data-rich galaxy of SWAPI, where the force of knowledge and code come together in a stellar demonstration of programming prowess.</p>
							<p>May the code be with you...</p>
						</div>
					</section>
				</>
			)}

			{showStartButton && <button className='mt-48 px-6 py-3 bg-yellow-500 text-black rounded mx-auto block z-10'>Start Exploring</button>}
		</main>
	);
}
