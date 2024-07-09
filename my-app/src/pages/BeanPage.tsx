import React, { useEffect, useState, useCallback } from 'react';
import { IBean } from "../types.ts";
import { getBeans } from "../api/bean.ts";
import CardBean from "../components/CardBean.tsx";
import useInfiniteScroll from "../hooks/useInfiniteScroll.ts";

const BeanPage = () => {
	const [beans, setBeans] = useState<IBean[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetchBeans = useCallback(() => {
		getBeans({ pageIndex: currentPage, pageSize: 9 })
			.then(data => {
				setBeans(prevBeans => [...prevBeans, ...data.items]);
				setCurrentPage(prevPage => prevPage + 1);
				setTotalCount(data.totalCount);
			})
			.finally(() => {
				setIsLoading(false);
				setIsFetching(false); // Ensure this is properly called in your hook
			});
	}, [currentPage]);

	const [isFetching, setIsFetching] = useInfiniteScroll(fetchBeans, totalCount, beans.length);

	useEffect(() => {
		if (currentPage === 1) {
			fetchBeans();
		}
	}, [fetchBeans, currentPage]);

	useEffect(() => {
		if (isFetching) {
			setIsLoading(true);
		}
	}, [isFetching]);

	return (
		<div className={"flex gap-4 flex-wrap mt-[70px]"}>
			{beans.map((bean, i) => (
				<CardBean key={i} bean={bean} />
			))}
			{(isLoading || isFetching) && <p>loading...</p>}
		</div>
	);
};

export default BeanPage;
