import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardComponent({ data, type }: { data: any; type: string }) {
	return (
		<Card className='text-[#feda4a]'>
			{type === 'peoples' && (
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
					alt='Avatar'
				/>
			)}
			{type === 'planets' && (
				<img
					src='https://i.pinimg.com/originals/af/dd/4f/afdd4f10a40a6631412e3fc0f090bdf8.png'
					alt='Planet'
				/>
			)}
			{type === 'starships' && (
				<img
					src='https://www.pngitem.com/pimgs/m/602-6027021_transparent-star-wars-ship-png-star-wars-spaceship.png'
					alt='Starship'
				/>
			)}
			<CardHeader>
				<CardTitle>{data.name}</CardTitle>
				<CardDescription>
					{type === 'peoples' && `Height: ${data.height}, Mass: ${data.mass}`}
					{type === 'planets' && `Climate: ${data.climate}, Gravity: ${data.gravity}`}
					{type === 'starships' && `Model: ${data.model}, Manufacturer: ${data.manufacturer}`}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{type === 'peoples' && (
					<>
						<p>Hair Color: {data.hair_color}</p>
						<p>Skin Color: {data.skin_color}</p>
						<p>Eye Color: {data.eye_color}</p>
						<p>Birth Year: {data.birth_year}</p>
						<p>Gender: {data.gender}</p>
					</>
				)}
				{type === 'planets' && (
					<>
						<p>Rotation Period: {data.rotation_period}</p>
						<p>Orbital Period: {data.orbital_period}</p>
						<p>Diameter: {data.diameter}</p>
						<p>Surface Water: {data.surface_water}</p>
						<p>Population: {data.population}</p>
					</>
				)}
				{type === 'starships' && (
					<>
						<p>Cost in Credits: {data.cost_in_credits}</p>
						<p>Length: {data.length}</p>
						<p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
						<p>Crew: {data.crew}</p>
						<p>Passengers: {data.passengers}</p>
						<p>Cargo Capacity: {data.cargo_capacity}</p>
						<p>Consumables: {data.consumables}</p>
						<p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
						<p>MGLT: {data.MGLT}</p>
						<p>Starship Class: {data.starship_class}</p>
					</>
				)}
			</CardContent>
		</Card>
	);
}
