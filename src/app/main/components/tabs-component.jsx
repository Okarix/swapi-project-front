import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardComponent from './card';

export default function TabsComponents() {
	return (
		<Tabs
			defaultValue='account'
			className='w-[400px]'
		>
			<TabsList>
				<TabsTrigger value='chars'>Characters</TabsTrigger>
				<TabsTrigger value='planets'>Planets</TabsTrigger>
				<TabsTrigger value='starships'>Starships</TabsTrigger>
			</TabsList>
			<TabsContent value='chars'>
				<CardComponent />
			</TabsContent>
			<TabsContent value='planets'>Change your password here.</TabsContent>
			<TabsContent value='starships'>Change your password here.</TabsContent>
		</Tabs>
	);
}
