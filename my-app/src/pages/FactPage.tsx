import React, {useCallback, useEffect, useState} from 'react';
import {IFact} from "../types.ts";
import useInfiniteScroll from "../hooks/useInfiniteScroll.ts";
import {getFacts} from "../api/fact.ts";
import CardFact from "../components/CardFact.tsx";

const FactPage = () => {
	const [facts, setFacts] = useState<IFact[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchFacts = useCallback(() => {
		getFacts({ pageIndex: currentPage, pageSize: 9 })
			.then(data => {
				setFacts(prevFacts => [...prevFacts, ...data.items]);
				setCurrentPage(prevPage => prevPage + 1);
				setTotalCount(data.totalCount);
			})
			.finally(() => {
				setIsLoading(false);
				setIsFetching(false); // Ensure this is properly called in your hook
			});
	}, [currentPage]);

	const [isFetching, setIsFetching] = useInfiniteScroll(fetchFacts, totalCount, facts.length);

	useEffect(() => {
		if (currentPage === 1) {
			fetchFacts();
		}
	}, [fetchFacts, currentPage]);

	useEffect(() => {
		if (isFetching) {
			setIsLoading(true);
		}
	}, [isFetching]);

	return (
		<div className={"flex gap-4 flex-wrap mt-[70px]"}>
			{facts.map((fact, i) => (
				<CardFact key={i} fact={fact} />
			))}
			{(isLoading || isFetching) && <p>loading...</p>}
		</div>
	);
};

export default FactPage;