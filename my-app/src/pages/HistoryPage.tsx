import React, {useCallback, useEffect, useState} from 'react';
import {IFact, IMileStone} from "../types.ts";
import useInfiniteScroll from "../hooks/useInfiniteScroll.ts";
import CardFact from "../components/CardFact.tsx";
import {getHistories} from "../api/history.ts";
import CardHistory from "../components/CardHistory.tsx";

const HistoryPage = () => {
	const [histories, setHistories] = useState<IMileStone[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchHistories = useCallback(() => {
		getHistories({ pageIndex: currentPage, pageSize: 9 })
			.then(data => {
				setHistories(prevHistories => [...prevHistories, ...data.items]);
				setCurrentPage(prevPage => prevPage + 1);
				setTotalCount(data.totalCount);
			})
			.finally(() => {
				setIsLoading(false);
				setIsFetching(false); // Ensure this is properly called in your hook
			});
	}, [currentPage]);

	const [isFetching, setIsFetching] = useInfiniteScroll(fetchHistories, totalCount, histories.length);

	useEffect(() => {
		if (currentPage === 1) {
			fetchHistories();
		}
	}, [fetchHistories, currentPage]);

	useEffect(() => {
		if (isFetching) {
			setIsLoading(true);
		}
	}, [isFetching]);

	return (
		<div className={"flex gap-4 flex-wrap mt-[70px]"}>
			{histories.map((history, i) => (
				<CardHistory key={i} history={history} />
			))}
			{(isLoading || isFetching) && <p>loading...</p>}
		</div>
	);
};

export default HistoryPage;