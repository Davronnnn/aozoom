import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import Axios from '../utils/axios';

export default function useFetchHook(url) {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		setLoading(true);
		try {
			const res = await Axios.get(url);
			const { status, data } = res;
			if (status === 200) {
				setState(data);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
		}
	}, [url]);
	useEffect(() => {
		fetchData();
	}, [fetchData]);
	return [state, loading];
}
