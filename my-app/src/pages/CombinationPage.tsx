import React, {useCallback, useEffect, useState} from 'react';
import {ICombination} from "../types.ts";
import useInfiniteScroll from "../hooks/useInfiniteScroll.ts";
import {getCombinations} from "../api/combination.ts";
import CardCombination from "../components/CardCombination.tsx";

const CombinationPage = () => {
	const [combinations, setCombinations] = useState<ICombination[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchCombinations = useCallback(() => {
		getCombinations({pageIndex: currentPage, pageSize: 9})
			.then(data => {
				setCombinations(prevCombinations => [...prevCombinations, ...data.items]);
				setCurrentPage(prevPage => prevPage + 1);
				setTotalCount(data.totalCount);
			})
			.finally(() => {
				setIsLoading(false);
				setIsFetching(false); // Ensure this is properly called in your hook
			});
	}, [currentPage]);

	const [isFetching, setIsFetching] = useInfiniteScroll(fetchCombinations, totalCount, combinations.length);

	useEffect(() => {
		fetchCombinations();
		setCurrentPage(2)
	}, []);

	useEffect(() => {
		if (isFetching) {
			setIsLoading(true);
		}
	}, [isFetching]);

	return (
		<div className={"flex gap-4 flex-wrap mt-[70px]"}>
			{combinations.map((combination, i) => (
				<CardCombination key={i} combination={combination}/>
			))}
			{(isLoading || isFetching) && <p>loading...</p>}
		</div>
	);
};

export default CombinationPage;