import React, {useEffect, useState} from 'react';
import CardHistory from "../components/CardHistory.tsx";
import {getHistories} from "../api/history.ts";
import {IMileStone, IPaginatedGeneric} from "../types.ts";

const HistorySection = () => {
	const [history, setHistory] = useState< IPaginatedGeneric<IMileStone> | null>(null)

	useEffect(() => {
		getHistories({pageSize: 9, pageIndex: 1}).then(data => {

			setHistory(data)
		})
	}, [])
	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6">
			<h2 className={"mb-4 text-4xl font-extrabold text-gray-900"}>
				Our big <span className={"text-primary-500"}>history</span>
			</h2>

			<div className={"flex gap-4 flex-wrap"}>
				{history?.items && history?.items.map((item, i) => {
					return <CardHistory key={i} history={item} />
				})}
			</div>
		</section>
	);
};

export default HistorySection;