import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardComponent from './card';
import CardsComponent from './cards';
import { fetchItems } from '@/actions/fetchItems';

export default function TabsComponents() {
	return (
		<Tabs
			defaultValue='chars'
			className='w-[400px] mx-auto'
		>
			<TabsList className=' flex justify-center  text-[#feda4a]'>
				<TabsTrigger value='chars'>Characters</TabsTrigger>
				<TabsTrigger value='planets'>Planets</TabsTrigger>
				<TabsTrigger value='starships'>Starships</TabsTrigger>
			</TabsList>
			<TabsContent value='chars'>
				<CardsComponent point='peoples' />
			</TabsContent>
			<TabsContent value='planets'>
				<CardsComponent point='planets' />
			</TabsContent>
			<TabsContent value='starships'>
				<CardsComponent point='starships' />
			</TabsContent>
		</Tabs>
	);
}
