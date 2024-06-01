import axios from 'axios';

export const fetchItems = async (point: string, pageNumber: number = 1, pageSize: number = 10) => {
	try {
		const res = await axios.get(`http://localhost:4444/${point}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const fetchItemByName = async (point: string, name: string) => {
	try {
		const res = await axios.get(`http://localhost:4444/${point}/search?name=${name}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
