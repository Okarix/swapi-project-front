'use client';

import { useEffect, useState } from 'react';
import CardComponent from './card';
import { fetchItems } from '@/actions/fetchItems';

export default function CardsComponent({ point }: { point: string }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchItems(point);
				setItems(data);
			} catch (error) {
				console.error('Error fetching items:', error);
			}
		};

		fetchData();
	}, [point]);

	return (
		<main className='grid grid-cols-4 gap-10'>
			{items.map((item, index) => (
				<CardComponent
					key={index}
					data={item}
					type={point}
				/>
			))}
		</main>
	);
}
