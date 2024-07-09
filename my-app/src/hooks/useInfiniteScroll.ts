import { useEffect, useState } from 'react';

const useInfiniteScroll = (fetchData: () => void, totalCount: number, itemsLength: number) => {
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const handleScroll = (e: Event) => {
			const target = e.target as Document;
			if (
				target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 150 &&
				totalCount > itemsLength &&
				!isFetching
			) {
				setIsFetching(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [totalCount, itemsLength, isFetching]);

	useEffect(() => {
		if (!isFetching) return;
		console.log("useEffect")
		fetchData();
	}, [isFetching]);

	return [isFetching, setIsFetching] as const;
};

export default useInfiniteScroll;
