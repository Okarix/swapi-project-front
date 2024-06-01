'use client';

import { useEffect, useState } from 'react';
import CardComponent from './card';
import { fetchItems, fetchItemByName } from '@/actions/fetchItems';

export default function CardsComponent({ point }: { point: string }) {
	const [items, setItems] = useState([]);
	const [name, setName] = useState('');
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async (append = false) => {
		try {
			setIsLoading(true);
			const data = await fetchItems(point, pageNumber);
			setItems(prevItems => (append ? [...prevItems, ...data] : data));
			setIsLoading(false);
		} catch (error) {
			console.error('Error fetching items:', error);
			setIsLoading(false);
		}
	};

	const handleSearch = async () => {
		try {
			setPageNumber(1);
			const data = await fetchItemByName(point, name);
			setItems(data);
		} catch (error) {
			console.error('Error searching items:', error);
		}
	};

	const handleLoadMore = () => {
		setPageNumber(prevPageNumber => prevPageNumber + 1);
	};

	useEffect(() => {
		fetchData();
	}, [point]);

	useEffect(() => {
		if (pageNumber > 1) {
			fetchData(true);
		}
	}, [pageNumber]);

	return (
		<div>
			<div className='my-5'>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Search by name'
					className='bg-muted outline-none py-2 px-1 rounded-sm mr-2 text-[#feda4a]'
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<main className='grid grid-cols-4 gap-10'>
				{items.map((item, index) => (
					<CardComponent
						key={index}
						data={item}
						type={point}
					/>
				))}
			</main>
			<div className='text-center mt-5'>
				<button
					onClick={handleLoadMore}
					className='bg-yellow-500 text-white py-2 px-4 rounded'
					disabled={isLoading}
				>
					{isLoading ? 'Loading...' : 'More'}
				</button>
			</div>
		</div>
	);
}
