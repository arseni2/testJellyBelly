import React, {useEffect, useState} from 'react';
import CardHistory from "../components/CardHistory.tsx";
import {getCombinations} from "../api/combination.ts";
import {ICombination, IPaginatedGeneric} from "../types.ts";
import CardCombination from "../components/CardCombination.tsx";

const CombinationSection = () => {
	const [combinations, setCombinations] = useState<IPaginatedGeneric<ICombination> | null>(null)

	useEffect(() => {
		getCombinations({pageSize: 9, pageIndex: 1}).then(data => {
			setCombinations(data)
		})
	}, [])
	return (
		<section className="bg-white mt-[120px] flex flex-col gap-6">
			<h2 className={"mb-4 text-4xl  font-extrabold text-gray-900"}>
				<span className={"text-primary-500"}>Combinations</span> with Beans
			</h2>

			<div className={"flex gap-4 flex-wrap"}>
				{combinations?.items && combinations?.items.map((combination, i) => {
					return <CardCombination combination={combination} key={i} />
				})}
			</div>
		</section>
	);
};

export default CombinationSection;