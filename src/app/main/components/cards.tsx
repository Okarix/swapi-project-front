'use client';

import { useEffect, useState } from 'react';
import CardComponent from './card';
import { fetchItems, fetchItemByName } from '@/actions/fetchItems';

export default function CardsComponent({ point }: { point: string }) {
	const [items, setItems] = useState([]);
	const [name, setName] = useState('');

	const fetchData = async () => {
		try {
			const data = await fetchItems(point);
			setItems(data);
		} catch (error) {
			console.error('Error fetching items:', error);
		}
	};

	const handleSearch = async () => {
		try {
			const data = await fetchItemByName(point, name);
			setItems(data);
		} catch (error) {
			console.error('Error searching items:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [point]);

	return (
		<div>
			<div className='my-5'>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Search by name'
					className='bg-muted outline-none py-2 px-1 rounded-sm mr-2'
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
		</div>
	);
}
